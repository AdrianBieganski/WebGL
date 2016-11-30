define(function()
{
	function AngleCalc (angle)
	{
		var modulo = angle % 360;
		
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
	
	return {AngleCalc: AngleCalc}
});