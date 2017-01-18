var worldVertexPositionBuffer = null;
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
		gl.uniform3f(shaderProgramLight.directionalColorUniform, 0.8, 0.8, 0.8);
		
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
		Matrix.scaleM(mvMatrix, 0, 0.4, 0.4, 0.4); //(m, mOffset, x, y, z, sm, smOffset)
		
		for (var i = 0; i < WebGL.ModelsArray.length; i++)
		{
			if (WebGL.ModelsArray[i].obj != undefined)
			{
				mvPushMatrix();
					Matrix.translateM(mvMatrix, 0, WebGL.ModelsArray[i].position.x, WebGL.ModelsArray[i].position.y, WebGL.ModelsArray[i].position.z);
					DrawOBJ(WebGL.ModelsArray[i].obj, WebGL.ModelsArray[i].color);
				mvPopMatrix();
			}
		}
		
	mvPopMatrix();
	
	Matrix.translateM(mvMatrix, 0, -2, 0.5, -3);
	
	mvPushMatrix();
		Matrix.translateM(mvMatrix, 0, 3, 0.45, 0);
		DrawModel(2);
		
		Matrix.rotateM(mvMatrix, 0, degToRad(90), 0, 1, 0);
		Matrix.translateM(mvMatrix, 0, -0.5, 0, 0.4);
		DrawModel(2);
	mvPopMatrix();
}