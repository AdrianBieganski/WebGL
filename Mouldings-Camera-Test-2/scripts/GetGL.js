define(["GetCanvas"], function(canvas)
{
   "use strict";

	var gl;
	
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
	
	console.log('GL created');
	return gl;
});