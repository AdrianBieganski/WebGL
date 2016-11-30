define(["GetGL"], function(gl)
{
	function handleLoadedTexture(texture)
	{
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		
		gl.bindTexture(gl.TEXTURE_2D, null);
	}
	
	function Texture(image)
	{
		var crateTexture = gl.createTexture();
		crateTexture.image = new Image();
		crateTexture.image.onload = function ()
		{
			handleLoadedTexture(crateTexture)
		}
		
		crateTexture.image.src = image;
		
		return crateTexture;
	}
	
	return{
		Texture: Texture
	}
});