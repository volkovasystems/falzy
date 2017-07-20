"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"falzy": "falzy"
		}
	@end-include
*/

const assert = require( "assert" );

//: @server:
const falzy = require( "./falzy.js" );
//: @end-server





describe( "falzy", ( ) => {
	//: @!bridge:
	describe( "`falzy( )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( ), true ) ) );

	describe( "`falzy( undefined )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( undefined ), true, "should be true" ) ) );

	describe( "`falzy( null )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( null ), true ) ) );

	describe( "`falzy( NaN )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( NaN ), true ) ) );

	describe( "`falzy( 0/0 )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( 0/0 ), true ) ) );

	describe( "`falzy( '' )`", ( ) => it( "should return true", ( ) => assert.equal( falzy( "" ), true ) ) );

	describe( "`falzy( { } )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( { } ), false ) ) );

	describe( "`falzy( [ ] )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( [ ] ), false ) ) );

	describe( "`falzy( function( ){ } )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( function( ){ } ), false ) ) );

	describe( "`falzy( 0 )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( 0 ), false ) ) );

	describe( "`falzy( false )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( false ), false ) ) );

	describe( "`falzy( Infinity )`", ( ) => it( "should return false", ( ) => assert.equal( falzy( Infinity ), false ) ) );
	//: @end-bridge

	

} );
