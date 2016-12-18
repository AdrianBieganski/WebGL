var cubeVertexPositionBuffer;
var cubeVertexPositionBuffer2;
var cubeVertexPositionBuffer3;
var cubeVertexNormalBuffer;
var cubeVertexIndexBuffer;

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
}