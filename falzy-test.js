"use strict";

const falzy = require( "./falzy.js" );

console.log( falzy( "hello" ) );
console.log( falzy( { } ) );
console.log( falzy( 45 ) );
console.log( falzy( ) );
