
const assert = require( "assert" );

//: @server:
const falzy = require( "./falzy.js" );
//: @end-server

//: @client:
const falzy = require( "./falzy.support.js" );
//: @end-client

assert.equal( falzy( undefined ), true, "should be true" );

assert.equal( falzy( ), true, "should be true" );

assert.equal( falzy( null ), true, "should be true" );

assert.equal( falzy( NaN ), true, "should be true" );

assert.equal( falzy( 0/0 ), true, "should be true" );

assert.equal( falzy( "" ), true, "should be true" );

assert.equal( falzy( "hello" ), false, "should be false" );

assert.equal( falzy( { } ), false, "should be false" );

assert.equal( falzy( [ ] ), false, "should be false" );

assert.equal( falzy( function( ){ } ), false, "should be false" );

assert.equal( falzy( 123 ), false, "should be false" );

assert.equal( falzy( false ), false, "should be false" );

assert.equal( falzy( true ), false, "should be false" );

assert.equal( falzy( Infinity ), false, "should be false" );

assert.equal( falzy( 0 ), false, "should be false" );

console.log( "ok" );
