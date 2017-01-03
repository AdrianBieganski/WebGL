var gl;

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
		if (request.readyState == 4)
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

function handleLoadedTexture2(GLTexture) //przekazac canvasa zamiast GLTexture
{
    var texture = gl.createTexture();
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, texture);
	
	var canvas = document.createElement("canvas");
	canvas.width = 2048;
	canvas.height = 2048;
	
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	ctx.fill();
	
	if (GLTexture.image.width >= GLTexture.image.height)
	{
		var height = canvas.height * GLTexture.image.height / GLTexture.image.width;
		ctx.drawImage(crateTexture.image, 0, ((canvas.width - height) / 2), canvas.width, height);
	}
	else
	{
		var width = canvas.width * GLTexture.image.width / GLTexture.image.height;
		ctx.drawImage(crateTexture.image, ((canvas.height - width) / 2), 0, width, canvas.height);
	}
	
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    //gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D, null);
	
	crateTexture = texture;
}

function handleLoadedTexture(texture)
{
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.bindTexture(gl.TEXTURE_2D, null);
}

var crateTexture;

function InitTexture()
{
	crateTexture = gl.createTexture();
}

function TextureImage(image)
{
	crateTexture.image = new Image();
	crateTexture.image.src = image;
	crateTexture.image.onload = function ()
	{
		handleLoadedTexture2(crateTexture);
	}
}

var ImagesArray = [];

function SetTextureImage(id, image)
{
	ImagesArray[id] = image;
}

function ShowTextureImage(id)
{
	if (ImagesArray[id] != undefined)
	{
		crateTexture.image = ImagesArray[id];
		crateTexture.image.src = ImagesArray[id].src;
		crateTexture.image.width = ImagesArray[id].width;
		crateTexture.image.height = ImagesArray[id].height;
		crateTexture.image.onload = function ()
		{
			handleLoadedTexture2(crateTexture);
		}
		
		console.log("Background changed.");
	}
	else
	{
		console.log("Image does not init.");	
	}
}

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

function setMatrixUniforms(shaderProgram)
{
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
	
	var normalMatrix = mat3.create();
	mat4.toInverseMat3(mvMatrix, normalMatrix);
	mat3.transpose(normalMatrix);
	gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}

function degToRad(degrees)
{
	return degrees * Math.PI / 180;
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
	MainWebGL()
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

WebGL.ModelColor = function (color)
{
	ModelColor = color;
	ModelColor = [Convert(color[0]), Convert(color[1]), Convert(color[2]), Convert(color[3])];
	
	function Convert (color)
	{
		return color / 255;
	}
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
	//console.log(ImagesArray);
	
	for(i = 0; i < ImagesArray.length; i++)
	{
		console.log(ImagesArray[i]);
	}
}