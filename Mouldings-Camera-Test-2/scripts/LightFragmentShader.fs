precision mediump float;

varying vec3 vLightWeighting;

void main(void)
{
	gl_FragColor = vec4(vLightWeighting, 1.0);
	//gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);
}