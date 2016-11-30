define(["text!TextureVertexShader.vs", "text!TextureFragmentShader.fs", "text!LightVertexShader.vs", "text!LightFragmentShader.fs", "GetGL"], function(TextureVertexShader, TextureFragmentShader, LightVertexShader, LightFragmentShader, gl)
{
	"use strict";
	console.log("loading shaders");
	
	function GetShader(type, text)
	{
		var shader = gl.createShader(type);

		gl.shaderSource(shader, text);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
		{
			throw new Error(gl.getShaderInfoLog(shader));
		}
		return shader;
	}
	
	function InitShaders(type)
	{
		var shaderProgram = gl.createProgram();
		
		if(type == "texture")
		{
			gl.attachShader(shaderProgram, GetShader(gl.VERTEX_SHADER, TextureVertexShader));
			gl.attachShader(shaderProgram, GetShader(gl.FRAGMENT_SHADER, TextureFragmentShader));
		}
		else if(type == "light")
		{
			gl.attachShader(shaderProgram, GetShader(gl.VERTEX_SHADER, LightVertexShader));
			gl.attachShader(shaderProgram, GetShader(gl.FRAGMENT_SHADER, LightFragmentShader));
		}
		
		gl.linkProgram(shaderProgram);
		
		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
		{
			alert("Could not initialise shaders");
		}
		
		gl.useProgram(shaderProgram);
		
		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
		
		if(type == "texture")
		{
			shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
			gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
			
			shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
			shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
			shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
		}
		else if(type == "light")
		{
			shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
			gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
			
			shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
			shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
			shaderProgram.nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNMatrix");
			//shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
			
			shaderProgram.useLightingUniform = gl.getUniformLocation(shaderProgram, "uUseLighting");
			shaderProgram.ambientColorUniform = gl.getUniformLocation(shaderProgram, "uAmbientColor");
			shaderProgram.lightingDirectionUniform = gl.getUniformLocation(shaderProgram, "uLightingDirection");
			shaderProgram.directionalColorUniform = gl.getUniformLocation(shaderProgram, "uDirectionalColor");
		}
		
		return shaderProgram;
	}
	
	return {
		GetShader: GetShader,
		InitShaders: InitShaders
	}
});
