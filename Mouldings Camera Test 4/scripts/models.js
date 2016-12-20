var worldVertexPositionBuffer = null;
var worldVertexTextureCoordBuffer = null;

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
	
		gl.uniform3f
		(
			shaderProgramLight.ambientColorUniform,
			0.2	/*parseFloat(document.getElementById("ambientR").value)*/,
			0.2	/*parseFloat(document.getElementById("ambientG").value)*/,
			0.2	/*parseFloat(document.getElementById("ambientB").value)*/
		);
	
		var lightingDirection =
		[
			-0.25	/*parseFloat(document.getElementById("lightDirectionX").value)*/,
			-0.25	/*parseFloat(document.getElementById("lightDirectionY").value)*/,
			-1.0	/*parseFloat(document.getElementById("lightDirectionZ").value)*/
		];
		
		var adjustedLD = vec3.create();
		vec3.normalize(lightingDirection, adjustedLD);
		vec3.scale(adjustedLD, -1);
		gl.uniform3fv(shaderProgramLight.lightingDirectionUniform, adjustedLD);
		
		gl.uniform3f
		(
			shaderProgramLight.directionalColorUniform,
			0.8	/*parseFloat(document.getElementById("directionalR").value)*/,
			0.8	/*parseFloat(document.getElementById("directionalG").value)*/,
			0.8	/*parseFloat(document.getElementById("directionalB").value)*/
		);
	
	gl.uniform4fv(shaderProgramLight.vertexColorUniform, ModelColor);
	/*
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
	gl.vertexAttribPointer(shaderProgramLight.vertexColorAttribute, cubeVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	*/
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms(shaderProgramLight);
	
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function DrawBackground()
{
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundPositionBuffer);
	gl.vertexAttribPointer(shaderProgramTexture.vertexPositionAttribute, backgroundPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, backgroundTextureCoordsBuffer);
	gl.vertexAttribPointer(shaderProgramTexture.textureCoordAttribute, backgroundTextureCoordsBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, crateTexture);
	gl.uniform1i(shaderProgramTexture.samplerUniform, 0);
	
	setMatrixUniforms(shaderProgramTexture);
	
	gl.drawElements(gl.TRIANGLES, backgroundIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
	//gl.drawArrays(gl.TRIANGLE_STRIP, 0, backgroundPositionBuffer.numItems);
}

function DrawScene()
{
	
	
	//shaderProgramTexture = InitShaders.InitShaders("texture");
	
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.ortho(0, gl.viewportWidth, 0, gl.viewportHeight, 10, 1000, pMatrix);
	
	/*
	gl.useProgram(shaderProgramTexture);
	mvPushMatrix();
		mat4.translate(mvMatrix, [-100, 1, 1]);
		mat4.scale(mvMatrix, [1000,1000,10]);
		mat4.rotate(mvMatrix, degToRad(180), [0, 1, 0]);
		DrawBackground();
	mvPopMatrix();
	*/
	
	mat4.identity(mvMatrix);
	
	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

	mat4.identity(mvMatrix);
	
	gl.useProgram(shaderProgramLight);
	
	mat4.rotate(mvMatrix, degToRad(-pitch), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(-yaw), [0, 1, 0]);
	mat4.translate(mvMatrix, [-xPos, -yPos, -zPos]);


	
	
	
	mat4.translate(mvMatrix, [-2, 0.5, -3]);
	//DrawModel(cubeVertexPositionBuffer, cubeVertexNormalBuffer, cubeVertexIndexBuffer);
	
	/*
	mvPushMatrix();
	mat4.translate(mvMatrix, [3, 0, 0]);
	DrawModel(3);
	
	
	mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
	mat4.translate(mvMatrix, [-0.5, 0, 0.5]);
	DrawModel(3);
	
	mat4.rotate(mvMatrix, degToRad(90), [90, 0, 0]);
	mat4.translate(mvMatrix, [0, -0.5, -0.5]);
	DrawModel(3);
	mvPopMatrix();
	*/
	
	mvPushMatrix();
	mat4.translate(mvMatrix, [3, 0.45, 0]);
	DrawModel(2);
	
	mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
	mat4.translate(mvMatrix, [-0.5, 0, 0.4]);
	DrawModel(2);
	
	mvPopMatrix();
	
	//DrawModel(3);
	gl.useProgram(shaderProgramTexture);
	
	//mvRotate(-odchylenie_x, [1, 0, 0]);
	//mvRotate(-odchylenie_y, [0, 1, 0]);
	
	
	mat4.translate(mvMatrix, [5, -0.5, -2]);
	mat4.scale(mvMatrix, [2,2,2]);
	mat4.translate(mvMatrix, [xPos, yPos, zPos]);
	mat4.rotate(mvMatrix, degToRad(yaw), [0, 1, 0]);
	mat4.rotate(mvMatrix, degToRad(pitch), [1, 0, 0]);
	
	DrawBackground();

	//console.log("DrawScene()");
}