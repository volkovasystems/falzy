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

var assert = require("assert");



//: @client:
var falzy = require("./falzy.support.js");
//: @end-client



describe("falzy", function () {
	//: @!bridge:
	describe("`falzy( )`", function () {return it("should return true", function () {return assert.equal(falzy(), true);});});

	describe("`falzy( undefined )`", function () {return it("should return true", function () {return assert.equal(falzy(undefined), true, "should be true");});});

	describe("`falzy( null )`", function () {return it("should return true", function () {return assert.equal(falzy(null), true);});});

	describe("`falzy( NaN )`", function () {return it("should return true", function () {return assert.equal(falzy(NaN), true);});});

	describe("`falzy( 0/0 )`", function () {return it("should return true", function () {return assert.equal(falzy(0 / 0), true);});});

	describe("`falzy( '' )`", function () {return it("should return true", function () {return assert.equal(falzy(""), true);});});

	describe("`falzy( { } )`", function () {return it("should return false", function () {return assert.equal(falzy({}), false);});});

	describe("`falzy( [ ] )`", function () {return it("should return false", function () {return assert.equal(falzy([]), false);});});

	describe("`falzy( function( ){ } )`", function () {return it("should return false", function () {return assert.equal(falzy(function () {}), false);});});

	describe("`falzy( 0 )`", function () {return it("should return false", function () {return assert.equal(falzy(0), false);});});

	describe("`falzy( false )`", function () {return it("should return false", function () {return assert.equal(falzy(false), false);});});

	describe("`falzy( Infinity )`", function () {return it("should return false", function () {return assert.equal(falzy(Infinity), false);});});
	//: @end-bridge



});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmFsenkiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ1bmRlZmluZWQiLCJOYU4iLCJJbmZpbml0eSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7QUFJQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87QUFDekI7QUFDQUEsVUFBVSxZQUFWLEVBQXdCLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE9BQWQsRUFBd0IsSUFBeEIsQ0FBUCxFQUExQixDQUFQLEVBQXhCOztBQUVBQyxVQUFVLHNCQUFWLEVBQWtDLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE1BQU9JLFNBQVAsQ0FBZCxFQUFrQyxJQUFsQyxFQUF3QyxnQkFBeEMsQ0FBUCxFQUExQixDQUFQLEVBQWxDOztBQUVBSCxVQUFVLGlCQUFWLEVBQTZCLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBUCxDQUFkLEVBQTZCLElBQTdCLENBQVAsRUFBMUIsQ0FBUCxFQUE3Qjs7QUFFQUMsVUFBVSxnQkFBVixFQUE0QixvQkFBT0MsR0FBSSxvQkFBSixFQUEwQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxNQUFPSyxHQUFQLENBQWQsRUFBNEIsSUFBNUIsQ0FBUCxFQUExQixDQUFQLEVBQTVCOztBQUVBSixVQUFVLGdCQUFWLEVBQTRCLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBRSxDQUFULENBQWQsRUFBNEIsSUFBNUIsQ0FBUCxFQUExQixDQUFQLEVBQTVCOztBQUVBQyxVQUFVLGVBQVYsRUFBMkIsb0JBQU9DLEdBQUksb0JBQUosRUFBMEIsb0JBQU9KLE9BQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLENBQWQsRUFBMkIsSUFBM0IsQ0FBUCxFQUExQixDQUFQLEVBQTNCOztBQUVBQyxVQUFVLGdCQUFWLEVBQTRCLG9CQUFPQyxHQUFJLHFCQUFKLEVBQTJCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE1BQU8sRUFBUCxDQUFkLEVBQTRCLEtBQTVCLENBQVAsRUFBM0IsQ0FBUCxFQUE1Qjs7QUFFQUMsVUFBVSxnQkFBVixFQUE0QixvQkFBT0MsR0FBSSxxQkFBSixFQUEyQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxNQUFPLEVBQVAsQ0FBZCxFQUE0QixLQUE1QixDQUFQLEVBQTNCLENBQVAsRUFBNUI7O0FBRUFDLFVBQVUsMkJBQVYsRUFBdUMsb0JBQU9DLEdBQUkscUJBQUosRUFBMkIsb0JBQU9KLE9BQU9LLEtBQVAsQ0FBY0gsTUFBTyxZQUFXLENBQUcsQ0FBckIsQ0FBZCxFQUF1QyxLQUF2QyxDQUFQLEVBQTNCLENBQVAsRUFBdkM7O0FBRUFDLFVBQVUsY0FBVixFQUEwQixvQkFBT0MsR0FBSSxxQkFBSixFQUEyQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxNQUFPLENBQVAsQ0FBZCxFQUEwQixLQUExQixDQUFQLEVBQTNCLENBQVAsRUFBMUI7O0FBRUFDLFVBQVUsa0JBQVYsRUFBOEIsb0JBQU9DLEdBQUkscUJBQUosRUFBMkIsb0JBQU9KLE9BQU9LLEtBQVAsQ0FBY0gsTUFBTyxLQUFQLENBQWQsRUFBOEIsS0FBOUIsQ0FBUCxFQUEzQixDQUFQLEVBQTlCOztBQUVBQyxVQUFVLHFCQUFWLEVBQWlDLG9CQUFPQyxHQUFJLHFCQUFKLEVBQTJCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE1BQU9NLFFBQVAsQ0FBZCxFQUFpQyxLQUFqQyxDQUFQLEVBQTNCLENBQVAsRUFBakM7QUFDQTs7OztBQUlBLENBN0JEIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiLi9mYWx6eS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuZGVzY3JpYmUoIFwiZmFsenlcIiwgKCApID0+IHtcblx0Ly86IEAhYnJpZGdlOlxuXHRkZXNjcmliZSggXCJgZmFsenkoIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggZmFsenkoICksIHRydWUgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCB1bmRlZmluZWQgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBmYWx6eSggdW5kZWZpbmVkICksIHRydWUsIFwic2hvdWxkIGJlIHRydWVcIiApICkgKTtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoIG51bGwgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBmYWx6eSggbnVsbCApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggTmFOIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggZmFsenkoIE5hTiApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggMC8wIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggZmFsenkoIDAvMCApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggJycgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBmYWx6eSggXCJcIiApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggeyB9IClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiBhc3NlcnQuZXF1YWwoIGZhbHp5KCB7IH0gKSwgZmFsc2UgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBbIF0gKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IGFzc2VydC5lcXVhbCggZmFsenkoIFsgXSApLCBmYWxzZSApICkgKTtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoIGZ1bmN0aW9uKCApeyB9IClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiBhc3NlcnQuZXF1YWwoIGZhbHp5KCBmdW5jdGlvbiggKXsgfSApLCBmYWxzZSApICkgKTtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoIDAgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IGFzc2VydC5lcXVhbCggZmFsenkoIDAgKSwgZmFsc2UgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBmYWxzZSApYFwiLCAoICkgPT4gaXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBmYWx6eSggZmFsc2UgKSwgZmFsc2UgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBJbmZpbml0eSApYFwiLCAoICkgPT4gaXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBmYWx6eSggSW5maW5pdHkgKSwgZmFsc2UgKSApICk7XG5cdC8vOiBAZW5kLWJyaWRnZVxuXG5cdFxuXG59ICk7XG4iXX0=
//# sourceMappingURL=test.support.js.map
