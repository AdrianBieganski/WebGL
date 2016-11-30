require.config({
	paths: {
        glMatrix: 'glMatrix-0.9.5.min',
		WebGLutils: 'webgl-utils',
    }
});

require(["GetGL", "InitShaders", "InitTextures", "InitModels", "Animate"], function(gl, InitShaders, InitTextures, InitModels, Animate)
{
	"use strict";
	
	function WebGL()
	{
		InitModels.loadWorld();
		
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);
		
		document.onkeydown = Animate.handleKeyDown;
		document.onkeyup = Animate.handleKeyUp;
		
		Animate.Tick();
	}
	
	WebGL();
});

