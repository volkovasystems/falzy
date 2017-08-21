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

	@test-configuration:
		{
			"package": "falzy",
			"path": "falzy/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/falzy.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"falzy": "falzy"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const falzy = require( "./falzy.js" );
//: @end-server

//: @client:
const falzy = require( "./falzy.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "falzy", ( ) => {


	describe( "`falzy( )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( ), true );

		} );
	} );


	describe( "`falzy( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( undefined ), true );

		} );
	} );


	describe( "`falzy( null )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( null ), true );

		} );
	} );


	describe( "`falzy( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( NaN ), true );

		} );
	} );


	describe( "`falzy( 0/0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( 0/0 ), true );

		} );
	} );


	describe( "`falzy( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( "" ), true );

		} );
	} );


	describe( "`falzy( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( { } ), false );

		} );
	} );


	describe( "`falzy( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( [ ] ), false );

		} );
	} );


	describe( "`falzy( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( function( ){ } ), false );

		} );
	} );


	describe( "`falzy( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( 0 ), false );

		} );
	} );


	describe( "`falzy( false )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( false ), false );

		} );
	} );


	describe( "`falzy( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( Infinity ), false );

		} );
	} );


} );
//: @end-server


//: @client:
describe( "falzy", ( ) => {


	describe( "`falzy( )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( ), true );

		} );
	} );


	describe( "`falzy( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( undefined ), true );

		} );
	} );


	describe( "`falzy( null )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( null ), true );

		} );
	} );


	describe( "`falzy( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( NaN ), true );

		} );
	} );


	describe( "`falzy( 0/0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( 0/0 ), true );

		} );
	} );


	describe( "`falzy( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( falzy( "" ), true );

		} );
	} );


	describe( "`falzy( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( { } ), false );

		} );
	} );


	describe( "`falzy( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( [ ] ), false );

		} );
	} );


	describe( "`falzy( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( function( ){ } ), false );

		} );
	} );


	describe( "`falzy( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( 0 ), false );

		} );
	} );


	describe( "`falzy( false )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( false ), false );

		} );
	} );


	describe( "`falzy( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( falzy( Infinity ), false );

		} );
	} );


} );
//: @end-client

//: @bridge:

describe( "falzy", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`falzy( )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( undefined ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( null ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( NaN ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( 0/0 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( 0/0 ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( '' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( "" ) );

			assert.equal( result.value, true );
		} );
	} );


	describe( "`falzy( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( { } ) );

			assert.equal( result.value, false );
		} );
	} );


	describe( "`falzy( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( [ ] ) );

			assert.equal( result.value, false );
		} );
	} );


	describe( "`falzy( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( function( ){ } ) );

			assert.equal( result.value, false );
		} );
	} );


	describe( "`falzy( 0 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( 0 ) );

			assert.equal( result.value, false );
		} );

	} );


	describe( "`falzy( false )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( false ) );

			assert.equal( result.value, false );
		} );
	} );


	describe( "`falzy( Infinity )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => falzy( Infinity ) );

			assert.equal( result.value, false );
		} );
	} );

} );

//: @end-bridge
