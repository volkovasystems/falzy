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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("falzy", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`falzy( )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy();});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( undefined )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(undefined);});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( null )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(null);});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( NaN )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(NaN);});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( 0/0 )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(0 / 0);});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( '' )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy("");});

			assert.equal(result.value, true);
		});
	});


	describe("`falzy( { } )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy({});});

			assert.equal(result.value, false);
		});
	});


	describe("`falzy( [ ] )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy([]);});

			assert.equal(result.value, false);
		});
	});


	describe("`falzy( function( ){ } )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(function () {});});

			assert.equal(result.value, false);
		});
	});


	describe("`falzy( 0 )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(0);});

			assert.equal(result.value, false);
		});

	});


	describe("`falzy( false )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(false);});

			assert.equal(result.value, false);
		});
	});


	describe("`falzy( Infinity )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(Infinity);});

			assert.equal(result.value, false);
		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImZhbHp5IiwiZXF1YWwiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIk5hTiIsIkluZmluaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxZQUFWLEVBQXdCLFlBQU87QUFDOUJJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxPQUFQLEVBQWxDLENBQWI7O0FBRUFaLFVBQU9hLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsSUFBNUI7QUFDQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FYLFVBQVUsc0JBQVYsRUFBa0MsWUFBTztBQUN4Q0ksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU9HLFNBQVAsQ0FBUCxFQUFsQyxDQUFiOztBQUVBZixVQUFPYSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7OztBQVNBWCxVQUFVLGlC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SixFQUFnQyxZQUFPO0FBQ3RDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU8sS0FBUCxDQUFQLEVBQWxDLENBQWI7O0FBRUFaLFVBQU9hLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsS0FBNUI7QUFDQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FYLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0ksS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU9LLFFBQVAsQ0FBUCxFQUFsQyxDQUFiOztBQUVBakIsVUFBT2EsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixLQUE1QjtBQUNBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBaEhEOztBQWtIQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJmYWx6eVwiLCAoICkgPT4ge1xyXG5cclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggdW5kZWZpbmVkICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBudWxsIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggbnVsbCApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggTmFOIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggTmFOICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCAwLzAgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCAwLzAgKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZmFsenkoICcnIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggXCJcIiApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZmFsenkoIHsgfSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZmFsenkoIFsgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCBbIF0gKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBmdW5jdGlvbiggKXsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCBmdW5jdGlvbiggKXsgfSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZmFsenkoIDAgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggMCApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBmYWxzZSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCBmYWxzZSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZmFsenkoIEluZmluaXR5IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZmFsenkoIEluZmluaXR5ICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
