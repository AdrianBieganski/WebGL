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
	
	
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	setMatrixUniforms(shaderProgramLight);
	
	gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function DrawScene()
{
	
	//shaderProgramTexture = InitShaders.InitShaders("texture");
	
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

	mat4.identity(mvMatrix);

	mat4.rotate(mvMatrix, degToRad(-pitch), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(-yaw), [0, 1, 0]);
	mat4.translate(mvMatrix, [-xPos, -yPos, -zPos]);


	
	
	
	mat4.translate(mvMatrix, [-2, 0.5, -3]);
	//DrawModel(cubeVertexPositionBuffer, cubeVertexNormalBuffer, cubeVertexIndexBuffer);

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
	
	mvPushMatrix();
	mat4.translate(mvMatrix, [3, 0.45, 0]);
	DrawModel(2);
	
	mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
	mat4.translate(mvMatrix, [-0.5, 0, 0.4]);
	DrawModel(2);
	
	mvPopMatrix();

}