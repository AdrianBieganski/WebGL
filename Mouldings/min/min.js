var cubeVertexPositionBuffer;
var cubeVertexPositionBuffer2;
var cubeVertexPositionBuffer3;
var cubeVertexNormalBuffer;
var cubeVertexIndexBuffer;
var cubeVertexColorBuffer;

var backgroundPositionBuffer;
var backgroundTextureCoordsBuffer;

function InitBuffers()
{
	cubeVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
	vertices =
	[
		//Front
		-1.0, -1.0,  1.0,
		1.0, -1.0,  1.0,
		1.0,  1.0,  1.0,
		-1.0,  1.0,  1.0,
		//Back
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0, -1.0, -1.0,
		//Top
		-1.0,  1.0, -1.0,
		-1.0,  1.0,  1.0,
		1.0,  1.0,  1.0,
		1.0,  1.0, -1.0,
		//Bottom
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0,
		1.0, -1.0,  1.0,
		-1.0, -1.0,  1.0,
		//Right
		1.0, -1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0,  1.0,  1.0,
		1.0, -1.0,  1.0,
		//Left
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		-1.0,  1.0,  1.0,
		-1.0,  1.0, -1.0,
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cubeVertexPositionBuffer.itemSize = 3;
	cubeVertexPositionBuffer.numItems = 24;
	
	/*******************************************/
	
	cubeVertexPositionBuffer2 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer2);
	vertices =
	[
		//Front
		-0.5, -0.05,  0.1,
		0.5, -0.05,  0.1,
		0.5,  0.05,  0.1,
		-0.5,  0.05,  0.1,
		//Back
		-0.5, -0.05, 0.0,
		-0.5,  0.05, 0.0,
		0.5,  0.05, 0.0,
		0.5, -0.05, 0.0,
		//Top
		-0.5,  0.05, 0.0,
		-0.5,  0.05,  0.1,
		0.5,  0.05,  0.1,
		0.5,  0.05, 0.0,
		//Bottom
		-0.5, -0.05, 0.0,
		0.5, -0.05, 0.0,
		0.5, -0.05,  0.1,
		-0.5, -0.05,  0.1,
		//Right
		0.5, -0.05, 0.0,
		0.5,  0.05, 0.0,
		0.5,  0.05,  0.1,
		0.5, -0.05,  0.1,
		//Left
		-0.5, -0.05, 0.0,
		-0.5, -0.05,  0.1,
		-0.5,  0.05,  0.1,
		-0.5,  0.05, 0.0,
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cubeVertexPositionBuffer2.itemSize = 3;
	cubeVertexPositionBuffer2.numItems = 24;
	
	/*******************************************/
	
	cubeVertexPositionBuffer3 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer3);
	vertices =
	[
		//Front
		-0.5, -0.5,  0.01,
		0.5, -0.5,  0.01,
		0.5,  0.5,  0.01,
		-0.5,  0.5,  0.01,
		//Back
		-0.5, -0.5, 0.0,
		-0.5,  0.5, 0.0,
		0.5,  0.5, 0.0,
		0.5, -0.5, 0.0,
		//Top
		-0.5,  0.5, 0.0,
		-0.5,  0.5,  0.01,
		0.5,  0.5,  0.01,
		0.5,  0.5, 0.0,
		//Bottom
		-0.5, -0.5, 0.0,
		0.5, -0.5, 0.0,
		0.5, -0.5,  0.01,
		-0.5, -0.5,  0.01,
		//Right
		0.5, -0.5, 0.0,
		0.5,  0.5, 0.0,
		0.5,  0.5,  0.01,
		0.5, -0.5,  0.01,
		//Left
		-0.5, -0.5, 0.0,
		-0.5, -0.5,  0.01,
		-0.5,  0.5,  0.01,
		-0.5,  0.5, 0.0,
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cubeVertexPositionBuffer3.itemSize = 3;
	cubeVertexPositionBuffer3.numItems = 24;
	
	/*******************************************/
	
	cubeVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	
	var cubeVertexIndices =
	[
		0, 1, 2,      0, 2, 3,    // Front face
		4, 5, 6,      4, 6, 7,    // Back face
		8, 9, 10,     8, 10, 11,  // Top face
		12, 13, 14,   12, 14, 15, // Bottom face
		16, 17, 18,   16, 18, 19, // Right face
		20, 21, 22,   20, 22, 23  // Left face
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cubeVertexIndexBuffer.itemSize = 1;
	cubeVertexIndexBuffer.numItems = 36;
	
	/*******************************************/
	
	cubeVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
	var vertexNormals =
	[
		//Front
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		//Back
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		//Top
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		//Bottom
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		//Right
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		//Left
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	cubeVertexNormalBuffer.itemSize = 3;
	cubeVertexNormalBuffer.numItems = 24;
	
	/*******************************************/
	
    cubeVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
	
	colors =
	[
		//Front
		[1.0, 0.0, 0.0, 1.0],
		//Back
		[1.0, 1.0, 0.0, 1.0],
		//Top
		[0.0, 1.0, 0.0, 1.0],
		//Bottom
		[1.0, 0.5, 0.5, 1.0],
		//Right
		[1.0, 0.0, 1.0, 1.0],
		//Left
		[0.0, 0.0, 1.0, 1.0]
    ];
	
	var unpackedColors = [];
	for (var i in colors)
	{
		var color = colors[i];
		for (var j = 0; j < 4; j++)
		{
			unpackedColors = unpackedColors.concat(color);
		}
	}
	
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	cubeVertexColorBuffer.itemSize = 4;
	cubeVertexColorBuffer.numItems = 24;
	
	/*******************************************/
	
	backgroundPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundPositionBuffer);
	vertices =
	[
		//Front
		-1.0, -1.0,  1.0,
		1.0, -1.0,  1.0,
		1.0,  1.0,  1.0,
		-1.0,  1.0,  1.0,
	];
	
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	backgroundPositionBuffer.itemSize = 3;
	backgroundPositionBuffer.numItems = 4;
	
	/*******************************************/
	
	backgroundTextureCoordsBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundTextureCoordsBuffer);
	var textureCoords =
	[
		//Front
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	backgroundTextureCoordsBuffer.itemSize = 2;
	backgroundTextureCoordsBuffer.numItems = 4;
	
	/*******************************************/
	
	backgroundIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, backgroundIndexBuffer);
	
	var VertexIndices =
	[
		0, 1, 2,      0, 2, 3    // Front face
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(VertexIndices), gl.STATIC_DRAW);
	backgroundIndexBuffer.itemSize = 1;
	backgroundIndexBuffer.numItems = 6;
};/* 
 * glMatrix.js - High performance matrix and vector operations for WebGL
 * version 0.9.6
 */
 
/*
 * Copyright (c) 2011 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

// Fallback for systems that don't support WebGL
if(typeof Float32Array != 'undefined') {
	glMatrixArrayType = Float32Array;
} else if(typeof WebGLFloatArray != 'undefined') {
	glMatrixArrayType = WebGLFloatArray; // This is officially deprecated and should dissapear in future revisions.
} else {
	glMatrixArrayType = Array;
}

/*
 * vec3 - 3 Dimensional Vector
 */
var vec3 = {};

/*
 * vec3.create
 * Creates a new instance of a vec3 using the default array type
 * Any javascript array containing at least 3 numeric elements can serve as a vec3
 *
 * Params:
 * vec - Optional, vec3 containing values to initialize with
 *
 * Returns:
 * New vec3
 */
vec3.create = function(vec) {
	var dest = new glMatrixArrayType(3);
	
	if(vec) {
		dest[0] = vec[0];
		dest[1] = vec[1];
		dest[2] = vec[2];
	}
	
	return dest;
};

/*
 * vec3.set
 * Copies the values of one vec3 to another
 *
 * Params:
 * vec - vec3 containing values to copy
 * dest - vec3 receiving copied values
 *
 * Returns:
 * dest
 */
vec3.set = function(vec, dest) {
	dest[0] = vec[0];
	dest[1] = vec[1];
	dest[2] = vec[2];
	
	return dest;
};

/*
 * vec3.add
 * Performs a vector addition
 *
 * Params:
 * vec - vec3, first operand
 * vec2 - vec3, second operand
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.add = function(vec, vec2, dest) {
	if(!dest || vec == dest) {
		vec[0] += vec2[0];
		vec[1] += vec2[1];
		vec[2] += vec2[2];
		return vec;
	}
	
	dest[0] = vec[0] + vec2[0];
	dest[1] = vec[1] + vec2[1];
	dest[2] = vec[2] + vec2[2];
	return dest;
};

/*
 * vec3.subtract
 * Performs a vector subtraction
 *
 * Params:
 * vec - vec3, first operand
 * vec2 - vec3, second operand
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.subtract = function(vec, vec2, dest) {
	if(!dest || vec == dest) {
		vec[0] -= vec2[0];
		vec[1] -= vec2[1];
		vec[2] -= vec2[2];
		return vec;
	}
	
	dest[0] = vec[0] - vec2[0];
	dest[1] = vec[1] - vec2[1];
	dest[2] = vec[2] - vec2[2];
	return dest;
};

/*
 * vec3.negate
 * Negates the components of a vec3
 *
 * Params:
 * vec - vec3 to negate
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.negate = function(vec, dest) {
	if(!dest) { dest = vec; }
	
	dest[0] = -vec[0];
	dest[1] = -vec[1];
	dest[2] = -vec[2];
	return dest;
};

/*
 * vec3.scale
 * Multiplies the components of a vec3 by a scalar value
 *
 * Params:
 * vec - vec3 to scale
 * val - Numeric value to scale by
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.scale = function(vec, val, dest) {
	if(!dest || vec == dest) {
		vec[0] *= val;
		vec[1] *= val;
		vec[2] *= val;
		return vec;
	}
	
	dest[0] = vec[0]*val;
	dest[1] = vec[1]*val;
	dest[2] = vec[2]*val;
	return dest;
};

/*
 * vec3.normalize
 * Generates a unit vector of the same direction as the provided vec3
 * If vector length is 0, returns [0, 0, 0]
 *
 * Params:
 * vec - vec3 to normalize
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.normalize = function(vec, dest) {
	if(!dest) { dest = vec; }
	
	var x = vec[0], y = vec[1], z = vec[2];
	var len = Math.sqrt(x*x + y*y + z*z);
	
	if (!len) {
		dest[0] = 0;
		dest[1] = 0;
		dest[2] = 0;
		return dest;
	} else if (len == 1) {
		dest[0] = x;
		dest[1] = y;
		dest[2] = z;
		return dest;
	}
	
	len = 1 / len;
	dest[0] = x*len;
	dest[1] = y*len;
	dest[2] = z*len;
	return dest;
};

/*
 * vec3.cross
 * Generates the cross product of two vec3s
 *
 * Params:
 * vec - vec3, first operand
 * vec2 - vec3, second operand
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.cross = function(vec, vec2, dest){
	if(!dest) { dest = vec; }
	
	var x = vec[0], y = vec[1], z = vec[2];
	var x2 = vec2[0], y2 = vec2[1], z2 = vec2[2];
	
	dest[0] = y*z2 - z*y2;
	dest[1] = z*x2 - x*z2;
	dest[2] = x*y2 - y*x2;
	return dest;
};

/*
 * vec3.length
 * Caclulates the length of a vec3
 *
 * Params:
 * vec - vec3 to calculate length of
 *
 * Returns:
 * Length of vec
 */
vec3.length = function(vec){
	var x = vec[0], y = vec[1], z = vec[2];
	return Math.sqrt(x*x + y*y + z*z);
};

/*
 * vec3.dot
 * Caclulates the dot product of two vec3s
 *
 * Params:
 * vec - vec3, first operand
 * vec2 - vec3, second operand
 *
 * Returns:
 * Dot product of vec and vec2
 */
vec3.dot = function(vec, vec2){
	return vec[0]*vec2[0] + vec[1]*vec2[1] + vec[2]*vec2[2];
};

/*
 * vec3.direction
 * Generates a unit vector pointing from one vector to another
 *
 * Params:
 * vec - origin vec3
 * vec2 - vec3 to point to
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.direction = function(vec, vec2, dest) {
	if(!dest) { dest = vec; }
	
	var x = vec[0] - vec2[0];
	var y = vec[1] - vec2[1];
	var z = vec[2] - vec2[2];
	
	var len = Math.sqrt(x*x + y*y + z*z);
	if (!len) { 
		dest[0] = 0; 
		dest[1] = 0; 
		dest[2] = 0;
		return dest; 
	}
	
	len = 1 / len;
	dest[0] = x * len; 
	dest[1] = y * len; 
	dest[2] = z * len;
	return dest; 
};

/*
 * vec3.lerp
 * Performs a linear interpolation between two vec3
 *
 * Params:
 * vec - vec3, first vector
 * vec2 - vec3, second vector
 * lerp - interpolation amount between the two inputs
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
vec3.lerp = function(vec, vec2, lerp, dest){
    if(!dest) { dest = vec; }
    
    dest[0] = vec[0] + lerp * (vec2[0] - vec[0]);
    dest[1] = vec[1] + lerp * (vec2[1] - vec[1]);
    dest[2] = vec[2] + lerp * (vec2[2] - vec[2]);
    
    return dest;
}

/*
 * vec3.str
 * Returns a string representation of a vector
 *
 * Params:
 * vec - vec3 to represent as a string
 *
 * Returns:
 * string representation of vec
 */
vec3.str = function(vec) {
	return '[' + vec[0] + ', ' + vec[1] + ', ' + vec[2] + ']'; 
};

/*
 * mat3 - 3x3 Matrix
 */
var mat3 = {};

/*
 * mat3.create
 * Creates a new instance of a mat3 using the default array type
 * Any javascript array containing at least 9 numeric elements can serve as a mat3
 *
 * Params:
 * mat - Optional, mat3 containing values to initialize with
 *
 * Returns:
 * New mat3
 */
mat3.create = function(mat) {
	var dest = new glMatrixArrayType(9);
	
	if(mat) {
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
	}
	
	return dest;
};

/*
 * mat3.set
 * Copies the values of one mat3 to another
 *
 * Params:
 * mat - mat3 containing values to copy
 * dest - mat3 receiving copied values
 *
 * Returns:
 * dest
 */
mat3.set = function(mat, dest) {
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[3];
	dest[4] = mat[4];
	dest[5] = mat[5];
	dest[6] = mat[6];
	dest[7] = mat[7];
	dest[8] = mat[8];
	return dest;
};

/*
 * mat3.identity
 * Sets a mat3 to an identity matrix
 *
 * Params:
 * dest - mat3 to set
 *
 * Returns:
 * dest
 */
mat3.identity = function(dest) {
	dest[0] = 1;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 1;
	dest[5] = 0;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 1;
	return dest;
};

/*
 * mat4.transpose
 * Transposes a mat3 (flips the values over the diagonal)
 *
 * Params:
 * mat - mat3 to transpose
 * dest - Optional, mat3 receiving transposed values. If not specified result is written to mat
 *
 * Returns:
 * dest is specified, mat otherwise
 */
mat3.transpose = function(mat, dest) {
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	if(!dest || mat == dest) { 
		var a01 = mat[1], a02 = mat[2];
		var a12 = mat[5];
		
        mat[1] = mat[3];
        mat[2] = mat[6];
        mat[3] = a01;
        mat[5] = mat[7];
        mat[6] = a02;
        mat[7] = a12;
		return mat;
	}
	
	dest[0] = mat[0];
	dest[1] = mat[3];
	dest[2] = mat[6];
	dest[3] = mat[1];
	dest[4] = mat[4];
	dest[5] = mat[7];
	dest[6] = mat[2];
	dest[7] = mat[5];
	dest[8] = mat[8];
	return dest;
};

/*
 * mat3.toMat4
 * Copies the elements of a mat3 into the upper 3x3 elements of a mat4
 *
 * Params:
 * mat - mat3 containing values to copy
 * dest - Optional, mat4 receiving copied values
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
mat3.toMat4 = function(mat, dest) {
	if(!dest) { dest = mat4.create(); }
	
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = 0;

	dest[4] = mat[3];
	dest[5] = mat[4];
	dest[6] = mat[5];
	dest[7] = 0;

	dest[8] = mat[6];
	dest[9] = mat[7];
	dest[10] = mat[8];
	dest[11] = 0;

	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	
	return dest;
}

/*
 * mat3.str
 * Returns a string representation of a mat3
 *
 * Params:
 * mat - mat3 to represent as a string
 *
 * Returns:
 * string representation of mat
 */
mat3.str = function(mat) {
	return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + 
		', ' + mat[3] + ', '+ mat[4] + ', ' + mat[5] + 
		', ' + mat[6] + ', ' + mat[7] + ', '+ mat[8] + ']';
};

/*
 * mat4 - 4x4 Matrix
 */
var mat4 = {};

/*
 * mat4.create
 * Creates a new instance of a mat4 using the default array type
 * Any javascript array containing at least 16 numeric elements can serve as a mat4
 *
 * Params:
 * mat - Optional, mat4 containing values to initialize with
 *
 * Returns:
 * New mat4
 */
mat4.create = function(mat) {
	var dest = new glMatrixArrayType(16);
	
	if(mat) {
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		dest[8] = mat[8];
		dest[9] = mat[9];
		dest[10] = mat[10];
		dest[11] = mat[11];
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
	}
	
	return dest;
};

/*
 * mat4.set
 * Copies the values of one mat4 to another
 *
 * Params:
 * mat - mat4 containing values to copy
 * dest - mat4 receiving copied values
 *
 * Returns:
 * dest
 */
mat4.set = function(mat, dest) {
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[3];
	dest[4] = mat[4];
	dest[5] = mat[5];
	dest[6] = mat[6];
	dest[7] = mat[7];
	dest[8] = mat[8];
	dest[9] = mat[9];
	dest[10] = mat[10];
	dest[11] = mat[11];
	dest[12] = mat[12];
	dest[13] = mat[13];
	dest[14] = mat[14];
	dest[15] = mat[15];
	return dest;
};

/*
 * mat4.identity
 * Sets a mat4 to an identity matrix
 *
 * Params:
 * dest - mat4 to set
 *
 * Returns:
 * dest
 */
mat4.identity = function(dest) {
	dest[0] = 1;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = 1;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 0;
	dest[9] = 0;
	dest[10] = 1;
	dest[11] = 0;
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	return dest;
};

/*
 * mat4.transpose
 * Transposes a mat4 (flips the values over the diagonal)
 *
 * Params:
 * mat - mat4 to transpose
 * dest - Optional, mat4 receiving transposed values. If not specified result is written to mat
 *
 * Returns:
 * dest is specified, mat otherwise
 */
mat4.transpose = function(mat, dest) {
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	if(!dest || mat == dest) { 
		var a01 = mat[1], a02 = mat[2], a03 = mat[3];
		var a12 = mat[6], a13 = mat[7];
		var a23 = mat[11];
		
		mat[1] = mat[4];
		mat[2] = mat[8];
		mat[3] = mat[12];
		mat[4] = a01;
		mat[6] = mat[9];
		mat[7] = mat[13];
		mat[8] = a02;
		mat[9] = a12;
		mat[11] = mat[14];
		mat[12] = a03;
		mat[13] = a13;
		mat[14] = a23;
		return mat;
	}
	
	dest[0] = mat[0];
	dest[1] = mat[4];
	dest[2] = mat[8];
	dest[3] = mat[12];
	dest[4] = mat[1];
	dest[5] = mat[5];
	dest[6] = mat[9];
	dest[7] = mat[13];
	dest[8] = mat[2];
	dest[9] = mat[6];
	dest[10] = mat[10];
	dest[11] = mat[14];
	dest[12] = mat[3];
	dest[13] = mat[7];
	dest[14] = mat[11];
	dest[15] = mat[15];
	return dest;
};

/*
 * mat4.determinant
 * Calculates the determinant of a mat4
 *
 * Params:
 * mat - mat4 to calculate determinant of
 *
 * Returns:
 * determinant of mat
 */
mat4.determinant = function(mat) {
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];

	return	a30*a21*a12*a03 - a20*a31*a12*a03 - a30*a11*a22*a03 + a10*a31*a22*a03 +
			a20*a11*a32*a03 - a10*a21*a32*a03 - a30*a21*a02*a13 + a20*a31*a02*a13 +
			a30*a01*a22*a13 - a00*a31*a22*a13 - a20*a01*a32*a13 + a00*a21*a32*a13 +
			a30*a11*a02*a23 - a10*a31*a02*a23 - a30*a01*a12*a23 + a00*a31*a12*a23 +
			a10*a01*a32*a23 - a00*a11*a32*a23 - a20*a11*a02*a33 + a10*a21*a02*a33 +
			a20*a01*a12*a33 - a00*a21*a12*a33 - a10*a01*a22*a33 + a00*a11*a22*a33;
};

/*
 * mat4.inverse
 * Calculates the inverse matrix of a mat4
 *
 * Params:
 * mat - mat4 to calculate inverse of
 * dest - Optional, mat4 receiving inverse matrix. If not specified result is written to mat
 *
 * Returns:
 * dest is specified, mat otherwise
 */
mat4.inverse = function(mat, dest) {
	if(!dest) { dest = mat; }
	
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
	
	var b00 = a00*a11 - a01*a10;
	var b01 = a00*a12 - a02*a10;
	var b02 = a00*a13 - a03*a10;
	var b03 = a01*a12 - a02*a11;
	var b04 = a01*a13 - a03*a11;
	var b05 = a02*a13 - a03*a12;
	var b06 = a20*a31 - a21*a30;
	var b07 = a20*a32 - a22*a30;
	var b08 = a20*a33 - a23*a30;
	var b09 = a21*a32 - a22*a31;
	var b10 = a21*a33 - a23*a31;
	var b11 = a22*a33 - a23*a32;
	
	// Calculate the determinant (inlined to avoid double-caching)
	var invDet = 1/(b00*b11 - b01*b10 + b02*b09 + b03*b08 - b04*b07 + b05*b06);
	
	dest[0] = (a11*b11 - a12*b10 + a13*b09)*invDet;
	dest[1] = (-a01*b11 + a02*b10 - a03*b09)*invDet;
	dest[2] = (a31*b05 - a32*b04 + a33*b03)*invDet;
	dest[3] = (-a21*b05 + a22*b04 - a23*b03)*invDet;
	dest[4] = (-a10*b11 + a12*b08 - a13*b07)*invDet;
	dest[5] = (a00*b11 - a02*b08 + a03*b07)*invDet;
	dest[6] = (-a30*b05 + a32*b02 - a33*b01)*invDet;
	dest[7] = (a20*b05 - a22*b02 + a23*b01)*invDet;
	dest[8] = (a10*b10 - a11*b08 + a13*b06)*invDet;
	dest[9] = (-a00*b10 + a01*b08 - a03*b06)*invDet;
	dest[10] = (a30*b04 - a31*b02 + a33*b00)*invDet;
	dest[11] = (-a20*b04 + a21*b02 - a23*b00)*invDet;
	dest[12] = (-a10*b09 + a11*b07 - a12*b06)*invDet;
	dest[13] = (a00*b09 - a01*b07 + a02*b06)*invDet;
	dest[14] = (-a30*b03 + a31*b01 - a32*b00)*invDet;
	dest[15] = (a20*b03 - a21*b01 + a22*b00)*invDet;
	
	return dest;
};

/*
 * mat4.toRotationMat
 * Copies the upper 3x3 elements of a mat4 into another mat4
 *
 * Params:
 * mat - mat4 containing values to copy
 * dest - Optional, mat4 receiving copied values
 *
 * Returns:
 * dest is specified, a new mat4 otherwise
 */
mat4.toRotationMat = function(mat, dest) {
	if(!dest) { dest = mat4.create(); }
	
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[3];
	dest[4] = mat[4];
	dest[5] = mat[5];
	dest[6] = mat[6];
	dest[7] = mat[7];
	dest[8] = mat[8];
	dest[9] = mat[9];
	dest[10] = mat[10];
	dest[11] = mat[11];
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	
	return dest;
};

/*
 * mat4.toMat3
 * Copies the upper 3x3 elements of a mat4 into a mat3
 *
 * Params:
 * mat - mat4 containing values to copy
 * dest - Optional, mat3 receiving copied values
 *
 * Returns:
 * dest is specified, a new mat3 otherwise
 */
mat4.toMat3 = function(mat, dest) {
	if(!dest) { dest = mat3.create(); }
	
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[4];
	dest[4] = mat[5];
	dest[5] = mat[6];
	dest[6] = mat[8];
	dest[7] = mat[9];
	dest[8] = mat[10];
	
	return dest;
};

/*
 * mat4.toInverseMat3
 * Calculates the inverse of the upper 3x3 elements of a mat4 and copies the result into a mat3
 * The resulting matrix is useful for calculating transformed normals
 *
 * Params:
 * mat - mat4 containing values to invert and copy
 * dest - Optional, mat3 receiving values
 *
 * Returns:
 * dest is specified, a new mat3 otherwise
 */
mat4.toInverseMat3 = function(mat, dest) {
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10];
	
	var b01 = a22*a11-a12*a21;
	var b11 = -a22*a10+a12*a20;
	var b21 = a21*a10-a11*a20;
		
	var d = a00*b01 + a01*b11 + a02*b21;
	if (!d) { return null; }
	var id = 1/d;
	
	if(!dest) { dest = mat3.create(); }
	
	dest[0] = b01*id;
	dest[1] = (-a22*a01 + a02*a21)*id;
	dest[2] = (a12*a01 - a02*a11)*id;
	dest[3] = b11*id;
	dest[4] = (a22*a00 - a02*a20)*id;
	dest[5] = (-a12*a00 + a02*a10)*id;
	dest[6] = b21*id;
	dest[7] = (-a21*a00 + a01*a20)*id;
	dest[8] = (a11*a00 - a01*a10)*id;
	
	return dest;
};

/*
 * mat4.multiply
 * Performs a matrix multiplication
 *
 * Params:
 * mat - mat4, first operand
 * mat2 - mat4, second operand
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.multiply = function(mat, mat2, dest) {
	if(!dest) { dest = mat }
	
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
	
	var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2], b03 = mat2[3];
	var b10 = mat2[4], b11 = mat2[5], b12 = mat2[6], b13 = mat2[7];
	var b20 = mat2[8], b21 = mat2[9], b22 = mat2[10], b23 = mat2[11];
	var b30 = mat2[12], b31 = mat2[13], b32 = mat2[14], b33 = mat2[15];
	
	dest[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
	dest[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
	dest[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
	dest[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
	dest[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
	dest[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
	dest[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
	dest[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
	dest[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
	dest[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
	dest[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
	dest[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
	dest[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
	dest[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
	dest[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
	dest[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;
	
	return dest;
};

/*
 * mat4.multiplyVec3
 * Transforms a vec3 with the given matrix
 * 4th vector component is implicitly '1'
 *
 * Params:
 * mat - mat4 to transform the vector with
 * vec - vec3 to transform
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
mat4.multiplyVec3 = function(mat, vec, dest) {
	if(!dest) { dest = vec }
	
	var x = vec[0], y = vec[1], z = vec[2];
	
	dest[0] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12];
	dest[1] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13];
	dest[2] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14];
	
	return dest;
};

/*
 * mat4.multiplyVec4
 * Transforms a vec4 with the given matrix
 *
 * Params:
 * mat - mat4 to transform the vector with
 * vec - vec4 to transform
 * dest - Optional, vec4 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
mat4.multiplyVec4 = function(mat, vec, dest) {
	if(!dest) { dest = vec }
	
	var x = vec[0], y = vec[1], z = vec[2], w = vec[3];
	
	dest[0] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12]*w;
	dest[1] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13]*w;
	dest[2] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14]*w;
	dest[3] = mat[3]*x + mat[7]*y + mat[11]*z + mat[15]*w;
	
	return dest;
};

/*
 * mat4.translate
 * Translates a matrix by the given vector
 *
 * Params:
 * mat - mat4 to translate
 * vec - vec3 specifying the translation
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.translate = function(mat, vec, dest) {
	var x = vec[0], y = vec[1], z = vec[2];
	
	if(!dest || mat == dest) {
		mat[12] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12];
		mat[13] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13];
		mat[14] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14];
		mat[15] = mat[3]*x + mat[7]*y + mat[11]*z + mat[15];
		return mat;
	}
	
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	
	dest[0] = a00;
	dest[1] = a01;
	dest[2] = a02;
	dest[3] = a03;
	dest[4] = a10;
	dest[5] = a11;
	dest[6] = a12;
	dest[7] = a13;
	dest[8] = a20;
	dest[9] = a21;
	dest[10] = a22;
	dest[11] = a23;
	
	dest[12] = a00*x + a10*y + a20*z + mat[12];
	dest[13] = a01*x + a11*y + a21*z + mat[13];
	dest[14] = a02*x + a12*y + a22*z + mat[14];
	dest[15] = a03*x + a13*y + a23*z + mat[15];
	return dest;
};

/*
 * mat4.scale
 * Scales a matrix by the given vector
 *
 * Params:
 * mat - mat4 to scale
 * vec - vec3 specifying the scale for each axis
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.scale = function(mat, vec, dest) {
	var x = vec[0], y = vec[1], z = vec[2];
	
	if(!dest || mat == dest) {
		mat[0] *= x;
		mat[1] *= x;
		mat[2] *= x;
		mat[3] *= x;
		mat[4] *= y;
		mat[5] *= y;
		mat[6] *= y;
		mat[7] *= y;
		mat[8] *= z;
		mat[9] *= z;
		mat[10] *= z;
		mat[11] *= z;
		return mat;
	}
	
	dest[0] = mat[0]*x;
	dest[1] = mat[1]*x;
	dest[2] = mat[2]*x;
	dest[3] = mat[3]*x;
	dest[4] = mat[4]*y;
	dest[5] = mat[5]*y;
	dest[6] = mat[6]*y;
	dest[7] = mat[7]*y;
	dest[8] = mat[8]*z;
	dest[9] = mat[9]*z;
	dest[10] = mat[10]*z;
	dest[11] = mat[11]*z;
	dest[12] = mat[12];
	dest[13] = mat[13];
	dest[14] = mat[14];
	dest[15] = mat[15];
	return dest;
};

/*
 * mat4.rotate
 * Rotates a matrix by the given angle around the specified axis
 * If rotating around a primary axis (X,Y,Z) one of the specialized rotation functions should be used instead for performance
 *
 * Params:
 * mat - mat4 to rotate
 * angle - angle (in radians) to rotate
 * axis - vec3 representing the axis to rotate around 
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.rotate = function(mat, angle, axis, dest) {
	var x = axis[0], y = axis[1], z = axis[2];
	var len = Math.sqrt(x*x + y*y + z*z);
	if (!len) { return null; }
	if (len != 1) {
		len = 1 / len;
		x *= len; 
		y *= len; 
		z *= len;
	}
	
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var t = 1-c;
	
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	
	// Construct the elements of the rotation matrix
	var b00 = x*x*t + c, b01 = y*x*t + z*s, b02 = z*x*t - y*s;
	var b10 = x*y*t - z*s, b11 = y*y*t + c, b12 = z*y*t + x*s;
	var b20 = x*z*t + y*s, b21 = y*z*t - x*s, b22 = z*z*t + c;
	
	if(!dest) { 
		dest = mat 
	} else if(mat != dest) { // If the source and destination differ, copy the unchanged last row
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
	}
	
	// Perform rotation-specific matrix multiplication
	dest[0] = a00*b00 + a10*b01 + a20*b02;
	dest[1] = a01*b00 + a11*b01 + a21*b02;
	dest[2] = a02*b00 + a12*b01 + a22*b02;
	dest[3] = a03*b00 + a13*b01 + a23*b02;
	
	dest[4] = a00*b10 + a10*b11 + a20*b12;
	dest[5] = a01*b10 + a11*b11 + a21*b12;
	dest[6] = a02*b10 + a12*b11 + a22*b12;
	dest[7] = a03*b10 + a13*b11 + a23*b12;
	
	dest[8] = a00*b20 + a10*b21 + a20*b22;
	dest[9] = a01*b20 + a11*b21 + a21*b22;
	dest[10] = a02*b20 + a12*b21 + a22*b22;
	dest[11] = a03*b20 + a13*b21 + a23*b22;
	return dest;
};

/*
 * mat4.rotateX
 * Rotates a matrix by the given angle around the X axis
 *
 * Params:
 * mat - mat4 to rotate
 * angle - angle (in radians) to rotate
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.rotateX = function(mat, angle, dest) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	
	// Cache the matrix values (makes for huge speed increases!)
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];

	if(!dest) { 
		dest = mat 
	} else if(mat != dest) { // If the source and destination differ, copy the unchanged rows
		dest[0] = mat[0];
		dest[1] = mat[1];
		dest[2] = mat[2];
		dest[3] = mat[3];
		
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
	}
	
	// Perform axis-specific matrix multiplication
	dest[4] = a10*c + a20*s;
	dest[5] = a11*c + a21*s;
	dest[6] = a12*c + a22*s;
	dest[7] = a13*c + a23*s;
	
	dest[8] = a10*-s + a20*c;
	dest[9] = a11*-s + a21*c;
	dest[10] = a12*-s + a22*c;
	dest[11] = a13*-s + a23*c;
	return dest;
};

/*
 * mat4.rotateY
 * Rotates a matrix by the given angle around the Y axis
 *
 * Params:
 * mat - mat4 to rotate
 * angle - angle (in radians) to rotate
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.rotateY = function(mat, angle, dest) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
	
	if(!dest) { 
		dest = mat 
	} else if(mat != dest) { // If the source and destination differ, copy the unchanged rows
		dest[4] = mat[4];
		dest[5] = mat[5];
		dest[6] = mat[6];
		dest[7] = mat[7];
		
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
	}
	
	// Perform axis-specific matrix multiplication
	dest[0] = a00*c + a20*-s;
	dest[1] = a01*c + a21*-s;
	dest[2] = a02*c + a22*-s;
	dest[3] = a03*c + a23*-s;
	
	dest[8] = a00*s + a20*c;
	dest[9] = a01*s + a21*c;
	dest[10] = a02*s + a22*c;
	dest[11] = a03*s + a23*c;
	return dest;
};

/*
 * mat4.rotateZ
 * Rotates a matrix by the given angle around the Z axis
 *
 * Params:
 * mat - mat4 to rotate
 * angle - angle (in radians) to rotate
 * dest - Optional, mat4 receiving operation result. If not specified result is written to mat
 *
 * Returns:
 * dest if specified, mat otherwise
 */
mat4.rotateZ = function(mat, angle, dest) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
	
	if(!dest) { 
		dest = mat 
	} else if(mat != dest) { // If the source and destination differ, copy the unchanged last row
		dest[8] = mat[8];
		dest[9] = mat[9];
		dest[10] = mat[10];
		dest[11] = mat[11];
		
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
	}
	
	// Perform axis-specific matrix multiplication
	dest[0] = a00*c + a10*s;
	dest[1] = a01*c + a11*s;
	dest[2] = a02*c + a12*s;
	dest[3] = a03*c + a13*s;
	
	dest[4] = a00*-s + a10*c;
	dest[5] = a01*-s + a11*c;
	dest[6] = a02*-s + a12*c;
	dest[7] = a03*-s + a13*c;
	
	return dest;
};

/*
 * mat4.frustum
 * Generates a frustum matrix with the given bounds
 *
 * Params:
 * left, right - scalar, left and right bounds of the frustum
 * bottom, top - scalar, bottom and top bounds of the frustum
 * near, far - scalar, near and far bounds of the frustum
 * dest - Optional, mat4 frustum matrix will be written into
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
mat4.frustum = function(left, right, bottom, top, near, far, dest) {
	if(!dest) { dest = mat4.create(); }
	var rl = (right - left);
	var tb = (top - bottom);
	var fn = (far - near);
	dest[0] = (near*2) / rl;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = (near*2) / tb;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = (right + left) / rl;
	dest[9] = (top + bottom) / tb;
	dest[10] = -(far + near) / fn;
	dest[11] = -1;
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = -(far*near*2) / fn;
	dest[15] = 0;
	return dest;
};

/*
 * mat4.perspective
 * Generates a perspective projection matrix with the given bounds
 *
 * Params:
 * fovy - scalar, vertical field of view
 * aspect - scalar, aspect ratio. typically viewport width/height
 * near, far - scalar, near and far bounds of the frustum
 * dest - Optional, mat4 frustum matrix will be written into
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
mat4.perspective = function(fovy, aspect, near, far, dest) {
	var top = near*Math.tan(fovy*Math.PI / 360.0);
	var right = top*aspect;
	return mat4.frustum(-right, right, -top, top, near, far, dest);
};

/*
 * mat4.ortho
 * Generates a orthogonal projection matrix with the given bounds
 *
 * Params:
 * left, right - scalar, left and right bounds of the frustum
 * bottom, top - scalar, bottom and top bounds of the frustum
 * near, far - scalar, near and far bounds of the frustum
 * dest - Optional, mat4 frustum matrix will be written into
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
mat4.ortho = function(left, right, bottom, top, near, far, dest) {
	if(!dest) { dest = mat4.create(); }
	var rl = (right - left);
	var tb = (top - bottom);
	var fn = (far - near);
	dest[0] = 2 / rl;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = 2 / tb;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 0;
	dest[9] = 0;
	dest[10] = -2 / fn;
	dest[11] = 0;
	dest[12] = -(left + right) / rl;
	dest[13] = -(top + bottom) / tb;
	dest[14] = -(far + near) / fn;
	dest[15] = 1;
	return dest;
};

/*
 * mat4.ortho
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * Params:
 * eye - vec3, position of the viewer
 * center - vec3, point the viewer is looking at
 * up - vec3 pointing "up"
 * dest - Optional, mat4 frustum matrix will be written into
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
mat4.lookAt = function(eye, center, up, dest) {
	if(!dest) { dest = mat4.create(); }
	
	var eyex = eye[0],
		eyey = eye[1],
		eyez = eye[2],
		upx = up[0],
		upy = up[1],
		upz = up[2],
		centerx = center[0],
		centery = center[1],
		centerz = center[2];

	if (eyex == centerx && eyey == centery && eyez == centerz) {
		return mat4.identity(dest);
	}
	
	var z0,z1,z2,x0,x1,x2,y0,y1,y2,len;
	
	//vec3.direction(eye, center, z);
	z0 = eyex - center[0];
	z1 = eyey - center[1];
	z2 = eyez - center[2];
	
	// normalize (no check needed for 0 because of early return)
	len = 1/Math.sqrt(z0*z0 + z1*z1 + z2*z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;
	
	//vec3.normalize(vec3.cross(up, z, x));
	x0 = upy*z2 - upz*z1;
	x1 = upz*z0 - upx*z2;
	x2 = upx*z1 - upy*z0;
	len = Math.sqrt(x0*x0 + x1*x1 + x2*x2);
	if (!len) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	} else {
		len = 1/len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	};
	
	//vec3.normalize(vec3.cross(z, x, y));
	y0 = z1*x2 - z2*x1;
	y1 = z2*x0 - z0*x2;
	y2 = z0*x1 - z1*x0;
	
	len = Math.sqrt(y0*y0 + y1*y1 + y2*y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1/len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}
	
	dest[0] = x0;
	dest[1] = y0;
	dest[2] = z0;
	dest[3] = 0;
	dest[4] = x1;
	dest[5] = y1;
	dest[6] = z1;
	dest[7] = 0;
	dest[8] = x2;
	dest[9] = y2;
	dest[10] = z2;
	dest[11] = 0;
	dest[12] = -(x0*eyex + x1*eyey + x2*eyez);
	dest[13] = -(y0*eyex + y1*eyey + y2*eyez);
	dest[14] = -(z0*eyex + z1*eyey + z2*eyez);
	dest[15] = 1;
	
	return dest;
};

/*
 * mat4.str
 * Returns a string representation of a mat4
 *
 * Params:
 * mat - mat4 to represent as a string
 *
 * Returns:
 * string representation of mat
 */
mat4.str = function(mat) {
	return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + ', ' + mat[3] + 
		', '+ mat[4] + ', ' + mat[5] + ', ' + mat[6] + ', ' + mat[7] + 
		', '+ mat[8] + ', ' + mat[9] + ', ' + mat[10] + ', ' + mat[11] + 
		', '+ mat[12] + ', ' + mat[13] + ', ' + mat[14] + ', ' + mat[15] + ']';
};

/*
 * quat4 - Quaternions 
 */
quat4 = {};

/*
 * quat4.create
 * Creates a new instance of a quat4 using the default array type
 * Any javascript array containing at least 4 numeric elements can serve as a quat4
 *
 * Params:
 * quat - Optional, quat4 containing values to initialize with
 *
 * Returns:
 * New quat4
 */
quat4.create = function(quat) {
	var dest = new glMatrixArrayType(4);
	
	if(quat) {
		dest[0] = quat[0];
		dest[1] = quat[1];
		dest[2] = quat[2];
		dest[3] = quat[3];
	}
	
	return dest;
};

/*
 * quat4.set
 * Copies the values of one quat4 to another
 *
 * Params:
 * quat - quat4 containing values to copy
 * dest - quat4 receiving copied values
 *
 * Returns:
 * dest
 */
quat4.set = function(quat, dest) {
	dest[0] = quat[0];
	dest[1] = quat[1];
	dest[2] = quat[2];
	dest[3] = quat[3];
	
	return dest;
};

/*
 * quat4.calculateW
 * Calculates the W component of a quat4 from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length. 
 * Any existing W component will be ignored. 
 *
 * Params:
 * quat - quat4 to calculate W component of
 * dest - Optional, quat4 receiving calculated values. If not specified result is written to quat
 *
 * Returns:
 * dest if specified, quat otherwise
 */
quat4.calculateW = function(quat, dest) {
	var x = quat[0], y = quat[1], z = quat[2];

	if(!dest || quat == dest) {
		quat[3] = -Math.sqrt(Math.abs(1.0 - x*x - y*y - z*z));
		return quat;
	}
	dest[0] = x;
	dest[1] = y;
	dest[2] = z;
	dest[3] = -Math.sqrt(Math.abs(1.0 - x*x - y*y - z*z));
	return dest;
}

/*
 * quat4.inverse
 * Calculates the inverse of a quat4
 *
 * Params:
 * quat - quat4 to calculate inverse of
 * dest - Optional, quat4 receiving inverse values. If not specified result is written to quat
 *
 * Returns:
 * dest if specified, quat otherwise
 */
quat4.inverse = function(quat, dest) {
	if(!dest || quat == dest) {
		quat[0] *= -1;
		quat[1] *= -1;
		quat[2] *= -1;
		return quat;
	}
	dest[0] = -quat[0];
	dest[1] = -quat[1];
	dest[2] = -quat[2];
	dest[3] = quat[3];
	return dest;
}

/*
 * quat4.length
 * Calculates the length of a quat4
 *
 * Params:
 * quat - quat4 to calculate length of
 *
 * Returns:
 * Length of quat
 */
quat4.length = function(quat) {
	var x = quat[0], y = quat[1], z = quat[2], w = quat[3];
	return Math.sqrt(x*x + y*y + z*z + w*w);
}

/*
 * quat4.normalize
 * Generates a unit quaternion of the same direction as the provided quat4
 * If quaternion length is 0, returns [0, 0, 0, 0]
 *
 * Params:
 * quat - quat4 to normalize
 * dest - Optional, quat4 receiving operation result. If not specified result is written to quat
 *
 * Returns:
 * dest if specified, quat otherwise
 */
quat4.normalize = function(quat, dest) {
	if(!dest) { dest = quat; }
	
	var x = quat[0], y = quat[1], z = quat[2], w = quat[3];
	var len = Math.sqrt(x*x + y*y + z*z + w*w);
	if(len == 0) {
		dest[0] = 0;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		return dest;
	}
	len = 1/len;
	dest[0] = x * len;
	dest[1] = y * len;
	dest[2] = z * len;
	dest[3] = w * len;
	
	return dest;
}

/*
 * quat4.multiply
 * Performs a quaternion multiplication
 *
 * Params:
 * quat - quat4, first operand
 * quat2 - quat4, second operand
 * dest - Optional, quat4 receiving operation result. If not specified result is written to quat
 *
 * Returns:
 * dest if specified, quat otherwise
 */
quat4.multiply = function(quat, quat2, dest) {
	if(!dest) { dest = quat; }
	
	var qax = quat[0], qay = quat[1], qaz = quat[2], qaw = quat[3];
	var qbx = quat2[0], qby = quat2[1], qbz = quat2[2], qbw = quat2[3];
	
	dest[0] = qax*qbw + qaw*qbx + qay*qbz - qaz*qby;
	dest[1] = qay*qbw + qaw*qby + qaz*qbx - qax*qbz;
	dest[2] = qaz*qbw + qaw*qbz + qax*qby - qay*qbx;
	dest[3] = qaw*qbw - qax*qbx - qay*qby - qaz*qbz;
	
	return dest;
}

/*
 * quat4.multiplyVec3
 * Transforms a vec3 with the given quaternion
 *
 * Params:
 * quat - quat4 to transform the vector with
 * vec - vec3 to transform
 * dest - Optional, vec3 receiving operation result. If not specified result is written to vec
 *
 * Returns:
 * dest if specified, vec otherwise
 */
quat4.multiplyVec3 = function(quat, vec, dest) {
	if(!dest) { dest = vec; }
	
	var x = vec[0], y = vec[1], z = vec[2];
	var qx = quat[0], qy = quat[1], qz = quat[2], qw = quat[3];

	// calculate quat * vec
	var ix = qw*x + qy*z - qz*y;
	var iy = qw*y + qz*x - qx*z;
	var iz = qw*z + qx*y - qy*x;
	var iw = -qx*x - qy*y - qz*z;
	
	// calculate result * inverse quat
	dest[0] = ix*qw + iw*-qx + iy*-qz - iz*-qy;
	dest[1] = iy*qw + iw*-qy + iz*-qx - ix*-qz;
	dest[2] = iz*qw + iw*-qz + ix*-qy - iy*-qx;
	
	return dest;
}

/*
 * quat4.toMat3
 * Calculates a 3x3 matrix from the given quat4
 *
 * Params:
 * quat - quat4 to create matrix from
 * dest - Optional, mat3 receiving operation result
 *
 * Returns:
 * dest if specified, a new mat3 otherwise
 */
quat4.toMat3 = function(quat, dest) {
	if(!dest) { dest = mat3.create(); }
	
	var x = quat[0], y = quat[1], z = quat[2], w = quat[3];

	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;

	var xx = x*x2;
	var xy = x*y2;
	var xz = x*z2;

	var yy = y*y2;
	var yz = y*z2;
	var zz = z*z2;

	var wx = w*x2;
	var wy = w*y2;
	var wz = w*z2;

	dest[0] = 1 - (yy + zz);
	dest[1] = xy - wz;
	dest[2] = xz + wy;

	dest[3] = xy + wz;
	dest[4] = 1 - (xx + zz);
	dest[5] = yz - wx;

	dest[6] = xz - wy;
	dest[7] = yz + wx;
	dest[8] = 1 - (xx + yy);
	
	return dest;
}

/*
 * quat4.toMat4
 * Calculates a 4x4 matrix from the given quat4
 *
 * Params:
 * quat - quat4 to create matrix from
 * dest - Optional, mat4 receiving operation result
 *
 * Returns:
 * dest if specified, a new mat4 otherwise
 */
quat4.toMat4 = function(quat, dest) {
	if(!dest) { dest = mat4.create(); }
	
	var x = quat[0], y = quat[1], z = quat[2], w = quat[3];

	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;

	var xx = x*x2;
	var xy = x*y2;
	var xz = x*z2;

	var yy = y*y2;
	var yz = y*z2;
	var zz = z*z2;

	var wx = w*x2;
	var wy = w*y2;
	var wz = w*z2;

	dest[0] = 1 - (yy + zz);
	dest[1] = xy - wz;
	dest[2] = xz + wy;
	dest[3] = 0;

	dest[4] = xy + wz;
	dest[5] = 1 - (xx + zz);
	dest[6] = yz - wx;
	dest[7] = 0;

	dest[8] = xz - wy;
	dest[9] = yz + wx;
	dest[10] = 1 - (xx + yy);
	dest[11] = 0;

	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	
	return dest;
}

/*
 * quat4.slerp
 * Performs a spherical linear interpolation between two quat4
 *
 * Params:
 * quat - quat4, first quaternion
 * quat2 - quat4, second quaternion
 * slerp - interpolation amount between the two inputs
 * dest - Optional, quat4 receiving operation result. If not specified result is written to quat
 *
 * Returns:
 * dest if specified, quat otherwise
 */
quat4.slerp = function(quat, quat2, slerp, dest) {
    if(!dest) { dest = quat; }
    
	var cosHalfTheta =  quat[0]*quat2[0] + quat[1]*quat2[1] + quat[2]*quat2[2] + quat[3]*quat2[3];
	
	if (Math.abs(cosHalfTheta) >= 1.0){
	    if(dest != quat) {
		    dest[0] = quat[0];
		    dest[1] = quat[1];
		    dest[2] = quat[2];
		    dest[3] = quat[3];
		}
		return dest;
	}
	
	var halfTheta = Math.acos(cosHalfTheta);
	var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta*cosHalfTheta);

	if (Math.abs(sinHalfTheta) < 0.001){
		dest[0] = (quat[0]*0.5 + quat2[0]*0.5);
		dest[1] = (quat[1]*0.5 + quat2[1]*0.5);
		dest[2] = (quat[2]*0.5 + quat2[2]*0.5);
		dest[3] = (quat[3]*0.5 + quat2[3]*0.5);
		return dest;
	}
	
	var ratioA = Math.sin((1 - slerp)*halfTheta) / sinHalfTheta;
	var ratioB = Math.sin(slerp*halfTheta) / sinHalfTheta; 
	
	dest[0] = (quat[0]*ratioA + quat2[0]*ratioB);
	dest[1] = (quat[1]*ratioA + quat2[1]*ratioB);
	dest[2] = (quat[2]*ratioA + quat2[2]*ratioB);
	dest[3] = (quat[3]*ratioA + quat2[3]*ratioB);
	
	return dest;
}


/*
 * quat4.str
 * Returns a string representation of a quaternion
 *
 * Params:
 * quat - quat4 to represent as a string
 *
 * Returns:
 * string representation of quat
 */
quat4.str = function(quat) {
	return '[' + quat[0] + ', ' + quat[1] + ', ' + quat[2] + ', ' + quat[3] + ']'; 
}

;// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};
;var gl;

function InitGL(canvas)
{
	try
	{
		gl = canvas.getContext("experimental-webgl"); //experimental for Microsoft Edge
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	}
	catch(e)
	{}
	
	if(!gl)
	{
		alert("Your browser doesn't support WebGL");
		return;
	}
}

function loadShader(path)
{
	var request = new XMLHttpRequest();
	request.open("GET", path);
	
	request.onreadystatechange = function ()
	{
		if (request.readyState == 4 && request.status == 200)
		{
			alert (request.responseText);
			return request.responseText;
		}
	}
	
	request.send();
}

var LightFragmentShader =
"precision mediump float;" +
"varying vec3 vLightWeighting;" +
"varying vec4 vColor;" +
"void main(void)" +
"{" +
"gl_FragColor = vec4(vLightWeighting, 1.0) * vColor;" +
"}";

var LightVertexShader = 
"attribute vec3 aVertexPosition;" +
"attribute vec3 aVertexNormal;" +
"uniform vec4 uVertexColor;" +
"uniform mat4 uMVMatrix;" +
"uniform mat4 uPMatrix;" +
"uniform mat3 uNMatrix;" +
"uniform vec3 uAmbientColor;" +
"uniform vec3 uLightingDirection;" +
"uniform vec3 uDirectionalColor;" +
"varying vec3 vLightWeighting;" +
"varying vec4 vColor;" +
"void main(void)" +
"{" +
"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
"vec3 transformedNormal = uNMatrix * aVertexNormal;" +
"float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);" +
"vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;" +
"vColor = uVertexColor;" +
"}";

var TextureFragmentShader =
"precision mediump float;" +
"varying vec2 vTextureCoord;" +
"uniform sampler2D uSampler;" +
"void main(void)" +
"{" +
"gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));" +
"}"

var TextureVertexShader =
"attribute vec3 aVertexPosition;" +
"attribute vec2 aTextureCoord;" +
"uniform mat4 uMVMatrix;" +
"uniform mat4 uPMatrix;" +
"varying vec2 vTextureCoord;" +
"void main(void)" +
"{" +
"gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
"vTextureCoord = aTextureCoord;" +
"}"

var MouldingsFragmentShader = 
"precision mediump float;" +
"uniform vec3 uFaceColor;" +
"varying vec3 vNormal;" +
"void main() {" +
"float ambient = 0.5;" +
"float diff = 0.3;" +
"float fromB=0.15;" +
"vec3 diffDir = vec3(sqrt(1.0-fromB*fromB),0.0,fromB);" +
"float diffDot = diff*clamp(dot(diffDir,vNormal),0.0,1.0);" +
"gl_FragColor = vec4((ambient+diffDot)*uFaceColor.rgb,1.0);" +
"}";

var MouldingsVertexShader = 
"uniform    mat4        uMVPMatrix;" +
"uniform    vec3       dir1;" +
"uniform    vec3        dir2;" +
"uniform    float        uIsRight;" +
"uniform    float        mSize;" +
"uniform    float        zDistance;" +
"attribute  vec4        vPosition;" +
"attribute  vec3        aNormal;" +
"varying vec3 vNormal;" +
"void main() {" +
"vec3 mDir;" +
"float sign;" +
"if(uIsRight>0.5){" +
"mDir = dir2;" +
"sign = -1.0;" +
"}else{" +
"mDir = dir1;" +
"sign = 1.0;" +
"}" +
"vec3 dirX = sign*vec3(-mDir.y,mDir.x,mDir.z);" +
"vec3 dirY = mDir;" +
"vNormal = aNormal;" +
"vec3 vP =  ( mSize*vPosition.x*dirX+2.0*vPosition.y*dirY+mSize*vec3(0.0,0.0,-1.0)*vPosition.z);" +
"gl_Position = uMVPMatrix * vec4(vP.x,vP.y,vP.z-zDistance,1.0);" +
"}";

function GetShader(type, value)
{
	var shader = gl.createShader(type);

	gl.shaderSource(shader, value);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	{
		throw new Error(gl.getShaderInfoLog(shader));
		//return null;
	}
	return shader;
}


var shaderProgramLight;
var shaderProgramTexture;

function InitShaders()
{
	shaderProgramLight = gl.createProgram();
		
	gl.attachShader(shaderProgramLight, GetShader(gl.VERTEX_SHADER, LightVertexShader));
	gl.attachShader(shaderProgramLight, GetShader(gl.FRAGMENT_SHADER, LightFragmentShader));
	
	gl.linkProgram(shaderProgramLight);
	
	if (!gl.getProgramParameter(shaderProgramLight, gl.LINK_STATUS))
	{
		alert("Could not initialise shaders");
	}
	
	shaderProgramLight.vertexPositionAttribute = gl.getAttribLocation(shaderProgramLight, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgramLight.vertexPositionAttribute);
	
	shaderProgramLight.vertexNormalAttribute = gl.getAttribLocation(shaderProgramLight, "aVertexNormal");
	gl.enableVertexAttribArray(shaderProgramLight.vertexNormalAttribute);
	
	shaderProgramLight.vertexColorUniform = gl.getUniformLocation(shaderProgramLight, "uVertexColor");
	
	shaderProgramLight.pMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uPMatrix");
	shaderProgramLight.mvMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uMVMatrix");
	shaderProgramLight.nMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uNMatrix");
	
	shaderProgramLight.useLightingUniform = gl.getUniformLocation(shaderProgramLight, "uUseLighting");
	shaderProgramLight.ambientColorUniform = gl.getUniformLocation(shaderProgramLight, "uAmbientColor");
	shaderProgramLight.lightingDirectionUniform = gl.getUniformLocation(shaderProgramLight, "uLightingDirection");
	shaderProgramLight.directionalColorUniform = gl.getUniformLocation(shaderProgramLight, "uDirectionalColor");
	
	shaderProgramTexture = gl.createProgram();
		
	gl.attachShader(shaderProgramTexture, GetShader(gl.VERTEX_SHADER, TextureVertexShader));
	gl.attachShader(shaderProgramTexture, GetShader(gl.FRAGMENT_SHADER, TextureFragmentShader));
	
	gl.linkProgram(shaderProgramTexture);
	
	shaderProgramTexture.vertexPositionAttribute = gl.getAttribLocation(shaderProgramTexture, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgramTexture.vertexPositionAttribute);
	
	shaderProgramTexture.textureCoordAttribute = gl.getAttribLocation(shaderProgramTexture, "aTextureCoord");
	gl.enableVertexAttribArray(shaderProgramTexture.textureCoordAttribute);
	
	shaderProgramTexture.pMatrixUniform = gl.getUniformLocation(shaderProgramTexture, "uPMatrix");
	shaderProgramTexture.mvMatrixUniform = gl.getUniformLocation(shaderProgramTexture, "uMVMatrix");
	shaderProgramTexture.samplerUniform = gl.getUniformLocation(shaderProgramTexture, "uSampler");
}

var BackgroundTexture;

function InitTexture()
{
	BackgroundTexture = gl.createTexture();
}

function SetTextureImage(id, image)
{
	var canvas = document.createElement("canvas");
	canvas.width = 2048;
	canvas.height = 2048;
	
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	ctx.fill();
	
	if (image.width >= image.height)
	{
		var height = canvas.height * image.height / image.width;
		ctx.drawImage(image, 0, ((canvas.width - height) / 2), canvas.width, height);
	}
	else
	{
		var width = canvas.width * image.width / image.height;
		ctx.drawImage(image, ((canvas.height - width) / 2), 0, width, canvas.height);
	}
	
	if (WebGL.ImagesArray[id] == undefined)
	{
		var texture = gl.createTexture();
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
		//gl.generateMipmap(gl.TEXTURE_2D);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
		WebGL.ImagesArray[id] = texture;
		console.log("New id has created.");
	}
	else
	{
		gl.bindTexture(gl.TEXTURE_2D, WebGL.ImagesArray[id]);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		console.log("Id has changed.");
	}
}

function ShowTextureImage(id)
{
	if (WebGL.ImagesArray[id] != null)
	{
		BackgroundTexture = WebGL.ImagesArray[id];
		console.log("Background changed.");
	}
	else
	{
		console.log("Image does not init.");	
	}
}

var currentlyPressedKeys = {};

function handleKeyDown(event)
{
	currentlyPressedKeys[event.keyCode] = true;
}

function handleKeyUp(event)
{
	currentlyPressedKeys[event.keyCode] = false;
}

var pitch = 0;
var pitchRate = 0;

var yaw = 0;
var yawRate = 0;

var xPos = 0;
var yPos = 0.4;
var zPos = 0;

var speed = 0;
var ModelColor = [1.0, 1.0, 1.0, 1.0];

function HandleKeys()
{
	if (currentlyPressedKeys[33])
	{
		// Page Up
		pitchRate = 0.12;
	}
	else if (currentlyPressedKeys[34])
	{
		// Page Down
		pitchRate = -0.12;
	}
	else
	{
		pitchRate = 0;
	}
	
	if (currentlyPressedKeys[37] || currentlyPressedKeys[65])
	{
		// Left cursor key or A
		yawRate = 0.12;
	}
	else if (currentlyPressedKeys[39] || currentlyPressedKeys[68])
	{
		// Right cursor key or D
		yawRate = -0.12;
	}
	else
	{
		yawRate = 0;
	}
	
	if (currentlyPressedKeys[38] || currentlyPressedKeys[87])
	{
		// Up cursor key or W
		speed = 0.003;
	}
	else if (currentlyPressedKeys[40] || currentlyPressedKeys[83])
	{
		// Down cursor key
		speed = -0.003;
	}
	else
	{
		speed = 0;
	}
}

var lastTime = 0;
// Used to make us "jog" up and down as we move forward.
var joggingAngle = 0;

function Animate()
{
	var timeNow = new Date().getTime();
	if (lastTime != 0)
	{
		var elapsed = timeNow - lastTime;
		
		if (speed != 0)
		{
			xPos -= Math.sin(degToRad(yaw)) * speed * elapsed;
			zPos -= Math.cos(degToRad(yaw)) * speed * elapsed;
			
			joggingAngle += elapsed * 0.9;
			yPos = Math.sin(degToRad(joggingAngle)) / 40 + 0.4
		}
		
		yaw += yawRate * elapsed;
		pitch += pitchRate * elapsed;
		
		wallAngle = yaw + 90;
		wallAngle = AngleCalc(wallAngle);
		ceilingAngle = pitch - 90;
		ceilingAngle = AngleCalc(ceilingAngle);
	}
	lastTime = timeNow;
}

function AngleCalc (angle)
{
	modulo = angle % 360;
	
	if (angle >= 0)
	{
		if (modulo >= 0 && modulo < 180)
		{
			angle = modulo;
		}
		else if (modulo >= 180 && modulo < 360)
		{
			angle = modulo - 360;
		}
	}
	else if (angle < 0)
	{
		if (modulo <= 0 && modulo > -180)
		{
			angle = modulo;
		}
		else if (modulo <= -180 && modulo > -360)
		{
			angle = modulo + 360;
		}
	}
	
	return angle;
}

function Tick()
{
	requestAnimFrame(Tick);
	HandleKeys();
	DrawScene();
	//Animate(); //walking
}

function MainWebGL()
{
	var canvas = document.getElementById("webgl-canvas");
	InitGL(canvas);
	InitShaders();
	InitBuffers();
	InitTexture();

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
	
	Tick();
}

/**
* Init WebGL application.
* @param {object} div - The reference for div object, where application will draw canvas window.
*/
var WebGL = {};

WebGL.ImagesArray = [];
WebGL.ModelsArray = [];

var Model = function (url)
{
	this.url = url;
	this.obj;
	this.position = function(){this.position.x = 0; this.position.y = 0; this.position.z = 0;};
	this.position();
	this.rotation = function(){this.rotation.x = 0; this.rotation.y = 0; this.rotation.z = 0;};;
	this.rotation();
	this.scale = 1.0;
	this.color = [0.5, 0.5, 0.5, 1];
}

/**
* Init WebGL application.
* @param {object} div - The reference for div object, where application will draw canvas window.
*/
WebGL.InitApp = function (div)
{
	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "webgl-canvas");
	canvas.setAttribute("width", div.offsetWidth);
	canvas.setAttribute("height", div.offsetHeight);
	
	div.appendChild(canvas);
	MainWebGL();
}

/**
* Init WebGL application.
* @param {int} newPos - The camera position in X axis.
*/
WebGL.PosX = function (newPos)
{
	xPos = newPos;	
}

WebGL.PosZ = function (newPos)
{
	zPos = -newPos;
}

WebGL.RotateX = function (angle)
{
	yaw = angle - 90;
}

WebGL.RotateY = function (angle)
{
	pitch = angle + 90;
}

WebGL.ModelColor = function (color) // do usunięcia
{
	ModelColor = color;
	ModelColor = [this._ConvertColor(color[0]), this._ConvertColor(color[1]), this._ConvertColor(color[2]), this._ConvertColor(color[3])];
}

WebGL.Background = function (image)
{
	TextureImage3(image);
}

WebGL.SetImage = function (id, image)
{
	SetTextureImage(id, image);
}

WebGL.ShowImage = function (id)
{
	ShowTextureImage(id);
}

WebGL.CheckImages = function ()
{
	//console.log(WebGL.ImagesArray);
	
	for(i = 0; i < this.ImagesArray.length; i++)
	{
		console.log(this.ImagesArray[i]);
	}
}

WebGL.ClearImages = function ()
{
	console.log("ClearImages");
	
	for(i = 0; i < this.ImagesArray.length; i++)
	{
		delete this.ImagesArray[i];
	}
	
	this.ImagesArray = [];
	this.ShowImage(0);
}

/******************************************************************************/

WebGL._ModelInit = function(ModelData, id)
{
	WebGL.ModelsArray[id].obj = new OBJ.Mesh(ModelData); //zapisywanie załadowanych modeli do tablicy z właściwościami obiektów
	OBJ.initMeshBuffers(gl, this.ModelsArray[id].obj);
}

WebGL.SetModel = function (id, url, callback)
{	
	if (this.ModelsArray[id] == undefined)
	{
		this.ModelsArray[id] = new Model(url);
	
		var XMLHttpRequestObject = new XMLHttpRequest();
		//XMLHttpRequestObject.addEventListener("progress", updateProgress);
		XMLHttpRequestObject.addEventListener("load", transferComplete);
		XMLHttpRequestObject.addEventListener("error", transferFailed);
		XMLHttpRequestObject.addEventListener("abort", transferCanceled);
		
		XMLHttpRequestObject.open("GET", url, true);
		XMLHttpRequestObject.send(null);
		
		function transferComplete(evt)
		{
			//console.log("The transfer is complete.");
			WebGL._ModelInit(XMLHttpRequestObject.responseText, id);
			
			if(typeof callback !== 'function')
			{
				callback = false;
			}
			
			if(callback)
			{
				callback();
			}
		}
		
		function transferFailed(evt)
		{
			console.log("An error occurred while transferring the file.");
		}
		
		function transferCanceled(evt)
		{
			console.log("The transfer has been canceled by the user.");
		}
	}
}

WebGL._CheckModelID = function (id)
{
	if (this.ModelsArray[id] != undefined)
		return true;
	else
		return false;
}

WebGL.SetModelPosition = function (id, position)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].position.x = position[0];
		this.ModelsArray[id].position.y = position[1];
		this.ModelsArray[id].position.z = position[2];
	}	
}

WebGL.SetModelRotation = function (id, rotation)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].rotation.x = rotation[0];
		this.ModelsArray[id].rotation.y = rotation[1];
		this.ModelsArray[id].rotation.z = rotation[2];
	}	
}

WebGL.SetModelScale = function (id, scale)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].scale = scale;
	}	
}

WebGL._ConvertColor = function (color)
{
	return color / 255;
}

WebGL.SetModelColor = function (id, color)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].color = [this._ConvertColor(color[0]), this._ConvertColor(color[1]), this._ConvertColor(color[2]), this._ConvertColor(color[3])];
	}	
}

WebGL._ReadModel = function (ObjectData, id)
{
	console.log(id);
	
	this.ModelsArray[id] = new OBJ.Mesh(ObjectData);	
	OBJ.initMeshBuffers(gl, this.ModelsArray[id]);
}

WebGL.CheckModels = function ()
{
	console.log(this.ModelsArray);
	
	/*
	for(i = 0; i < this.ModelsArray.length; i++)
	{
		console.log(this.ModelsArray[i]);
	}
	*/
}

WebGL.RemoveModel = function (id)
{
	if (this.ModelsArray[id] != undefined)
		delete this.ModelsArray[id];
}

 //dodać zmienną visible, która określa czy obiekt jest widoczny czy nie, ale jest załadowany + metody show/hide

WebGL.ClearModels = function ()
{
	console.log("ClearModels");
	
	for(i = 0; i < this.ModelsArray.length; i++)
	{
		delete this.ModelsArray[i];
	}
	
	this.ModelsArray = [];
};

/**
 * Matrix math utilities. These methods operate on OpenGL ES format
 * matrices and vectors stored in float arrays.
 * <p>
 * Matrices are 4 x 4 column-vector matrices stored in column-major
 * order:
 * <pre>
 *  m[offset +  0] m[offset +  4] m[offset +  8] m[offset + 12]
 *  m[offset +  1] m[offset +  5] m[offset +  9] m[offset + 13]
 *  m[offset +  2] m[offset +  6] m[offset + 10] m[offset + 14]
 *  m[offset +  3] m[offset +  7] m[offset + 11] m[offset + 15]</pre>
 *
 * Vectors are 4 x 1 column vectors stored in order:
 * <pre>
 * v[offset + 0]
 * v[offset + 1]
 * v[offset + 2]
 * v[offset + 3]</pre>
 */
var Matrix = {};
var Vector3 = {};

/** Temporary memory for operations that need temporary matrix data. */
Matrix.sTemp = new Float32Array(32);

/**
 * Multiplies two 4x4 matrices together and stores the result in a third 4x4
 * matrix. In matrix notation: result = lhs x rhs. Due to the way
 * matrix multiplication works, the result matrix will have the same
 * effect as first multiplying by the rhs matrix, then multiplying by
 * the lhs matrix. This is the opposite of what you might expect.
 * <p>
 * The same float array may be passed for result, lhs, and/or rhs. However,
 * the result element values are undefined if the result elements overlap
 * either the lhs or rhs elements.
 *
 * @param result The float array that holds the result.
 * @param resultOffset The offset into the result array where the result is
 *        stored.
 * @param lhs The float array that holds the left-hand-side matrix.
 * @param lhsOffset The offset into the lhs array where the lhs is stored
 * @param rhs The float array that holds the right-hand-side matrix.
 * @param rhsOffset The offset into the rhs array where the rhs is stored.
 *
 * @throws IllegalArgumentException if result, lhs, or rhs are null, or if
 * resultOffset + 16 > result.length or lhsOffset + 16 > lhs.length or
 * rhsOffset + 16 > rhs.length.
 */
Matrix.multiplyMM = function (result, resultOffset, lhs, lhsOffset, rhs, rhsOffset)
{
	if (!result)
	{
		result = lhs
	}
	
	var a00 = lhs[0], a01 = lhs[1], a02 = lhs[2], a03 = lhs[3];
	var a10 = lhs[4], a11 = lhs[5], a12 = lhs[6], a13 = lhs[7];
	var a20 = lhs[8], a21 = lhs[9], a22 = lhs[10], a23 = lhs[11];
	var a30 = lhs[12], a31 = lhs[13], a32 = lhs[14], a33 = lhs[15];
	
	var b00 = rhs[0], b01 = rhs[1], b02 = rhs[2], b03 = rhs[3];
	var b10 = rhs[4], b11 = rhs[5], b12 = rhs[6], b13 = rhs[7];
	var b20 = rhs[8], b21 = rhs[9], b22 = rhs[10], b23 = rhs[11];
	var b30 = rhs[12], b31 = rhs[13], b32 = rhs[14], b33 = rhs[15];
	
	result[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
	result[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
	result[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
	result[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
	result[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
	result[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
	result[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
	result[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
	result[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
	result[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
	result[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
	result[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
	result[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
	result[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
	result[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
	result[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;
	
	//return result;
}

/**
 * Multiplies a 4 element vector by a 4x4 matrix and stores the result in a
 * 4-element column vector. In matrix notation: result = lhs x rhs
 * <p>
 * The same float array may be passed for resultVec, lhsMat, and/or rhsVec.
 * However, the resultVec element values are undefined if the resultVec
 * elements overlap either the lhsMat or rhsVec elements.
 *
 * @param resultVec The float array that holds the result vector.
 * @param resultVecOffset The offset into the result array where the result
 *        vector is stored.
 * @param lhsMat The float array that holds the left-hand-side matrix.
 * @param lhsMatOffset The offset into the lhs array where the lhs is stored
 * @param rhsVec The float array that holds the right-hand-side vector.
 * @param rhsVecOffset The offset into the rhs vector where the rhs vector
 *        is stored.
 *
 * @throws IllegalArgumentException if resultVec, lhsMat,
 * or rhsVec are null, or if resultVecOffset + 4 > resultVec.length
 * or lhsMatOffset + 16 > lhsMat.length or
 * rhsVecOffset + 4 > rhsVec.length.
 */
Matrix.multiplyMV = function(resultVec, resultVecOffset, lhsMat, lhsMatOffset, rhsVec, rhsVecOffset)
{
	
}

/**
 * Transposes a 4 x 4 matrix.
 * <p>
 * mTrans and m must not overlap.
 *
 * @param mTrans the array that holds the output transposed matrix
 * @param mTransOffset an offset into mTrans where the transposed matrix is
 *        stored.
 * @param m the input array
 * @param mOffset an offset into m where the input matrix is stored.
 */
Matrix.transposeM = function(mTrans, mTransOffset, m, mOffset)
{
	/*
	for (var i = 0; i < 4; i++)
	{
		var mBase = i * 4 + mOffset;
		mTrans[i + mTransOffset] = m[mBase];
		mTrans[i + 4 + mTransOffset] = m[mBase + 1];
		mTrans[i + 8 + mTransOffset] = m[mBase + 2];
		mTrans[i + 12 + mTransOffset] = m[mBase + 3];
	}
	
	return mTrans;
	*/
	
	if(!m || mTrans == m) { 
		var a01 = mTrans[1], a02 = mTrans[2];
		var a12 = mTrans[5];
		
        mTrans[1] = mTrans[3];
        mTrans[2] = mTrans[6];
        mTrans[3] = a01;
        mTrans[5] = mTrans[7];
        mTrans[6] = a02;
        mTrans[7] = a12;
		return mTrans;
	}
	
	m[0] = mTrans[0];
	m[1] = mTrans[3];
	m[2] = mTrans[6];
	m[3] = mTrans[1];
	m[4] = mTrans[4];
	m[5] = mTrans[7];
	m[6] = mTrans[2];
	m[7] = mTrans[5];
	m[8] = mTrans[8];
	return m;
}

/**
 * Inverts a 4 x 4 matrix.
 * <p>
 * mInv and m must not overlap.
 *
 * @param mInv the array that holds the output inverted matrix
 * @param mInvOffset an offset into mInv where the inverted matrix is
 *        stored.
 * @param m the input array
 * @param mOffset an offset into m where the input matrix is stored.
 * @return true if the matrix could be inverted, false if it could not.
 */
Matrix.invertM = function(mInv, mInvOffset, m, mOffset)
{
	// Invert a 4 x 4 matrix using Cramer's Rule

	// transpose matrix
	var src0  = m[mOffset +  0];
	var src4  = m[mOffset +  1];
	var src8  = m[mOffset +  2];
	var src12 = m[mOffset +  3];

	var src1  = m[mOffset +  4];
	var src5  = m[mOffset +  5];
	var src9  = m[mOffset +  6];
	var src13 = m[mOffset +  7];

	var src2  = m[mOffset +  8];
	var src6  = m[mOffset +  9];
	var src10 = m[mOffset + 10];
	var src14 = m[mOffset + 11];

	var src3  = m[mOffset + 12];
	var src7  = m[mOffset + 13];
	var src11 = m[mOffset + 14];
	var src15 = m[mOffset + 15];

	// calculate pairs for first 8 elements (cofactors)
	var atmp0  = src10 * src15;
	var atmp1  = src11 * src14;
	var atmp2  = src9  * src15;
	var atmp3  = src11 * src13;
	var atmp4  = src9  * src14;
	var atmp5  = src10 * src13;
	var atmp6  = src8  * src15;
	var atmp7  = src11 * src12;
	var atmp8  = src8  * src14;
	var atmp9  = src10 * src12;
	var atmp10 = src8  * src13;
	var atmp11 = src9  * src12;

	// calculate first 8 elements (cofactors)
	var dst0  = (atmp0 * src5 + atmp3 * src6 + atmp4  * src7)
					  - (atmp1 * src5 + atmp2 * src6 + atmp5  * src7);
	var dst1  = (atmp1 * src4 + atmp6 * src6 + atmp9  * src7)
					  - (atmp0 * src4 + atmp7 * src6 + atmp8  * src7);
	var dst2  = (atmp2 * src4 + atmp7 * src5 + atmp10 * src7)
					  - (atmp3 * src4 + atmp6 * src5 + atmp11 * src7);
	var dst3  = (atmp5 * src4 + atmp8 * src5 + atmp11 * src6)
					  - (atmp4 * src4 + atmp9 * src5 + atmp10 * src6);
	var dst4  = (atmp1 * src1 + atmp2 * src2 + atmp5  * src3)
					  - (atmp0 * src1 + atmp3 * src2 + atmp4  * src3);
	var dst5  = (atmp0 * src0 + atmp7 * src2 + atmp8  * src3)
					  - (atmp1 * src0 + atmp6 * src2 + atmp9  * src3);
	var dst6  = (atmp3 * src0 + atmp6 * src1 + atmp11 * src3)
					  - (atmp2 * src0 + atmp7 * src1 + atmp10 * src3);
	var dst7  = (atmp4 * src0 + atmp9 * src1 + atmp10 * src2)
					  - (atmp5 * src0 + atmp8 * src1 + atmp11 * src2);

	// calculate pairs for second 8 elements (cofactors)
	var btmp0  = src2 * src7;
	var btmp1  = src3 * src6;
	var btmp2  = src1 * src7;
	var btmp3  = src3 * src5;
	var btmp4  = src1 * src6;
	var btmp5  = src2 * src5;
	var btmp6  = src0 * src7;
	var btmp7  = src3 * src4;
	var btmp8  = src0 * src6;
	var btmp9  = src2 * src4;
	var btmp10 = src0 * src5;
	var btmp11 = src1 * src4;

	// calculate second 8 elements (cofactors)
	var dst8  = (btmp0  * src13 + btmp3  * src14 + btmp4  * src15)
					  - (btmp1  * src13 + btmp2  * src14 + btmp5  * src15);
	var dst9  = (btmp1  * src12 + btmp6  * src14 + btmp9  * src15)
					  - (btmp0  * src12 + btmp7  * src14 + btmp8  * src15);
	var dst10 = (btmp2  * src12 + btmp7  * src13 + btmp10 * src15)
					  - (btmp3  * src12 + btmp6  * src13 + btmp11 * src15);
	var dst11 = (btmp5  * src12 + btmp8  * src13 + btmp11 * src14)
					  - (btmp4  * src12 + btmp9  * src13 + btmp10 * src14);
	var dst12 = (btmp2  * src10 + btmp5  * src11 + btmp1  * src9 )
					  - (btmp4  * src11 + btmp0  * src9  + btmp3  * src10);
	var dst13 = (btmp8  * src11 + btmp0  * src8  + btmp7  * src10)
					  - (btmp6  * src10 + btmp9  * src11 + btmp1  * src8 );
	var dst14 = (btmp6  * src9  + btmp11 * src11 + btmp3  * src8 )
					  - (btmp10 * src11 + btmp2  * src8  + btmp7  * src9 );
	var dst15 = (btmp10 * src10 + btmp4  * src8  + btmp9  * src9 )
					  - (btmp8  * src9  + btmp11 * src10 + btmp5  * src8 );

	// calculate determinant
	var det =
			src0 * dst0 + src1 * dst1 + src2 * dst2 + src3 * dst3;

	if (det == 0.0) {
		return false;
	}

	// calculate matrix inverse
	var invdet = 1.0 / det;
	mInv[     mInvOffset] = dst0  * invdet;
	mInv[ 1 + mInvOffset] = dst1  * invdet;
	mInv[ 2 + mInvOffset] = dst2  * invdet;
	mInv[ 3 + mInvOffset] = dst3  * invdet;

	mInv[ 4 + mInvOffset] = dst4  * invdet;
	mInv[ 5 + mInvOffset] = dst5  * invdet;
	mInv[ 6 + mInvOffset] = dst6  * invdet;
	mInv[ 7 + mInvOffset] = dst7  * invdet;

	mInv[ 8 + mInvOffset] = dst8  * invdet;
	mInv[ 9 + mInvOffset] = dst9  * invdet;
	mInv[10 + mInvOffset] = dst10 * invdet;
	mInv[11 + mInvOffset] = dst11 * invdet;

	mInv[12 + mInvOffset] = dst12 * invdet;
	mInv[13 + mInvOffset] = dst13 * invdet;
	mInv[14 + mInvOffset] = dst14 * invdet;
	mInv[15 + mInvOffset] = dst15 * invdet;

	return true;
}

/**
 * Computes an orthographic projection matrix.
 *
 * @param m returns the result
 * @param mOffset
 * @param left
 * @param right
 * @param bottom
 * @param top
 * @param near
 * @param far
 */
Matrix.orthoM = function(m, mOffset, left, right, bottom, top, near, far)
{
	if (left == right) {
		throw new IllegalArgumentException("left == right");
	}
	if (bottom == top) {
		throw new IllegalArgumentException("bottom == top");
	}
	if (near == far) {
		throw new IllegalArgumentException("near == far");
	}

	var r_width  = 1.0 / (right - left);
	var r_height = 1.0 / (top - bottom);
	var r_depth  = 1.0 / (far - near);
	var x =  2.0 * (r_width);
	var y =  2.0 * (r_height);
	var z = -2.0 * (r_depth);
	var tx = -(right + left) * r_width;
	var ty = -(top + bottom) * r_height;
	var tz = -(far + near) * r_depth;
	m[mOffset + 0] = x;
	m[mOffset + 5] = y;
	m[mOffset +10] = z;
	m[mOffset +12] = tx;
	m[mOffset +13] = ty;
	m[mOffset +14] = tz;
	m[mOffset +15] = 1.0;
	m[mOffset + 1] = 0.0;
	m[mOffset + 2] = 0.0;
	m[mOffset + 3] = 0.0;
	m[mOffset + 4] = 0.0;
	m[mOffset + 6] = 0.0;
	m[mOffset + 7] = 0.0;
	m[mOffset + 8] = 0.0;
	m[mOffset + 9] = 0.0;
	m[mOffset + 11] = 0.0;
}


/**
 * Defines a projection matrix in terms of six clip planes.
 *
 * @param m the float array that holds the output perspective matrix
 * @param offset the offset into float array m where the perspective
 *        matrix data is written
 * @param left
 * @param right
 * @param bottom
 * @param top
 * @param near
 * @param far
 */
Matrix.frustumM = function(m, offset, left, right, bottom, top,  near, far)
{
	if (left == right) {
		throw new IllegalArgumentException("left == right");
	}
	if (top == bottom) {
		throw new IllegalArgumentException("top == bottom");
	}
	if (near == far) {
		throw new IllegalArgumentException("near == far");
	}
	if (near <= 0.0) {
		throw new IllegalArgumentException("near <= 0.0f");
	}
	if (far <= 0.0) {
		throw new IllegalArgumentException("far <= 0.0f");
	}
	var r_width  = 1.0 / (right - left);
	var r_height = 1.0 / (top - bottom);
	var r_depth  = 1.0 / (near - far);
	var x = 2.0 * (near * r_width);
	var y = 2.0 * (near * r_height);
	var A = (right + left) * r_width;
	var B = (top + bottom) * r_height;
	var C = (far + near) * r_depth;
	var D = 2.0 * (far * near * r_depth);
	m[offset + 0] = x;
	m[offset + 5] = y;
	m[offset + 8] = A;
	m[offset +  9] = B;
	m[offset + 10] = C;
	m[offset + 14] = D;
	m[offset + 11] = -1.0;
	m[offset +  1] = 0.0;
	m[offset +  2] = 0.0;
	m[offset +  3] = 0.0;
	m[offset +  4] = 0.0;
	m[offset +  6] = 0.0;
	m[offset +  7] = 0.0;
	m[offset + 12] = 0.0;
	m[offset + 13] = 0.0;
	m[offset + 15] = 0.0;
}

/**
 * Defines a projection matrix in terms of a field of view angle, an
 * aspect ratio, and z clip planes.
 *
 * @param m the float array that holds the perspective matrix
 * @param offset the offset into float array m where the perspective
 *        matrix data is written
 * @param fovy field of view in y direction, in degrees
 * @param aspect width to height aspect ratio of the viewport
 * @param zNear
 * @param zFar
 */
Matrix.perspectiveM = function (m, offset, fovy, aspect, zNear, zFar)
{
	var f = 1.0 / Math.tan(fovy * (Math.PI / 360.0));
	var rangeReciprocal = 1.0 / (zNear - zFar);
	
	m[offset + 0] = f / aspect;
	m[offset + 1] = 0.0;
	m[offset + 2] = 0.0;
	m[offset + 3] = 0.0;
	
	m[offset + 4] = 0.0;
	m[offset + 5] = f;
	m[offset + 6] = 0.0;
	m[offset + 7] = 0.0;
	
	m[offset + 8] = 0.0;
	m[offset + 9] = 0.0;
	m[offset + 10] = (zFar + zNear) * rangeReciprocal;
	m[offset + 11] = -1.0;
	
	m[offset + 12] = 0.0;
	m[offset + 13] = 0.0;
	m[offset + 14] = 2.0 * zFar * zNear * rangeReciprocal;
	m[offset + 15] = 0.0;
}

/**
 * Computes the length of a vector.
 *
 * @param x x coordinate of a vector
 * @param y y coordinate of a vector
 * @param z z coordinate of a vector
 * @return the length of a vector
 */
Matrix.length = function(x, y, z)
{
	return (Math.sqrt(x * x + y * y + z * z));
}

/**
 * Sets matrix m to the identity matrix.
 *
 * @param sm returns the result
 * @param smOffset index into sm where the result matrix starts
 */
Matrix.setIdentityM = function(sm, smOffset)
{
	for (var i=0 ; i<16 ; i++) {
		sm[smOffset + i] = 0;
	}
	for(var i = 0; i < 16; i += 5) {
		sm[smOffset + i] = 1.0;
	}
}

/**
 * Scales matrix m by x, y, and z, putting the result in sm.
 * <p>
 * m and sm must not overlap.
 *
 * @param sm returns the result
 * @param smOffset index into sm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param x scale factor x
 * @param y scale factor y
 * @param z scale factor z
 */
Matrix.scaleM = function(m, mOffset, x, y, z, sm, smOffset)
{
	if (arguments.lengh == 7)
	{
		for (var i=0 ; i<4 ; i++) {
			var smi = smOffset + i;
			var mi = mOffset + i;
			sm[     smi] = m[     mi] * x;
			sm[ 4 + smi] = m[ 4 + mi] * y;
			sm[ 8 + smi] = m[ 8 + mi] * z;
			sm[12 + smi] = m[12 + mi];
		}
	}
	else
	{
		for (var i=0 ; i<4 ; i++)
		{
			var mi = mOffset + i;
			m[     mi] *= x;
			m[ 4 + mi] *= y;
			m[ 8 + mi] *= z;
		}
	}
}

/**
 * Scales matrix m in place by sx, sy, and sz.
 *
 * @param m matrix to scale
 * @param mOffset index into m where the matrix starts
 * @param x scale factor x
 * @param y scale factor y
 * @param z scale factor z
 */
 
 /*
Matrix.scaleM = function(m, mOffset, x, y, z)
{
	for (var i=0 ; i<4 ; i++) {
		var mi = mOffset + i;
		m[     mi] *= x;
		m[ 4 + mi] *= y;
		m[ 8 + mi] *= z;
	}
}
*/

/**
 * Translates matrix m by x, y, and z, putting the result in tm.
 * <p>
 * m and tm must not overlap.
 *
 * @param tm returns the result
 * @param tmOffset index into sm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param x translation factor x
 * @param y translation factor y
 * @param z translation factor z
 */
Matrix.translateM = function(m, mOffset, x, y, z, tm, tmOffset)
{
	if (arguments.lengh == 7)
	{
		for (var i=0 ; i<12 ; i++)
		{
			tm[tmOffset + i] = m[mOffset + i];
		}
		for (var i=0 ; i<4 ; i++)
		{
			var tmi = tmOffset + i;
			var mi = mOffset + i;
			tm[12 + tmi] = m[mi] * x + m[4 + mi] * y + m[8 + mi] * z +
				m[12 + mi];
		}
	}
	else
	{
		for (var i = 0; i < 4 ; i++)
		{
			var mi = mOffset + i;
			m[12 + mi] += m[mi] * x + m[4 + mi] * y + m[8 + mi] * z;
		}
	}
}

/**
 * Translates matrix m by x, y, and z in place.
 *
 * @param m matrix
 * @param mOffset index into m where the matrix starts
 * @param x translation factor x
 * @param y translation factor y
 * @param z translation factor z
 */

/*
Matrix.translateM = function (m, mOffset, x, y, z)
{
	for (var i = 0; i < 4 ; i++)
	{
		var mi = mOffset + i;
		m[12 + mi] += m[mi] * x + m[4 + mi] * y + m[8 + mi] * z;
	}
}
*/

/**
 * Rotates matrix m by angle a (in degrees) around the axis (x, y, z).
 * <p>
 * m and rm must not overlap.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */
Matrix.rotateM = function(m, mOffset, a, x, y, z, rm, rmOffset)
{
	//synchronized(sTemp)
	//{
	if (arguments.lengh == 8)
	{
		this.setRotateM(m, 0, a, x, y, z);
		this.multiplyMM(rm, rmOffset, m, mOffset, m, 0);
	}
	else
	{
		/*
		this.setRotateM(this.sTemp, 0, a, x, y, z);
		this.multiplyMM(this.sTemp, 16, m, mOffset, this.sTemp, 0);
		this.ArrayCopy(this.sTemp, 16, m, mOffset, 16); //Object source, int sourcePosition, Object destination, int destinationPosition, int numberOfElements
		*/
		
		
		
		var len = Math.sqrt(x*x + y*y + z*z);
		if (!len) { return null; }
		if (len != 1) {
			len = 1 / len;
			x *= len; 
			y *= len; 
			z *= len;
		}
		
		var s = Math.sin(a);
		var c = Math.cos(a);
		var t = 1-c;
		
		// Cache the mrix values (makes for huge speed increases!)
		var a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
		var a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
		var a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
		
		// Construct the elements of the rotation mrix
		var b00 = x*x*t + c, b01 = y*x*t + z*s, b02 = z*x*t - y*s;
		var b10 = x*y*t - z*s, b11 = y*y*t + c, b12 = z*y*t + x*s;
		var b20 = x*z*t + y*s, b21 = y*z*t - x*s, b22 = z*z*t + c;
		
		if(!rm) { 
			rm = m 
		} else if(m != rm) { // If the source and rmination differ, copy the unchanged last row
			rm[12] = m[12];
			rm[13] = m[13];
			rm[14] = m[14];
			rm[15] = m[15];
		}
		
		// Perform rotation-specific mrix multiplication
		rm[0] = a00*b00 + a10*b01 + a20*b02;
		rm[1] = a01*b00 + a11*b01 + a21*b02;
		rm[2] = a02*b00 + a12*b01 + a22*b02;
		rm[3] = a03*b00 + a13*b01 + a23*b02;
		
		rm[4] = a00*b10 + a10*b11 + a20*b12;
		rm[5] = a01*b10 + a11*b11 + a21*b12;
		rm[6] = a02*b10 + a12*b11 + a22*b12;
		rm[7] = a03*b10 + a13*b11 + a23*b12;
		
		rm[8] = a00*b20 + a10*b21 + a20*b22;
		rm[9] = a01*b20 + a11*b21 + a21*b22;
		rm[10] = a02*b20 + a12*b21 + a22*b22;
		rm[11] = a03*b20 + a13*b21 + a23*b22;
		return rm;
	}
	//}
}

/**
 * Rotates matrix m in place by angle a (in degrees)
 * around the axis (x, y, z).
 *
 * @param m source matrix
 * @param mOffset index into m where the matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */

/*
Matrix.rotateM = function(m, mOffset, a, x, y, z)
{
	//synchronized(sTemp)
	//{
		setRotateM(sTemp, 0, a, x, y, z);
		multiplyMM(sTemp, 16, m, mOffset, sTemp, 0);
		System.arraycopy(sTemp, 16, m, mOffset, 16);
		
		//Object source, int sourcePosition, Object destination, int destinationPosition, int numberOfElements
	//}
}
*/

Matrix.InverseToMat3 = function(mat, dest)
{
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10];
	
	var b01 = a22*a11-a12*a21;
	var b11 = -a22*a10+a12*a20;
	var b21 = a21*a10-a11*a20;
		
	var d = a00*b01 + a01*b11 + a02*b21;
	if (!d) { return null; }
	var id = 1/d;
	
	if(!dest) { dest = mat3.create(); }
	
	dest[0] = b01*id;
	dest[1] = (-a22*a01 + a02*a21)*id;
	dest[2] = (a12*a01 - a02*a11)*id;
	dest[3] = b11*id;
	dest[4] = (a22*a00 - a02*a20)*id;
	dest[5] = (-a12*a00 + a02*a10)*id;
	dest[6] = b21*id;
	dest[7] = (-a21*a00 + a01*a20)*id;
	dest[8] = (a11*a00 - a01*a10)*id;
	
	return dest;
};

/**
    * Copies an array (or part of an array) to another array. The src array is copied to the
    * dst array, beginning at the position specified by srcPos and into the position specified
    * by dstPos. The number of elements to copy is determined by length. The simplified version
    * with two arguments copies an entire array to another of the same size. It is equivalent
    * to "arrayCopy(src, 0, dst, 0, src.length)". This function is far more efficient for copying
    * array data than iterating through a for and copying each element.
    *
    * @param {Array} src an array of any data type: the source array
    * @param {Array} dest an array of any data type (as long as it's the same as src): the destination array
    * @param {int} srcPos     starting position in the source array
    * @param {int} destPos    starting position in the destination array
    * @param {int} length     number of array elements to be copied
    *
    * @returns none
    */
Matrix.ArrayCopy = function(src, srcPos, dest, destPos, length)
{ // src, srcPos, dest, destPos, length) {
	//var src, srcPos = 0, dest, destPos = 0, length;
	
	if (arguments.length === 2)
	{
		// recall itself and copy src to dest from start index 0 to 0 of src.length
		src = arguments[0];
		dest = arguments[1];
		length = src.length;
	}
	else if (arguments.length === 3)
	{
		// recall itself and copy src to dest from start index 0 to 0 of length
		src = arguments[0];
		dest = arguments[1];
		length = arguments[2];
	}
	else if (arguments.length === 5)
	{
		src = arguments[0];
		srcPos = arguments[1];
		dest = arguments[2];
		destPos = arguments[3];
		length = arguments[4];
	}
	
	// copy src to dest from index srcPos to index destPos of length recursivly on objects
	for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++)
	{
		if (dest[j] !== null)
		{
			dest[j] = src[i];
		}
		else
		{
			throw "array index out of bounds exception";
		}
	}
}

/**
 * Creates a matrix for rotation by angle a (in degrees)
 * around the axis (x, y, z).
 * <p>
 * An optimized path will be used for rotation about a major axis
 * (e.g. x=1.0f y=0.0f z=0.0f).
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */
Matrix.setRotateM = function(rm, rmOffset, a, x, y, z)
{
	rm[rmOffset + 3] = 0;
	rm[rmOffset + 7] = 0;
	rm[rmOffset + 11]= 0;
	rm[rmOffset + 12]= 0;
	rm[rmOffset + 13]= 0;
	rm[rmOffset + 14]= 0;
	rm[rmOffset + 15]= 1;
	a *= (Math.PI / 180.0);
	var s = Math.sin(a);
	var c = Math.cos(a);
	if (1.0 == x && 0.0 == y && 0.0 == z) {
		rm[rmOffset + 5] = c;   rm[rmOffset + 10]= c;
		rm[rmOffset + 6] = s;   rm[rmOffset + 9] = -s;
		rm[rmOffset + 1] = 0;   rm[rmOffset + 2] = 0;
		rm[rmOffset + 4] = 0;   rm[rmOffset + 8] = 0;
		rm[rmOffset + 0] = 1;
	} else if (0.0 == x && 1.0 == y && 0.0 == z) {
		rm[rmOffset + 0] = c;   rm[rmOffset + 10]= c;
		rm[rmOffset + 8] = s;   rm[rmOffset + 2] = -s;
		rm[rmOffset + 1] = 0;   rm[rmOffset + 4] = 0;
		rm[rmOffset + 6] = 0;   rm[rmOffset + 9] = 0;
		rm[rmOffset + 5] = 1;
	} else if (0.0 == x && 0.0 == y && 1.0 == z) {
		rm[rmOffset + 0] = c;   rm[rmOffset + 5] = c;
		rm[rmOffset + 1] = s;   rm[rmOffset + 4] = -s;
		rm[rmOffset + 2] = 0;   rm[rmOffset + 6] = 0;
		rm[rmOffset + 8] = 0;   rm[rmOffset + 9] = 0;
		rm[rmOffset + 10]= 1;
	} else {
		var len = Matrix.length(x, y, z);
		if (1.0 != len) {
			var recipLen = 1.0 / len;
			x *= recipLen;
			y *= recipLen;
			z *= recipLen;
		}
		var nc = 1.0 - c;
		var xy = x * y;
		var yz = y * z;
		var zx = z * x;
		var xs = x * s;
		var ys = y * s;
		var zs = z * s;
		rm[rmOffset +  0] = x*x*nc +  c;
		rm[rmOffset +  4] =  xy*nc - zs;
		rm[rmOffset +  8] =  zx*nc + ys;
		rm[rmOffset +  1] =  xy*nc + zs;
		rm[rmOffset +  5] = y*y*nc +  c;
		rm[rmOffset +  9] =  yz*nc - xs;
		rm[rmOffset +  2] =  zx*nc - ys;
		rm[rmOffset +  6] =  yz*nc + xs;
		rm[rmOffset + 10] = z*z*nc +  c;
	}
}

/**
 * Converts Euler angles to a rotation matrix.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param x angle of rotation, in degrees
 * @param y angle of rotation, in degrees
 * @param z angle of rotation, in degrees
 */
Matrix.setRotateEulerM = function(rm, rmOffset, x, y, z)
{
	x *= (Math.PI / 180.0);
	y *= (Math.PI / 180.0);
	z *= (Math.PI / 180.0);
	var cx = Math.cos(x);
	var sx = Math.sin(x);
	var cy = Math.cos(y);
	var sy = Math.sin(y);
	var cz = Math.cos(z);
	var sz = Math.sin(z);
	var cxsy = cx * sy;
	var sxsy = sx * sy;

	rm[rmOffset + 0]  =   cy * cz;
	rm[rmOffset + 1]  =  -cy * sz;
	rm[rmOffset + 2]  =   sy;
	rm[rmOffset + 3]  =  0.0;

	rm[rmOffset + 4]  =  cxsy * cz + cx * sz;
	rm[rmOffset + 5]  = -cxsy * sz + cx * cz;
	rm[rmOffset + 6]  =  -sx * cy;
	rm[rmOffset + 7]  =  0.0;

	rm[rmOffset + 8]  = -sxsy * cz + sx * sz;
	rm[rmOffset + 9]  =  sxsy * sz + sx * cz;
	rm[rmOffset + 10] =  cx * cy;
	rm[rmOffset + 11] =  0.0;

	rm[rmOffset + 12] =  0.0;
	rm[rmOffset + 13] =  0.0;
	rm[rmOffset + 14] =  0.0;
	rm[rmOffset + 15] =  1.0;
}

/**
 * Defines a viewing transformation in terms of an eye point, a center of
 * view, and an up vector.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param eyeX eye point X
 * @param eyeY eye point Y
 * @param eyeZ eye point Z
 * @param centerX center of view X
 * @param centerY center of view Y
 * @param centerZ center of view Z
 * @param upX up vector X
 * @param upY up vector Y
 * @param upZ up vector Z
 */
Matrix.setLookAtM = function(rm, rmOffset, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)
{
	// See the OpenGL GLUT documentation for gluLookAt for a description
	// of the algorithm. We implement it in a straightforward way:

	var fx = centerX - eyeX;
	var fy = centerY - eyeY;
	var fz = centerZ - eyeZ;

	// Normalize f
	var rlf = 1.0 / Matrix.length(fx, fy, fz);
	fx *= rlf;
	fy *= rlf;
	fz *= rlf;

	// compute s = f x up (x means "cross product")
	var sx = fy * upZ - fz * upY;
	var sy = fz * upX - fx * upZ;
	var sz = fx * upY - fy * upX;

	// and normalize s
	var rls = 1.0 / Matrix.length(sx, sy, sz);
	sx *= rls;
	sy *= rls;
	sz *= rls;

	// compute u = s x f
	var ux = sy * fz - sz * fy;
	var uy = sz * fx - sx * fz;
	var uz = sx * fy - sy * fx;

	rm[rmOffset + 0] = sx;
	rm[rmOffset + 1] = ux;
	rm[rmOffset + 2] = -fx;
	rm[rmOffset + 3] = 0.0;

	rm[rmOffset + 4] = sy;
	rm[rmOffset + 5] = uy;
	rm[rmOffset + 6] = -fy;
	rm[rmOffset + 7] = 0.0;

	rm[rmOffset + 8] = sz;
	rm[rmOffset + 9] = uz;
	rm[rmOffset + 10] = -fz;
	rm[rmOffset + 11] = 0.0;

	rm[rmOffset + 12] = 0.0;
	rm[rmOffset + 13] = 0.0;
	rm[rmOffset + 14] = 0.0;
	rm[rmOffset + 15] = 1.0;

	translateM(rm, rmOffset, -eyeX, -eyeY, -eyeZ);
}

Matrix.Copy = function(mat, dest)
{
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[3];
	dest[4] = mat[4];
	dest[5] = mat[5];
	dest[6] = mat[6];
	dest[7] = mat[7];
	dest[8] = mat[8];
	dest[9] = mat[9];
	dest[10] = mat[10];
	dest[11] = mat[11];
	dest[12] = mat[12];
	dest[13] = mat[13];
	dest[14] = mat[14];
	dest[15] = mat[15];
	return dest;
}

Matrix.Identity = function(dest)
{
	dest[0] = 1;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = 1;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 0;
	dest[9] = 0;
	dest[10] = 1;
	dest[11] = 0;
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	return dest;
};

Vector3.Normalize = function(vec, dest)
{
	if(!dest) { dest = vec; }
	
	var x = vec[0], y = vec[1], z = vec[2];
	var len = Math.sqrt(x*x + y*y + z*z);
	
	if (!len) {
		dest[0] = 0;
		dest[1] = 0;
		dest[2] = 0;
		return dest;
	} else if (len == 1) {
		dest[0] = x;
		dest[1] = y;
		dest[2] = z;
		return dest;
	}
	
	len = 1 / len;
	dest[0] = x*len;
	dest[1] = y*len;
	dest[2] = z*len;
	return dest;
};

Vector3.Scale = function(vec, val, dest) {
	if(!dest || vec == dest) {
		vec[0] *= val;
		vec[1] *= val;
		vec[2] *= val;
		return vec;
	}
	
	dest[0] = vec[0]*val;
	dest[1] = vec[1]*val;
	dest[2] = vec[2]*val;
	return dest;
};;var worldVertexPositionBuffer = null;
var worldVertexTextureCoordBuffer = null;

var mvMatrix = new Float32Array(16);
var mvMatrixStack = [];
var pMatrix = new Float32Array(16);

function mvPushMatrix()
{
	var copy = new Float32Array(16);
	Matrix.Copy(mvMatrix, copy);
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

function setMatrixUniforms(shaderProgram)
{
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
	
	var normalMatrix = new Float32Array(9);
	Matrix.InverseToMat3(mvMatrix, normalMatrix);
	Matrix.transposeM(normalMatrix);
	gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}

function degToRad(degrees)
{
	return degrees * Math.PI / 180;
}

function DrawModel(model_id)
{
	if (model_id == 1)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgramLight.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	}
	else if (model_id == 2)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer2);
		gl.vertexAttribPointer(shaderProgramLight.vertexPositionAttribute, cubeVertexPositionBuffer2.itemSize, gl.FLOAT, false, 0, 0);
	}
	else if (model_id == 3)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer3);
		gl.vertexAttribPointer(shaderProgramLight.vertexPositionAttribute, cubeVertexPositionBuffer3.itemSize, gl.FLOAT, false, 0, 0);
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgramLight.vertexNormalAttribute, cubeVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.uniform1i(shaderProgramLight.samplerUniform, 0);
	
	gl.uniform3f(shaderProgramLight.ambientColorUniform, 0.2, 0.2, 0.2);
	var lightingDirection = [-0.25, -0.25, -1.0];
	var adjustedLD = new Float32Array(3);
	Vector3.Normalize(lightingDirection, adjustedLD);
	Vector3.Scale(adjustedLD, -1);
	gl.uniform3fv(shaderProgramLight.lightingDirectionUniform, adjustedLD);
	gl.uniform3f(shaderProgramLight.directionalColorUniform, 0.8, 0.8, 0.8);
	
	gl.uniform4fv(shaderProgramLight.vertexColorUniform, ModelColor);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms(shaderProgramLight);
	
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function DrawOBJ(mesh, modelColor)
{
	if (mesh.vertexBuffer != undefined)
	{
		// now to render the mesh
		gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
		gl.vertexAttribPointer(shaderProgramLight.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
		// it's possible that the mesh doesn't contain
		// any texture coordinates (e.g. suzanne.obj in the development branch).
		// in this case, the texture vertexAttribArray will need to be disabled
		// before the call to drawElements
		
		/*
		if(!mesh.textures.length)
		{
			gl.disableVertexAttribArray(shaderProgramLight.textureCoordAttribute);
		}
		else
		{
			// if the texture vertexAttribArray has been previously
			// disabled, then it needs to be re-enabled
			gl.enableVertexAttribArray(shaderProgramLight.textureCoordAttribute);
			gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
			gl.vertexAttribPointer(shaderProgramLight.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
		}*/
		
		gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
		gl.vertexAttribPointer(shaderProgramLight.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.uniform1i(shaderProgramLight.samplerUniform, 0);
		
		gl.uniform3f(shaderProgramLight.ambientColorUniform, 0.2, 0.2, 0.2);
		var lightingDirection = [-0.25, -0.25, -1.0];
		var adjustedLD = new Float32Array(3);
		Vector3.Normalize(lightingDirection, adjustedLD);
		Vector3.Scale(adjustedLD, -1);
		gl.uniform3fv(shaderProgramLight.lightingDirectionUniform, adjustedLD);
		gl.uniform3f(shaderProgramLight.directionalColorUniform, 0.2, 0.2, 0.2);
		
		gl.uniform4fv(shaderProgramLight.vertexColorUniform, modelColor);
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
		setMatrixUniforms(shaderProgramLight);
		
		gl.drawElements(gl.TRIANGLES, mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
		
		//console.log("DrawOBJ");
	}
}

function DrawBackground()
{
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundPositionBuffer);
	gl.vertexAttribPointer(shaderProgramTexture.vertexPositionAttribute, backgroundPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundTextureCoordsBuffer);
	gl.vertexAttribPointer(shaderProgramTexture.textureCoordAttribute, backgroundTextureCoordsBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, BackgroundTexture);
	gl.uniform1i(shaderProgramTexture.samplerUniform, 0);
	
	setMatrixUniforms(shaderProgramTexture);
	
	gl.drawElements(gl.TRIANGLES, backgroundIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function DrawScene()
{
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	Matrix.perspectiveM(pMatrix, 0, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100);
	Matrix.Identity(mvMatrix);
	
	gl.disable(gl.DEPTH_TEST);
	gl.useProgram(shaderProgramTexture);
	
	mvPushMatrix();
		Matrix.translateM(mvMatrix, 0, 0, 0, -3);
		
		//mat4.scale(mvMatrix, [(gl.viewportWidth * 0.0013), (gl.viewportHeight * 0.0013), 1.0]);
		DrawBackground();
	mvPopMatrix();
	
	/*******/
	
	gl.enable(gl.DEPTH_TEST);
	gl.useProgram(shaderProgramLight);
	
	Matrix.rotateM(mvMatrix, 0, degToRad(-pitch), 1, 0, 0);
	Matrix.rotateM(mvMatrix, 0, degToRad(-yaw), 0, 1, 0);
	
	Matrix.translateM(mvMatrix, 0, -xPos, -yPos, -zPos);
	
	mvPushMatrix();
		Matrix.translateM(mvMatrix, 0, 1.2, 0, -3);
		
		for (var i = 0; i < WebGL.ModelsArray.length; i++)
		{
			if (WebGL.ModelsArray[i] != undefined && WebGL.ModelsArray[i].obj != undefined) //jesli obiekt model został utworzony oraz załadowany
			{
				mvPushMatrix();
					Matrix.translateM(mvMatrix, 0, WebGL.ModelsArray[i].position.x, WebGL.ModelsArray[i].position.y, WebGL.ModelsArray[i].position.z);
					Matrix.rotateM(mvMatrix, 0, degToRad(WebGL.ModelsArray[i].rotation.x), 1, 0, 0);
					Matrix.rotateM(mvMatrix, 0, degToRad(WebGL.ModelsArray[i].rotation.y), 0, 1, 0);
					Matrix.rotateM(mvMatrix, 0, degToRad(WebGL.ModelsArray[i].rotation.z), 0, 0, 1);
					Matrix.scaleM(mvMatrix, 0, WebGL.ModelsArray[i].scale, WebGL.ModelsArray[i].scale, WebGL.ModelsArray[i].scale);
					DrawOBJ(WebGL.ModelsArray[i].obj, WebGL.ModelsArray[i].color);
				mvPopMatrix();
			}
		}
		
	mvPopMatrix();
	
	/*
	Matrix.translateM(mvMatrix, 0, -2, 0.5, -3);
	
	mvPushMatrix();
		Matrix.translateM(mvMatrix, 0, 3, 0.45, 0);
		DrawModel(2);
		
		Matrix.rotateM(mvMatrix, 0, degToRad(90), 0, 1, 0);
		Matrix.translateM(mvMatrix, 0, -0.5, 0, 0.4);
		DrawModel(2);
	mvPopMatrix();
	*/
};  var OBJ = {};

  OBJ.Mesh = function (objectData)
  {
    var verts = [], vertNormals = [], textures = [], unpacked = {};
    unpacked.verts = [];
    unpacked.norms = [];
    unpacked.textures = [];
    unpacked.hashindices = {};
    unpacked.indices = [];
    unpacked.index = 0;
	
    var lines = objectData.split('\n');


    var VERTEX_RE = /^v\s/;
    var NORMAL_RE = /^vn\s/;
    var TEXTURE_RE = /^vt\s/;
    var FACE_RE = /^f\s/;
    var WHITESPACE_RE = /\s+/;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
	  	
      var elements = line.split(WHITESPACE_RE);
      elements.shift();
	  
	  //console.log(elements);

      if (VERTEX_RE.test(line))
	  {
        verts.push.apply(verts, elements);
      }
	  else if (NORMAL_RE.test(line))
	  {
        vertNormals.push.apply(vertNormals, elements);
      }
	  else if (TEXTURE_RE.test(line))
	  {
        textures.push.apply(textures, elements);
      }
	  else if (FACE_RE.test(line))
	  {
        var quad = false;
        for (var j = 0, eleLen = elements.length; j < eleLen; j++)
		{
            if(j === 3 && !quad) {
                j = 2;
                quad = true;
            }
            if(elements[j] in unpacked.hashindices){
                unpacked.indices.push(unpacked.hashindices[elements[j]]);
            }
            else{

                var vertex = elements[ j ].split( '/' );

                // vertex position
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 0]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 1]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 2]);
                // vertex textures
                if (textures.length) {
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
                unpacked.indices.push( unpacked.hashindices[elements[0]]);
            }
        }
      }
    }
    this.vertices = unpacked.verts;
    this.vertexNormals = unpacked.norms;
    this.textures = unpacked.textures;
    this.indices = unpacked.indices;
	this.test = ['t', 'e', 's', 't'];
  }

  var Ajax = function(){
    var _this = this;
    this.xmlhttp = new XMLHttpRequest();

    this.get = function(url, callback){
      _this.xmlhttp.onreadystatechange = function(){
        if(_this.xmlhttp.readyState === 4){
          callback(_this.xmlhttp.responseText, _this.xmlhttp.status);
        }
      };
      _this.xmlhttp.open('GET', url, true);
      _this.xmlhttp.send();
    }
  };

  OBJ.downloadMeshes = function (nameAndURLs, completionCallback, meshes){
    var semaphore = Object.keys(nameAndURLs).length;
    var error = false;
    if(meshes === undefined) meshes = {};
    for(var mesh_name in nameAndURLs){
      if(nameAndURLs.hasOwnProperty(mesh_name)){
        new Ajax().get(nameAndURLs[mesh_name], (function(name) {
          return function (data, status) {
            if (status === 200) {
              meshes[name] = new OBJ.Mesh(data);
            }
            else {
              error = true;
              console.error('An error has occurred and the mesh "' +
                name + '" could not be downloaded.');
            }
            semaphore--;
            if (semaphore === 0) {
              if (error) {
                console.error('An error has occurred and one or meshes has not been ' +
                  'downloaded. The execution of the script has terminated.');
                throw '';
              }
              completionCallback(meshes);
            }
          }
        })(mesh_name));
      }
    }
  };

  var _buildBuffer = function( type, data, itemSize ){
    var buffer = gl.createBuffer();
	var gltype;
	
	if (type == "ARRAY_BUFFER")
	{
		gltype = gl.ARRAY_BUFFER;
	}
	else
	{
		gltype = gl.ELEMENT_ARRAY_BUFFER;
	}
	
    var arrayView = gltype === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
	
    gl.bindBuffer(gltype, buffer);
    gl.bufferData(gltype, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
  }

  OBJ.initMeshBuffers = function( mesh ){
    mesh.normalBuffer = _buildBuffer("ARRAY_BUFFER", mesh.vertexNormals, 3);
    mesh.textureBuffer = _buildBuffer("ARRAY_BUFFER", mesh.textures, 2);
    mesh.vertexBuffer = _buildBuffer("ARRAY_BUFFER", mesh.vertices, 3);
    mesh.indexBuffer = _buildBuffer("ELEMENT_ARRAY_BUFFER", mesh.indices, 1);
  }

  OBJ.deleteMeshBuffers = function( mesh ){
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
  }


;(function (scope, undefined) {
  'use strict';

  var OBJ = {};

  if (typeof module !== 'undefined') {
    module.exports = OBJ;
  } else {
    scope.OBJ = OBJ;
  }

  /**
   * The main Mesh class. The constructor will parse through the OBJ file data
   * and collect the vertex, vertex normal, texture, and face information. This
   * information can then be used later on when creating your VBOs. See
   * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
   *
   * @class Mesh
   * @constructor
   *
   * @param {String} objectData a string representation of an OBJ file with newlines preserved.
   */
  OBJ.Mesh = function (objectData) {
    /*
     The OBJ file format does a sort of compression when saving a model in a
     program like Blender. There are at least 3 sections (4 including textures)
     within the file. Each line in a section begins with the same string:
       * 'v': indicates vertex section
       * 'vn': indicates vertex normal section
       * 'f': indicates the faces section
       * 'vt': indicates vertex texture section (if textures were used on the model)
     Each of the above sections (except for the faces section) is a list/set of
     unique vertices.

     Each line of the faces section contains a list of
     (vertex, [texture], normal) groups
     Some examples:
         // the texture index is optional, both formats are possible for models
         // without a texture applied
         f 1/25 18/46 12/31
         f 1//25 18//46 12//31

         // A 3 vertex face with texture indices
         f 16/92/11 14/101/22 1/69/1

         // A 4 vertex face
         f 16/92/11 40/109/40 38/114/38 14/101/22

     The first two lines are examples of a 3 vertex face without a texture applied.
     The second is an example of a 3 vertex face with a texture applied.
     The third is an example of a 4 vertex face. Note: a face can contain N
     number of vertices.

     Each number that appears in one of the groups is a 1-based index
     corresponding to an item from the other sections (meaning that indexing
     starts at one and *not* zero).

     For example:
         `f 16/92/11` is saying to
           - take the 16th element from the [v] vertex array
           - take the 92nd element from the [vt] texture array
           - take the 11th element from the [vn] normal array
         and together they make a unique vertex.
     Using all 3+ unique Vertices from the face line will produce a polygon.

     Now, you could just go through the OBJ file and create a new vertex for
     each face line and WebGL will draw what appears to be the same model.
     However, vertices will be overlapped and duplicated all over the place.

     Consider a cube in 3D space centered about the origin and each side is
     2 units long. The front face (with the positive Z-axis pointing towards
     you) would have a Top Right vertex (looking orthogonal to its normal)
     mapped at (1,1,1) The right face would have a Top Left vertex (looking
     orthogonal to its normal) at (1,1,1) and the top face would have a Bottom
     Right vertex (looking orthogonal to its normal) at (1,1,1). Each face
     has a vertex at the same coordinates, however, three distinct vertices
     will be drawn at the same spot.

     To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`
     groups), while iterating through the face lines, when a group is encountered
     the whole group string ('16/92/11') is checked to see if it exists in the
     packed.hashindices object, and if it doesn't, the indices it specifies
     are used to look up each attribute in the corresponding attribute arrays
     already created. The values are then copied to the corresponding unpacked
     array (flattened to play nice with WebGL's ELEMENT_ARRAY_BUFFER indexing),
     the group string is added to the hashindices set and the current unpacked
     index is used as this hashindices value so that the group of elements can
     be reused. The unpacked index is incremented. If the group string already
     exists in the hashindices object, its corresponding value is the index of
     that group and is appended to the unpacked indices array.
     */
    var verts = [], vertNormals = [], textures = [], unpacked = {};
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

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var elements = line.split(WHITESPACE_RE);
      elements.shift();

      if (VERTEX_RE.test(line)) {
        // if this is a vertex
        verts.push.apply(verts, elements);
      } else if (NORMAL_RE.test(line)) {
        // if this is a vertex normal
        vertNormals.push.apply(vertNormals, elements);
      } else if (TEXTURE_RE.test(line)) {
        // if this is a texture
        textures.push.apply(textures, elements);
      } else if (FACE_RE.test(line)) {
        // if this is a face
        /*
        split this face into an array of vertex groups
        for example:
           f 16/92/11 14/101/22 1/69/1
        becomes:
          ['16/92/11', '14/101/22', '1/69/1'];
        */
        var quad = false;
        for (var j = 0, eleLen = elements.length; j < eleLen; j++){
            // Triangulating quads
            // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
            // corresponding triangles:
            //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
            //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
            if(j === 3 && !quad) {
                // add v2/t2/vn2 in again before continuing to 3
                j = 2;
                quad = true;
            }
            if(elements[j] in unpacked.hashindices){
                unpacked.indices.push(unpacked.hashindices[elements[j]]);
            }
            else{
                /*
                Each element of the face line array is a vertex which has its
                attributes delimited by a forward slash. This will separate
                each attribute into another array:
                    '19/92/11'
                becomes:
                    vertex = ['19', '92', '11'];
                where
                    vertex[0] is the vertex index
                    vertex[1] is the texture index
                    vertex[2] is the normal index
                 Think of faces having Vertices which are comprised of the
                 attributes location (v), texture (vt), and normal (vn).
                 */
                var vertex = elements[ j ].split( '/' );
                /*
                 The verts, textures, and vertNormals arrays each contain a
                 flattend array of coordinates.

                 Because it gets confusing by referring to vertex and then
                 vertex (both are different in my descriptions) I will explain
                 what's going on using the vertexNormals array:

                 vertex[2] will contain the one-based index of the vertexNormals
                 section (vn). One is subtracted from this index number to play
                 nice with javascript's zero-based array indexing.

                 Because vertexNormal is a flattened array of x, y, z values,
                 simple pointer arithmetic is used to skip to the start of the
                 vertexNormal, then the offset is added to get the correct
                 component: +0 is x, +1 is y, +2 is z.

                 This same process is repeated for verts and textures.
                 */
                // vertex position
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 0]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 1]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 2]);
                // vertex textures
                if (textures.length) {
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
            if(j === 3 && quad) {
                // add v0/t0/vn0 onto the second triangle
                unpacked.indices.push( unpacked.hashindices[elements[0]]);
            }
        }
      }
    }
    this.vertices = unpacked.verts;
    this.vertexNormals = unpacked.norms;
    this.textures = unpacked.textures;
    this.indices = unpacked.indices;
  }

  var Ajax = function(){
    // this is just a helper class to ease ajax calls
    var _this = this;
    this.xmlhttp = new XMLHttpRequest();

    this.get = function(url, callback){
      _this.xmlhttp.onreadystatechange = function(){
        if(_this.xmlhttp.readyState === 4){
          callback(_this.xmlhttp.responseText, _this.xmlhttp.status);
        }
      };
      _this.xmlhttp.open('GET', url, true);
      _this.xmlhttp.send();
    }
  };

  /**
   * Takes in an object of `mesh_name`, `'/url/to/OBJ/file'` pairs and a callback
   * function. Each OBJ file will be ajaxed in and automatically converted to
   * an OBJ.Mesh. When all files have successfully downloaded the callback
   * function provided will be called and passed in an object containing
   * the newly created meshes.
   *
   * **Note:** In order to use this function as a way to download meshes, a
   * webserver of some sort must be used.
   *
   * @param {Object} nameAndURLs an object where the key is the name of the mesh and the value is the url to that mesh's OBJ file
   *
   * @param {Function} completionCallback should contain a function that will take one parameter: an object array where the keys will be the unique object name and the value will be a Mesh object
   *
   * @param {Object} meshes In case other meshes are loaded separately or if a previously declared variable is desired to be used, pass in a (possibly empty) json object of the pattern: { '<mesh_name>': OBJ.Mesh }
   *
   */
  OBJ.downloadMeshes = function (nameAndURLs, completionCallback, meshes){
    // the total number of meshes. this is used to implement "blocking"
    var semaphore = Object.keys(nameAndURLs).length;
    // if error is true, an alert will given
    var error = false;
    // this is used to check if all meshes have been downloaded
    // if meshes is supplied, then it will be populated, otherwise
    // a new object is created. this will be passed into the completionCallback
    if(meshes === undefined) meshes = {};
    // loop over the mesh_name,url key,value pairs
    for(var mesh_name in nameAndURLs){
      if(nameAndURLs.hasOwnProperty(mesh_name)){
        new Ajax().get(nameAndURLs[mesh_name], (function(name) {
          return function (data, status) {
            if (status === 200) {
              meshes[name] = new OBJ.Mesh(data);
            }
            else {
              error = true;
              console.error('An error has occurred and the mesh "' +
                name + '" could not be downloaded.');
            }
            // the request has finished, decrement the counter
            semaphore--;
            if (semaphore === 0) {
              if (error) {
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

  var _buildBuffer = function( gl, type, data, itemSize ){
    var buffer = gl.createBuffer();
    var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
  }

  /**
   * Takes in the WebGL context and a Mesh, then creates and appends the buffers
   * to the mesh object as attributes.
   *
   * @param {WebGLRenderingContext} gl the `canvas.getContext('webgl')` context instance
   * @param {Mesh} mesh a single `OBJ.Mesh` instance
   *
   * The newly created mesh attributes are:
   *
   * Attrbute | Description
   * :--- | ---
   * **normalBuffer**       |contains the model&#39;s Vertex Normals
   * normalBuffer.itemSize  |set to 3 items
   * normalBuffer.numItems  |the total number of vertex normals
   * |
   * **textureBuffer**      |contains the model&#39;s Texture Coordinates
   * textureBuffer.itemSize |set to 2 items
   * textureBuffer.numItems |the number of texture coordinates
   * |
   * **vertexBuffer**       |contains the model&#39;s Vertex Position Coordinates (does not include w)
   * vertexBuffer.itemSize  |set to 3 items
   * vertexBuffer.numItems  |the total number of vertices
   * |
   * **indexBuffer**        |contains the indices of the faces
   * indexBuffer.itemSize   |is set to 1
   * indexBuffer.numItems   |the total number of indices
   *
   * A simple example (a lot of steps are missing, so don't copy and paste):
   *
   *     var gl   = canvas.getContext('webgl'),
   *         mesh = OBJ.Mesh(obj_file_data);
   *     // compile the shaders and create a shader program
   *     var shaderProgram = gl.createProgram();
   *     // compilation stuff here
   *     ...
   *     // make sure you have vertex, vertex normal, and texture coordinate
   *     // attributes located in your shaders and attach them to the shader program
   *     shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
   *     gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
   *
   *     shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
   *     gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
   *
   *     shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
   *     gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *
   *     // create and initialize the vertex, vertex normal, and texture coordinate buffers
   *     // and save on to the mesh object
   *     OBJ.initMeshBuffers(gl, mesh);
   *
   *     // now to render the mesh
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *     // it's possible that the mesh doesn't contain
   *     // any texture coordinates (e.g. suzanne.obj in the development branch).
   *     // in this case, the texture vertexAttribArray will need to be disabled
   *     // before the call to drawElements
   *     if(!mesh.textures.length){
   *       gl.disableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *     }
   *     else{
   *       // if the texture vertexAttribArray has been previously
   *       // disabled, then it needs to be re-enabled
   *       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *       gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
   *       gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *     }
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *
   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
   *     gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
   */
  OBJ.initMeshBuffers = function( gl, mesh ){
    mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
    mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, 2);
    mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
    mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
  }

  OBJ.deleteMeshBuffers = function( gl, mesh ){
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
  }
})(this);

;/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */

WebGLUtils = function() {

/**
 * Creates the HTLM for a failure message
 * @param {string} canvasContainerId id of container of th
 *        canvas.
 * @return {string} The html.
 */
var makeFailHTML = function(msg) {
  return '' +
    '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
    '<td align="center">' +
    '<div style="display: table-cell; vertical-align: middle;">' +
    '<div style="">' + msg + '</div>' +
    '</div>' +
    '</td></tr></table>';
};

/**
 * Mesasge for getting a webgl browser
 * @type {string}
 */
var GET_A_WEBGL_BROWSER = '' +
  'This page requires a browser that supports WebGL.<br/>' +
  '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';

/**
 * Mesasge for need better hardware
 * @type {string}
 */
var OTHER_PROBLEM = '' +
  "It doesn't appear your computer can support WebGL.<br/>" +
  '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

/**
 * Creates a webgl context. If creation fails it will
 * change the contents of the container of the <canvas>
 * tag to an error message with the correct links for WebGL.
 * @param {Element} canvas. The canvas element to create a
 *     context from.
 * @param {WebGLContextCreationAttirbutes} opt_attribs Any
 *     creation attributes you want to pass in.
 * @param {function:(msg)} opt_onError An function to call
 *     if there is an error during creation.
 * @return {WebGLRenderingContext} The created context.
 */
var setupWebGL = function(canvas, opt_attribs, opt_onError) {
  function handleCreationError(msg) {
    var container = canvas.parentNode;
    if (container) {
      var str = window.WebGLRenderingContext ?
           OTHER_PROBLEM :
           GET_A_WEBGL_BROWSER;
      if (msg) {
        str += "<br/><br/>Status: " + msg;
      }
      container.innerHTML = makeFailHTML(str);
    }
  };

  opt_onError = opt_onError || handleCreationError;

  if (canvas.addEventListener) {
    canvas.addEventListener("webglcontextcreationerror", function(event) {
          opt_onError(event.statusMessage);
        }, false);
  }
  var context = create3DContext(canvas, opt_attribs);
  if (!context) {
    if (!window.WebGLRenderingContext) {
      opt_onError("");
    }
  }
  return context;
};

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
var create3DContext = function(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch(e) {}
    if (context) {
      break;
    }
  }
  return context;
}

return {
  create3DContext: create3DContext,
  setupWebGL: setupWebGL
};
}();

/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000/60);
         };
})();

