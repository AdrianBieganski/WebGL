(function (scope, undefined)
{
	'use strict';
	
	var OBJ = {};
	
	if (typeof module !== 'undefined')
	{
		module.exports = OBJ;
	}
	else
	{
		scope.OBJ = OBJ;
	}

	OBJ.Mesh = function (objectData)
	{
		var verts = [], vertNormals = [], textures = [], unpacked = {}, boundingBox = []; //x_min, x_max, y_min, y_max, z_min, z_max
		// unpacking stuff
		unpacked.verts = [];
		unpacked.norms = [];
		unpacked.textures = [];
		unpacked.hashindices = {};
		unpacked.indices = [];
		unpacked.index = 0;
		// array of lines separated by the newline
		var lines = objectData.split('\n');
	
		var VERTEX_RE = /^v\s/;
		var NORMAL_RE = /^vn\s/;
		var TEXTURE_RE = /^vt\s/;
		var FACE_RE = /^f\s/;
		var WHITESPACE_RE = /\s+/;
	
		for (var i = 0; i < lines.length; i++)
		{
			var line = lines[i].trim();
			var elements = line.split(WHITESPACE_RE);
			elements.shift();
			
			if (VERTEX_RE.test(line))
			{
				// if this is a vertex
				verts.push.apply(verts, elements);
			}
			else if (NORMAL_RE.test(line))
			{
				// if this is a vertex normal
				vertNormals.push.apply(vertNormals, elements);
			}
			else if (TEXTURE_RE.test(line))
			{
				// if this is a texture
				textures.push.apply(textures, elements);
			}
			else if (FACE_RE.test(line))
			{
				// if this is a face
				var quad = false;
				for (var j = 0, eleLen = elements.length; j < eleLen; j++)
				{
					// Triangulating quads
					// quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
					// corresponding triangles:
					//      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
					//      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
					if (j === 3 && !quad)
					{
						// add v2/t2/vn2 in again before continuing to 3
						j = 2;
						quad = true;
					}
					if(elements[j] in unpacked.hashindices)
					{
						unpacked.indices.push(unpacked.hashindices[elements[j]]);
					}
					else
					{
						var vertex = elements[ j ].split( '/' );
						var vertexX, vertexY, vertexZ;
						
						vertexX = (+verts[(vertex[0] - 1) * 3 + 0]);
						vertexY = (+verts[(vertex[0] - 1) * 3 + 1]);
						vertexZ = (+verts[(vertex[0] - 1) * 3 + 2]);
						
						// vertex position
						unpacked.verts.push(vertexX);
						unpacked.verts.push(vertexY);
						unpacked.verts.push(vertexZ);
						
						if (boundingBox[0] == undefined) boundingBox[0] = vertexX;
						if (boundingBox[1] == undefined) boundingBox[1] = vertexX;
						if (boundingBox[2] == undefined) boundingBox[2] = vertexY;
						if (boundingBox[3] == undefined) boundingBox[3] = vertexY;
						if (boundingBox[4] == undefined) boundingBox[4] = vertexZ;
						if (boundingBox[5] == undefined) boundingBox[5] = vertexZ;
						
						if (vertexX < boundingBox[0]) boundingBox[0] = vertexX;						
						if (vertexX > boundingBox[1]) boundingBox[1] = vertexX;
						if (vertexY < boundingBox[2]) boundingBox[2] = vertexY;						
						if (vertexY > boundingBox[3]) boundingBox[3] = vertexY;
						if (vertexZ < boundingBox[4]) boundingBox[4] = vertexZ;						
						if (vertexZ > boundingBox[5]) boundingBox[5] = vertexZ;
						
						// vertex textures
						if (textures.length) 
						{
							unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 0]);
							unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 1]);
						}
						
						// vertex normals
						unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 0]);
						unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 1]);
						unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 2]);
						
						// add the newly created vertex to the list of indices
						unpacked.hashindices[elements[j]] = unpacked.index;
						unpacked.indices.push(unpacked.index);
						
						// increment the counter
						unpacked.index += 1;
					}
					if(j === 3 && quad)
					{
						// add v0/t0/vn0 onto the second triangle
						unpacked.indices.push( unpacked.hashindices[elements[0]]);
					}
				}
			}
		}
		/*
		console.log(boundingBox[0]);
		console.log(boundingBox[1]);
		console.log(boundingBox[2]);
		console.log(boundingBox[3]);
		console.log(boundingBox[4]);
		console.log(boundingBox[5]);
		*/
		this.vertices = unpacked.verts;
		this.vertexNormals = unpacked.norms;
		this.textures = unpacked.textures;
		this.indices = unpacked.indices;
		this.boundingBox = boundingBox;
	}

	var Ajax = function()
	{
		// this is just a helper class to ease ajax calls
		var _this = this;
		this.xmlhttp = new XMLHttpRequest();
		
		this.get = function(url, callback){
			_this.xmlhttp.onreadystatechange = function(){
				if(_this.xmlhttp.readyState === 4)
				{
					callback(_this.xmlhttp.responseText, _this.xmlhttp.status);
				}
			};
			_this.xmlhttp.open('GET', url, true);
			_this.xmlhttp.send();
		}
	};

	OBJ.downloadMeshes = function (nameAndURLs, completionCallback, meshes)
	{
		// the total number of meshes. this is used to implement "blocking"
		var semaphore = Object.keys(nameAndURLs).length;
		// if error is true, an alert will given
		var error = false;
		// this is used to check if all meshes have been downloaded
		// if meshes is supplied, then it will be populated, otherwise
		// a new object is created. this will be passed into the completionCallback
		if(meshes === undefined) meshes = {};
		// loop over the mesh_name,url key,value pairs
		for(var mesh_name in nameAndURLs)
		{
			if(nameAndURLs.hasOwnProperty(mesh_name))
			{
				new Ajax().get(nameAndURLs[mesh_name], (function(name) {
					return function (data, status) {
					if (status === 200)
					{
						meshes[name] = new OBJ.Mesh(data);
					}
					else
					{
						error = true;
						console.error('An error has occurred and the mesh "' +
						name + '" could not be downloaded.');
					}
					// the request has finished, decrement the counter
					semaphore--;
					if (semaphore === 0)
					{
						if (error)
						{
							// if an error has occurred, the user is notified here and the
							// callback is not called
							console.error('An error has occurred and one or meshes has not been ' +
							'downloaded. The execution of the script has terminated.');
							throw '';
						}
						// there haven't been any errors in retrieving the meshes
						// call the callback
						completionCallback(meshes);
						}
					}
				})(mesh_name));
			}
		}
	};

	var _buildBuffer = function( gl, type, data, itemSize )
	{
		var buffer = gl.createBuffer();
		var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
		gl.bindBuffer(type, buffer);
		gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
		buffer.itemSize = itemSize;
		buffer.numItems = data.length / itemSize;
		return buffer;
	}
	
	OBJ.initMeshBuffers = function(gl, mesh)
	{
		mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
		mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, 2);
		mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
		mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
	}
	
	OBJ.deleteMeshBuffers = function( gl, mesh )
	{
		gl.deleteBuffer(mesh.normalBuffer);
		gl.deleteBuffer(mesh.textureBuffer);
		gl.deleteBuffer(mesh.vertexBuffer);
		gl.deleteBuffer(mesh.indexBuffer);
	}
	
	OBJ.boundingBox = function ()
	{
		return boundingBox;
	}
})(this);