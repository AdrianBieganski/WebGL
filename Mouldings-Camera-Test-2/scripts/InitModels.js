define(["GetGL", "InitTextures", "InitShaders", "InitBuffers", "glMatrix"], function(gl, InitTextures, InitShaders, InitBuffers, glMatrix)
{
	var worldVertexPositionBuffer = null;
	var worldVertexTextureCoordBuffer = null;
	
	var cubeVertexPositionBuffer = InitBuffers.InitPositionBuffer();
	var cubeVertexPositionBuffer2 = InitBuffers.InitPositionBuffer2();
	var cubeVertexPositionBuffer3 = InitBuffers.InitPositionBuffer3();
	var cubeVertexNormalBuffer = InitBuffers.InitNormalBuffer();
	var cubeVertexIndexBuffer = InitBuffers.InitIndexBuffer();
	
	var crateTexture = InitTextures.Texture("mouldings.png");
	var shaderProgramTexture = InitShaders.InitShaders("texture");
	var shaderProgramLight = InitShaders.InitShaders("light");
	
	var mvMatrix = mat4.create();
	var mvMatrixStack = [];
	var pMatrix = mat4.create();
	
	function mvPushMatrix()
	{
		var copy = mat4.create();
		mat4.set(mvMatrix, copy);
		mvMatrixStack.push(copy);
	}
	
	function mvPopMatrix()
	{
		if (mvMatrixStack.length == 0)
		{
			throw "Invalid popMatrix!";
		}
		mvMatrix = mvMatrixStack.pop();
	}
	
	function setMatrixUniforms(shader)
	{
		gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
		gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrix);
		
		
		var normalMatrix = mat3.create();
		mat4.toInverseMat3(mvMatrix, normalMatrix);
		mat3.transpose(normalMatrix);
		gl.uniformMatrix3fv(shader.nMatrixUniform, false, normalMatrix);
		
	}
	
	function degToRad(degrees)
	{
		return degrees * Math.PI / 180;
	}
	
	function handleLoadedWorld(data)
	{
		var lines = data.split("\r\n");
		var vertexCount = 0;
		var vertexPositions = [];
		var vertexTextureCoords = [];
		for (var i in lines)
		{
			var vals = lines[i].replace(/^\s+/, "").split(/\s+/);
			if (vals.length == 5 && vals[0] != "//")
			{
				// It is a line describing a vertex; get X, Y and Z first
				vertexPositions.push(parseFloat(vals[0]));
				vertexPositions.push(parseFloat(vals[1]));
				vertexPositions.push(parseFloat(vals[2]));
				
				// And then the texture coords
				vertexTextureCoords.push(parseFloat(vals[3]));
				vertexTextureCoords.push(parseFloat(vals[4]));
				
				vertexCount += 1;
			}
		}
	
		worldVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositions), gl.STATIC_DRAW);
		worldVertexPositionBuffer.itemSize = 3;
		worldVertexPositionBuffer.numItems = vertexCount;
		
		worldVertexTextureCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexTextureCoordBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexTextureCoords), gl.STATIC_DRAW);
		worldVertexTextureCoordBuffer.itemSize = 2;
		worldVertexTextureCoordBuffer.numItems = vertexCount;
		
		document.getElementById("loadingtext").textContent = "";
	}
	
	function loadWorld()
	{
		var request = new XMLHttpRequest();
		request.open("GET", "mouldings.txt");
		request.onreadystatechange = function ()
		{
			if (request.readyState == 4)
			{
				handleLoadedWorld(request.responseText);
			}
		}
		request.send();
	}
	
	function DrawModel(cubeVertexPositionBuffer, cubeVertexNormalBuffer, cubeVertexIndexBuffer)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgramLight.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
		gl.vertexAttribPointer(shaderProgramLight.vertexNormalAttribute, cubeVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.uniform1i(shaderProgramLight.samplerUniform, 0);
		var lighting = document.getElementById("lighting").checked;
		gl.uniform1i(shaderProgramLight.useLightingUniform, lighting);
		if (lighting)
		{
			gl.uniform3f
			(
				shaderProgramLight.ambientColorUniform,
				parseFloat(document.getElementById("ambientR").value),
				parseFloat(document.getElementById("ambientG").value),
				parseFloat(document.getElementById("ambientB").value)
			);
		
			var lightingDirection =
			[
				parseFloat(document.getElementById("lightDirectionX").value),
				parseFloat(document.getElementById("lightDirectionY").value),
				parseFloat(document.getElementById("lightDirectionZ").value)
			];
			
			var adjustedLD = vec3.create();
			vec3.normalize(lightingDirection, adjustedLD);
			vec3.scale(adjustedLD, -1);
			gl.uniform3fv(shaderProgramLight.lightingDirectionUniform, adjustedLD);
			
			gl.uniform3f
			(
				shaderProgramLight.directionalColorUniform,
				parseFloat(document.getElementById("directionalR").value),
				parseFloat(document.getElementById("directionalG").value),
				parseFloat(document.getElementById("directionalB").value)
			);
		}
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
		setMatrixUniforms(shaderProgramLight);
		
		gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
	}
	
	function DrawScene(pitch, yaw, xPos, yPos, zPos)
	{
		
		//shaderProgramTexture = InitShaders.InitShaders("texture");
		
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	
		mat4.identity(mvMatrix);
	
		mat4.rotate(mvMatrix, degToRad(-pitch), [1, 0, 0]);
		mat4.rotate(mvMatrix, degToRad(-yaw), [0, 1, 0]);
		mat4.translate(mvMatrix, [-xPos, -yPos, -zPos]);
	
	
	/*
	
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, crateTexture);
		gl.uniform1i(shaderProgramTexture.samplerUniform, 0);
	
		gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexTextureCoordBuffer);
		gl.vertexAttribPointer(shaderProgramTexture.textureCoordAttribute, worldVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
		gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgramTexture.vertexPositionAttribute, worldVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
		setMatrixUniforms(shaderProgramTexture);
		gl.drawArrays(gl.TRIANGLES, 0, worldVertexPositionBuffer.numItems);
		
		*/
		
		//shaderProgramLight = InitShaders.InitShaders("light");
		
		
		
		mat4.translate(mvMatrix, [-2, 0.5, -3]);
		//DrawModel(cubeVertexPositionBuffer, cubeVertexNormalBuffer, cubeVertexIndexBuffer);

		mvPushMatrix();
		mat4.translate(mvMatrix, [3, 0, 0]);
		DrawModel(cubeVertexPositionBuffer3, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
		
		mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
		mat4.translate(mvMatrix, [-0.5, 0, 0.5]);
		DrawModel(cubeVertexPositionBuffer3, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
		
		mat4.rotate(mvMatrix, degToRad(90), [90, 0, 0]);
		mat4.translate(mvMatrix, [0, -0.5, -0.5]);
		DrawModel(cubeVertexPositionBuffer3, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
		mvPopMatrix();
		
		mvPushMatrix();
		mat4.translate(mvMatrix, [3, 0.45, 0]);
		DrawModel(cubeVertexPositionBuffer2, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
		
		mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
		mat4.translate(mvMatrix, [-0.5, 0, 0.4]);
		DrawModel(cubeVertexPositionBuffer2, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
		mvPopMatrix();

	}
	
	return{
		loadWorld: loadWorld,
		DrawScene: DrawScene,
		degToRad: degToRad
	}
});