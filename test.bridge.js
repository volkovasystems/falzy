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





//: @bridge:
var path = require("path");
//: @end-bridge

describe("falzy", function () {


	//: @bridge:
	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`falzy( )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy();});

			assert.equal(result.value, true);
		});
	});

	describe("`falzy( undefined )`", function () {

		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(undefined);});

			assert.equal(result.value, true);
		});
	});

	describe("`falzy( null )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(null);});

			assert.equal(result.value, true);
		});
	});

	describe("`falzy( NaN )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(NaN);});

			assert.equal(result.value, true);
		});

	});

	describe("`falzy( 0/0 )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(0 / 0);});

			assert.equal(result.value, true);
		});
	});

	describe("`falzy( '' )`", function () {
		it("should return true", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy('');});

			assert.equal(result.value, true);
		});
	});

	describe("`falzy( { } )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy({});});

			assert.equal(result.value, false);
		});
	});

	describe("`falzy( [ ] )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy([]);});

			assert.equal(result.value, false);
		});
	});

	describe("`falzy( function( ){ } )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(function () {});});

			assert.equal(result.value, false);
		});
	});

	describe("`falzy( 0 )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(0);});

			assert.equal(result.value, false);
		});

	});

	describe("`falzy( false )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(false);});

			assert.equal(result.value, false);
		});
	});

	describe("`falzy( Infinity )`", function () {
		it("should return false", function () {
			var result = browser.url(bridgeURL).execute(function () {return falzy(Infinity);});

			assert.equal(result.value, false);
		});
	});
	//: @end-bridge

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJmYWx6eSIsImVxdWFsIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJOYU4iLCJJbmZpbml0eSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7O0FBR3pCO0FBQ0EsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCxVQUFVLFlBQVYsRUFBd0IsWUFBTztBQUM5Qk0sS0FBSSxvQkFBSixFQUEwQixZQUFPO0FBQ2hDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLE9BQVAsRUFBbEMsQ0FBYjs7QUFFQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1QjtBQUNBLEdBSkQ7QUFLQSxFQU5EOztBQVFBYixVQUFVLHNCQUFWLEVBQWtDLFlBQU87O0FBRXhDTSxLQUFJLG9CQUFKLEVBQTBCLFlBQU87QUFDaEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBT0csU0FBUCxDQUFQLEVBQWxDLENBQWI7O0FBRUFqQixVQUFPZSxLQUFQ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RDs7QUFNQSxFQVBEOztBQVNBYixVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENNLEtBQUkscUJBQUosRUFBMkIsWUFBTztBQUNqQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFPLEtBQVAsQ0FBUCxFQUFsQyxDQUFiOztBQUVBZCxVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLEtBQTVCO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7O0FBUUFiLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q00sS0FBSSxxQkFBSixFQUEyQixZQUFPO0FBQ2pDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLE1BQU9LLFFBQVAsQ0FBUCxFQUFsQyxDQUFiOztBQUVBbkIsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixLQUE1QjtBQUNBLEdBSkQ7QUFLQSxFQU5EO0FBT0E7O0FBRUEsQ0E1R0QiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cbmRlc2NyaWJlKCBcImZhbHp5XCIsICggKSA9PiB7XG5cdFxuXG5cdC8vOiBAYnJpZGdlOlxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xuXHRsZXQgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZSggZGlyZWN0b3J5LCBcImJyaWRnZS5odG1sXCIgKTtcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCB1bmRlZmluZWQgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZmFsenkoIG51bGwgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggTmFOICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggMC8wIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggMC8wICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggJycgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZmFsenkoIHsgfSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZmFsenkoIFsgXSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggZnVuY3Rpb24oICl7IH0gKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmFsenkoIDAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggMCApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblxuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZhbHp5KCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGZhbHp5KCBmYWxzZSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmYWx6eSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBmYWx6eSggSW5maW5pdHkgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblx0Ly86IEBlbmQtYnJpZGdlXG5cbn0gKTtcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
