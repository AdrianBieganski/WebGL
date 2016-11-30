define(["InitModels", "AngleCalc", "WebGLutils"], function(InitModels, AngleCalc, WebGLutils)
{
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
				xPos -= Math.sin(InitModels.degToRad(yaw)) * speed * elapsed;
				zPos -= Math.cos(InitModels.degToRad(yaw)) * speed * elapsed;
				
				joggingAngle += elapsed * 0.9; // 0.6 "fiddle factor" - makes it feel more realistic :-)
				yPos = Math.sin(InitModels.degToRad(joggingAngle)) / 40 + 0.4
			}
			
			yaw += yawRate * elapsed;
			pitch += pitchRate * elapsed;
			
			var wallAngle = yaw + 90;
			wallAngle = AngleCalc.AngleCalc(wallAngle);
			var ceilingAngle = pitch - 90;
			ceilingAngle = AngleCalc.AngleCalc(ceilingAngle);
			
			document.getElementById("wall").value = wallAngle;
			document.getElementById("ceiling").value = ceilingAngle;
		}
		lastTime = timeNow;
	}
	
	function Tick()
	{
		requestAnimFrame(Tick);
		HandleKeys();
		//DrawScene();
		InitModels.DrawScene(pitch, yaw, xPos, yPos, zPos);
		Animate();
	}
	
	return{
		Tick: Tick,
		handleKeyDown: handleKeyDown,
		handleKeyUp: handleKeyUp
	}
});