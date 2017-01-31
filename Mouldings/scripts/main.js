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
		if (request.readyState == 4 && request.status == 200)
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
"uniform vec3 originPosition;" +
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
"gl_Position = uPMatrix * uMVMatrix * vec4((aVertexPosition + originPosition), 1.0);" +
"vec3 transformedNormal = uNMatrix * aVertexNormal;" +
"float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);" +
"vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;" +
"vColor = uVertexColor;" +
"}";



var WallsFragmentShader =
"precision mediump float;" +
"varying vec3 vLightWeighting;" +
"varying vec4 vColor;" +
"void main(void)" +
"{" +
"gl_FragColor = vec4(vLightWeighting, 1.0) * vColor;" +
"}";

var WallsVertexShader = 
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
"uniform mat4 uPMatrix;" +
"varying vec2 vTextureCoord;" +
"void main(void)" +
"{" +
"gl_Position = uPMatrix * vec4(aVertexPosition, 1.0);" +
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
var shaderProgramWalls;
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
	
	shaderProgramLight.originPositionUniform = gl.getUniformLocation(shaderProgramLight, "originPosition");
	
	shaderProgramLight.vertexNormalAttribute = gl.getAttribLocation(shaderProgramLight, "aVertexNormal");
	gl.enableVertexAttribArray(shaderProgramLight.vertexNormalAttribute);
	
	shaderProgramLight.vertexColorUniform = gl.getUniformLocation(shaderProgramLight, "uVertexColor");
	
	shaderProgramLight.pMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uPMatrix");
	shaderProgramLight.mvMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uMVMatrix");
	//shaderProgramLight.wMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uWMatrix");
	shaderProgramLight.nMatrixUniform = gl.getUniformLocation(shaderProgramLight, "uNMatrix");
	
	shaderProgramLight.useLightingUniform = gl.getUniformLocation(shaderProgramLight, "uUseLighting");
	shaderProgramLight.ambientColorUniform = gl.getUniformLocation(shaderProgramLight, "uAmbientColor");
	shaderProgramLight.lightingDirectionUniform = gl.getUniformLocation(shaderProgramLight, "uLightingDirection");
	shaderProgramLight.directionalColorUniform = gl.getUniformLocation(shaderProgramLight, "uDirectionalColor");
	
	/*****************************************************************************************************************/
	
	shaderProgramWalls = gl.createProgram();
		
	gl.attachShader(shaderProgramWalls, GetShader(gl.VERTEX_SHADER, WallsVertexShader));
	gl.attachShader(shaderProgramWalls, GetShader(gl.FRAGMENT_SHADER, WallsFragmentShader));
	
	gl.linkProgram(shaderProgramWalls);
	
	if (!gl.getProgramParameter(shaderProgramWalls, gl.LINK_STATUS))
	{
		alert("Could not initialise shaders");
	}
	
	shaderProgramWalls.vertexPositionAttribute = gl.getAttribLocation(shaderProgramWalls, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgramWalls.vertexPositionAttribute);
	
	shaderProgramWalls.vertexNormalAttribute = gl.getAttribLocation(shaderProgramWalls, "aVertexNormal");
	gl.enableVertexAttribArray(shaderProgramWalls.vertexNormalAttribute);
	
	shaderProgramWalls.vertexColorUniform = gl.getUniformLocation(shaderProgramWalls, "uVertexColor");
	
	shaderProgramWalls.pMatrixUniform = gl.getUniformLocation(shaderProgramWalls, "uPMatrix");
	shaderProgramWalls.mvMatrixUniform = gl.getUniformLocation(shaderProgramWalls, "uMVMatrix");
	//shaderProgramWalls.wMatrixUniform = gl.getUniformLocation(shaderProgramWalls, "uWMatrix");
	shaderProgramWalls.nMatrixUniform = gl.getUniformLocation(shaderProgramWalls, "uNMatrix");
	
	shaderProgramWalls.useLightingUniform = gl.getUniformLocation(shaderProgramWalls, "uUseLighting");
	shaderProgramWalls.ambientColorUniform = gl.getUniformLocation(shaderProgramWalls, "uAmbientColor");
	shaderProgramWalls.lightingDirectionUniform = gl.getUniformLocation(shaderProgramWalls, "uLightingDirection");
	shaderProgramWalls.directionalColorUniform = gl.getUniformLocation(shaderProgramWalls, "uDirectionalColor");
	
	/*****************************************************************************************************************/
	
	shaderProgramTexture = gl.createProgram();
		
	gl.attachShader(shaderProgramTexture, GetShader(gl.VERTEX_SHADER, TextureVertexShader));
	gl.attachShader(shaderProgramTexture, GetShader(gl.FRAGMENT_SHADER, TextureFragmentShader));
	
	gl.linkProgram(shaderProgramTexture);
	
	shaderProgramTexture.vertexPositionAttribute = gl.getAttribLocation(shaderProgramTexture, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgramTexture.vertexPositionAttribute);
	
	shaderProgramTexture.textureCoordAttribute = gl.getAttribLocation(shaderProgramTexture, "aTextureCoord");
	gl.enableVertexAttribArray(shaderProgramTexture.textureCoordAttribute);
	
	shaderProgramTexture.pMatrixUniform = gl.getUniformLocation(shaderProgramTexture, "uPMatrix");
	shaderProgramTexture.wMatrixUniform = gl.getUniformLocation(shaderProgramTexture, "uWMatrix");
	shaderProgramTexture.samplerUniform = gl.getUniformLocation(shaderProgramTexture, "uSampler");
}

var BackgroundTexture;

function InitTexture()
{
	BackgroundTexture = gl.createTexture();
}

function SetTextureImage(id, image)
{
	var canvas = document.createElement("canvas");
	canvas.width = 2048;
	canvas.height = 2048;
	
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#000";
	ctx.fill();
	
	if (image.width >= image.height)
	{
		var height = canvas.height * image.height / image.width;
		ctx.drawImage(image, 0, ((canvas.width - height) / 2), canvas.width, height);
	}
	else
	{
		var width = canvas.width * image.width / image.height;
		ctx.drawImage(image, ((canvas.height - width) / 2), 0, width, canvas.height);
	}
	
	if (WebGL.ImagesArray[id] == undefined)
	{
		var texture = gl.createTexture();
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
		//gl.generateMipmap(gl.TEXTURE_2D);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
		WebGL.ImagesArray[id] = texture;
		console.log("New id has created.");
	}
	else
	{
		gl.bindTexture(gl.TEXTURE_2D, WebGL.ImagesArray[id]);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		console.log("Id has changed.");
	}
}

function ShowTextureImage(id)
{
	if (WebGL.ImagesArray[id] != null)
	{
		BackgroundTexture = WebGL.ImagesArray[id];
		console.log("Background changed.");
	}
	else
	{
		console.log("Image does not init.");	
	}
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
	Animate(); //walking
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

WebGL.ImagesArray = [];
WebGL.ModelsArray = [];

var Model = function (url)
{
	this.url = url;
	this.obj;
	this.position = function(){this.position.x = 0; this.position.y = 0; this.position.z = 0;};
	this.position();
	this.rotation = function(){this.rotation.x = 0; this.rotation.y = 0; this.rotation.z = 0;};;
	this.rotation();
	this.scale = 1.0;
	this.color = [0.5, 0.5, 0.5, 1];
	this.boundingBox;
}

var Camera = {
	eye: [0, 0, -3],
	target: [0, 0, 0],
	up: [0, 1, 0],
}


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
	MainWebGL();
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

WebGL.ModelColor = function (color) // do usunięcia
{
	ModelColor = color;
	ModelColor = [this._ConvertColor(color[0]), this._ConvertColor(color[1]), this._ConvertColor(color[2]), this._ConvertColor(color[3])];
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
	//console.log(WebGL.ImagesArray);
	
	for(i = 0; i < this.ImagesArray.length; i++)
	{
		console.log(this.ImagesArray[i]);
	}
}

WebGL.ClearImages = function ()
{
	console.log("ClearImages");
	
	for(i = 0; i < this.ImagesArray.length; i++)
	{
		delete this.ImagesArray[i];
	}
	
	this.ImagesArray = [];
	this.ShowImage(0);
}

/******************************************************************************/

WebGL._ModelInit = function(ModelData, id)
{
	WebGL.ModelsArray[id].obj = new OBJ.Mesh(ModelData); //zapisywanie załadowanych modeli do tablicy z właściwościami obiektów
	OBJ.initMeshBuffers(gl, this.ModelsArray[id].obj);
}

WebGL.SetModel = function (id, url, callback)
{
	if (this.ModelsArray[id] == undefined)
	{
		this.ModelsArray[id] = new Model(url);
	
		var XMLHttpRequestObject = new XMLHttpRequest();
		//XMLHttpRequestObject.addEventListener("progress", updateProgress);
		XMLHttpRequestObject.addEventListener("load", transferComplete);
		XMLHttpRequestObject.addEventListener("error", transferFailed);
		XMLHttpRequestObject.addEventListener("abort", transferCanceled);
		
		XMLHttpRequestObject.open("GET", url, true);
		XMLHttpRequestObject.send(null);
		
		function transferComplete(evt)
		{
			//console.log("The transfer is complete.");
			WebGL._ModelInit(XMLHttpRequestObject.responseText, id);
			
			if(typeof callback !== 'function')
			{
				callback = false;
			}
			
			if(callback)
			{
				callback();
			}
		}
		
		function transferFailed(evt)
		{
			console.log("An error occurred while transferring the file.");
		}
		
		function transferCanceled(evt)
		{
			console.log("The transfer has been canceled by the user.");
		}
	}
}

WebGL._CheckModelID = function (id)
{
	if (this.ModelsArray[id] != undefined)
		return true;
	else
		return false;
}

WebGL.SetModelPosition = function (id, position)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].position.x = position[0];
		this.ModelsArray[id].position.y = position[1];
		this.ModelsArray[id].position.z = position[2];
	}	
}

WebGL.GetBB = function (id)
{
	if (this.ModelsArray[id] != undefined)
	{
		//this.ModelsArray[id].obj.boundingBox;
		console.log(this.ModelsArray[id].obj.boundingBox);
	}	
}

WebGL.SetModelRotation = function (id, rotation)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].rotation.x = rotation[0];
		this.ModelsArray[id].rotation.y = rotation[1];
		this.ModelsArray[id].rotation.z = rotation[2];
	}	
}

WebGL.SetModelScale = function (id, scale)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].scale = scale;
	}	
}

WebGL._ConvertColor = function (color)
{
	return color / 255;
}

WebGL.SetModelColor = function (id, color)
{
	if (this.ModelsArray[id] != undefined)
	{
		this.ModelsArray[id].color = [this._ConvertColor(color[0]), this._ConvertColor(color[1]), this._ConvertColor(color[2]), this._ConvertColor(color[3])];
	}	
}

WebGL._ReadModel = function (ObjectData, id)
{
	console.log(id);
	
	this.ModelsArray[id] = new OBJ.Mesh(ObjectData);	
	OBJ.initMeshBuffers(gl, this.ModelsArray[id]);
}

WebGL.CheckModels = function ()
{
	console.log(this.ModelsArray);
	
	/*
	for(i = 0; i < this.ModelsArray.length; i++)
	{
		console.log(this.ModelsArray[i]);
	}
	*/
}

WebGL.RemoveModel = function (id)
{
	if (this.ModelsArray[id] != undefined)
		delete this.ModelsArray[id];
}

 //dodać zmienną visible, która określa czy obiekt jest widoczny czy nie, ale jest załadowany + metody show/hide

WebGL.ClearModels = function ()
{
	console.log("ClearModels");
	
	for(i = 0; i < this.ModelsArray.length; i++)
	{
		delete this.ModelsArray[i];
	}
	
	this.ModelsArray = [];
}

WebGL.Camera = function(eye, target, up)
{
	Camera.eye = eye;
	Camera.target = target;
	Camera.up = up;
}