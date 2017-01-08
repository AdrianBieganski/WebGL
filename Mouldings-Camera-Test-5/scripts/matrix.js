

/**
 * Matrix math utilities. These methods operate on OpenGL ES format
 * matrices and vectors stored in float arrays.
 * <p>
 * Matrices are 4 x 4 column-vector matrices stored in column-major
 * order:
 * <pre>
 *  m[offset +  0] m[offset +  4] m[offset +  8] m[offset + 12]
 *  m[offset +  1] m[offset +  5] m[offset +  9] m[offset + 13]
 *  m[offset +  2] m[offset +  6] m[offset + 10] m[offset + 14]
 *  m[offset +  3] m[offset +  7] m[offset + 11] m[offset + 15]</pre>
 *
 * Vectors are 4 x 1 column vectors stored in order:
 * <pre>
 * v[offset + 0]
 * v[offset + 1]
 * v[offset + 2]
 * v[offset + 3]</pre>
 */
var Matrix = {};
var Vector3 = {};

/** Temporary memory for operations that need temporary matrix data. */
Matrix.sTemp = new Float32Array(32);

/**
 * Multiplies two 4x4 matrices together and stores the result in a third 4x4
 * matrix. In matrix notation: result = lhs x rhs. Due to the way
 * matrix multiplication works, the result matrix will have the same
 * effect as first multiplying by the rhs matrix, then multiplying by
 * the lhs matrix. This is the opposite of what you might expect.
 * <p>
 * The same float array may be passed for result, lhs, and/or rhs. However,
 * the result element values are undefined if the result elements overlap
 * either the lhs or rhs elements.
 *
 * @param result The float array that holds the result.
 * @param resultOffset The offset into the result array where the result is
 *        stored.
 * @param lhs The float array that holds the left-hand-side matrix.
 * @param lhsOffset The offset into the lhs array where the lhs is stored
 * @param rhs The float array that holds the right-hand-side matrix.
 * @param rhsOffset The offset into the rhs array where the rhs is stored.
 *
 * @throws IllegalArgumentException if result, lhs, or rhs are null, or if
 * resultOffset + 16 > result.length or lhsOffset + 16 > lhs.length or
 * rhsOffset + 16 > rhs.length.
 */
Matrix.multiplyMM = function (result, resultOffset, lhs, lhsOffset, rhs, rhsOffset)
{
	if (!result)
	{
		result = lhs
	}
	
	var a00 = lhs[0], a01 = lhs[1], a02 = lhs[2], a03 = lhs[3];
	var a10 = lhs[4], a11 = lhs[5], a12 = lhs[6], a13 = lhs[7];
	var a20 = lhs[8], a21 = lhs[9], a22 = lhs[10], a23 = lhs[11];
	var a30 = lhs[12], a31 = lhs[13], a32 = lhs[14], a33 = lhs[15];
	
	var b00 = rhs[0], b01 = rhs[1], b02 = rhs[2], b03 = rhs[3];
	var b10 = rhs[4], b11 = rhs[5], b12 = rhs[6], b13 = rhs[7];
	var b20 = rhs[8], b21 = rhs[9], b22 = rhs[10], b23 = rhs[11];
	var b30 = rhs[12], b31 = rhs[13], b32 = rhs[14], b33 = rhs[15];
	
	result[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
	result[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
	result[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
	result[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
	result[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
	result[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
	result[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
	result[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
	result[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
	result[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
	result[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
	result[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
	result[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
	result[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
	result[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
	result[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;
	
	//return result;
}

/**
 * Multiplies a 4 element vector by a 4x4 matrix and stores the result in a
 * 4-element column vector. In matrix notation: result = lhs x rhs
 * <p>
 * The same float array may be passed for resultVec, lhsMat, and/or rhsVec.
 * However, the resultVec element values are undefined if the resultVec
 * elements overlap either the lhsMat or rhsVec elements.
 *
 * @param resultVec The float array that holds the result vector.
 * @param resultVecOffset The offset into the result array where the result
 *        vector is stored.
 * @param lhsMat The float array that holds the left-hand-side matrix.
 * @param lhsMatOffset The offset into the lhs array where the lhs is stored
 * @param rhsVec The float array that holds the right-hand-side vector.
 * @param rhsVecOffset The offset into the rhs vector where the rhs vector
 *        is stored.
 *
 * @throws IllegalArgumentException if resultVec, lhsMat,
 * or rhsVec are null, or if resultVecOffset + 4 > resultVec.length
 * or lhsMatOffset + 16 > lhsMat.length or
 * rhsVecOffset + 4 > rhsVec.length.
 */
Matrix.multiplyMV = function(resultVec, resultVecOffset, lhsMat, lhsMatOffset, rhsVec, rhsVecOffset)
{
	
}

/**
 * Transposes a 4 x 4 matrix.
 * <p>
 * mTrans and m must not overlap.
 *
 * @param mTrans the array that holds the output transposed matrix
 * @param mTransOffset an offset into mTrans where the transposed matrix is
 *        stored.
 * @param m the input array
 * @param mOffset an offset into m where the input matrix is stored.
 */
Matrix.transposeM = function(mTrans, mTransOffset, m, mOffset)
{
	/*
	for (var i = 0; i < 4; i++)
	{
		var mBase = i * 4 + mOffset;
		mTrans[i + mTransOffset] = m[mBase];
		mTrans[i + 4 + mTransOffset] = m[mBase + 1];
		mTrans[i + 8 + mTransOffset] = m[mBase + 2];
		mTrans[i + 12 + mTransOffset] = m[mBase + 3];
	}
	
	return mTrans;
	*/
	
	if(!m || mTrans == m) { 
		var a01 = mTrans[1], a02 = mTrans[2];
		var a12 = mTrans[5];
		
        mTrans[1] = mTrans[3];
        mTrans[2] = mTrans[6];
        mTrans[3] = a01;
        mTrans[5] = mTrans[7];
        mTrans[6] = a02;
        mTrans[7] = a12;
		return mTrans;
	}
	
	m[0] = mTrans[0];
	m[1] = mTrans[3];
	m[2] = mTrans[6];
	m[3] = mTrans[1];
	m[4] = mTrans[4];
	m[5] = mTrans[7];
	m[6] = mTrans[2];
	m[7] = mTrans[5];
	m[8] = mTrans[8];
	return m;
}

/**
 * Inverts a 4 x 4 matrix.
 * <p>
 * mInv and m must not overlap.
 *
 * @param mInv the array that holds the output inverted matrix
 * @param mInvOffset an offset into mInv where the inverted matrix is
 *        stored.
 * @param m the input array
 * @param mOffset an offset into m where the input matrix is stored.
 * @return true if the matrix could be inverted, false if it could not.
 */
Matrix.invertM = function(mInv, mInvOffset, m, mOffset)
{
	// Invert a 4 x 4 matrix using Cramer's Rule

	// transpose matrix
	var src0  = m[mOffset +  0];
	var src4  = m[mOffset +  1];
	var src8  = m[mOffset +  2];
	var src12 = m[mOffset +  3];

	var src1  = m[mOffset +  4];
	var src5  = m[mOffset +  5];
	var src9  = m[mOffset +  6];
	var src13 = m[mOffset +  7];

	var src2  = m[mOffset +  8];
	var src6  = m[mOffset +  9];
	var src10 = m[mOffset + 10];
	var src14 = m[mOffset + 11];

	var src3  = m[mOffset + 12];
	var src7  = m[mOffset + 13];
	var src11 = m[mOffset + 14];
	var src15 = m[mOffset + 15];

	// calculate pairs for first 8 elements (cofactors)
	var atmp0  = src10 * src15;
	var atmp1  = src11 * src14;
	var atmp2  = src9  * src15;
	var atmp3  = src11 * src13;
	var atmp4  = src9  * src14;
	var atmp5  = src10 * src13;
	var atmp6  = src8  * src15;
	var atmp7  = src11 * src12;
	var atmp8  = src8  * src14;
	var atmp9  = src10 * src12;
	var atmp10 = src8  * src13;
	var atmp11 = src9  * src12;

	// calculate first 8 elements (cofactors)
	var dst0  = (atmp0 * src5 + atmp3 * src6 + atmp4  * src7)
					  - (atmp1 * src5 + atmp2 * src6 + atmp5  * src7);
	var dst1  = (atmp1 * src4 + atmp6 * src6 + atmp9  * src7)
					  - (atmp0 * src4 + atmp7 * src6 + atmp8  * src7);
	var dst2  = (atmp2 * src4 + atmp7 * src5 + atmp10 * src7)
					  - (atmp3 * src4 + atmp6 * src5 + atmp11 * src7);
	var dst3  = (atmp5 * src4 + atmp8 * src5 + atmp11 * src6)
					  - (atmp4 * src4 + atmp9 * src5 + atmp10 * src6);
	var dst4  = (atmp1 * src1 + atmp2 * src2 + atmp5  * src3)
					  - (atmp0 * src1 + atmp3 * src2 + atmp4  * src3);
	var dst5  = (atmp0 * src0 + atmp7 * src2 + atmp8  * src3)
					  - (atmp1 * src0 + atmp6 * src2 + atmp9  * src3);
	var dst6  = (atmp3 * src0 + atmp6 * src1 + atmp11 * src3)
					  - (atmp2 * src0 + atmp7 * src1 + atmp10 * src3);
	var dst7  = (atmp4 * src0 + atmp9 * src1 + atmp10 * src2)
					  - (atmp5 * src0 + atmp8 * src1 + atmp11 * src2);

	// calculate pairs for second 8 elements (cofactors)
	var btmp0  = src2 * src7;
	var btmp1  = src3 * src6;
	var btmp2  = src1 * src7;
	var btmp3  = src3 * src5;
	var btmp4  = src1 * src6;
	var btmp5  = src2 * src5;
	var btmp6  = src0 * src7;
	var btmp7  = src3 * src4;
	var btmp8  = src0 * src6;
	var btmp9  = src2 * src4;
	var btmp10 = src0 * src5;
	var btmp11 = src1 * src4;

	// calculate second 8 elements (cofactors)
	var dst8  = (btmp0  * src13 + btmp3  * src14 + btmp4  * src15)
					  - (btmp1  * src13 + btmp2  * src14 + btmp5  * src15);
	var dst9  = (btmp1  * src12 + btmp6  * src14 + btmp9  * src15)
					  - (btmp0  * src12 + btmp7  * src14 + btmp8  * src15);
	var dst10 = (btmp2  * src12 + btmp7  * src13 + btmp10 * src15)
					  - (btmp3  * src12 + btmp6  * src13 + btmp11 * src15);
	var dst11 = (btmp5  * src12 + btmp8  * src13 + btmp11 * src14)
					  - (btmp4  * src12 + btmp9  * src13 + btmp10 * src14);
	var dst12 = (btmp2  * src10 + btmp5  * src11 + btmp1  * src9 )
					  - (btmp4  * src11 + btmp0  * src9  + btmp3  * src10);
	var dst13 = (btmp8  * src11 + btmp0  * src8  + btmp7  * src10)
					  - (btmp6  * src10 + btmp9  * src11 + btmp1  * src8 );
	var dst14 = (btmp6  * src9  + btmp11 * src11 + btmp3  * src8 )
					  - (btmp10 * src11 + btmp2  * src8  + btmp7  * src9 );
	var dst15 = (btmp10 * src10 + btmp4  * src8  + btmp9  * src9 )
					  - (btmp8  * src9  + btmp11 * src10 + btmp5  * src8 );

	// calculate determinant
	var det =
			src0 * dst0 + src1 * dst1 + src2 * dst2 + src3 * dst3;

	if (det == 0.0) {
		return false;
	}

	// calculate matrix inverse
	var invdet = 1.0 / det;
	mInv[     mInvOffset] = dst0  * invdet;
	mInv[ 1 + mInvOffset] = dst1  * invdet;
	mInv[ 2 + mInvOffset] = dst2  * invdet;
	mInv[ 3 + mInvOffset] = dst3  * invdet;

	mInv[ 4 + mInvOffset] = dst4  * invdet;
	mInv[ 5 + mInvOffset] = dst5  * invdet;
	mInv[ 6 + mInvOffset] = dst6  * invdet;
	mInv[ 7 + mInvOffset] = dst7  * invdet;

	mInv[ 8 + mInvOffset] = dst8  * invdet;
	mInv[ 9 + mInvOffset] = dst9  * invdet;
	mInv[10 + mInvOffset] = dst10 * invdet;
	mInv[11 + mInvOffset] = dst11 * invdet;

	mInv[12 + mInvOffset] = dst12 * invdet;
	mInv[13 + mInvOffset] = dst13 * invdet;
	mInv[14 + mInvOffset] = dst14 * invdet;
	mInv[15 + mInvOffset] = dst15 * invdet;

	return true;
}

/**
 * Computes an orthographic projection matrix.
 *
 * @param m returns the result
 * @param mOffset
 * @param left
 * @param right
 * @param bottom
 * @param top
 * @param near
 * @param far
 */
Matrix.orthoM = function(m, mOffset, left, right, bottom, top, near, far)
{
	if (left == right) {
		throw new IllegalArgumentException("left == right");
	}
	if (bottom == top) {
		throw new IllegalArgumentException("bottom == top");
	}
	if (near == far) {
		throw new IllegalArgumentException("near == far");
	}

	var r_width  = 1.0 / (right - left);
	var r_height = 1.0 / (top - bottom);
	var r_depth  = 1.0 / (far - near);
	var x =  2.0 * (r_width);
	var y =  2.0 * (r_height);
	var z = -2.0 * (r_depth);
	var tx = -(right + left) * r_width;
	var ty = -(top + bottom) * r_height;
	var tz = -(far + near) * r_depth;
	m[mOffset + 0] = x;
	m[mOffset + 5] = y;
	m[mOffset +10] = z;
	m[mOffset +12] = tx;
	m[mOffset +13] = ty;
	m[mOffset +14] = tz;
	m[mOffset +15] = 1.0;
	m[mOffset + 1] = 0.0;
	m[mOffset + 2] = 0.0;
	m[mOffset + 3] = 0.0;
	m[mOffset + 4] = 0.0;
	m[mOffset + 6] = 0.0;
	m[mOffset + 7] = 0.0;
	m[mOffset + 8] = 0.0;
	m[mOffset + 9] = 0.0;
	m[mOffset + 11] = 0.0;
}


/**
 * Defines a projection matrix in terms of six clip planes.
 *
 * @param m the float array that holds the output perspective matrix
 * @param offset the offset into float array m where the perspective
 *        matrix data is written
 * @param left
 * @param right
 * @param bottom
 * @param top
 * @param near
 * @param far
 */
Matrix.frustumM = function(m, offset, left, right, bottom, top,  near, far)
{
	if (left == right) {
		throw new IllegalArgumentException("left == right");
	}
	if (top == bottom) {
		throw new IllegalArgumentException("top == bottom");
	}
	if (near == far) {
		throw new IllegalArgumentException("near == far");
	}
	if (near <= 0.0) {
		throw new IllegalArgumentException("near <= 0.0f");
	}
	if (far <= 0.0) {
		throw new IllegalArgumentException("far <= 0.0f");
	}
	var r_width  = 1.0 / (right - left);
	var r_height = 1.0 / (top - bottom);
	var r_depth  = 1.0 / (near - far);
	var x = 2.0 * (near * r_width);
	var y = 2.0 * (near * r_height);
	var A = (right + left) * r_width;
	var B = (top + bottom) * r_height;
	var C = (far + near) * r_depth;
	var D = 2.0 * (far * near * r_depth);
	m[offset + 0] = x;
	m[offset + 5] = y;
	m[offset + 8] = A;
	m[offset +  9] = B;
	m[offset + 10] = C;
	m[offset + 14] = D;
	m[offset + 11] = -1.0;
	m[offset +  1] = 0.0;
	m[offset +  2] = 0.0;
	m[offset +  3] = 0.0;
	m[offset +  4] = 0.0;
	m[offset +  6] = 0.0;
	m[offset +  7] = 0.0;
	m[offset + 12] = 0.0;
	m[offset + 13] = 0.0;
	m[offset + 15] = 0.0;
}

/**
 * Defines a projection matrix in terms of a field of view angle, an
 * aspect ratio, and z clip planes.
 *
 * @param m the float array that holds the perspective matrix
 * @param offset the offset into float array m where the perspective
 *        matrix data is written
 * @param fovy field of view in y direction, in degrees
 * @param aspect width to height aspect ratio of the viewport
 * @param zNear
 * @param zFar
 */
Matrix.perspectiveM = function (m, offset, fovy, aspect, zNear, zFar)
{
	var f = 1.0 / Math.tan(fovy * (Math.PI / 360.0));
	var rangeReciprocal = 1.0 / (zNear - zFar);
	
	m[offset + 0] = f / aspect;
	m[offset + 1] = 0.0;
	m[offset + 2] = 0.0;
	m[offset + 3] = 0.0;
	
	m[offset + 4] = 0.0;
	m[offset + 5] = f;
	m[offset + 6] = 0.0;
	m[offset + 7] = 0.0;
	
	m[offset + 8] = 0.0;
	m[offset + 9] = 0.0;
	m[offset + 10] = (zFar + zNear) * rangeReciprocal;
	m[offset + 11] = -1.0;
	
	m[offset + 12] = 0.0;
	m[offset + 13] = 0.0;
	m[offset + 14] = 2.0 * zFar * zNear * rangeReciprocal;
	m[offset + 15] = 0.0;
}

/**
 * Computes the length of a vector.
 *
 * @param x x coordinate of a vector
 * @param y y coordinate of a vector
 * @param z z coordinate of a vector
 * @return the length of a vector
 */
Matrix.length = function(x, y, z)
{
	return (Math.sqrt(x * x + y * y + z * z));
}

/**
 * Sets matrix m to the identity matrix.
 *
 * @param sm returns the result
 * @param smOffset index into sm where the result matrix starts
 */
Matrix.setIdentityM = function(sm, smOffset)
{
	for (var i=0 ; i<16 ; i++) {
		sm[smOffset + i] = 0;
	}
	for(var i = 0; i < 16; i += 5) {
		sm[smOffset + i] = 1.0;
	}
}

/**
 * Scales matrix m by x, y, and z, putting the result in sm.
 * <p>
 * m and sm must not overlap.
 *
 * @param sm returns the result
 * @param smOffset index into sm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param x scale factor x
 * @param y scale factor y
 * @param z scale factor z
 */
Matrix.scaleM = function(m, mOffset, x, y, z, sm, smOffset)
{
	if (arguments.lengh == 7)
	{
		for (var i=0 ; i<4 ; i++) {
			var smi = smOffset + i;
			var mi = mOffset + i;
			sm[     smi] = m[     mi] * x;
			sm[ 4 + smi] = m[ 4 + mi] * y;
			sm[ 8 + smi] = m[ 8 + mi] * z;
			sm[12 + smi] = m[12 + mi];
		}
	}
	else
	{
		for (var i=0 ; i<4 ; i++)
		{
			var mi = mOffset + i;
			m[     mi] *= x;
			m[ 4 + mi] *= y;
			m[ 8 + mi] *= z;
		}
	}
}

/**
 * Scales matrix m in place by sx, sy, and sz.
 *
 * @param m matrix to scale
 * @param mOffset index into m where the matrix starts
 * @param x scale factor x
 * @param y scale factor y
 * @param z scale factor z
 */
 
 /*
Matrix.scaleM = function(m, mOffset, x, y, z)
{
	for (var i=0 ; i<4 ; i++) {
		var mi = mOffset + i;
		m[     mi] *= x;
		m[ 4 + mi] *= y;
		m[ 8 + mi] *= z;
	}
}
*/

/**
 * Translates matrix m by x, y, and z, putting the result in tm.
 * <p>
 * m and tm must not overlap.
 *
 * @param tm returns the result
 * @param tmOffset index into sm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param x translation factor x
 * @param y translation factor y
 * @param z translation factor z
 */
Matrix.translateM = function(m, mOffset, x, y, z, tm, tmOffset)
{
	if (arguments.lengh == 7)
	{
		for (var i=0 ; i<12 ; i++)
		{
			tm[tmOffset + i] = m[mOffset + i];
		}
		for (var i=0 ; i<4 ; i++)
		{
			var tmi = tmOffset + i;
			var mi = mOffset + i;
			tm[12 + tmi] = m[mi] * x + m[4 + mi] * y + m[8 + mi] * z +
				m[12 + mi];
		}
	}
	else
	{
		for (var i = 0; i < 4 ; i++)
		{
			var mi = mOffset + i;
			m[12 + mi] += m[mi] * x + m[4 + mi] * y + m[8 + mi] * z;
		}
	}
}

/**
 * Translates matrix m by x, y, and z in place.
 *
 * @param m matrix
 * @param mOffset index into m where the matrix starts
 * @param x translation factor x
 * @param y translation factor y
 * @param z translation factor z
 */

/*
Matrix.translateM = function (m, mOffset, x, y, z)
{
	for (var i = 0; i < 4 ; i++)
	{
		var mi = mOffset + i;
		m[12 + mi] += m[mi] * x + m[4 + mi] * y + m[8 + mi] * z;
	}
}
*/

/**
 * Rotates matrix m by angle a (in degrees) around the axis (x, y, z).
 * <p>
 * m and rm must not overlap.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param m source matrix
 * @param mOffset index into m where the source matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */
Matrix.rotateM = function(m, mOffset, a, x, y, z, rm, rmOffset)
{
	//synchronized(sTemp)
	//{
	if (arguments.lengh == 8)
	{
		this.setRotateM(m, 0, a, x, y, z);
		this.multiplyMM(rm, rmOffset, m, mOffset, m, 0);
	}
	else
	{
		/*
		this.setRotateM(this.sTemp, 0, a, x, y, z);
		this.multiplyMM(this.sTemp, 16, m, mOffset, this.sTemp, 0);
		this.ArrayCopy(this.sTemp, 16, m, mOffset, 16); //Object source, int sourcePosition, Object destination, int destinationPosition, int numberOfElements
		*/
		
		
		
		var len = Math.sqrt(x*x + y*y + z*z);
		if (!len) { return null; }
		if (len != 1) {
			len = 1 / len;
			x *= len; 
			y *= len; 
			z *= len;
		}
		
		var s = Math.sin(a);
		var c = Math.cos(a);
		var t = 1-c;
		
		// Cache the mrix values (makes for huge speed increases!)
		var a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
		var a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
		var a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
		
		// Construct the elements of the rotation mrix
		var b00 = x*x*t + c, b01 = y*x*t + z*s, b02 = z*x*t - y*s;
		var b10 = x*y*t - z*s, b11 = y*y*t + c, b12 = z*y*t + x*s;
		var b20 = x*z*t + y*s, b21 = y*z*t - x*s, b22 = z*z*t + c;
		
		if(!rm) { 
			rm = m 
		} else if(m != rm) { // If the source and rmination differ, copy the unchanged last row
			rm[12] = m[12];
			rm[13] = m[13];
			rm[14] = m[14];
			rm[15] = m[15];
		}
		
		// Perform rotation-specific mrix multiplication
		rm[0] = a00*b00 + a10*b01 + a20*b02;
		rm[1] = a01*b00 + a11*b01 + a21*b02;
		rm[2] = a02*b00 + a12*b01 + a22*b02;
		rm[3] = a03*b00 + a13*b01 + a23*b02;
		
		rm[4] = a00*b10 + a10*b11 + a20*b12;
		rm[5] = a01*b10 + a11*b11 + a21*b12;
		rm[6] = a02*b10 + a12*b11 + a22*b12;
		rm[7] = a03*b10 + a13*b11 + a23*b12;
		
		rm[8] = a00*b20 + a10*b21 + a20*b22;
		rm[9] = a01*b20 + a11*b21 + a21*b22;
		rm[10] = a02*b20 + a12*b21 + a22*b22;
		rm[11] = a03*b20 + a13*b21 + a23*b22;
		return rm;
	}
	//}
}

/**
 * Rotates matrix m in place by angle a (in degrees)
 * around the axis (x, y, z).
 *
 * @param m source matrix
 * @param mOffset index into m where the matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */

/*
Matrix.rotateM = function(m, mOffset, a, x, y, z)
{
	//synchronized(sTemp)
	//{
		setRotateM(sTemp, 0, a, x, y, z);
		multiplyMM(sTemp, 16, m, mOffset, sTemp, 0);
		System.arraycopy(sTemp, 16, m, mOffset, 16);
		
		//Object source, int sourcePosition, Object destination, int destinationPosition, int numberOfElements
	//}
}
*/

Matrix.InverseToMat3 = function(mat, dest)
{
	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[0], a01 = mat[1], a02 = mat[2];
	var a10 = mat[4], a11 = mat[5], a12 = mat[6];
	var a20 = mat[8], a21 = mat[9], a22 = mat[10];
	
	var b01 = a22*a11-a12*a21;
	var b11 = -a22*a10+a12*a20;
	var b21 = a21*a10-a11*a20;
		
	var d = a00*b01 + a01*b11 + a02*b21;
	if (!d) { return null; }
	var id = 1/d;
	
	if(!dest) { dest = mat3.create(); }
	
	dest[0] = b01*id;
	dest[1] = (-a22*a01 + a02*a21)*id;
	dest[2] = (a12*a01 - a02*a11)*id;
	dest[3] = b11*id;
	dest[4] = (a22*a00 - a02*a20)*id;
	dest[5] = (-a12*a00 + a02*a10)*id;
	dest[6] = b21*id;
	dest[7] = (-a21*a00 + a01*a20)*id;
	dest[8] = (a11*a00 - a01*a10)*id;
	
	return dest;
};

/**
    * Copies an array (or part of an array) to another array. The src array is copied to the
    * dst array, beginning at the position specified by srcPos and into the position specified
    * by dstPos. The number of elements to copy is determined by length. The simplified version
    * with two arguments copies an entire array to another of the same size. It is equivalent
    * to "arrayCopy(src, 0, dst, 0, src.length)". This function is far more efficient for copying
    * array data than iterating through a for and copying each element.
    *
    * @param {Array} src an array of any data type: the source array
    * @param {Array} dest an array of any data type (as long as it's the same as src): the destination array
    * @param {int} srcPos     starting position in the source array
    * @param {int} destPos    starting position in the destination array
    * @param {int} length     number of array elements to be copied
    *
    * @returns none
    */
Matrix.ArrayCopy = function(src, srcPos, dest, destPos, length)
{ // src, srcPos, dest, destPos, length) {
	//var src, srcPos = 0, dest, destPos = 0, length;
	
	if (arguments.length === 2)
	{
		// recall itself and copy src to dest from start index 0 to 0 of src.length
		src = arguments[0];
		dest = arguments[1];
		length = src.length;
	}
	else if (arguments.length === 3)
	{
		// recall itself and copy src to dest from start index 0 to 0 of length
		src = arguments[0];
		dest = arguments[1];
		length = arguments[2];
	}
	else if (arguments.length === 5)
	{
		src = arguments[0];
		srcPos = arguments[1];
		dest = arguments[2];
		destPos = arguments[3];
		length = arguments[4];
	}
	
	// copy src to dest from index srcPos to index destPos of length recursivly on objects
	for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++)
	{
		if (dest[j] !== null)
		{
			dest[j] = src[i];
		}
		else
		{
			throw "array index out of bounds exception";
		}
	}
}

/**
 * Creates a matrix for rotation by angle a (in degrees)
 * around the axis (x, y, z).
 * <p>
 * An optimized path will be used for rotation about a major axis
 * (e.g. x=1.0f y=0.0f z=0.0f).
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param a angle to rotate in degrees
 * @param x X axis component
 * @param y Y axis component
 * @param z Z axis component
 */
Matrix.setRotateM = function(rm, rmOffset, a, x, y, z)
{
	rm[rmOffset + 3] = 0;
	rm[rmOffset + 7] = 0;
	rm[rmOffset + 11]= 0;
	rm[rmOffset + 12]= 0;
	rm[rmOffset + 13]= 0;
	rm[rmOffset + 14]= 0;
	rm[rmOffset + 15]= 1;
	a *= (Math.PI / 180.0);
	var s = Math.sin(a);
	var c = Math.cos(a);
	if (1.0 == x && 0.0 == y && 0.0 == z) {
		rm[rmOffset + 5] = c;   rm[rmOffset + 10]= c;
		rm[rmOffset + 6] = s;   rm[rmOffset + 9] = -s;
		rm[rmOffset + 1] = 0;   rm[rmOffset + 2] = 0;
		rm[rmOffset + 4] = 0;   rm[rmOffset + 8] = 0;
		rm[rmOffset + 0] = 1;
	} else if (0.0 == x && 1.0 == y && 0.0 == z) {
		rm[rmOffset + 0] = c;   rm[rmOffset + 10]= c;
		rm[rmOffset + 8] = s;   rm[rmOffset + 2] = -s;
		rm[rmOffset + 1] = 0;   rm[rmOffset + 4] = 0;
		rm[rmOffset + 6] = 0;   rm[rmOffset + 9] = 0;
		rm[rmOffset + 5] = 1;
	} else if (0.0 == x && 0.0 == y && 1.0 == z) {
		rm[rmOffset + 0] = c;   rm[rmOffset + 5] = c;
		rm[rmOffset + 1] = s;   rm[rmOffset + 4] = -s;
		rm[rmOffset + 2] = 0;   rm[rmOffset + 6] = 0;
		rm[rmOffset + 8] = 0;   rm[rmOffset + 9] = 0;
		rm[rmOffset + 10]= 1;
	} else {
		var len = Matrix.length(x, y, z);
		if (1.0 != len) {
			var recipLen = 1.0 / len;
			x *= recipLen;
			y *= recipLen;
			z *= recipLen;
		}
		var nc = 1.0 - c;
		var xy = x * y;
		var yz = y * z;
		var zx = z * x;
		var xs = x * s;
		var ys = y * s;
		var zs = z * s;
		rm[rmOffset +  0] = x*x*nc +  c;
		rm[rmOffset +  4] =  xy*nc - zs;
		rm[rmOffset +  8] =  zx*nc + ys;
		rm[rmOffset +  1] =  xy*nc + zs;
		rm[rmOffset +  5] = y*y*nc +  c;
		rm[rmOffset +  9] =  yz*nc - xs;
		rm[rmOffset +  2] =  zx*nc - ys;
		rm[rmOffset +  6] =  yz*nc + xs;
		rm[rmOffset + 10] = z*z*nc +  c;
	}
}

/**
 * Converts Euler angles to a rotation matrix.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param x angle of rotation, in degrees
 * @param y angle of rotation, in degrees
 * @param z angle of rotation, in degrees
 */
Matrix.setRotateEulerM = function(rm, rmOffset, x, y, z)
{
	x *= (Math.PI / 180.0);
	y *= (Math.PI / 180.0);
	z *= (Math.PI / 180.0);
	var cx = Math.cos(x);
	var sx = Math.sin(x);
	var cy = Math.cos(y);
	var sy = Math.sin(y);
	var cz = Math.cos(z);
	var sz = Math.sin(z);
	var cxsy = cx * sy;
	var sxsy = sx * sy;

	rm[rmOffset + 0]  =   cy * cz;
	rm[rmOffset + 1]  =  -cy * sz;
	rm[rmOffset + 2]  =   sy;
	rm[rmOffset + 3]  =  0.0;

	rm[rmOffset + 4]  =  cxsy * cz + cx * sz;
	rm[rmOffset + 5]  = -cxsy * sz + cx * cz;
	rm[rmOffset + 6]  =  -sx * cy;
	rm[rmOffset + 7]  =  0.0;

	rm[rmOffset + 8]  = -sxsy * cz + sx * sz;
	rm[rmOffset + 9]  =  sxsy * sz + sx * cz;
	rm[rmOffset + 10] =  cx * cy;
	rm[rmOffset + 11] =  0.0;

	rm[rmOffset + 12] =  0.0;
	rm[rmOffset + 13] =  0.0;
	rm[rmOffset + 14] =  0.0;
	rm[rmOffset + 15] =  1.0;
}

/**
 * Defines a viewing transformation in terms of an eye point, a center of
 * view, and an up vector.
 *
 * @param rm returns the result
 * @param rmOffset index into rm where the result matrix starts
 * @param eyeX eye point X
 * @param eyeY eye point Y
 * @param eyeZ eye point Z
 * @param centerX center of view X
 * @param centerY center of view Y
 * @param centerZ center of view Z
 * @param upX up vector X
 * @param upY up vector Y
 * @param upZ up vector Z
 */
Matrix.setLookAtM = function(rm, rmOffset, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)
{
	// See the OpenGL GLUT documentation for gluLookAt for a description
	// of the algorithm. We implement it in a straightforward way:

	var fx = centerX - eyeX;
	var fy = centerY - eyeY;
	var fz = centerZ - eyeZ;

	// Normalize f
	var rlf = 1.0 / Matrix.length(fx, fy, fz);
	fx *= rlf;
	fy *= rlf;
	fz *= rlf;

	// compute s = f x up (x means "cross product")
	var sx = fy * upZ - fz * upY;
	var sy = fz * upX - fx * upZ;
	var sz = fx * upY - fy * upX;

	// and normalize s
	var rls = 1.0 / Matrix.length(sx, sy, sz);
	sx *= rls;
	sy *= rls;
	sz *= rls;

	// compute u = s x f
	var ux = sy * fz - sz * fy;
	var uy = sz * fx - sx * fz;
	var uz = sx * fy - sy * fx;

	rm[rmOffset + 0] = sx;
	rm[rmOffset + 1] = ux;
	rm[rmOffset + 2] = -fx;
	rm[rmOffset + 3] = 0.0;

	rm[rmOffset + 4] = sy;
	rm[rmOffset + 5] = uy;
	rm[rmOffset + 6] = -fy;
	rm[rmOffset + 7] = 0.0;

	rm[rmOffset + 8] = sz;
	rm[rmOffset + 9] = uz;
	rm[rmOffset + 10] = -fz;
	rm[rmOffset + 11] = 0.0;

	rm[rmOffset + 12] = 0.0;
	rm[rmOffset + 13] = 0.0;
	rm[rmOffset + 14] = 0.0;
	rm[rmOffset + 15] = 1.0;

	translateM(rm, rmOffset, -eyeX, -eyeY, -eyeZ);
}

Matrix.Copy = function(mat, dest)
{
	dest[0] = mat[0];
	dest[1] = mat[1];
	dest[2] = mat[2];
	dest[3] = mat[3];
	dest[4] = mat[4];
	dest[5] = mat[5];
	dest[6] = mat[6];
	dest[7] = mat[7];
	dest[8] = mat[8];
	dest[9] = mat[9];
	dest[10] = mat[10];
	dest[11] = mat[11];
	dest[12] = mat[12];
	dest[13] = mat[13];
	dest[14] = mat[14];
	dest[15] = mat[15];
	return dest;
}

Matrix.Identity = function(dest)
{
	dest[0] = 1;
	dest[1] = 0;
	dest[2] = 0;
	dest[3] = 0;
	dest[4] = 0;
	dest[5] = 1;
	dest[6] = 0;
	dest[7] = 0;
	dest[8] = 0;
	dest[9] = 0;
	dest[10] = 1;
	dest[11] = 0;
	dest[12] = 0;
	dest[13] = 0;
	dest[14] = 0;
	dest[15] = 1;
	return dest;
};

Vector3.Normalize = function(vec, dest)
{
	if(!dest) { dest = vec; }
	
	var x = vec[0], y = vec[1], z = vec[2];
	var len = Math.sqrt(x*x + y*y + z*z);
	
	if (!len) {
		dest[0] = 0;
		dest[1] = 0;
		dest[2] = 0;
		return dest;
	} else if (len == 1) {
		dest[0] = x;
		dest[1] = y;
		dest[2] = z;
		return dest;
	}
	
	len = 1 / len;
	dest[0] = x*len;
	dest[1] = y*len;
	dest[2] = z*len;
	return dest;
};

Vector3.Scale = function(vec, val, dest) {
	if(!dest || vec == dest) {
		vec[0] *= val;
		vec[1] *= val;
		vec[2] *= val;
		return vec;
	}
	
	dest[0] = vec[0]*val;
	dest[1] = vec[1]*val;
	dest[2] = vec[2]*val;
	return dest;
};