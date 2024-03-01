"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (scope) {
  'use strict';

  function F(arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  }

  function F2(fun) {
    return F(2, fun, function (a) {
      return function (b) {
        return fun(a, b);
      };
    });
  }

  function F3(fun) {
    return F(3, fun, function (a) {
      return function (b) {
        return function (c) {
          return fun(a, b, c);
        };
      };
    });
  }

  function F4(fun) {
    return F(4, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fun(a, b, c, d);
          };
        };
      };
    });
  }

  function F5(fun) {
    return F(5, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return fun(a, b, c, d, e);
            };
          };
        };
      };
    });
  }

  function F6(fun) {
    return F(6, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return fun(a, b, c, d, e, f);
              };
            };
          };
        };
      };
    });
  }

  function F7(fun) {
    return F(7, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return fun(a, b, c, d, e, f, g);
                };
              };
            };
          };
        };
      };
    });
  }

  function F8(fun) {
    return F(8, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return function (h) {
                    return fun(a, b, c, d, e, f, g, h);
                  };
                };
              };
            };
          };
        };
      };
    });
  }

  function F9(fun) {
    return F(9, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return function (h) {
                    return function (i) {
                      return fun(a, b, c, d, e, f, g, h, i);
                    };
                  };
                };
              };
            };
          };
        };
      };
    });
  }

  function A2(fun, a, b) {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  }

  function A3(fun, a, b, c) {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  }

  function A4(fun, a, b, c, d) {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  }

  function A5(fun, a, b, c, d, e) {
    return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
  }

  function A6(fun, a, b, c, d, e, f) {
    return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
  }

  function A7(fun, a, b, c, d, e, f, g) {
    return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
  }

  function A8(fun, a, b, c, d, e, f, g, h) {
    return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
  }

  function A9(fun, a, b, c, d, e, f, g, h, i) {
    return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
  }

  console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');
  var _List_Nil_UNUSED = {
    $: 0
  };
  var _List_Nil = {
    $: '[]'
  };

  function _List_Cons_UNUSED(hd, tl) {
    return {
      $: 1,
      a: hd,
      b: tl
    };
  }

  function _List_Cons(hd, tl) {
    return {
      $: '::',
      a: hd,
      b: tl
    };
  }

  var _List_cons = F2(_List_Cons);

  function _List_fromArray(arr) {
    var out = _List_Nil;

    for (var i = arr.length; i--;) {
      out = _List_Cons(arr[i], out);
    }

    return out;
  }

  function _List_toArray(xs) {
    for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    {
      out.push(xs.a);
    }

    return out;
  }

  var _List_map2 = F3(function (f, xs, ys) {
    for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    {
      arr.push(A2(f, xs.a, ys.a));
    }

    return _List_fromArray(arr);
  });

  var _List_map3 = F4(function (f, xs, ys, zs) {
    for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    {
      arr.push(A3(f, xs.a, ys.a, zs.a));
    }

    return _List_fromArray(arr);
  });

  var _List_map4 = F5(function (f, ws, xs, ys, zs) {
    for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    {
      arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
    }

    return _List_fromArray(arr);
  });

  var _List_map5 = F6(function (f, vs, ws, xs, ys, zs) {
    for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    {
      arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
    }

    return _List_fromArray(arr);
  });

  var _List_sortBy = F2(function (f, xs) {
    return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
      return _Utils_cmp(f(a), f(b));
    }));
  });

  var _List_sortWith = F2(function (f, xs) {
    return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
      var ord = A2(f, a, b);
      return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
    }));
  });

  var _JsArray_empty = [];

  function _JsArray_singleton(value) {
    return [value];
  }

  function _JsArray_length(array) {
    return array.length;
  }

  var _JsArray_initialize = F3(function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  });

  var _JsArray_initializeFromList = F2(function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
  });

  var _JsArray_unsafeGet = F2(function (index, array) {
    return array[index];
  });

  var _JsArray_unsafeSet = F3(function (index, value, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[index] = value;
    return result;
  });

  var _JsArray_push = F2(function (value, array) {
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[length] = value;
    return result;
  });

  var _JsArray_foldl = F3(function (func, acc, array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_foldr = F3(function (func, acc, array) {
    for (var i = array.length - 1; i >= 0; i--) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_map = F2(function (func, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = func(array[i]);
    }

    return result;
  });

  var _JsArray_indexedMap = F3(function (func, offset, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = A2(func, offset + i, array[i]);
    }

    return result;
  });

  var _JsArray_slice = F3(function (from, to, array) {
    return array.slice(from, to);
  });

  var _JsArray_appendN = F3(function (n, dest, source) {
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length) {
      itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++) {
      result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++) {
      result[i + destLen] = source[i];
    }

    return result;
  }); // LOG


  var _Debug_log_UNUSED = F2(function (tag, value) {
    return value;
  });

  var _Debug_log = F2(function (tag, value) {
    console.log(tag + ': ' + _Debug_toString(value));
    return value;
  }); // TODOS


  function _Debug_todo(moduleName, region) {
    return function (message) {
      _Debug_crash(8, moduleName, region, message);
    };
  }

  function _Debug_todoCase(moduleName, region, value) {
    return function (message) {
      _Debug_crash(9, moduleName, region, value, message);
    };
  } // TO STRING


  function _Debug_toString_UNUSED(value) {
    return '<internals>';
  }

  function _Debug_toString(value) {
    return _Debug_toAnsiString(false, value);
  }

  function _Debug_toAnsiString(ansi, value) {
    if (typeof value === 'function') {
      return _Debug_internalColor(ansi, '<function>');
    }

    if (typeof value === 'boolean') {
      return _Debug_ctorColor(ansi, value ? 'True' : 'False');
    }

    if (typeof value === 'number') {
      return _Debug_numberColor(ansi, value + '');
    }

    if (value instanceof String) {
      return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
    }

    if (typeof value === 'string') {
      return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
    }

    if (_typeof(value) === 'object' && '$' in value) {
      var tag = value.$;

      if (typeof tag === 'number') {
        return _Debug_internalColor(ansi, '<internals>');
      }

      if (tag[0] === '#') {
        var output = [];

        for (var k in value) {
          if (k === '$') continue;
          output.push(_Debug_toAnsiString(ansi, value[k]));
        }

        return '(' + output.join(',') + ')';
      }

      if (tag === 'Set_elm_builtin') {
        return _Debug_ctorColor(ansi, 'Set') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
      }

      if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin') {
        return _Debug_ctorColor(ansi, 'Dict') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
      }

      if (tag === 'Array_elm_builtin') {
        return _Debug_ctorColor(ansi, 'Array') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
      }

      if (tag === '::' || tag === '[]') {
        var output = '[';
        value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);

        for (; value.b; value = value.b) // WHILE_CONS
        {
          output += ',' + _Debug_toAnsiString(ansi, value.a);
        }

        return output + ']';
      }

      var output = '';

      for (var i in value) {
        if (i === '$') continue;

        var str = _Debug_toAnsiString(ansi, value[i]);

        var c0 = str[0];
        var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
        output += ' ' + (parenless ? str : '(' + str + ')');
      }

      return _Debug_ctorColor(ansi, tag) + output;
    }

    if (typeof DataView === 'function' && value instanceof DataView) {
      return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
    }

    if (typeof File !== 'undefined' && value instanceof File) {
      return _Debug_internalColor(ansi, '<' + value.name + '>');
    }

    if (_typeof(value) === 'object') {
      var output = [];

      for (var key in value) {
        var field = key[0] === '_' ? key.slice(1) : key;
        output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
      }

      if (output.length === 0) {
        return '{}';
      }

      return '{ ' + output.join(', ') + ' }';
    }

    return _Debug_internalColor(ansi, '<internals>');
  }

  function _Debug_addSlashes(str, isChar) {
    var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

    if (isChar) {
      return s.replace(/\'/g, '\\\'');
    } else {
      return s.replace(/\"/g, '\\"');
    }
  }

  function _Debug_ctorColor(ansi, string) {
    return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
  }

  function _Debug_numberColor(ansi, string) {
    return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
  }

  function _Debug_stringColor(ansi, string) {
    return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
  }

  function _Debug_charColor(ansi, string) {
    return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
  }

  function _Debug_fadeColor(ansi, string) {
    return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
  }

  function _Debug_internalColor(ansi, string) {
    return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
  }

  function _Debug_toHexDigit(n) {
    return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
  } // CRASH


  function _Debug_crash_UNUSED(identifier) {
    throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
  }

  function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
    switch (identifier) {
      case 0:
        throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

      case 1:
        throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

      case 2:
        var jsonErrorString = fact1;
        throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

      case 3:
        var portName = fact1;
        throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

      case 4:
        var portName = fact1;
        var problem = fact2;
        throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

      case 5:
        throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

      case 6:
        var moduleName = fact1;
        throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

      case 8:
        var moduleName = fact1;
        var region = fact2;
        var message = fact3;
        throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

      case 9:
        var moduleName = fact1;
        var region = fact2;
        var value = fact3;
        var message = fact4;
        throw new Error('TODO in module `' + moduleName + '` from the `case` expression ' + _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    ' + _Debug_toString(value).replace('\n', '\n    ') + '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    '));

      case 10:
        throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

      case 11:
        throw new Error('Cannot perform mod 0. Division by zero error.');
    }
  }

  function _Debug_regionToString(region) {
    if (region.start.line === region.end.line) {
      return 'on line ' + region.start.line;
    }

    return 'on lines ' + region.start.line + ' through ' + region.end.line;
  } // EQUALITY


  function _Utils_eq(x, y) {
    for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {}

    return isEqual;
  }

  function _Utils_eqHelp(x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (_typeof(x) !== 'object' || x === null || y === null) {
      typeof x === 'function' && _Debug_crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_Utils_Tuple2(x, y));
      return true;
    }
    /**/


    if (x.$ === 'Set_elm_builtin') {
      x = $elm$core$Set$toList(x);
      y = $elm$core$Set$toList(y);
    }

    if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin') {
      x = $elm$core$Dict$toList(x);
      y = $elm$core$Dict$toList(y);
    } //*/

    /**_UNUSED/
    if (x.$ < 0)
    {
    	x = $elm$core$Dict$toList(x);
    	y = $elm$core$Dict$toList(y);
    }
    //*/


    for (var key in x) {
      if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }

    return true;
  }

  var _Utils_equal = F2(_Utils_eq);

  var _Utils_notEqual = F2(function (a, b) {
    return !_Utils_eq(a, b);
  }); // COMPARISONS
  // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
  // the particular integer values assigned to LT, EQ, and GT.


  function _Utils_cmp(x, y, ord) {
    if (_typeof(x) !== 'object') {
      return x === y ?
      /*EQ*/
      0 : x < y ?
      /*LT*/
      -1 :
      /*GT*/
      1;
    }
    /**/


    if (x instanceof String) {
      var a = x.valueOf();
      var b = y.valueOf();
      return a === b ? 0 : a < b ? -1 : 1;
    } //*/

    /**_UNUSED/
    if (typeof x.$ === 'undefined')
    //*/

    /**/


    if (x.$[0] === '#') //*/
      {
        return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
      } // traverse conses until end of a list or a mismatch


    for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES


    return ord || (x.b ?
    /*GT*/
    1 : y.b ?
    /*LT*/
    -1 :
    /*EQ*/
    0);
  }

  var _Utils_lt = F2(function (a, b) {
    return _Utils_cmp(a, b) < 0;
  });

  var _Utils_le = F2(function (a, b) {
    return _Utils_cmp(a, b) < 1;
  });

  var _Utils_gt = F2(function (a, b) {
    return _Utils_cmp(a, b) > 0;
  });

  var _Utils_ge = F2(function (a, b) {
    return _Utils_cmp(a, b) >= 0;
  });

  var _Utils_compare = F2(function (x, y) {
    var n = _Utils_cmp(x, y);

    return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
  }); // COMMON VALUES


  var _Utils_Tuple0_UNUSED = 0;
  var _Utils_Tuple0 = {
    $: '#0'
  };

  function _Utils_Tuple2_UNUSED(a, b) {
    return {
      a: a,
      b: b
    };
  }

  function _Utils_Tuple2(a, b) {
    return {
      $: '#2',
      a: a,
      b: b
    };
  }

  function _Utils_Tuple3_UNUSED(a, b, c) {
    return {
      a: a,
      b: b,
      c: c
    };
  }

  function _Utils_Tuple3(a, b, c) {
    return {
      $: '#3',
      a: a,
      b: b,
      c: c
    };
  }

  function _Utils_chr_UNUSED(c) {
    return c;
  }

  function _Utils_chr(c) {
    return new String(c);
  } // RECORDS


  function _Utils_update(oldRecord, updatedFields) {
    var newRecord = {};

    for (var key in oldRecord) {
      newRecord[key] = oldRecord[key];
    }

    for (var key in updatedFields) {
      newRecord[key] = updatedFields[key];
    }

    return newRecord;
  } // APPEND


  var _Utils_append = F2(_Utils_ap);

  function _Utils_ap(xs, ys) {
    // append Strings
    if (typeof xs === 'string') {
      return xs + ys;
    } // append Lists


    if (!xs.b) {
      return ys;
    }

    var root = _List_Cons(xs.a, ys);

    xs = xs.b;

    for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    {
      curr = curr.b = _List_Cons(xs.a, ys);
    }

    return root;
  } // MATH


  var _Basics_add = F2(function (a, b) {
    return a + b;
  });

  var _Basics_sub = F2(function (a, b) {
    return a - b;
  });

  var _Basics_mul = F2(function (a, b) {
    return a * b;
  });

  var _Basics_fdiv = F2(function (a, b) {
    return a / b;
  });

  var _Basics_idiv = F2(function (a, b) {
    return a / b | 0;
  });

  var _Basics_pow = F2(Math.pow);

  var _Basics_remainderBy = F2(function (b, a) {
    return a % b;
  }); // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf


  var _Basics_modBy = F2(function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
  }); // TRIGONOMETRY


  var _Basics_pi = Math.PI;
  var _Basics_e = Math.E;
  var _Basics_cos = Math.cos;
  var _Basics_sin = Math.sin;
  var _Basics_tan = Math.tan;
  var _Basics_acos = Math.acos;
  var _Basics_asin = Math.asin;
  var _Basics_atan = Math.atan;

  var _Basics_atan2 = F2(Math.atan2); // MORE MATH


  function _Basics_toFloat(x) {
    return x;
  }

  function _Basics_truncate(n) {
    return n | 0;
  }

  function _Basics_isInfinite(n) {
    return n === Infinity || n === -Infinity;
  }

  var _Basics_ceiling = Math.ceil;
  var _Basics_floor = Math.floor;
  var _Basics_round = Math.round;
  var _Basics_sqrt = Math.sqrt;
  var _Basics_log = Math.log;
  var _Basics_isNaN = isNaN; // BOOLEANS

  function _Basics_not(bool) {
    return !bool;
  }

  var _Basics_and = F2(function (a, b) {
    return a && b;
  });

  var _Basics_or = F2(function (a, b) {
    return a || b;
  });

  var _Basics_xor = F2(function (a, b) {
    return a !== b;
  });

  var _String_cons = F2(function (chr, str) {
    return chr + str;
  });

  function _String_uncons(string) {
    var word = string.charCodeAt(0);
    return !isNaN(word) ? $elm$core$Maybe$Just(0xD800 <= word && word <= 0xDBFF ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
  }

  var _String_append = F2(function (a, b) {
    return a + b;
  });

  function _String_length(str) {
    return str.length;
  }

  var _String_map = F2(function (func, string) {
    var len = string.length;
    var array = new Array(len);
    var i = 0;

    while (i < len) {
      var word = string.charCodeAt(i);

      if (0xD800 <= word && word <= 0xDBFF) {
        array[i] = func(_Utils_chr(string[i] + string[i + 1]));
        i += 2;
        continue;
      }

      array[i] = func(_Utils_chr(string[i]));
      i++;
    }

    return array.join('');
  });

  var _String_filter = F2(function (isGood, str) {
    var arr = [];
    var len = str.length;
    var i = 0;

    while (i < len) {
      var _char2 = str[i];
      var word = str.charCodeAt(i);
      i++;

      if (0xD800 <= word && word <= 0xDBFF) {
        _char2 += str[i];
        i++;
      }

      if (isGood(_Utils_chr(_char2))) {
        arr.push(_char2);
      }
    }

    return arr.join('');
  });

  function _String_reverse(str) {
    var len = str.length;
    var arr = new Array(len);
    var i = 0;

    while (i < len) {
      var word = str.charCodeAt(i);

      if (0xD800 <= word && word <= 0xDBFF) {
        arr[len - i] = str[i + 1];
        i++;
        arr[len - i] = str[i - 1];
        i++;
      } else {
        arr[len - i] = str[i];
        i++;
      }
    }

    return arr.join('');
  }

  var _String_foldl = F3(function (func, state, string) {
    var len = string.length;
    var i = 0;

    while (i < len) {
      var _char3 = string[i];
      var word = string.charCodeAt(i);
      i++;

      if (0xD800 <= word && word <= 0xDBFF) {
        _char3 += string[i];
        i++;
      }

      state = A2(func, _Utils_chr(_char3), state);
    }

    return state;
  });

  var _String_foldr = F3(function (func, state, string) {
    var i = string.length;

    while (i--) {
      var _char4 = string[i];
      var word = string.charCodeAt(i);

      if (0xDC00 <= word && word <= 0xDFFF) {
        i--;
        _char4 = string[i] + _char4;
      }

      state = A2(func, _Utils_chr(_char4), state);
    }

    return state;
  });

  var _String_split = F2(function (sep, str) {
    return str.split(sep);
  });

  var _String_join = F2(function (sep, strs) {
    return strs.join(sep);
  });

  var _String_slice = F3(function (start, end, str) {
    return str.slice(start, end);
  });

  function _String_trim(str) {
    return str.trim();
  }

  function _String_trimLeft(str) {
    return str.replace(/^\s+/, '');
  }

  function _String_trimRight(str) {
    return str.replace(/\s+$/, '');
  }

  function _String_words(str) {
    return _List_fromArray(str.trim().split(/\s+/g));
  }

  function _String_lines(str) {
    return _List_fromArray(str.split(/\r\n|\r|\n/g));
  }

  function _String_toUpper(str) {
    return str.toUpperCase();
  }

  function _String_toLower(str) {
    return str.toLowerCase();
  }

  var _String_any = F2(function (isGood, string) {
    var i = string.length;

    while (i--) {
      var _char5 = string[i];
      var word = string.charCodeAt(i);

      if (0xDC00 <= word && word <= 0xDFFF) {
        i--;
        _char5 = string[i] + _char5;
      }

      if (isGood(_Utils_chr(_char5))) {
        return true;
      }
    }

    return false;
  });

  var _String_all = F2(function (isGood, string) {
    var i = string.length;

    while (i--) {
      var _char6 = string[i];
      var word = string.charCodeAt(i);

      if (0xDC00 <= word && word <= 0xDFFF) {
        i--;
        _char6 = string[i] + _char6;
      }

      if (!isGood(_Utils_chr(_char6))) {
        return false;
      }
    }

    return true;
  });

  var _String_contains = F2(function (sub, str) {
    return str.indexOf(sub) > -1;
  });

  var _String_startsWith = F2(function (sub, str) {
    return str.indexOf(sub) === 0;
  });

  var _String_endsWith = F2(function (sub, str) {
    return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
  });

  var _String_indexes = F2(function (sub, str) {
    var subLen = sub.length;

    if (subLen < 1) {
      return _List_Nil;
    }

    var i = 0;
    var is = [];

    while ((i = str.indexOf(sub, i)) > -1) {
      is.push(i);
      i = i + subLen;
    }

    return _List_fromArray(is);
  }); // TO STRING


  function _String_fromNumber(number) {
    return number + '';
  } // INT CONVERSIONS


  function _String_toInt(str) {
    var total = 0;
    var code0 = str.charCodeAt(0);
    var start = code0 == 0x2B
    /* + */
    || code0 == 0x2D
    /* - */
    ? 1 : 0;

    for (var i = start; i < str.length; ++i) {
      var code = str.charCodeAt(i);

      if (code < 0x30 || 0x39 < code) {
        return $elm$core$Maybe$Nothing;
      }

      total = 10 * total + code - 0x30;
    }

    return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
  } // FLOAT CONVERSIONS


  function _String_toFloat(s) {
    // check if it is a hex, octal, or binary number
    if (s.length === 0 || /[\sxbo]/.test(s)) {
      return $elm$core$Maybe$Nothing;
    }

    var n = +s; // faster isNaN check

    return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
  }

  function _String_fromList(chars) {
    return _List_toArray(chars).join('');
  }

  function _Char_toCode(_char7) {
    var code = _char7.charCodeAt(0);

    if (0xD800 <= code && code <= 0xDBFF) {
      return (code - 0xD800) * 0x400 + _char7.charCodeAt(1) - 0xDC00 + 0x10000;
    }

    return code;
  }

  function _Char_fromCode(code) {
    return _Utils_chr(code < 0 || 0x10FFFF < code ? "\uFFFD" : code <= 0xFFFF ? String.fromCharCode(code) : (code -= 0x10000, String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)));
  }

  function _Char_toUpper(_char8) {
    return _Utils_chr(_char8.toUpperCase());
  }

  function _Char_toLower(_char9) {
    return _Utils_chr(_char9.toLowerCase());
  }

  function _Char_toLocaleUpper(_char10) {
    return _Utils_chr(_char10.toLocaleUpperCase());
  }

  function _Char_toLocaleLower(_char11) {
    return _Utils_chr(_char11.toLocaleLowerCase());
  }
  /**/


  function _Json_errorToString(error) {
    return $elm$json$Json$Decode$errorToString(error);
  } //*/
  // CORE DECODERS


  function _Json_succeed(msg) {
    return {
      $: 0,
      a: msg
    };
  }

  function _Json_fail(msg) {
    return {
      $: 1,
      a: msg
    };
  }

  function _Json_decodePrim(decoder) {
    return {
      $: 2,
      b: decoder
    };
  }

  var _Json_decodeInt = _Json_decodePrim(function (value) {
    return typeof value !== 'number' ? _Json_expecting('an INT', value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting('an INT', value);
  });

  var _Json_decodeBool = _Json_decodePrim(function (value) {
    return typeof value === 'boolean' ? $elm$core$Result$Ok(value) : _Json_expecting('a BOOL', value);
  });

  var _Json_decodeFloat = _Json_decodePrim(function (value) {
    return typeof value === 'number' ? $elm$core$Result$Ok(value) : _Json_expecting('a FLOAT', value);
  });

  var _Json_decodeValue = _Json_decodePrim(function (value) {
    return $elm$core$Result$Ok(_Json_wrap(value));
  });

  var _Json_decodeString = _Json_decodePrim(function (value) {
    return typeof value === 'string' ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + '') : _Json_expecting('a STRING', value);
  });

  function _Json_decodeList(decoder) {
    return {
      $: 3,
      b: decoder
    };
  }

  function _Json_decodeArray(decoder) {
    return {
      $: 4,
      b: decoder
    };
  }

  function _Json_decodeNull(value) {
    return {
      $: 5,
      c: value
    };
  }

  var _Json_decodeField = F2(function (field, decoder) {
    return {
      $: 6,
      d: field,
      b: decoder
    };
  });

  var _Json_decodeIndex = F2(function (index, decoder) {
    return {
      $: 7,
      e: index,
      b: decoder
    };
  });

  function _Json_decodeKeyValuePairs(decoder) {
    return {
      $: 8,
      b: decoder
    };
  }

  function _Json_mapMany(f, decoders) {
    return {
      $: 9,
      f: f,
      g: decoders
    };
  }

  var _Json_andThen = F2(function (callback, decoder) {
    return {
      $: 10,
      b: decoder,
      h: callback
    };
  });

  function _Json_oneOf(decoders) {
    return {
      $: 11,
      g: decoders
    };
  } // DECODING OBJECTS


  var _Json_map1 = F2(function (f, d1) {
    return _Json_mapMany(f, [d1]);
  });

  var _Json_map2 = F3(function (f, d1, d2) {
    return _Json_mapMany(f, [d1, d2]);
  });

  var _Json_map3 = F4(function (f, d1, d2, d3) {
    return _Json_mapMany(f, [d1, d2, d3]);
  });

  var _Json_map4 = F5(function (f, d1, d2, d3, d4) {
    return _Json_mapMany(f, [d1, d2, d3, d4]);
  });

  var _Json_map5 = F6(function (f, d1, d2, d3, d4, d5) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
  });

  var _Json_map6 = F7(function (f, d1, d2, d3, d4, d5, d6) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
  });

  var _Json_map7 = F8(function (f, d1, d2, d3, d4, d5, d6, d7) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
  });

  var _Json_map8 = F9(function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
  }); // DECODE


  var _Json_runOnString = F2(function (decoder, string) {
    try {
      var value = JSON.parse(string);
      return _Json_runHelp(decoder, value);
    } catch (e) {
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
    }
  });

  var _Json_run = F2(function (decoder, value) {
    return _Json_runHelp(decoder, _Json_unwrap(value));
  });

  function _Json_runHelp(decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting('null', value);

      case 3:
        if (!_Json_isArray(value)) {
          return _Json_expecting('a LIST', value);
        }

        return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

      case 4:
        if (!_Json_isArray(value)) {
          return _Json_expecting('an ARRAY', value);
        }

        return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

      case 6:
        var field = decoder.d;

        if (_typeof(value) !== 'object' || value === null || !(field in value)) {
          return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
        }

        var result = _Json_runHelp(decoder.b, value[field]);

        return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

      case 7:
        var index = decoder.e;

        if (!_Json_isArray(value)) {
          return _Json_expecting('an ARRAY', value);
        }

        if (index >= value.length) {
          return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
        }

        var result = _Json_runHelp(decoder.b, value[index]);

        return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

      case 8:
        if (_typeof(value) !== 'object' || value === null || _Json_isArray(value)) {
          return _Json_expecting('an OBJECT', value);
        }

        var keyValuePairs = _List_Nil; // TODO test perf of Object.keys and switch when support is good enough

        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _Json_runHelp(decoder.b, value[key]);

            if (!$elm$core$Result$isOk(result)) {
              return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
            }

            keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
          }
        }

        return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;

        for (var i = 0; i < decoders.length; i++) {
          var result = _Json_runHelp(decoders[i], value);

          if (!$elm$core$Result$isOk(result)) {
            return result;
          }

          answer = answer(result.a);
        }

        return $elm$core$Result$Ok(answer);

      case 10:
        var result = _Json_runHelp(decoder.b, value);

        return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _List_Nil;

        for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
        {
          var result = _Json_runHelp(temp.a, value);

          if ($elm$core$Result$isOk(result)) {
            return result;
          }

          errors = _List_Cons(result.a, errors);
        }

        return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

      case 1:
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

      case 0:
        return $elm$core$Result$Ok(decoder.a);
    }
  }

  function _Json_runArrayDecoder(decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);

    for (var i = 0; i < len; i++) {
      var result = _Json_runHelp(decoder, value[i]);

      if (!$elm$core$Result$isOk(result)) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
      }

      array[i] = result.a;
    }

    return $elm$core$Result$Ok(toElmValue(array));
  }

  function _Json_isArray(value) {
    return Array.isArray(value) || typeof FileList !== 'undefined' && value instanceof FileList;
  }

  function _Json_toElmArray(array) {
    return A2($elm$core$Array$initialize, array.length, function (i) {
      return array[i];
    });
  }

  function _Json_expecting(type, value) {
    return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
  } // EQUALITY


  function _Json_equality(x, y) {
    if (x === y) {
      return true;
    }

    if (x.$ !== y.$) {
      return false;
    }

    switch (x.$) {
      case 0:
      case 1:
        return x.a === y.a;

      case 2:
        return x.b === y.b;

      case 5:
        return x.c === y.c;

      case 3:
      case 4:
      case 8:
        return _Json_equality(x.b, y.b);

      case 6:
        return x.d === y.d && _Json_equality(x.b, y.b);

      case 7:
        return x.e === y.e && _Json_equality(x.b, y.b);

      case 9:
        return x.f === y.f && _Json_listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _Json_equality(x.b, y.b);

      case 11:
        return _Json_listEquality(x.g, y.g);
    }
  }

  function _Json_listEquality(aDecoders, bDecoders) {
    var len = aDecoders.length;

    if (len !== bDecoders.length) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      if (!_Json_equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }

    return true;
  } // ENCODE


  var _Json_encode = F2(function (indentLevel, value) {
    return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
  });

  function _Json_wrap(value) {
    return {
      $: 0,
      a: value
    };
  }

  function _Json_unwrap(value) {
    return value.a;
  }

  function _Json_wrap_UNUSED(value) {
    return value;
  }

  function _Json_unwrap_UNUSED(value) {
    return value;
  }

  function _Json_emptyArray() {
    return [];
  }

  function _Json_emptyObject() {
    return {};
  }

  var _Json_addField = F3(function (key, value, object) {
    object[key] = _Json_unwrap(value);
    return object;
  });

  function _Json_addEntry(func) {
    return F2(function (entry, array) {
      array.push(_Json_unwrap(func(entry)));
      return array;
    });
  }

  var _Json_encodeNull = _Json_wrap(null); // TASKS


  function _Scheduler_succeed(value) {
    return {
      $: 0,
      a: value
    };
  }

  function _Scheduler_fail(error) {
    return {
      $: 1,
      a: error
    };
  }

  function _Scheduler_binding(callback) {
    return {
      $: 2,
      b: callback,
      c: null
    };
  }

  var _Scheduler_andThen = F2(function (callback, task) {
    return {
      $: 3,
      b: callback,
      d: task
    };
  });

  var _Scheduler_onError = F2(function (callback, task) {
    return {
      $: 4,
      b: callback,
      d: task
    };
  });

  function _Scheduler_receive(callback) {
    return {
      $: 5,
      b: callback
    };
  } // PROCESSES


  var _Scheduler_guid = 0;

  function _Scheduler_rawSpawn(task) {
    var proc = {
      $: 0,
      e: _Scheduler_guid++,
      f: task,
      g: null,
      h: []
    };

    _Scheduler_enqueue(proc);

    return proc;
  }

  function _Scheduler_spawn(task) {
    return _Scheduler_binding(function (callback) {
      callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
    });
  }

  function _Scheduler_rawSend(proc, msg) {
    proc.h.push(msg);

    _Scheduler_enqueue(proc);
  }

  var _Scheduler_send = F2(function (proc, msg) {
    return _Scheduler_binding(function (callback) {
      _Scheduler_rawSend(proc, msg);

      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  function _Scheduler_kill(proc) {
    return _Scheduler_binding(function (callback) {
      var task = proc.f;

      if (task.$ === 2 && task.c) {
        task.c();
      }

      proc.f = null;
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  }
  /* STEP PROCESSES
  
  type alias Process =
    { $ : tag
    , id : unique_id
    , root : Task
    , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
    , mailbox : [msg]
    }
  
  */


  var _Scheduler_working = false;
  var _Scheduler_queue = [];

  function _Scheduler_enqueue(proc) {
    _Scheduler_queue.push(proc);

    if (_Scheduler_working) {
      return;
    }

    _Scheduler_working = true;

    while (proc = _Scheduler_queue.shift()) {
      _Scheduler_step(proc);
    }

    _Scheduler_working = false;
  }

  function _Scheduler_step(proc) {
    while (proc.f) {
      var rootTag = proc.f.$;

      if (rootTag === 0 || rootTag === 1) {
        while (proc.g && proc.g.$ !== rootTag) {
          proc.g = proc.g.i;
        }

        if (!proc.g) {
          return;
        }

        proc.f = proc.g.b(proc.f.a);
        proc.g = proc.g.i;
      } else if (rootTag === 2) {
        proc.f.c = proc.f.b(function (newRoot) {
          proc.f = newRoot;

          _Scheduler_enqueue(proc);
        });
        return;
      } else if (rootTag === 5) {
        if (proc.h.length === 0) {
          return;
        }

        proc.f = proc.f.b(proc.h.shift());
      } else // if (rootTag === 3 || rootTag === 4)
        {
          proc.g = {
            $: rootTag === 3 ? 0 : 1,
            b: proc.f.b,
            i: proc.g
          };
          proc.f = proc.f.d;
        }
    }
  }

  function _Process_sleep(time) {
    return _Scheduler_binding(function (callback) {
      var id = setTimeout(function () {
        callback(_Scheduler_succeed(_Utils_Tuple0));
      }, time);
      return function () {
        clearTimeout(id);
      };
    });
  } // PROGRAMS


  var _Platform_worker = F4(function (impl, flagDecoder, debugMetadata, args) {
    return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function () {
      return function () {};
    });
  }); // INITIALIZE A PROGRAM


  function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
    $elm$core$Result$isOk(result) || _Debug_crash(2
    /**/
    , _Json_errorToString(result.a)
    /**/
    );
    var managers = {};
    result = init(result.a);
    var model = result.a;
    var stepper = stepperBuilder(sendToApp, model);

    var ports = _Platform_setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      result = A2(update, msg, model);
      stepper(model = result.a, viewMetadata);

      _Platform_enqueueEffects(managers, result.b, subscriptions(model));
    }

    _Platform_enqueueEffects(managers, result.b, subscriptions(model));

    return ports ? {
      ports: ports
    } : {};
  } // TRACK PRELOADS
  //
  // This is used by code in elm/browser and elm/http
  // to register any HTTP requests that are triggered by init.
  //


  var _Platform_preload;

  function _Platform_registerPreload(url) {
    _Platform_preload.add(url);
  } // EFFECT MANAGERS


  var _Platform_effectManagers = {};

  function _Platform_setupEffects(managers, sendToApp) {
    var ports; // setup all necessary effect managers

    for (var key in _Platform_effectManagers) {
      var manager = _Platform_effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _Platform_instantiateManager(manager, sendToApp);
    }

    return ports;
  }

  function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
    return {
      b: init,
      c: onEffects,
      d: onSelfMsg,
      e: cmdMap,
      f: subMap
    };
  }

  function _Platform_instantiateManager(info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };
    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    function loop(state) {
      return A2(_Scheduler_andThen, loop, _Scheduler_receive(function (msg) {
        var value = msg.a;

        if (msg.$ === 0) {
          return A3(onSelfMsg, router, value, state);
        }

        return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
      }));
    }

    return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
  } // ROUTING


  var _Platform_sendToApp = F2(function (router, msg) {
    return _Scheduler_binding(function (callback) {
      router.g(msg);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  var _Platform_sendToSelf = F2(function (router, msg) {
    return A2(_Scheduler_send, router.h, {
      $: 0,
      a: msg
    });
  }); // BAGS


  function _Platform_leaf(home) {
    return function (value) {
      return {
        $: 1,
        k: home,
        l: value
      };
    };
  }

  function _Platform_batch(list) {
    return {
      $: 2,
      m: list
    };
  }

  var _Platform_map = F2(function (tagger, bag) {
    return {
      $: 3,
      n: tagger,
      o: bag
    };
  }); // PIPE BAGS INTO EFFECT MANAGERS
  //
  // Effects must be queued!
  //
  // Say your init contains a synchronous command, like Time.now or Time.here
  //
  //   - This will produce a batch of effects (FX_1)
  //   - The synchronous task triggers the subsequent `update` call
  //   - This will produce a batch of effects (FX_2)
  //
  // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
  // before subscriptions from FX_1. No good! Earlier versions of this code had
  // this problem, leading to these reports:
  //
  //   https://github.com/elm/core/issues/980
  //   https://github.com/elm/core/pull/981
  //   https://github.com/elm/compiler/issues/1776
  //
  // The queue is necessary to avoid ordering issues for synchronous commands.
  // Why use true/false here? Why not just check the length of the queue?
  // The goal is to detect "are we currently dispatching effects?" If we
  // are, we need to bail and let the ongoing while loop handle things.
  //
  // Now say the queue has 1 element. When we dequeue the final element,
  // the queue will be empty, but we are still actively dispatching effects.
  // So you could get queue jumping in a really tricky category of cases.
  //


  var _Platform_effectsQueue = [];
  var _Platform_effectsActive = false;

  function _Platform_enqueueEffects(managers, cmdBag, subBag) {
    _Platform_effectsQueue.push({
      p: managers,
      q: cmdBag,
      r: subBag
    });

    if (_Platform_effectsActive) return;
    _Platform_effectsActive = true;

    for (var fx; fx = _Platform_effectsQueue.shift();) {
      _Platform_dispatchEffects(fx.p, fx.q, fx.r);
    }

    _Platform_effectsActive = false;
  }

  function _Platform_dispatchEffects(managers, cmdBag, subBag) {
    var effectsDict = {};

    _Platform_gatherEffects(true, cmdBag, effectsDict, null);

    _Platform_gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _Scheduler_rawSend(managers[home], {
        $: 'fx',
        a: effectsDict[home] || {
          i: _List_Nil,
          j: _List_Nil
        }
      });
    }
  }

  function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;

        var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);

        effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
        {
          _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
        }

        return;

      case 3:
        _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers
        });

        return;
    }
  }

  function _Platform_toEffect(isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }

      return x;
    }

    var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
    return A2(map, applyTaggers, value);
  }

  function _Platform_insert(isCmd, newEffect, effects) {
    effects = effects || {
      i: _List_Nil,
      j: _List_Nil
    };
    isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
    return effects;
  } // PORTS


  function _Platform_checkPortName(name) {
    if (_Platform_effectManagers[name]) {
      _Debug_crash(3, name);
    }
  } // OUTGOING PORTS


  function _Platform_outgoingPort(name, converter) {
    _Platform_checkPortName(name);

    _Platform_effectManagers[name] = {
      e: _Platform_outgoingPortMap,
      u: converter,
      a: _Platform_setupOutgoingPort
    };
    return _Platform_leaf(name);
  }

  var _Platform_outgoingPortMap = F2(function (tagger, value) {
    return value;
  });

  function _Platform_setupOutgoingPort(name) {
    var subs = [];
    var converter = _Platform_effectManagers[name].u; // CREATE MANAGER

    var init = _Process_sleep(0);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
      for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
      {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;

        var value = _Json_unwrap(converter(cmdList.a));

        for (var i = 0; i < currentSubs.length; i++) {
          currentSubs[i](value);
        }
      }

      return init;
    }); // PUBLIC API

    function subscribe(callback) {
      subs.push(callback);
    }

    function unsubscribe(callback) {
      // copy subs into a new array in case unsubscribe is called within a
      // subscribed callback
      subs = subs.slice();
      var index = subs.indexOf(callback);

      if (index >= 0) {
        subs.splice(index, 1);
      }
    }

    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };
  } // INCOMING PORTS


  function _Platform_incomingPort(name, converter) {
    _Platform_checkPortName(name);

    _Platform_effectManagers[name] = {
      f: _Platform_incomingPortMap,
      u: converter,
      a: _Platform_setupIncomingPort
    };
    return _Platform_leaf(name);
  }

  var _Platform_incomingPortMap = F2(function (tagger, finalTagger) {
    return function (value) {
      return tagger(finalTagger(value));
    };
  });

  function _Platform_setupIncomingPort(name, sendToApp) {
    var subs = _List_Nil;
    var converter = _Platform_effectManagers[name].u; // CREATE MANAGER

    var init = _Scheduler_succeed(null);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function (router, subList, state) {
      subs = subList;
      return init;
    }); // PUBLIC API

    function send(incomingValue) {
      var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
      $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
      var value = result.a;

      for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
      {
        sendToApp(temp.a(value));
      }
    }

    return {
      send: send
    };
  } // EXPORT ELM MODULES
  //
  // Have DEBUG and PROD versions so that we can (1) give nicer errors in
  // debug mode and (2) not pay for the bits needed for that in prod mode.
  //


  function _Platform_export_UNUSED(exports) {
    scope['Elm'] ? _Platform_mergeExportsProd(scope['Elm'], exports) : scope['Elm'] = exports;
  }

  function _Platform_mergeExportsProd(obj, exports) {
    for (var name in exports) {
      name in obj ? name == 'init' ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
    }
  }

  function _Platform_export(exports) {
    scope['Elm'] ? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports) : scope['Elm'] = exports;
  }

  function _Platform_mergeExportsDebug(moduleName, obj, exports) {
    for (var name in exports) {
      name in obj ? name == 'init' ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name]) : obj[name] = exports[name];
    }
  }

  var _Bitwise_and = F2(function (a, b) {
    return a & b;
  });

  var _Bitwise_or = F2(function (a, b) {
    return a | b;
  });

  var _Bitwise_xor = F2(function (a, b) {
    return a ^ b;
  });

  function _Bitwise_complement(a) {
    return ~a;
  }

  ;

  var _Bitwise_shiftLeftBy = F2(function (offset, a) {
    return a << offset;
  });

  var _Bitwise_shiftRightBy = F2(function (offset, a) {
    return a >> offset;
  });

  var _Bitwise_shiftRightZfBy = F2(function (offset, a) {
    return a >>> offset;
  }); // STRINGS


  var _Parser_isSubString = F5(function (smallString, offset, row, col, bigString) {
    var smallLength = smallString.length;
    var isGood = offset + smallLength <= bigString.length;

    for (var i = 0; isGood && i < smallLength;) {
      var code = bigString.charCodeAt(offset);
      isGood = smallString[i++] === bigString[offset++] && (code === 0x000A
      /* \n */
      ? (row++, col = 1) : (col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1));
    }

    return _Utils_Tuple3(isGood ? offset : -1, row, col);
  }); // CHARS


  var _Parser_isSubChar = F3(function (predicate, offset, string) {
    return string.length <= offset ? -1 : (string.charCodeAt(offset) & 0xF800) === 0xD800 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === '\n' ? -2 : offset + 1 : -1;
  });

  var _Parser_isAsciiCode = F3(function (code, offset, string) {
    return string.charCodeAt(offset) === code;
  }); // NUMBERS


  var _Parser_chompBase10 = F2(function (offset, string) {
    for (; offset < string.length; offset++) {
      var code = string.charCodeAt(offset);

      if (code < 0x30 || 0x39 < code) {
        return offset;
      }
    }

    return offset;
  });

  var _Parser_consumeBase = F3(function (base, offset, string) {
    for (var total = 0; offset < string.length; offset++) {
      var digit = string.charCodeAt(offset) - 0x30;
      if (digit < 0 || base <= digit) break;
      total = base * total + digit;
    }

    return _Utils_Tuple2(offset, total);
  });

  var _Parser_consumeBase16 = F2(function (offset, string) {
    for (var total = 0; offset < string.length; offset++) {
      var code = string.charCodeAt(offset);

      if (0x30 <= code && code <= 0x39) {
        total = 16 * total + code - 0x30;
      } else if (0x41 <= code && code <= 0x46) {
        total = 16 * total + code - 55;
      } else if (0x61 <= code && code <= 0x66) {
        total = 16 * total + code - 87;
      } else {
        break;
      }
    }

    return _Utils_Tuple2(offset, total);
  }); // FIND STRING


  var _Parser_findSubString = F5(function (smallString, offset, row, col, bigString) {
    var newOffset = bigString.indexOf(smallString, offset);
    var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

    while (offset < target) {
      var code = bigString.charCodeAt(offset++);
      code === 0x000A
      /* \n */
      ? (col = 1, row++) : (col++, (code & 0xF800) === 0xD800 && offset++);
    }

    return _Utils_Tuple3(newOffset, row, col);
  });

  var $elm$core$Basics$EQ = {
    $: 'EQ'
  };
  var $elm$core$Basics$LT = {
    $: 'LT'
  };
  var $elm$core$List$cons = _List_cons;
  var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
  var $elm$core$Array$foldr = F3(function (func, baseCase, _v0) {
    var tree = _v0.c;
    var tail = _v0.d;
    var helper = F2(function (node, acc) {
      if (node.$ === 'SubTree') {
        var subTree = node.a;
        return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
      } else {
        var values = node.a;
        return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
      }
    });
    return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
  });

  var $elm$core$Array$toList = function $elm$core$Array$toList(array) {
    return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
  };

  var $elm$core$Dict$foldr = F3(function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === 'RBEmpty_elm_builtin') {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;
        var $temp$func = func,
            $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)),
            $temp$t = left;
        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  });

  var $elm$core$Dict$toList = function $elm$core$Dict$toList(dict) {
    return A3($elm$core$Dict$foldr, F3(function (key, value, list) {
      return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
    }), _List_Nil, dict);
  };

  var $elm$core$Dict$keys = function $elm$core$Dict$keys(dict) {
    return A3($elm$core$Dict$foldr, F3(function (key, value, keyList) {
      return A2($elm$core$List$cons, key, keyList);
    }), _List_Nil, dict);
  };

  var $elm$core$Set$toList = function $elm$core$Set$toList(_v0) {
    var dict = _v0.a;
    return $elm$core$Dict$keys(dict);
  };

  var $elm$core$Basics$GT = {
    $: 'GT'
  };

  var $elm$core$Result$Err = function $elm$core$Result$Err(a) {
    return {
      $: 'Err',
      a: a
    };
  };

  var $elm$json$Json$Decode$Failure = F2(function (a, b) {
    return {
      $: 'Failure',
      a: a,
      b: b
    };
  });
  var $elm$json$Json$Decode$Field = F2(function (a, b) {
    return {
      $: 'Field',
      a: a,
      b: b
    };
  });
  var $elm$json$Json$Decode$Index = F2(function (a, b) {
    return {
      $: 'Index',
      a: a,
      b: b
    };
  });

  var $elm$core$Result$Ok = function $elm$core$Result$Ok(a) {
    return {
      $: 'Ok',
      a: a
    };
  };

  var $elm$json$Json$Decode$OneOf = function $elm$json$Json$Decode$OneOf(a) {
    return {
      $: 'OneOf',
      a: a
    };
  };

  var $elm$core$Basics$False = {
    $: 'False'
  };
  var $elm$core$Basics$add = _Basics_add;

  var $elm$core$Maybe$Just = function $elm$core$Maybe$Just(a) {
    return {
      $: 'Just',
      a: a
    };
  };

  var $elm$core$Maybe$Nothing = {
    $: 'Nothing'
  };
  var $elm$core$String$all = _String_all;
  var $elm$core$Basics$and = _Basics_and;
  var $elm$core$Basics$append = _Utils_append;
  var $elm$json$Json$Encode$encode = _Json_encode;
  var $elm$core$String$fromInt = _String_fromNumber;
  var $elm$core$String$join = F2(function (sep, chunks) {
    return A2(_String_join, sep, _List_toArray(chunks));
  });
  var $elm$core$String$split = F2(function (sep, string) {
    return _List_fromArray(A2(_String_split, sep, string));
  });

  var $elm$json$Json$Decode$indent = function $elm$json$Json$Decode$indent(str) {
    return A2($elm$core$String$join, '\n    ', A2($elm$core$String$split, '\n', str));
  };

  var $elm$core$List$foldl = F3(function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        var $temp$func = func,
            $temp$acc = A2(func, x, acc),
            $temp$list = xs;
        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  });

  var $elm$core$List$length = function $elm$core$List$length(xs) {
    return A3($elm$core$List$foldl, F2(function (_v0, i) {
      return i + 1;
    }), 0, xs);
  };

  var $elm$core$List$map2 = _List_map2;
  var $elm$core$Basics$le = _Utils_le;
  var $elm$core$Basics$sub = _Basics_sub;
  var $elm$core$List$rangeHelp = F3(function (lo, hi, list) {
    rangeHelp: while (true) {
      if (_Utils_cmp(lo, hi) < 1) {
        var $temp$lo = lo,
            $temp$hi = hi - 1,
            $temp$list = A2($elm$core$List$cons, hi, list);
        lo = $temp$lo;
        hi = $temp$hi;
        list = $temp$list;
        continue rangeHelp;
      } else {
        return list;
      }
    }
  });
  var $elm$core$List$range = F2(function (lo, hi) {
    return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
  });
  var $elm$core$List$indexedMap = F2(function (f, xs) {
    return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
  });
  var $elm$core$Char$toCode = _Char_toCode;

  var $elm$core$Char$isLower = function $elm$core$Char$isLower(_char) {
    var code = $elm$core$Char$toCode(_char);
    return 97 <= code && code <= 122;
  };

  var $elm$core$Char$isUpper = function $elm$core$Char$isUpper(_char) {
    var code = $elm$core$Char$toCode(_char);
    return code <= 90 && 65 <= code;
  };

  var $elm$core$Basics$or = _Basics_or;

  var $elm$core$Char$isAlpha = function $elm$core$Char$isAlpha(_char) {
    return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
  };

  var $elm$core$Char$isDigit = function $elm$core$Char$isDigit(_char) {
    var code = $elm$core$Char$toCode(_char);
    return code <= 57 && 48 <= code;
  };

  var $elm$core$Char$isAlphaNum = function $elm$core$Char$isAlphaNum(_char) {
    return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
  };

  var $elm$core$List$reverse = function $elm$core$List$reverse(list) {
    return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
  };

  var $elm$core$String$uncons = _String_uncons;
  var $elm$json$Json$Decode$errorOneOf = F2(function (i, error) {
    return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
  });

  var $elm$json$Json$Decode$errorToString = function $elm$json$Json$Decode$errorToString(error) {
    return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
  };

  var $elm$json$Json$Decode$errorToStringHelp = F2(function (error, context) {
    errorToStringHelp: while (true) {
      switch (error.$) {
        case 'Field':
          var f = error.a;
          var err = error.b;

          var isSimple = function () {
            var _v1 = $elm$core$String$uncons(f);

            if (_v1.$ === 'Nothing') {
              return false;
            } else {
              var _v2 = _v1.a;
              var _char = _v2.a;
              var rest = _v2.b;
              return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
            }
          }();

          var fieldName = isSimple ? '.' + f : '[\'' + (f + '\']');
          var $temp$error = err,
              $temp$context = A2($elm$core$List$cons, fieldName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;

        case 'Index':
          var i = error.a;
          var err = error.b;
          var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
          var $temp$error = err,
              $temp$context = A2($elm$core$List$cons, indexName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;

        case 'OneOf':
          var errors = error.a;

          if (!errors.b) {
            return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
              if (!context.b) {
                return '!';
              } else {
                return ' at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
              }
            }();
          } else {
            if (!errors.b.b) {
              var err = errors.a;
              var $temp$error = err,
                  $temp$context = context;
              error = $temp$error;
              context = $temp$context;
              continue errorToStringHelp;
            } else {
              var starter = function () {
                if (!context.b) {
                  return 'Json.Decode.oneOf';
                } else {
                  return 'The Json.Decode.oneOf at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
                }
              }();

              var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt($elm$core$List$length(errors)) + ' ways:'));
              return A2($elm$core$String$join, '\n\n', A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
            }
          }

        default:
          var msg = error.a;
          var json = error.b;

          var introduction = function () {
            if (!context.b) {
              return 'Problem with the given value:\n\n';
            } else {
              return 'Problem with the value at json' + (A2($elm$core$String$join, '', $elm$core$List$reverse(context)) + ':\n\n    ');
            }
          }();

          return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
      }
    }
  });
  var $elm$core$Array$branchFactor = 32;
  var $elm$core$Array$Array_elm_builtin = F4(function (a, b, c, d) {
    return {
      $: 'Array_elm_builtin',
      a: a,
      b: b,
      c: c,
      d: d
    };
  });
  var $elm$core$Elm$JsArray$empty = _JsArray_empty;
  var $elm$core$Basics$ceiling = _Basics_ceiling;
  var $elm$core$Basics$fdiv = _Basics_fdiv;
  var $elm$core$Basics$logBase = F2(function (base, number) {
    return _Basics_log(number) / _Basics_log(base);
  });
  var $elm$core$Basics$toFloat = _Basics_toFloat;
  var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
  var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
  var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;

  var $elm$core$Array$Leaf = function $elm$core$Array$Leaf(a) {
    return {
      $: 'Leaf',
      a: a
    };
  };

  var $elm$core$Basics$apL = F2(function (f, x) {
    return f(x);
  });
  var $elm$core$Basics$apR = F2(function (x, f) {
    return f(x);
  });
  var $elm$core$Basics$eq = _Utils_equal;
  var $elm$core$Basics$floor = _Basics_floor;
  var $elm$core$Elm$JsArray$length = _JsArray_length;
  var $elm$core$Basics$gt = _Utils_gt;
  var $elm$core$Basics$max = F2(function (x, y) {
    return _Utils_cmp(x, y) > 0 ? x : y;
  });
  var $elm$core$Basics$mul = _Basics_mul;

  var $elm$core$Array$SubTree = function $elm$core$Array$SubTree(a) {
    return {
      $: 'SubTree',
      a: a
    };
  };

  var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
  var $elm$core$Array$compressNodes = F2(function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);

      var node = _v0.a;
      var remainingNodes = _v0.b;
      var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);

      if (!remainingNodes.b) {
        return $elm$core$List$reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
            $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  });

  var $elm$core$Tuple$first = function $elm$core$Tuple$first(_v0) {
    var x = _v0.a;
    return x;
  };

  var $elm$core$Array$treeFromBuilder = F2(function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);

      if (newNodeSize === 1) {
        return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
      } else {
        var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
            $temp$nodeListSize = newNodeSize;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  });
  var $elm$core$Array$builderToArray = F2(function (reverseNodeList, builder) {
    if (!builder.nodeListSize) {
      return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
    } else {
      var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
      var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
      var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
      var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
      return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
    }
  });
  var $elm$core$Basics$idiv = _Basics_idiv;
  var $elm$core$Basics$lt = _Utils_lt;
  var $elm$core$Array$initializeHelp = F5(function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return A2($elm$core$Array$builderToArray, false, {
          nodeList: nodeList,
          nodeListSize: len / $elm$core$Array$branchFactor | 0,
          tail: tail
        });
      } else {
        var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
        var $temp$fn = fn,
            $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
            $temp$len = len,
            $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
            $temp$tail = tail;
        fn = $temp$fn;
        fromIndex = $temp$fromIndex;
        len = $temp$len;
        nodeList = $temp$nodeList;
        tail = $temp$tail;
        continue initializeHelp;
      }
    }
  });
  var $elm$core$Basics$remainderBy = _Basics_remainderBy;
  var $elm$core$Array$initialize = F2(function (len, fn) {
    if (len <= 0) {
      return $elm$core$Array$empty;
    } else {
      var tailLen = len % $elm$core$Array$branchFactor;
      var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
      var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
      return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
    }
  });
  var $elm$core$Basics$True = {
    $: 'True'
  };

  var $elm$core$Result$isOk = function $elm$core$Result$isOk(result) {
    if (result.$ === 'Ok') {
      return true;
    } else {
      return false;
    }
  };

  var $elm$core$Platform$Cmd$batch = _Platform_batch;
  var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);

  var $author$project$Main$init = function $author$project$Main$init(_v0) {
    return _Utils_Tuple2(_Utils_Tuple0, $elm$core$Platform$Cmd$none);
  };

  var $elm$core$Basics$identity = function $elm$core$Basics$identity(x) {
    return x;
  };

  var $author$project$Main$Input = function $author$project$Main$Input(a) {
    return {
      $: 'Input',
      a: a
    };
  };

  var $elm$json$Json$Decode$string = _Json_decodeString;

  var $author$project$Main$get = _Platform_incomingPort('get', $elm$json$Json$Decode$string);

  var $author$project$Main$subscriptions = function $author$project$Main$subscriptions(_v0) {
    return $author$project$Main$get($author$project$Main$Input);
  };

  var $elm$json$Json$Decode$succeed = _Json_succeed;
  var $elm$json$Json$Encode$list = F2(function (func, entries) {
    return _Json_wrap(A3($elm$core$List$foldl, _Json_addEntry(func), _Json_emptyArray(_Utils_Tuple0), entries));
  });
  var $elm$json$Json$Encode$string = _Json_wrap;

  var $author$project$Main$put = _Platform_outgoingPort('put', $elm$json$Json$Encode$list($elm$json$Json$Encode$string));

  var $elm$core$Array$fromListHelp = F3(function (list, nodeList, nodeListSize) {
    fromListHelp: while (true) {
      var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);

      var jsArray = _v0.a;
      var remainingItems = _v0.b;

      if (_Utils_cmp($elm$core$Elm$JsArray$length(jsArray), $elm$core$Array$branchFactor) < 0) {
        return A2($elm$core$Array$builderToArray, true, {
          nodeList: nodeList,
          nodeListSize: nodeListSize,
          tail: jsArray
        });
      } else {
        var $temp$list = remainingItems,
            $temp$nodeList = A2($elm$core$List$cons, $elm$core$Array$Leaf(jsArray), nodeList),
            $temp$nodeListSize = nodeListSize + 1;
        list = $temp$list;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue fromListHelp;
      }
    }
  });

  var $elm$core$Array$fromList = function $elm$core$Array$fromList(list) {
    if (!list.b) {
      return $elm$core$Array$empty;
    } else {
      return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
    }
  };

  var $elm$core$Bitwise$and = _Bitwise_and;
  var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
  var $elm$core$Array$bitMask = 4294967295 >>> 32 - $elm$core$Array$shiftStep;
  var $elm$core$Basics$ge = _Utils_ge;
  var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
  var $elm$core$Array$getHelp = F3(function (shift, index, tree) {
    getHelp: while (true) {
      var pos = $elm$core$Array$bitMask & index >>> shift;

      var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);

      if (_v0.$ === 'SubTree') {
        var subTree = _v0.a;
        var $temp$shift = shift - $elm$core$Array$shiftStep,
            $temp$index = index,
            $temp$tree = subTree;
        shift = $temp$shift;
        index = $temp$index;
        tree = $temp$tree;
        continue getHelp;
      } else {
        var values = _v0.a;
        return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
      }
    }
  });
  var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;

  var $elm$core$Array$tailIndex = function $elm$core$Array$tailIndex(len) {
    return len >>> 5 << 5;
  };

  var $elm$core$Array$get = F2(function (index, _v0) {
    var len = _v0.a;
    var startShift = _v0.b;
    var tree = _v0.c;
    var tail = _v0.d;
    return index < 0 || _Utils_cmp(index, len) > -1 ? $elm$core$Maybe$Nothing : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1 ? $elm$core$Maybe$Just(A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(A3($elm$core$Array$getHelp, startShift, index, tree));
  });

  var $elm$core$Array$length = function $elm$core$Array$length(_v0) {
    var len = _v0.a;
    return len;
  };

  var $jinjor$elm_diff$Diff$Added = function $jinjor$elm_diff$Diff$Added(a) {
    return {
      $: 'Added',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$CannotGetA = function $jinjor$elm_diff$Diff$CannotGetA(a) {
    return {
      $: 'CannotGetA',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$CannotGetB = function $jinjor$elm_diff$Diff$CannotGetB(a) {
    return {
      $: 'CannotGetB',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$NoChange = function $jinjor$elm_diff$Diff$NoChange(a) {
    return {
      $: 'NoChange',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$Removed = function $jinjor$elm_diff$Diff$Removed(a) {
    return {
      $: 'Removed',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$UnexpectedPath = F2(function (a, b) {
    return {
      $: 'UnexpectedPath',
      a: a,
      b: b
    };
  });
  var $jinjor$elm_diff$Diff$makeChangesHelp = F5(function (changes, getA, getB, _v0, path) {
    makeChangesHelp: while (true) {
      var x = _v0.a;
      var y = _v0.b;

      if (!path.b) {
        return $elm$core$Result$Ok(changes);
      } else {
        var _v2 = path.a;
        var prevX = _v2.a;
        var prevY = _v2.b;
        var tail = path.b;

        var change = function () {
          if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
            var _v4 = getA(x);

            if (_v4.$ === 'Just') {
              var a = _v4.a;
              return $elm$core$Result$Ok($jinjor$elm_diff$Diff$NoChange(a));
            } else {
              return $elm$core$Result$Err($jinjor$elm_diff$Diff$CannotGetA(x));
            }
          } else {
            if (_Utils_eq(x, prevX)) {
              var _v5 = getB(y);

              if (_v5.$ === 'Just') {
                var b = _v5.a;
                return $elm$core$Result$Ok($jinjor$elm_diff$Diff$Added(b));
              } else {
                return $elm$core$Result$Err($jinjor$elm_diff$Diff$CannotGetB(y));
              }
            } else {
              if (_Utils_eq(y, prevY)) {
                var _v6 = getA(x);

                if (_v6.$ === 'Just') {
                  var a = _v6.a;
                  return $elm$core$Result$Ok($jinjor$elm_diff$Diff$Removed(a));
                } else {
                  return $elm$core$Result$Err($jinjor$elm_diff$Diff$CannotGetA(x));
                }
              } else {
                return $elm$core$Result$Err(A2($jinjor$elm_diff$Diff$UnexpectedPath, _Utils_Tuple2(x, y), path));
              }
            }
          }
        }();

        if (change.$ === 'Ok') {
          var c = change.a;

          var $temp$changes = A2($elm$core$List$cons, c, changes),
              $temp$getA = getA,
              $temp$getB = getB,
              $temp$_v0 = _Utils_Tuple2(prevX, prevY),
              $temp$path = tail;

          changes = $temp$changes;
          getA = $temp$getA;
          getB = $temp$getB;
          _v0 = $temp$_v0;
          path = $temp$path;
          continue makeChangesHelp;
        } else {
          var e = change.a;
          return $elm$core$Result$Err(e);
        }
      }
    }
  });
  var $jinjor$elm_diff$Diff$makeChanges = F3(function (getA, getB, path) {
    if (!path.b) {
      return $elm$core$Result$Ok(_List_Nil);
    } else {
      var latest = path.a;
      var tail = path.b;
      return A5($jinjor$elm_diff$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
    }
  });
  var $elm$core$Basics$always = F2(function (a, _v0) {
    return a;
  });

  var $elm$core$Basics$negate = function $elm$core$Basics$negate(n) {
    return -n;
  };

  var $jinjor$elm_diff$Diff$Continue = function $jinjor$elm_diff$Diff$Continue(a) {
    return {
      $: 'Continue',
      a: a
    };
  };

  var $jinjor$elm_diff$Diff$Found = function $jinjor$elm_diff$Diff$Found(a) {
    return {
      $: 'Found',
      a: a
    };
  };

  var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
  var $elm$core$Array$setHelp = F4(function (shift, index, value, tree) {
    var pos = $elm$core$Array$bitMask & index >>> shift;

    var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);

    if (_v0.$ === 'SubTree') {
      var subTree = _v0.a;
      var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
      return A3($elm$core$Elm$JsArray$unsafeSet, pos, $elm$core$Array$SubTree(newSub), tree);
    } else {
      var values = _v0.a;
      var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
      return A3($elm$core$Elm$JsArray$unsafeSet, pos, $elm$core$Array$Leaf(newLeaf), tree);
    }
  });
  var $elm$core$Array$set = F3(function (index, value, array) {
    var len = array.a;
    var startShift = array.b;
    var tree = array.c;
    var tail = array.d;
    return index < 0 || _Utils_cmp(index, len) > -1 ? array : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1 ? A4($elm$core$Array$Array_elm_builtin, len, startShift, tree, A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4($elm$core$Array$Array_elm_builtin, len, startShift, A4($elm$core$Array$setHelp, startShift, index, value, tree), tail);
  });
  var $elm$core$Maybe$withDefault = F2(function (_default, maybe) {
    if (maybe.$ === 'Just') {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  });
  var $jinjor$elm_diff$Diff$step = F4(function (snake_, offset, k, v) {
    var fromTop = A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Array$get, k + 1 + offset, v));
    var fromLeft = A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Array$get, k - 1 + offset, v));

    var _v0 = function () {
      var _v2 = _Utils_Tuple2(fromLeft, fromTop);

      if (!_v2.a.b) {
        if (!_v2.b.b) {
          return _Utils_Tuple2(_List_Nil, _Utils_Tuple2(0, 0));
        } else {
          var _v3 = _v2.b;
          var _v4 = _v3.a;
          var topX = _v4.a;
          var topY = _v4.b;
          return _Utils_Tuple2(fromTop, _Utils_Tuple2(topX + 1, topY));
        }
      } else {
        if (!_v2.b.b) {
          var _v5 = _v2.a;
          var _v6 = _v5.a;
          var leftX = _v6.a;
          var leftY = _v6.b;
          return _Utils_Tuple2(fromLeft, _Utils_Tuple2(leftX, leftY + 1));
        } else {
          var _v7 = _v2.a;
          var _v8 = _v7.a;
          var leftX = _v8.a;
          var leftY = _v8.b;
          var _v9 = _v2.b;
          var _v10 = _v9.a;
          var topX = _v10.a;
          var topY = _v10.b;
          return _Utils_cmp(leftY + 1, topY) > -1 ? _Utils_Tuple2(fromLeft, _Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(fromTop, _Utils_Tuple2(topX + 1, topY));
        }
      }
    }();

    var path = _v0.a;
    var _v1 = _v0.b;
    var x = _v1.a;
    var y = _v1.b;

    var _v11 = A3(snake_, x + 1, y + 1, A2($elm$core$List$cons, _Utils_Tuple2(x, y), path));

    var newPath = _v11.a;
    var goal = _v11.b;
    return goal ? $jinjor$elm_diff$Diff$Found(newPath) : $jinjor$elm_diff$Diff$Continue(A3($elm$core$Array$set, k + offset, newPath, v));
  });
  var $jinjor$elm_diff$Diff$onpLoopK = F4(function (snake_, offset, ks, v) {
    onpLoopK: while (true) {
      if (!ks.b) {
        return $jinjor$elm_diff$Diff$Continue(v);
      } else {
        var k = ks.a;
        var ks_ = ks.b;

        var _v1 = A4($jinjor$elm_diff$Diff$step, snake_, offset, k, v);

        if (_v1.$ === 'Found') {
          var path = _v1.a;
          return $jinjor$elm_diff$Diff$Found(path);
        } else {
          var v_ = _v1.a;
          var $temp$snake_ = snake_,
              $temp$offset = offset,
              $temp$ks = ks_,
              $temp$v = v_;
          snake_ = $temp$snake_;
          offset = $temp$offset;
          ks = $temp$ks;
          v = $temp$v;
          continue onpLoopK;
        }
      }
    }
  });
  var $jinjor$elm_diff$Diff$onpLoopP = F5(function (snake_, delta, offset, p, v) {
    onpLoopP: while (true) {
      var ks = delta > 0 ? _Utils_ap($elm$core$List$reverse(A2($elm$core$List$range, delta + 1, delta + p)), A2($elm$core$List$range, -p, delta)) : _Utils_ap($elm$core$List$reverse(A2($elm$core$List$range, delta + 1, p)), A2($elm$core$List$range, -p + delta, delta));

      var _v0 = A4($jinjor$elm_diff$Diff$onpLoopK, snake_, offset, ks, v);

      if (_v0.$ === 'Found') {
        var path = _v0.a;
        return path;
      } else {
        var v_ = _v0.a;
        var $temp$snake_ = snake_,
            $temp$delta = delta,
            $temp$offset = offset,
            $temp$p = p + 1,
            $temp$v = v_;
        snake_ = $temp$snake_;
        delta = $temp$delta;
        offset = $temp$offset;
        p = $temp$p;
        v = $temp$v;
        continue onpLoopP;
      }
    }
  });
  var $jinjor$elm_diff$Diff$snake = F5(function (getA, getB, nextX, nextY, path) {
    snake: while (true) {
      var _v0 = _Utils_Tuple2(getA(nextX), getB(nextY));

      _v0$2: while (true) {
        if (_v0.a.$ === 'Just') {
          if (_v0.b.$ === 'Just') {
            var a = _v0.a.a;
            var b = _v0.b.a;

            if (_Utils_eq(a, b)) {
              var $temp$getA = getA,
                  $temp$getB = getB,
                  $temp$nextX = nextX + 1,
                  $temp$nextY = nextY + 1,
                  $temp$path = A2($elm$core$List$cons, _Utils_Tuple2(nextX, nextY), path);
              getA = $temp$getA;
              getB = $temp$getB;
              nextX = $temp$nextX;
              nextY = $temp$nextY;
              path = $temp$path;
              continue snake;
            } else {
              return _Utils_Tuple2(path, false);
            }
          } else {
            break _v0$2;
          }
        } else {
          if (_v0.b.$ === 'Nothing') {
            var _v1 = _v0.a;
            var _v2 = _v0.b;
            return _Utils_Tuple2(path, true);
          } else {
            break _v0$2;
          }
        }
      }

      return _Utils_Tuple2(path, false);
    }
  });
  var $jinjor$elm_diff$Diff$onp = F4(function (getA, getB, m, n) {
    var v = A2($elm$core$Array$initialize, m + n + 1, $elm$core$Basics$always(_List_Nil));
    var delta = n - m;
    return A5($jinjor$elm_diff$Diff$onpLoopP, A2($jinjor$elm_diff$Diff$snake, getA, getB), delta, m, 0, v);
  });
  var $jinjor$elm_diff$Diff$testDiff = F2(function (a, b) {
    var arrB = $elm$core$Array$fromList(b);

    var getB = function getB(y) {
      return A2($elm$core$Array$get, y - 1, arrB);
    };

    var n = $elm$core$Array$length(arrB);
    var arrA = $elm$core$Array$fromList(a);

    var getA = function getA(x) {
      return A2($elm$core$Array$get, x - 1, arrA);
    };

    var m = $elm$core$Array$length(arrA);
    var path = A4($jinjor$elm_diff$Diff$onp, getA, getB, m, n);
    return A3($jinjor$elm_diff$Diff$makeChanges, getA, getB, path);
  });
  var $jinjor$elm_diff$Diff$diff = F2(function (a, b) {
    var _v0 = A2($jinjor$elm_diff$Diff$testDiff, a, b);

    if (_v0.$ === 'Ok') {
      var changes = _v0.a;
      return changes;
    } else {
      return _List_Nil;
    }
  });
  var $elm$core$String$lines = _String_lines;
  var $jinjor$elm_diff$Diff$diffLines = F2(function (a, b) {
    return A2($jinjor$elm_diff$Diff$diff, $elm$core$String$lines(a), $elm$core$String$lines(b));
  });
  var $elm$core$List$foldrHelper = F4(function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;

      if (!r1.b) {
        return A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;

        if (!r2.b) {
          return A2(fn, a, A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;

          if (!r3.b) {
            return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
            return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
          }
        }
      }
    }
  });
  var $elm$core$List$foldr = F3(function (fn, acc, ls) {
    return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
  });
  var $elm$core$List$map = F2(function (f, xs) {
    return A3($elm$core$List$foldr, F2(function (x, acc) {
      return A2($elm$core$List$cons, f(x), acc);
    }), _List_Nil, xs);
  });

  var $author$project$Internal$Parser$LXError = function $author$project$Internal$Parser$LXError(a) {
    return {
      $: 'LXError',
      a: a
    };
  };

  var $author$project$Internal$Parser$LXString = function $author$project$Internal$Parser$LXString(a) {
    return {
      $: 'LXString',
      a: a
    };
  };

  var $author$project$Internal$Parser$Environment = F3(function (a, b, c) {
    return {
      $: 'Environment',
      a: a,
      b: b,
      c: c
    };
  });

  var $author$project$Internal$Parser$ExpectingEndWord = function $author$project$Internal$Parser$ExpectingEndWord(a) {
    return {
      $: 'ExpectingEndWord',
      a: a
    };
  };

  var $author$project$Internal$Parser$ExpectingEndWordInItemList = function $author$project$Internal$Parser$ExpectingEndWordInItemList(a) {
    return {
      $: 'ExpectingEndWordInItemList',
      a: a
    };
  };

  var $author$project$Internal$Parser$LatexList = function $author$project$Internal$Parser$LatexList(a) {
    return {
      $: 'LatexList',
      a: a
    };
  };

  var $author$project$Internal$Parser$SMacro = F4(function (a, b, c, d) {
    return {
      $: 'SMacro',
      a: a,
      b: b,
      c: c,
      d: d
    };
  });
  var $elm$parser$Parser$Advanced$Token = F2(function (a, b) {
    return {
      $: 'Token',
      a: a,
      b: b
    };
  });
  var $elm$parser$Parser$Advanced$Bad = F2(function (a, b) {
    return {
      $: 'Bad',
      a: a,
      b: b
    };
  });
  var $elm$parser$Parser$Advanced$Good = F3(function (a, b, c) {
    return {
      $: 'Good',
      a: a,
      b: b,
      c: c
    };
  });

  var $elm$parser$Parser$Advanced$Parser = function $elm$parser$Parser$Advanced$Parser(a) {
    return {
      $: 'Parser',
      a: a
    };
  };

  var $elm$parser$Parser$Advanced$andThen = F2(function (callback, _v0) {
    var parseA = _v0.a;
    return $elm$parser$Parser$Advanced$Parser(function (s0) {
      var _v1 = parseA(s0);

      if (_v1.$ === 'Bad') {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;

        var _v2 = callback(a);

        var parseB = _v2.a;

        var _v3 = parseB(s1);

        if (_v3.$ === 'Bad') {
          var p2 = _v3.a;
          var x = _v3.b;
          return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
        }
      }
    });
  });

  var $author$project$Internal$Parser$CArg = function $author$project$Internal$Parser$CArg(a) {
    return {
      $: 'CArg',
      a: a
    };
  };

  var $author$project$Internal$Parser$ExpectingLeftBrace = {
    $: 'ExpectingLeftBrace'
  };
  var $author$project$Internal$Parser$ExpectingRightBrace = {
    $: 'ExpectingRightBrace'
  };
  var $author$project$Internal$Parser$Macro = F3(function (a, b, c) {
    return {
      $: 'Macro',
      a: a,
      b: b,
      c: c
    };
  });
  var $elm$parser$Parser$Advanced$map2 = F3(function (func, _v0, _v1) {
    var parseA = _v0.a;
    var parseB = _v1.a;
    return $elm$parser$Parser$Advanced$Parser(function (s0) {
      var _v2 = parseA(s0);

      if (_v2.$ === 'Bad') {
        var p = _v2.a;
        var x = _v2.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _v2.a;
        var a = _v2.b;
        var s1 = _v2.c;

        var _v3 = parseB(s1);

        if (_v3.$ === 'Bad') {
          var p2 = _v3.a;
          var x = _v3.b;
          return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _v3.a;
          var b = _v3.b;
          var s2 = _v3.c;
          return A3($elm$parser$Parser$Advanced$Good, p1 || p2, A2(func, a, b), s2);
        }
      }
    });
  });
  var $elm$parser$Parser$Advanced$ignorer = F2(function (keepParser, ignoreParser) {
    return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
  });
  var $elm$parser$Parser$Advanced$Located = F3(function (row, col, context) {
    return {
      col: col,
      context: context,
      row: row
    };
  });
  var $elm$parser$Parser$Advanced$changeContext = F2(function (newContext, s) {
    return {
      col: s.col,
      context: newContext,
      indent: s.indent,
      offset: s.offset,
      row: s.row,
      src: s.src
    };
  });
  var $elm$parser$Parser$Advanced$inContext = F2(function (context, _v0) {
    var parse = _v0.a;
    return $elm$parser$Parser$Advanced$Parser(function (s0) {
      var _v1 = parse(A2($elm$parser$Parser$Advanced$changeContext, A2($elm$core$List$cons, A3($elm$parser$Parser$Advanced$Located, s0.row, s0.col, context), s0.context), s0));

      if (_v1.$ === 'Good') {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return A3($elm$parser$Parser$Advanced$Good, p, a, A2($elm$parser$Parser$Advanced$changeContext, s0.context, s1));
      } else {
        var step = _v1;
        return step;
      }
    });
  });
  var $author$project$Internal$Parser$ExpectingEndForInlineMath = {
    $: 'ExpectingEndForInlineMath'
  };

  var $author$project$Internal$Parser$ExpectingLeadingInLineMathDelimiter = function $author$project$Internal$Parser$ExpectingLeadingInLineMathDelimiter(a) {
    return {
      $: 'ExpectingLeadingInLineMathDelimiter',
      a: a
    };
  };

  var $author$project$Internal$Parser$InlineMath = function $author$project$Internal$Parser$InlineMath(a) {
    return {
      $: 'InlineMath',
      a: a
    };
  };

  var $elm$parser$Parser$Advanced$keeper = F2(function (parseFunc, parseArg) {
    return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
  });
  var $elm$parser$Parser$Advanced$Empty = {
    $: 'Empty'
  };
  var $elm$parser$Parser$Advanced$Append = F2(function (a, b) {
    return {
      $: 'Append',
      a: a,
      b: b
    };
  });
  var $elm$parser$Parser$Advanced$oneOfHelp = F3(function (s0, bag, parsers) {
    oneOfHelp: while (true) {
      if (!parsers.b) {
        return A2($elm$parser$Parser$Advanced$Bad, false, bag);
      } else {
        var parse = parsers.a.a;
        var remainingParsers = parsers.b;

        var _v1 = parse(s0);

        if (_v1.$ === 'Good') {
          var step = _v1;
          return step;
        } else {
          var step = _v1;
          var p = step.a;
          var x = step.b;

          if (p) {
            return step;
          } else {
            var $temp$s0 = s0,
                $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
                $temp$parsers = remainingParsers;
            s0 = $temp$s0;
            bag = $temp$bag;
            parsers = $temp$parsers;
            continue oneOfHelp;
          }
        }
      }
    }
  });

  var $elm$parser$Parser$Advanced$oneOf = function $elm$parser$Parser$Advanced$oneOf(parsers) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
    });
  };

  var $elm$core$String$length = _String_length;

  var $elm$parser$Parser$Advanced$chompUntilEndOr = function $elm$parser$Parser$Advanced$chompUntilEndOr(str) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);

      var newOffset = _v0.a;
      var newRow = _v0.b;
      var newCol = _v0.c;
      var adjustedOffset = newOffset < 0 ? $elm$core$String$length(s.src) : newOffset;
      return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s.offset, adjustedOffset) < 0, _Utils_Tuple0, {
        col: newCol,
        context: s.context,
        indent: s.indent,
        offset: adjustedOffset,
        row: newRow,
        src: s.src
      });
    });
  };

  var $elm$core$String$slice = _String_slice;
  var $elm$core$String$dropRight = F2(function (n, string) {
    return n < 1 ? string : A3($elm$core$String$slice, 0, -n, string);
  });
  var $elm$parser$Parser$Advanced$mapChompedString = F2(function (func, _v0) {
    var parse = _v0.a;
    return $elm$parser$Parser$Advanced$Parser(function (s0) {
      var _v1 = parse(s0);

      if (_v1.$ === 'Bad') {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return A3($elm$parser$Parser$Advanced$Good, p, A2(func, A3($elm$core$String$slice, s0.offset, s1.offset, s0.src), a), s1);
      }
    });
  });

  var $elm$parser$Parser$Advanced$getChompedString = function $elm$parser$Parser$Advanced$getChompedString(parser) {
    return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
  };

  var $elm$parser$Parser$Advanced$map = F2(function (func, _v0) {
    var parse = _v0.a;
    return $elm$parser$Parser$Advanced$Parser(function (s0) {
      var _v1 = parse(s0);

      if (_v1.$ === 'Good') {
        var p = _v1.a;
        var a = _v1.b;
        var s1 = _v1.c;
        return A3($elm$parser$Parser$Advanced$Good, p, func(a), s1);
      } else {
        var p = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p, x);
      }
    });
  });

  var $elm$parser$Parser$Advanced$succeed = function $elm$parser$Parser$Advanced$succeed(a) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      return A3($elm$parser$Parser$Advanced$Good, false, a, s);
    });
  };

  var $elm$parser$Parser$Advanced$AddRight = F2(function (a, b) {
    return {
      $: 'AddRight',
      a: a,
      b: b
    };
  });
  var $elm$parser$Parser$Advanced$DeadEnd = F4(function (row, col, problem, contextStack) {
    return {
      col: col,
      contextStack: contextStack,
      problem: problem,
      row: row
    };
  });
  var $elm$parser$Parser$Advanced$fromState = F2(function (s, x) {
    return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
  });

  var $elm$core$String$isEmpty = function $elm$core$String$isEmpty(string) {
    return string === '';
  };

  var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
  var $elm$core$Basics$not = _Basics_not;

  var $elm$parser$Parser$Advanced$token = function $elm$parser$Parser$Advanced$token(_v0) {
    var str = _v0.a;
    var expecting = _v0.b;
    var progress = !$elm$core$String$isEmpty(str);
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);

      var newOffset = _v1.a;
      var newRow = _v1.b;
      var newCol = _v1.c;
      return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
        col: newCol,
        context: s.context,
        indent: s.indent,
        offset: newOffset,
        row: newRow,
        src: s.src
      });
    });
  };

  var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
  var $author$project$Internal$Parser$parseToSymbol = F2(function (problem, marker) {
    return A2($elm$parser$Parser$Advanced$map, $elm$core$String$dropRight($elm$core$String$length(marker)), $elm$parser$Parser$Advanced$getChompedString(A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$chompUntilEndOr(marker), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, marker, problem))))));
  });

  var $author$project$Internal$Parser$inlineMath = function $author$project$Internal$Parser$inlineMath(wsParser) {
    var inLineMathUsingDelimiters = function inLineMathUsingDelimiters(_v0) {
      var startDelimiter = _v0.a;
      var endDelimiter = _v0.b;
      return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$InlineMath), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, startDelimiter, $author$project$Internal$Parser$ExpectingLeadingInLineMathDelimiter(startDelimiter)))), A2($elm$parser$Parser$Advanced$ignorer, A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndForInlineMath, endDelimiter), wsParser));
    };

    return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([inLineMathUsingDelimiters(_Utils_Tuple2('\\(', '\\)')), inLineMathUsingDelimiters(_Utils_Tuple2('~~', '~~')), inLineMathUsingDelimiters(_Utils_Tuple2('$', '$'))]));
  };

  var $elm$parser$Parser$Advanced$Done = function $elm$parser$Parser$Advanced$Done(a) {
    return {
      $: 'Done',
      a: a
    };
  };

  var $elm$parser$Parser$Advanced$Loop = function $elm$parser$Parser$Advanced$Loop(a) {
    return {
      $: 'Loop',
      a: a
    };
  };

  var $author$project$Internal$Parser$itemListHelper = F2(function (itemParser, revItems) {
    return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function (item_) {
      return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item_, revItems));
    }), itemParser), A2($elm$parser$Parser$Advanced$map, function (_v0) {
      return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
    }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))]));
  });
  var $elm$parser$Parser$Advanced$loopHelp = F4(function (p, state, callback, s0) {
    loopHelp: while (true) {
      var _v0 = callback(state);

      var parse = _v0.a;

      var _v1 = parse(s0);

      if (_v1.$ === 'Good') {
        var p1 = _v1.a;
        var step = _v1.b;
        var s1 = _v1.c;

        if (step.$ === 'Loop') {
          var newState = step.a;
          var $temp$p = p || p1,
              $temp$state = newState,
              $temp$callback = callback,
              $temp$s0 = s1;
          p = $temp$p;
          state = $temp$state;
          callback = $temp$callback;
          s0 = $temp$s0;
          continue loopHelp;
        } else {
          var result = step.a;
          return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
        }
      } else {
        var p1 = _v1.a;
        var x = _v1.b;
        return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
      }
    }
  });
  var $elm$parser$Parser$Advanced$loop = F2(function (state, callback) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
    });
  });
  var $author$project$Internal$Parser$itemList_ = F2(function (initialList, itemParser) {
    return A2($elm$parser$Parser$Advanced$loop, initialList, $author$project$Internal$Parser$itemListHelper(itemParser));
  });

  var $author$project$Internal$Parser$itemList = function $author$project$Internal$Parser$itemList(itemParser) {
    return A2($author$project$Internal$Parser$itemList_, _List_Nil, itemParser);
  };

  var $elm$parser$Parser$Advanced$lazy = function $elm$parser$Parser$Advanced$lazy(thunk) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      var _v0 = thunk(_Utils_Tuple0);

      var parse = _v0.a;
      return parse(s);
    });
  };

  var $author$project$Internal$Parser$ExpectingValidMacroArgWord = {
    $: 'ExpectingValidMacroArgWord'
  };

  var $author$project$Internal$Parser$inMacroArg = function $author$project$Internal$Parser$inMacroArg(c) {
    return !(_Utils_eq(c, _Utils_chr('\\')) || _Utils_eq(c, _Utils_chr('$')) || _Utils_eq(c, _Utils_chr('}')) || _Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n')));
  };

  var $author$project$Internal$Parser$nonEmptyItemList = function $author$project$Internal$Parser$nonEmptyItemList(itemParser) {
    return A2($elm$parser$Parser$Advanced$andThen, function (x) {
      return A2($author$project$Internal$Parser$itemList_, _List_fromArray([x]), itemParser);
    }, itemParser);
  };

  var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
  var $elm$parser$Parser$Advanced$chompIf = F2(function (isGood, expecting) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
      return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : _Utils_eq(newOffset, -2) ? A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
        col: 1,
        context: s.context,
        indent: s.indent,
        offset: s.offset + 1,
        row: s.row + 1,
        src: s.src
      }) : A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
        col: s.col + 1,
        context: s.context,
        indent: s.indent,
        offset: newOffset,
        row: s.row,
        src: s.src
      });
    });
  });
  var $elm$parser$Parser$Advanced$chompWhileHelp = F5(function (isGood, offset, row, col, s0) {
    chompWhileHelp: while (true) {
      var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);

      if (_Utils_eq(newOffset, -1)) {
        return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s0.offset, offset) < 0, _Utils_Tuple0, {
          col: col,
          context: s0.context,
          indent: s0.indent,
          offset: offset,
          row: row,
          src: s0.src
        });
      } else {
        if (_Utils_eq(newOffset, -2)) {
          var $temp$isGood = isGood,
              $temp$offset = offset + 1,
              $temp$row = row + 1,
              $temp$col = 1,
              $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        } else {
          var $temp$isGood = isGood,
              $temp$offset = newOffset,
              $temp$row = row,
              $temp$col = col + 1,
              $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        }
      }
    }
  });

  var $elm$parser$Parser$Advanced$chompWhile = function $elm$parser$Parser$Advanced$chompWhile(isGood) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
    });
  };

  var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(function (s) {
    return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
  });
  var $elm$parser$Parser$Advanced$getSource = $elm$parser$Parser$Advanced$Parser(function (s) {
    return A3($elm$parser$Parser$Advanced$Good, false, s.src, s);
  });
  var $author$project$Internal$Parser$ws = $elm$parser$Parser$Advanced$chompWhile(function (c) {
    return _Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n'));
  });
  var $author$project$Internal$Parser$word = F2(function (problem, inWord) {
    return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$String$slice), $author$project$Internal$Parser$ws), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getOffset, A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)), $elm$parser$Parser$Advanced$chompWhile(inWord)), $author$project$Internal$Parser$ws)), $elm$parser$Parser$Advanced$getOffset), $elm$parser$Parser$Advanced$getSource);
  });
  var $author$project$Internal$Parser$macroArgWords = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LXString, A2($elm$parser$Parser$Advanced$map, $elm$core$String$join(' '), $author$project$Internal$Parser$nonEmptyItemList(A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidMacroArgWord, $author$project$Internal$Parser$inMacroArg))));
  var $author$project$Internal$Parser$ExpectingMacroReservedWord = {
    $: 'ExpectingMacroReservedWord'
  };
  var $elm$core$String$dropLeft = F2(function (n, string) {
    return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
  });

  var $elm$core$Set$Set_elm_builtin = function $elm$core$Set$Set_elm_builtin(a) {
    return {
      $: 'Set_elm_builtin',
      a: a
    };
  };

  var $elm$core$Dict$RBEmpty_elm_builtin = {
    $: 'RBEmpty_elm_builtin'
  };
  var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
  var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
  var $elm$core$Dict$Black = {
    $: 'Black'
  };
  var $elm$core$Dict$RBNode_elm_builtin = F5(function (a, b, c, d, e) {
    return {
      $: 'RBNode_elm_builtin',
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    };
  });
  var $elm$core$Dict$Red = {
    $: 'Red'
  };
  var $elm$core$Dict$balance = F5(function (color, key, value, left, right) {
    if (right.$ === 'RBNode_elm_builtin' && right.a.$ === 'Red') {
      var _v1 = right.a;
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;

      if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red') {
        var _v3 = left.a;
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
      } else {
        return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
      }
    } else {
      if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red' && left.d.$ === 'RBNode_elm_builtin' && left.d.a.$ === 'Red') {
        var _v5 = left.a;
        var lK = left.b;
        var lV = left.c;
        var _v6 = left.d;
        var _v7 = _v6.a;
        var llK = _v6.b;
        var llV = _v6.c;
        var llLeft = _v6.d;
        var llRight = _v6.e;
        var lRight = left.e;
        return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
      } else {
        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
      }
    }
  });
  var $elm$core$Basics$compare = _Utils_compare;
  var $elm$core$Dict$insertHelp = F3(function (key, value, dict) {
    if (dict.$ === 'RBEmpty_elm_builtin') {
      return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;

      var _v1 = A2($elm$core$Basics$compare, key, nKey);

      switch (_v1.$) {
        case 'LT':
          return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);

        case 'EQ':
          return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);

        default:
          return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
      }
    }
  });
  var $elm$core$Dict$insert = F3(function (key, value, dict) {
    var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);

    if (_v0.$ === 'RBNode_elm_builtin' && _v0.a.$ === 'Red') {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  });
  var $elm$core$Set$insert = F2(function (key, _v0) {
    var dict = _v0.a;
    return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
  });

  var $elm$core$Set$fromList = function $elm$core$Set$fromList(list) {
    return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
  };

  var $elm$core$Dict$get = F2(function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === 'RBEmpty_elm_builtin') {
        return $elm$core$Maybe$Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;

        var _v1 = A2($elm$core$Basics$compare, targetKey, key);

        switch (_v1.$) {
          case 'LT':
            var $temp$targetKey = targetKey,
                $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;

          case 'EQ':
            return $elm$core$Maybe$Just(value);

          default:
            var $temp$targetKey = targetKey,
                $temp$dict = right;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
        }
      }
    }
  });
  var $elm$core$Dict$member = F2(function (key, dict) {
    var _v0 = A2($elm$core$Dict$get, key, dict);

    if (_v0.$ === 'Just') {
      return true;
    } else {
      return false;
    }
  });
  var $elm$core$Set$member = F2(function (key, _v0) {
    var dict = _v0.a;
    return A2($elm$core$Dict$member, key, dict);
  });
  var $elm$parser$Parser$Advanced$varHelp = F7(function (isGood, offset, row, col, src, indent, context) {
    varHelp: while (true) {
      var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);

      if (_Utils_eq(newOffset, -1)) {
        return {
          col: col,
          context: context,
          indent: indent,
          offset: offset,
          row: row,
          src: src
        };
      } else {
        if (_Utils_eq(newOffset, -2)) {
          var $temp$isGood = isGood,
              $temp$offset = offset + 1,
              $temp$row = row + 1,
              $temp$col = 1,
              $temp$src = src,
              $temp$indent = indent,
              $temp$context = context;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          src = $temp$src;
          indent = $temp$indent;
          context = $temp$context;
          continue varHelp;
        } else {
          var $temp$isGood = isGood,
              $temp$offset = newOffset,
              $temp$row = row,
              $temp$col = col + 1,
              $temp$src = src,
              $temp$indent = indent,
              $temp$context = context;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          src = $temp$src;
          indent = $temp$indent;
          context = $temp$context;
          continue varHelp;
        }
      }
    }
  });

  var $elm$parser$Parser$Advanced$variable = function $elm$parser$Parser$Advanced$variable(i) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);

      if (_Utils_eq(firstOffset, -1)) {
        return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
      } else {
        var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
        var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
        return A2($elm$core$Set$member, name, i.reserved) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
      }
    });
  };

  var $author$project$Internal$Parser$macroName = A2($elm$parser$Parser$Advanced$map, $elm$core$String$dropLeft(1), $elm$parser$Parser$Advanced$variable({
    expecting: $author$project$Internal$Parser$ExpectingMacroReservedWord,
    inner: function inner(c) {
      return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr('*'));
    },
    reserved: $elm$core$Set$fromList(_List_fromArray(['\\begin', '\\end', '\\item', '\\bibitem'])),
    start: function start(c) {
      return _Utils_eq(c, _Utils_chr('\\'));
    }
  }));
  var $author$project$Internal$Parser$ExpectingLeftBracket = {
    $: 'ExpectingLeftBracket'
  };
  var $author$project$Internal$Parser$ExpectingRightBracket = {
    $: 'ExpectingRightBracket'
  };
  var $author$project$Internal$Parser$ExpectingValidOptionArgWord = {
    $: 'ExpectingValidOptionArgWord'
  };

  var $author$project$Internal$Parser$inOptionArgWord = function $author$project$Internal$Parser$inOptionArgWord(c) {
    return !(_Utils_eq(c, _Utils_chr('\\')) || _Utils_eq(c, _Utils_chr('$')) || _Utils_eq(c, _Utils_chr(']')) || _Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n')));
  };

  var $author$project$Internal$Parser$optionArgWords = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LXString, A2($elm$parser$Parser$Advanced$map, $elm$core$String$join(' '), $author$project$Internal$Parser$nonEmptyItemList(A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidOptionArgWord, $author$project$Internal$Parser$inOptionArgWord))));
  var $author$project$Internal$Parser$spaces = $elm$parser$Parser$Advanced$chompWhile(function (c) {
    return _Utils_eq(c, _Utils_chr(' '));
  });
  var $author$project$Internal$Parser$optionalArg = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Internal$Parser$ExpectingLeftBracket))), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$optionArgWords, $author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$spaces)]))), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Internal$Parser$ExpectingRightBracket)))));

  var $author$project$Internal$Parser$macro = function $author$project$Internal$Parser$macro(wsParser) {
    return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$Macro), $author$project$Internal$Parser$macroName), $author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg)), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($author$project$Internal$Parser$cyclic$arg()), wsParser));
  };

  function $author$project$Internal$Parser$cyclic$arg() {
    return A2($elm$parser$Parser$Advanced$inContext, $author$project$Internal$Parser$CArg('arg'), A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '{', $author$project$Internal$Parser$ExpectingLeftBrace))), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$macroArgWords, $author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$lazy(function (_v0) {
      return $author$project$Internal$Parser$macro($author$project$Internal$Parser$spaces);
    })]))), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '}', $author$project$Internal$Parser$ExpectingRightBrace))))));
  }

  try {
    var $author$project$Internal$Parser$arg = $author$project$Internal$Parser$cyclic$arg();

    $author$project$Internal$Parser$cyclic$arg = function $author$project$Internal$Parser$cyclic$arg() {
      return $author$project$Internal$Parser$arg;
    };
  } catch ($) {
    throw 'Some top-level definitions from `Internal.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    arg\n  │     ↓\n  │    macro\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';
  }

  var $author$project$Internal$Parser$DisplayMath = function $author$project$Internal$Parser$DisplayMath(a) {
    return {
      $: 'DisplayMath',
      a: a
    };
  };

  var $author$project$Internal$Parser$ExpectingBeginDisplayMathModeBracket = {
    $: 'ExpectingBeginDisplayMathModeBracket'
  };
  var $author$project$Internal$Parser$ExpectingEndDisplayMathModeBracket = {
    $: 'ExpectingEndDisplayMathModeBracket'
  };
  var $author$project$Internal$Parser$displayMathBrackets = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$DisplayMath), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\[', $author$project$Internal$Parser$ExpectingBeginDisplayMathModeBracket))), A2($elm$parser$Parser$Advanced$ignorer, A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndDisplayMathModeBracket, '\\]'), $author$project$Internal$Parser$ws));
  var $author$project$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign = {
    $: 'ExpectingBeginDisplayMathModeDollarSign'
  };
  var $author$project$Internal$Parser$ExpectingEndDisplayMathModeDollarSign = {
    $: 'ExpectingEndDisplayMathModeDollarSign'
  };
  var $author$project$Internal$Parser$displayMathDollar = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$DisplayMath), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '$$', $author$project$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign))), A2($elm$parser$Parser$Advanced$ignorer, A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndDisplayMathModeDollarSign, '$$'), $author$project$Internal$Parser$ws));
  var $author$project$Internal$Parser$EnvName = {
    $: 'EnvName'
  };
  var $author$project$Internal$Parser$ExpectingEndOfEnvironmentName = {
    $: 'ExpectingEndOfEnvironmentName'
  };
  var $author$project$Internal$Parser$ExpectingEnvironmentNameBegin = {
    $: 'ExpectingEnvironmentNameBegin'
  };
  var $author$project$Internal$Parser$envName = A2($elm$parser$Parser$Advanced$inContext, $author$project$Internal$Parser$EnvName, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\begin{', $author$project$Internal$Parser$ExpectingEnvironmentNameBegin))), A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndOfEnvironmentName, '}')));

  var $elm$core$Dict$fromList = function $elm$core$Dict$fromList(assocs) {
    return A3($elm$core$List$foldl, F2(function (_v0, dict) {
      var key = _v0.a;
      var value = _v0.b;
      return A3($elm$core$Dict$insert, key, value, dict);
    }), $elm$core$Dict$empty, assocs);
  };

  var $author$project$Internal$Parser$ExpectingEscapedItem = {
    $: 'ExpectingEscapedItem'
  };
  var $author$project$Internal$Parser$ExpectingSpaceAfterItem = {
    $: 'ExpectingSpaceAfterItem'
  };
  var $author$project$Internal$Parser$Item = F2(function (a, b) {
    return {
      $: 'Item',
      a: a,
      b: b
    };
  });
  var $author$project$Internal$Parser$ExpectingWords = {
    $: 'ExpectingWords'
  };
  var $author$project$Internal$Parser$ExpectingDoubleNewline = {
    $: 'ExpectingDoubleNewline'
  };
  var $author$project$Internal$Parser$blank = A2($elm$parser$Parser$Advanced$map, function (_v0) {
    return $author$project$Internal$Parser$LXString('\n\n');
  }, $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\n\n', $author$project$Internal$Parser$ExpectingDoubleNewline)));

  var $author$project$Internal$Parser$notSpaceOrSpecialCharacters = function $author$project$Internal$Parser$notSpaceOrSpecialCharacters(c) {
    return !(_Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n')) || _Utils_eq(c, _Utils_chr('\\')) || _Utils_eq(c, _Utils_chr('$')));
  };

  var $author$project$Internal$Parser$words_ = function $author$project$Internal$Parser$words_(problem) {
    return A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LXString, A2($elm$parser$Parser$Advanced$map, $elm$core$String$join(' '), $author$project$Internal$Parser$nonEmptyItemList(A2($author$project$Internal$Parser$word, problem, $author$project$Internal$Parser$notSpaceOrSpecialCharacters))));
  };

  var $author$project$Internal$Parser$words = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$blank, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$ws), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$words_($author$project$Internal$Parser$ExpectingWords), $author$project$Internal$Parser$ws))]));
  var $author$project$Internal$Parser$item = A2($elm$parser$Parser$Advanced$map, function (x) {
    return A2($author$project$Internal$Parser$Item, 1, $author$project$Internal$Parser$LatexList(x));
  }, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\item', $author$project$Internal$Parser$ExpectingEscapedItem))), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, ' ', $author$project$Internal$Parser$ExpectingSpaceAfterItem))), $author$project$Internal$Parser$spaces), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$words, $author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws), $author$project$Internal$Parser$macro($author$project$Internal$Parser$ws)]))), $author$project$Internal$Parser$ws)));
  var $elm$core$List$any = F2(function (isOkay, list) {
    any: while (true) {
      if (!list.b) {
        return false;
      } else {
        var x = list.a;
        var xs = list.b;

        if (isOkay(x)) {
          return true;
        } else {
          var $temp$isOkay = isOkay,
              $temp$list = xs;
          isOkay = $temp$isOkay;
          list = $temp$list;
          continue any;
        }
      }
    }
  });
  var $elm$core$List$member = F2(function (x, xs) {
    return A2($elm$core$List$any, function (a) {
      return _Utils_eq(a, x);
    }, xs);
  });
  var $author$project$Internal$Parser$ExpectingEscapedNewcommandAndBrace = {
    $: 'ExpectingEscapedNewcommandAndBrace'
  };
  var $author$project$Internal$Parser$NewCommand = F3(function (a, b, c) {
    return {
      $: 'NewCommand',
      a: a,
      b: b,
      c: c
    };
  });

  var $elm$core$List$head = function $elm$core$List$head(list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return $elm$core$Maybe$Just(x);
    } else {
      return $elm$core$Maybe$Nothing;
    }
  };

  var $author$project$Internal$Parser$manyHelp = F2(function (p, vs) {
    return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function (v) {
      return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, v, vs));
    }), A2($elm$parser$Parser$Advanced$ignorer, p, $author$project$Internal$Parser$spaces)), A2($elm$parser$Parser$Advanced$map, function (_v0) {
      return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(vs));
    }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))]));
  });

  var $author$project$Internal$Parser$many = function $author$project$Internal$Parser$many(p) {
    return A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Internal$Parser$manyHelp(p));
  };

  var $author$project$Internal$Parser$ExpectingInt = {
    $: 'ExpectingInt'
  };
  var $author$project$Internal$Parser$InvalidInt = {
    $: 'InvalidInt'
  };
  var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
  var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
  var $elm$parser$Parser$Advanced$bumpOffset = F2(function (newOffset, s) {
    return {
      col: s.col + (newOffset - s.offset),
      context: s.context,
      indent: s.indent,
      offset: newOffset,
      row: s.row,
      src: s.src
    };
  });
  var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
  var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
  var $elm$parser$Parser$Advanced$consumeExp = F2(function (offset, src) {
    if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
      var eOffset = offset + 1;
      var expOffset = A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src) ? eOffset + 1 : eOffset;
      var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
      return _Utils_eq(expOffset, newOffset) ? -newOffset : newOffset;
    } else {
      return offset;
    }
  });
  var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(function (offset, src) {
    return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2($elm$parser$Parser$Advanced$consumeExp, A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src), src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
  });
  var $elm$parser$Parser$Advanced$finalizeInt = F5(function (invalid, handler, startOffset, _v0, s) {
    var endOffset = _v0.a;
    var n = _v0.b;

    if (handler.$ === 'Err') {
      var x = handler.a;
      return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, x));
    } else {
      var toValue = handler.a;
      return _Utils_eq(startOffset, endOffset) ? A2($elm$parser$Parser$Advanced$Bad, _Utils_cmp(s.offset, startOffset) < 0, A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
    }
  });
  var $elm$parser$Parser$Advanced$fromInfo = F4(function (row, col, x, context) {
    return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
  });
  var $elm$core$String$toFloat = _String_toFloat;
  var $elm$parser$Parser$Advanced$finalizeFloat = F6(function (invalid, expecting, intSettings, floatSettings, intPair, s) {
    var intOffset = intPair.a;
    var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);

    if (floatOffset < 0) {
      return A2($elm$parser$Parser$Advanced$Bad, true, A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
    } else {
      if (_Utils_eq(s.offset, floatOffset)) {
        return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting));
      } else {
        if (_Utils_eq(intOffset, floatOffset)) {
          return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
        } else {
          if (floatSettings.$ === 'Err') {
            var x = floatSettings.a;
            return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
          } else {
            var toValue = floatSettings.a;

            var _v1 = $elm$core$String$toFloat(A3($elm$core$String$slice, s.offset, floatOffset, s.src));

            if (_v1.$ === 'Nothing') {
              return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
            } else {
              var n = _v1.a;
              return A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
            }
          }
        }
      }
    }
  });

  var $elm$parser$Parser$Advanced$number = function $elm$parser$Parser$Advanced$number(c) {
    return $elm$parser$Parser$Advanced$Parser(function (s) {
      if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
        var zeroOffset = s.offset + 1;
        var baseOffset = zeroOffset + 1;
        return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.hex, baseOffset, A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.octal, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.binary, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src), s) : A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, _Utils_Tuple2(zeroOffset, 0), s);
      } else {
        return A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src), s);
      }
    });
  };

  var $elm$parser$Parser$Advanced$int = F2(function (expecting, invalid) {
    return $elm$parser$Parser$Advanced$number({
      binary: $elm$core$Result$Err(invalid),
      expecting: expecting,
      _float: $elm$core$Result$Err(invalid),
      hex: $elm$core$Result$Err(invalid),
      _int: $elm$core$Result$Ok($elm$core$Basics$identity),
      invalid: invalid,
      octal: $elm$core$Result$Err(invalid)
    });
  });
  var $author$project$Internal$Parser$numberOfArgs_ = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Internal$Parser$ExpectingLeftBracket))), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$int, $author$project$Internal$Parser$ExpectingInt, $author$project$Internal$Parser$InvalidInt), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Internal$Parser$ExpectingRightBracket))));
  var $author$project$Internal$Parser$numberOfArgs = A2($elm$parser$Parser$Advanced$map, $elm$core$Maybe$withDefault(0), A2($elm$parser$Parser$Advanced$map, $elm$core$List$head, $author$project$Internal$Parser$many($author$project$Internal$Parser$numberOfArgs_)));
  var $author$project$Internal$Parser$newcommand = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$NewCommand), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\newcommand{', $author$project$Internal$Parser$ExpectingEscapedNewcommandAndBrace))), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$macroName, $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '}', $author$project$Internal$Parser$ExpectingRightBrace)))), $author$project$Internal$Parser$numberOfArgs), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$arg, $author$project$Internal$Parser$ws));
  var $author$project$Internal$Parser$ExpectingEndForPassThroughBody = {
    $: 'ExpectingEndForPassThroughBody'
  };
  var $elm$core$List$drop = F2(function (n, list) {
    drop: while (true) {
      if (n <= 0) {
        return list;
      } else {
        if (!list.b) {
          return list;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$n = n - 1,
              $temp$list = xs;
          n = $temp$n;
          list = $temp$list;
          continue drop;
        }
      }
    }
  });
  var $elm$core$List$filter = F2(function (isGood, list) {
    return A3($elm$core$List$foldr, F2(function (x, xs) {
      return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
    }), _List_Nil, list);
  });
  var $elm$parser$Parser$Advanced$bagToList = F2(function (bag, list) {
    bagToList: while (true) {
      switch (bag.$) {
        case 'Empty':
          return list;

        case 'AddRight':
          var bag1 = bag.a;
          var x = bag.b;
          var $temp$bag = bag1,
              $temp$list = A2($elm$core$List$cons, x, list);
          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;

        default:
          var bag1 = bag.a;
          var bag2 = bag.b;
          var $temp$bag = bag1,
              $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;
      }
    }
  });
  var $elm$parser$Parser$Advanced$run = F2(function (_v0, src) {
    var parse = _v0.a;

    var _v1 = parse({
      col: 1,
      context: _List_Nil,
      indent: 1,
      offset: 0,
      row: 1,
      src: src
    });

    if (_v1.$ === 'Good') {
      var value = _v1.b;
      return $elm$core$Result$Ok(value);
    } else {
      var bag = _v1.b;
      return $elm$core$Result$Err(A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
    }
  });
  var $author$project$Internal$Parser$runParser = F2(function (p, str) {
    var expr = A2($elm$parser$Parser$Advanced$run, p, str);

    if (expr.$ === 'Ok') {
      var latexExpr = expr.a;
      return latexExpr;
    } else {
      var error = expr.a;
      return _List_fromArray([$author$project$Internal$Parser$LXError(error)]);
    }
  });
  var $elm$core$String$trim = _String_trim;
  var $author$project$Internal$Parser$passThroughEnv = F2(function (envType, source) {
    var lines = A2($elm$core$List$filter, function (l) {
      return $elm$core$String$length(l) > 0;
    }, $elm$core$String$lines($elm$core$String$trim(source)));
    var optArgs_ = A2($author$project$Internal$Parser$runParser, $author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg), A2($elm$core$Maybe$withDefault, '', $elm$core$List$head(lines)));
    var body = _Utils_eq(optArgs_, _List_Nil) ? A2($elm$core$String$join, '\n', lines) : A2($elm$core$String$join, '\n', A2($elm$core$List$drop, 1, lines));
    return A3($author$project$Internal$Parser$Environment, envType, optArgs_, $author$project$Internal$Parser$LXString(body));
  });
  var $author$project$Internal$Parser$passThroughBody = F2(function (endWoord, envType) {
    return A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$passThroughEnv(envType), A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), A2($elm$parser$Parser$Advanced$ignorer, A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndForPassThroughBody, endWoord), $author$project$Internal$Parser$ws)));
  });
  var $author$project$Internal$Parser$ExpectingmSMacroReservedWord = {
    $: 'ExpectingmSMacroReservedWord'
  };
  var $author$project$Internal$Parser$smacroName = A2($elm$parser$Parser$Advanced$map, $elm$core$String$dropLeft(1), $elm$parser$Parser$Advanced$variable({
    expecting: $author$project$Internal$Parser$ExpectingmSMacroReservedWord,
    inner: function inner(c) {
      return $elm$core$Char$isAlphaNum(c);
    },
    reserved: $elm$core$Set$fromList(_List_fromArray(['\\begin', '\\end', '\\item'])),
    start: function start(c) {
      return _Utils_eq(c, _Utils_chr('\\'));
    }
  }));
  var $author$project$Internal$Parser$ExpectingDoubleEscapeAndNewline = {
    $: 'ExpectingDoubleEscapeAndNewline'
  };
  var $author$project$Internal$Parser$ExpectingNewline = {
    $: 'ExpectingNewline'
  };
  var $author$project$Internal$Parser$ExpectingValidTableCell = {
    $: 'ExpectingValidTableCell'
  };

  var $author$project$Internal$Parser$inTableCellWord = function $author$project$Internal$Parser$inTableCellWord(c) {
    return !(_Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n')) || _Utils_eq(c, _Utils_chr('\\')) || _Utils_eq(c, _Utils_chr('$')) || _Utils_eq(c, _Utils_chr('&')));
  };

  var $author$project$Internal$Parser$tableCellWords = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LXString, A2($elm$parser$Parser$Advanced$map, $elm$core$String$trim, A2($elm$parser$Parser$Advanced$map, $elm$core$String$join(' '), $author$project$Internal$Parser$nonEmptyItemList(A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidTableCell, $author$project$Internal$Parser$inTableCellWord)))));
  var $author$project$Internal$Parser$tableCell = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$displayMathBrackets, $author$project$Internal$Parser$macro($author$project$Internal$Parser$ws), $author$project$Internal$Parser$displayMathDollar, $author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws), $author$project$Internal$Parser$tableCellWords])));
  var $author$project$Internal$Parser$ExpectingAmpersand = {
    $: 'ExpectingAmpersand'
  };
  var $author$project$Internal$Parser$nextCell = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '&', $author$project$Internal$Parser$ExpectingAmpersand))), $author$project$Internal$Parser$spaces), $author$project$Internal$Parser$tableCell);

  var $author$project$Internal$Parser$tableCellHelp = function $author$project$Internal$Parser$tableCellHelp(revCells) {
    return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([A2($elm$parser$Parser$Advanced$andThen, function (c) {
      return $author$project$Internal$Parser$tableCellHelp(A2($elm$core$List$cons, c, revCells));
    }, $author$project$Internal$Parser$nextCell), $elm$parser$Parser$Advanced$succeed($elm$core$List$reverse(revCells))]));
  };

  var $author$project$Internal$Parser$tableRow = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$andThen, function (c) {
    return $author$project$Internal$Parser$tableCellHelp(_List_fromArray([c]));
  }, $author$project$Internal$Parser$tableCell), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\n', $author$project$Internal$Parser$ExpectingNewline)), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\\\\n', $author$project$Internal$Parser$ExpectingDoubleEscapeAndNewline))])))));
  var $author$project$Internal$Parser$tableBody = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$ws), $author$project$Internal$Parser$nonEmptyItemList($author$project$Internal$Parser$tableRow)));
  var $author$project$Internal$Parser$tabularEnvironmentBody = F2(function (endWoord, envType) {
    return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$Environment(envType)), $author$project$Internal$Parser$ws), $author$project$Internal$Parser$itemList($author$project$Internal$Parser$arg)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$tableBody, $author$project$Internal$Parser$ws), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, endWoord, $author$project$Internal$Parser$ExpectingEndWord(endWoord)))), $author$project$Internal$Parser$ws));
  });

  var $author$project$Internal$Parser$Comment = function $author$project$Internal$Parser$Comment(a) {
    return {
      $: 'Comment',
      a: a
    };
  };

  var $author$project$Internal$Parser$ExpectingPercent = {
    $: 'ExpectingPercent'
  };
  var $elm$core$Basics$neq = _Utils_notEqual;
  var $author$project$Internal$Parser$texComment = A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$Comment, $elm$parser$Parser$Advanced$getChompedString(A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0), A2($elm$parser$Parser$Advanced$chompIf, function (c) {
    return _Utils_eq(c, _Utils_chr('%'));
  }, $author$project$Internal$Parser$ExpectingPercent)), $elm$parser$Parser$Advanced$chompWhile(function (c) {
    return !_Utils_eq(c, _Utils_chr('\n'));
  })), A2($elm$parser$Parser$Advanced$chompIf, function (c) {
    return _Utils_eq(c, _Utils_chr('\n'));
  }, $author$project$Internal$Parser$ExpectingNewline)), $author$project$Internal$Parser$ws)));
  var $author$project$Internal$Parser$biblioEnvironmentBody = F2(function (endWoord, envType) {
    return A2($elm$parser$Parser$Advanced$map, A2($author$project$Internal$Parser$Environment, envType, _List_Nil), A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$ws), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($author$project$Internal$Parser$cyclic$smacro()), $author$project$Internal$Parser$ws), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, endWoord, $author$project$Internal$Parser$ExpectingEndWord(endWoord)))), $author$project$Internal$Parser$ws))));
  });

  var $author$project$Internal$Parser$environmentOfType = function $author$project$Internal$Parser$environmentOfType(envType) {
    var theEndWord = '\\end{' + (envType + '}');

    var katex = _List_fromArray(['align', 'matrix', 'pmatrix', 'bmatrix', 'Bmatrix', 'vmatrix', 'Vmatrix']);

    var envKind = A2($elm$core$List$member, envType, _Utils_ap(_List_fromArray(['equation', 'eqnarray', 'verbatim', 'colored', 'CD', 'mathmacro', 'textmacro', 'listing', 'verse']), katex)) ? 'passThrough' : envType;
    return A3($author$project$Internal$Parser$environmentParser, envKind, theEndWord, envType);
  };

  var $author$project$Internal$Parser$environmentParser = F3(function (envKind, theEndWord, envType) {
    var _v3 = A2($elm$core$Dict$get, envKind, $author$project$Internal$Parser$cyclic$parseEnvironmentDict());

    if (_v3.$ === 'Just') {
      var p = _v3.a;
      return A2(p, theEndWord, envType);
    } else {
      return A2($author$project$Internal$Parser$standardEnvironmentBody, theEndWord, envType);
    }
  });
  var $author$project$Internal$Parser$itemEnvironmentBody = F2(function (endWoord, envType) {
    return A2($elm$parser$Parser$Advanced$map, A2($author$project$Internal$Parser$Environment, envType, _List_Nil), A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$ws), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$item, $elm$parser$Parser$Advanced$lazy(function (_v2) {
      return $author$project$Internal$Parser$cyclic$environment();
    })]))), $author$project$Internal$Parser$ws), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, endWoord, $author$project$Internal$Parser$ExpectingEndWordInItemList(endWoord)))), $author$project$Internal$Parser$ws))));
  });
  var $author$project$Internal$Parser$standardEnvironmentBody = F2(function (endWoord, envType) {
    return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$Environment(envType)), $author$project$Internal$Parser$ws), A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg), $author$project$Internal$Parser$ws)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, $author$project$Internal$Parser$nonEmptyItemList($author$project$Internal$Parser$cyclic$latexExpression())), $author$project$Internal$Parser$ws), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, endWoord, $author$project$Internal$Parser$ExpectingEndWord(endWoord)))), $author$project$Internal$Parser$ws));
  });

  function $author$project$Internal$Parser$cyclic$environment() {
    return A2($elm$parser$Parser$Advanced$andThen, $author$project$Internal$Parser$environmentOfType, $author$project$Internal$Parser$envName);
  }

  function $author$project$Internal$Parser$cyclic$latexList() {
    return A2($elm$parser$Parser$Advanced$map, $author$project$Internal$Parser$LatexList, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$ws), $author$project$Internal$Parser$itemList($author$project$Internal$Parser$cyclic$latexExpression())));
  }

  function $author$project$Internal$Parser$cyclic$latexExpression() {
    return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$author$project$Internal$Parser$texComment, $author$project$Internal$Parser$displayMathDollar, $author$project$Internal$Parser$displayMathBrackets, $author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws), $author$project$Internal$Parser$newcommand, $author$project$Internal$Parser$macro($author$project$Internal$Parser$ws), $author$project$Internal$Parser$cyclic$smacro(), $author$project$Internal$Parser$words, $elm$parser$Parser$Advanced$lazy(function (_v1) {
      return $author$project$Internal$Parser$cyclic$environment();
    })]));
  }

  function $author$project$Internal$Parser$cyclic$parseEnvironmentDict() {
    return $elm$core$Dict$fromList(_List_fromArray([_Utils_Tuple2('enumerate', F2(function (endWoord, envType) {
      return A2($author$project$Internal$Parser$itemEnvironmentBody, endWoord, envType);
    })), _Utils_Tuple2('itemize', F2(function (endWoord, envType) {
      return A2($author$project$Internal$Parser$itemEnvironmentBody, endWoord, envType);
    })), _Utils_Tuple2('thebibliography', F2(function (endWoord, envType) {
      return A2($author$project$Internal$Parser$biblioEnvironmentBody, endWoord, envType);
    })), _Utils_Tuple2('tabular', F2(function (endWoord, envType) {
      return A2($author$project$Internal$Parser$tabularEnvironmentBody, endWoord, envType);
    })), _Utils_Tuple2('passThrough', F2(function (endWoord, envType) {
      return A2($author$project$Internal$Parser$passThroughBody, endWoord, envType);
    }))]));
  }

  function $author$project$Internal$Parser$cyclic$smacro() {
    return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$SMacro), $author$project$Internal$Parser$smacroName), $author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg)), $author$project$Internal$Parser$itemList($author$project$Internal$Parser$arg)), $elm$parser$Parser$Advanced$lazy(function (_v0) {
      return $author$project$Internal$Parser$cyclic$latexList();
    }));
  }

  try {
    var $author$project$Internal$Parser$environment = $author$project$Internal$Parser$cyclic$environment();

    $author$project$Internal$Parser$cyclic$environment = function $author$project$Internal$Parser$cyclic$environment() {
      return $author$project$Internal$Parser$environment;
    };

    var $author$project$Internal$Parser$latexList = $author$project$Internal$Parser$cyclic$latexList();

    $author$project$Internal$Parser$cyclic$latexList = function $author$project$Internal$Parser$cyclic$latexList() {
      return $author$project$Internal$Parser$latexList;
    };

    var $author$project$Internal$Parser$latexExpression = $author$project$Internal$Parser$cyclic$latexExpression();

    $author$project$Internal$Parser$cyclic$latexExpression = function $author$project$Internal$Parser$cyclic$latexExpression() {
      return $author$project$Internal$Parser$latexExpression;
    };

    var $author$project$Internal$Parser$parseEnvironmentDict = $author$project$Internal$Parser$cyclic$parseEnvironmentDict();

    $author$project$Internal$Parser$cyclic$parseEnvironmentDict = function $author$project$Internal$Parser$cyclic$parseEnvironmentDict() {
      return $author$project$Internal$Parser$parseEnvironmentDict;
    };

    var $author$project$Internal$Parser$smacro = $author$project$Internal$Parser$cyclic$smacro();

    $author$project$Internal$Parser$cyclic$smacro = function $author$project$Internal$Parser$cyclic$smacro() {
      return $author$project$Internal$Parser$smacro;
    };
  } catch ($) {
    throw 'Some top-level definitions from `Internal.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    biblioEnvironmentBody\n  │     ↓\n  │    environment\n  │     ↓\n  │    environmentOfType\n  │     ↓\n  │    environmentParser\n  │     ↓\n  │    itemEnvironmentBody\n  │     ↓\n  │    latexList\n  │     ↓\n  │    latexExpression\n  │     ↓\n  │    parseEnvironmentDict\n  │     ↓\n  │    smacro\n  │     ↓\n  │    standardEnvironmentBody\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';
  }

  var $author$project$Internal$Parser$parse = function $author$project$Internal$Parser$parse(text) {
    var expr = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$latexList, text);

    if (expr.$ === 'Ok') {
      if (expr.a.$ === 'LatexList') {
        var list = expr.a.a;
        return list;
      } else {
        return _List_fromArray([$author$project$Internal$Parser$LXString('Dude! not great code here.')]);
      }
    } else {
      var error = expr.a;
      return _List_fromArray([$author$project$Internal$Parser$LXError(error)]);
    }
  };

  var $author$project$MiniLatex$parse = $author$project$Internal$Parser$parse;
  var $author$project$Internal$Paragraph$Start = {
    $: 'Start'
  };

  var $author$project$Internal$Stack$Stack = function $author$project$Internal$Stack$Stack(a) {
    return {
      $: 'Stack',
      a: a
    };
  };

  var $author$project$Internal$Stack$empty = $author$project$Internal$Stack$Stack(_List_Nil);

  var $author$project$Internal$Paragraph$fixLine = function $author$project$Internal$Paragraph$fixLine(line) {
    return line === '' ? '\n' : line;
  };

  var $author$project$Internal$Paragraph$Error = {
    $: 'Error'
  };
  var $author$project$Internal$Paragraph$IgnoreLine = {
    $: 'IgnoreLine'
  };

  var $author$project$Internal$Paragraph$InBlock = function $author$project$Internal$Paragraph$InBlock(a) {
    return {
      $: 'InBlock',
      a: a
    };
  };

  var $author$project$Internal$Paragraph$InMathBlock = {
    $: 'InMathBlock'
  };
  var $author$project$Internal$Paragraph$InParagraph = {
    $: 'InParagraph'
  };
  var $elm$core$String$endsWith = _String_endsWith;

  var $author$project$Internal$Paragraph$BeginBlock = function $author$project$Internal$Paragraph$BeginBlock(a) {
    return {
      $: 'BeginBlock',
      a: a
    };
  };

  var $author$project$Internal$Paragraph$Blank = {
    $: 'Blank'
  };

  var $author$project$Internal$Paragraph$EndBlock = function $author$project$Internal$Paragraph$EndBlock(a) {
    return {
      $: 'EndBlock',
      a: a
    };
  };

  var $author$project$Internal$Paragraph$MathBlock = {
    $: 'MathBlock'
  };
  var $author$project$Internal$Paragraph$Text = {
    $: 'Text'
  };

  var $author$project$Internal$Paragraph$getBeginArg = function $author$project$Internal$Paragraph$getBeginArg(line) {
    var parseResult = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$envName, line);

    var arg = function () {
      if (parseResult.$ === 'Ok') {
        var word = parseResult.a;
        return word;
      } else {
        return '';
      }
    }();

    return arg;
  };

  var $author$project$Internal$Parser$ExpectingEndAndRightBrace = {
    $: 'ExpectingEndAndRightBrace'
  };
  var $author$project$Internal$Parser$ExpectingEnvironmentNameEnd = {
    $: 'ExpectingEnvironmentNameEnd'
  };
  var $author$project$Internal$Parser$endWord = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $author$project$Internal$Parser$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, '\\end{', $author$project$Internal$Parser$ExpectingEnvironmentNameEnd))), A2($elm$parser$Parser$Advanced$ignorer, A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndAndRightBrace, '}'), $author$project$Internal$Parser$ws));

  var $author$project$Internal$Paragraph$getEndArg = function $author$project$Internal$Paragraph$getEndArg(line) {
    var parseResult = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$endWord, line);

    var arg = function () {
      if (parseResult.$ === 'Ok') {
        var word = parseResult.a;
        return word;
      } else {
        return '';
      }
    }();

    return arg;
  };

  var $elm$core$String$startsWith = _String_startsWith;

  var $author$project$Internal$Paragraph$lineType = function $author$project$Internal$Paragraph$lineType(line) {
    return line === '' ? $author$project$Internal$Paragraph$Blank : A2($elm$core$String$startsWith, '\\begin', line) ? $author$project$Internal$Paragraph$BeginBlock($author$project$Internal$Paragraph$getBeginArg(line)) : A2($elm$core$String$startsWith, '\\end', line) ? $author$project$Internal$Paragraph$EndBlock($author$project$Internal$Paragraph$getEndArg(line)) : A2($elm$core$String$startsWith, '$$', line) ? $author$project$Internal$Paragraph$MathBlock : $author$project$Internal$Paragraph$Text;
  };

  var $elm$core$List$tail = function $elm$core$List$tail(list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return $elm$core$Maybe$Just(xs);
    } else {
      return $elm$core$Maybe$Nothing;
    }
  };

  var $author$project$Internal$Stack$pop = function $author$project$Internal$Stack$pop(_v0) {
    var list = _v0.a;

    var _v1 = $elm$core$List$tail(list);

    if (_v1.$ === 'Nothing') {
      return $author$project$Internal$Stack$Stack(_List_Nil);
    } else {
      var tail = _v1.a;
      return $author$project$Internal$Stack$Stack(tail);
    }
  };

  var $author$project$Internal$Stack$push = F2(function (element, _v0) {
    var list = _v0.a;
    return $author$project$Internal$Stack$Stack(A2($elm$core$List$cons, element, list));
  });

  var $author$project$Internal$Stack$top = function $author$project$Internal$Stack$top(_v0) {
    var list = _v0.a;
    return $elm$core$List$head(list);
  };

  var $author$project$Internal$Paragraph$getNextState = F2(function (line, _v0) {
    var parserState = _v0.a;
    var stack = _v0.b;

    var _v1 = _Utils_Tuple2(parserState, $author$project$Internal$Paragraph$lineType(line));

    _v1$23: while (true) {
      switch (_v1.a.$) {
        case 'Start':
          switch (_v1.b.$) {
            case 'Blank':
              var _v2 = _v1.a;
              var _v3 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);

            case 'Text':
              var _v4 = _v1.a;
              var _v5 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);

            case 'BeginBlock':
              var _v6 = _v1.a;
              var arg = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), A2($author$project$Internal$Stack$push, arg, stack));

            case 'MathBlock':
              var _v7 = _v1.a;
              var _v8 = _v1.b;
              return A2($elm$core$String$endsWith, '$$', A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            case 'Ignore':
              var _v9 = _v1.a;
              var _v10 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$IgnoreLine, stack);

            default:
              break _v1$23;
          }

        case 'IgnoreLine':
          switch (_v1.b.$) {
            case 'Blank':
              var _v11 = _v1.a;
              var _v12 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);

            case 'Text':
              var _v13 = _v1.a;
              var _v14 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);

            case 'BeginBlock':
              var _v15 = _v1.a;
              var arg = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), A2($author$project$Internal$Stack$push, arg, stack));

            case 'MathBlock':
              var _v16 = _v1.a;
              var _v17 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            default:
              break _v1$23;
          }

        case 'InBlock':
          switch (_v1.b.$) {
            case 'Blank':
              var arg = _v1.a.a;
              var _v18 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), stack);

            case 'Text':
              var arg = _v1.a.a;
              var _v19 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), stack);

            case 'MathBlock':
              var arg = _v1.a.a;
              var _v20 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            case 'BeginBlock':
              var arg = _v1.a.a;
              var arg2 = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), A2($author$project$Internal$Stack$push, arg2, stack));

            case 'EndBlock':
              var arg1 = _v1.a.a;
              var arg2 = _v1.b.a;

              var _v21 = _Utils_Tuple2($author$project$Internal$Stack$pop(stack), line);

              var nextStack = _v21.a;
              var line_ = _v21.b;

              var _v22 = $author$project$Internal$Stack$top(nextStack);

              if (_v22.$ === 'Nothing') {
                return _Utils_Tuple2($author$project$Internal$Paragraph$Start, nextStack);
              } else {
                var arg = _v22.a;
                return _Utils_Tuple2($author$project$Internal$Paragraph$InBlock(arg), nextStack);
              }

            default:
              break _v1$23;
          }

        case 'InParagraph':
          switch (_v1.b.$) {
            case 'Text':
              var _v23 = _v1.a;
              var _v24 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);

            case 'BeginBlock':
              var _v25 = _v1.a;
              var str = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, A2($author$project$Internal$Stack$push, str, stack));

            case 'MathBlock':
              var _v26 = _v1.a;
              var _v27 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            case 'EndBlock':
              var _v28 = _v1.a;
              var arg = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$Error, stack);

            case 'Blank':
              var _v29 = _v1.a;
              var _v30 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);

            default:
              break _v1$23;
          }

        case 'InMathBlock':
          switch (_v1.b.$) {
            case 'BeginBlock':
              var _v31 = _v1.a;
              var str = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            case 'EndBlock':
              var _v32 = _v1.a;
              var str = _v1.b.a;
              return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);

            case 'MathBlock':
              var _v33 = _v1.a;
              var _v34 = _v1.b;
              return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);

            default:
              var _v35 = _v1.a;
              return A2($elm$core$String$endsWith, '$$', A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : line === '' ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
          }

        default:
          break _v1$23;
      }
    }

    return _Utils_Tuple2($author$project$Internal$Paragraph$Error, stack);
  });
  var $author$project$Internal$Paragraph$joinLines = F2(function (a, b) {
    var _v0 = _Utils_Tuple2(a, b);

    _v0$1: while (true) {
      _v0$2: while (true) {
        switch (_v0.a) {
          case '':
            return b;

          case '\n':
            switch (_v0.b) {
              case '':
                break _v0$1;

              case '\n':
                break _v0$2;

              default:
                break _v0$2;
            }

          default:
            switch (_v0.b) {
              case '':
                break _v0$1;

              case '\n':
                return a + '\n';

              default:
                var aa = _v0.a;
                var bb = _v0.b;
                return aa + ('\n' + bb);
            }

        }
      }

      return '\n' + b;
    }

    return a;
  });
  var $author$project$Internal$Paragraph$updateParserRecord = F2(function (line, parserRecord) {
    var _v0 = A2($author$project$Internal$Paragraph$getNextState, line, _Utils_Tuple2(parserRecord.state, parserRecord.stack));

    var nextState = _v0.a;
    var nextStack = _v0.b;

    switch (nextState.$) {
      case 'Start':
        return _Utils_update(parserRecord, {
          currentParagraph: '',
          paragraphList: _Utils_ap(parserRecord.paragraphList, _List_fromArray([A2($author$project$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line)])),
          stack: nextStack,
          state: nextState
        });

      case 'InParagraph':
        return _Utils_update(parserRecord, {
          currentParagraph: A2($author$project$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line),
          stack: nextStack,
          state: nextState
        });

      case 'InMathBlock':
        return _Utils_update(parserRecord, {
          currentParagraph: A2($author$project$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line),
          stack: nextStack,
          state: nextState
        });

      case 'InBlock':
        var arg = nextState.a;
        return _Utils_update(parserRecord, {
          currentParagraph: A2($author$project$Internal$Paragraph$joinLines, parserRecord.currentParagraph, $author$project$Internal$Paragraph$fixLine(line)),
          stack: nextStack,
          state: nextState
        });

      case 'IgnoreLine':
        return _Utils_update(parserRecord, {
          stack: nextStack,
          state: nextState
        });

      default:
        return _Utils_update(parserRecord, {
          stack: nextStack
        });
    }
  });

  var $author$project$Internal$Paragraph$logicalParagraphParse = function $author$project$Internal$Paragraph$logicalParagraphParse(text) {
    return A3($elm$core$List$foldl, $author$project$Internal$Paragraph$updateParserRecord, {
      currentParagraph: '',
      paragraphList: _List_Nil,
      stack: $author$project$Internal$Stack$empty,
      state: $author$project$Internal$Paragraph$Start
    }, A2($elm$core$String$split, '\n', text + '\n'));
  };

  var $author$project$Internal$Paragraph$logicalParagraphify = function $author$project$Internal$Paragraph$logicalParagraphify(text) {
    var lastState = $author$project$Internal$Paragraph$logicalParagraphParse(text);
    return A2($elm$core$List$map, function (paragraph) {
      return $elm$core$String$trim(paragraph) + '\n\n';
    }, A2($elm$core$List$filter, function (x) {
      return x !== '';
    }, _Utils_ap(lastState.paragraphList, _List_fromArray([lastState.currentParagraph]))));
  };

  var $author$project$Internal$RenderToLatex$renderComment = function $author$project$Internal$RenderToLatex$renderComment(str) {
    return '% ' + (str + '\n');
  };

  var $author$project$Internal$RenderToLatex$render = function $author$project$Internal$RenderToLatex$render(latexExpression) {
    switch (latexExpression.$) {
      case 'Comment':
        var str = latexExpression.a;
        return $author$project$Internal$RenderToLatex$renderComment(str);

      case 'Macro':
        var name = latexExpression.a;
        var optArgs = latexExpression.b;
        var args = latexExpression.c;
        return A3($author$project$Internal$RenderToLatex$renderMacro, name, optArgs, args);

      case 'SMacro':
        var name = latexExpression.a;
        var optArgs = latexExpression.b;
        var args = latexExpression.c;
        var le = latexExpression.d;
        return A4($author$project$Internal$RenderToLatex$renderSMacro, name, optArgs, args, le);

      case 'Item':
        var level = latexExpression.a;
        var latexExpression_ = latexExpression.b;
        return A2($author$project$Internal$RenderToLatex$renderItem, level, latexExpression_);

      case 'InlineMath':
        var str = latexExpression.a;
        return ' $' + (str + '$');

      case 'DisplayMath':
        var str = latexExpression.a;
        return '$$' + (str + '$$');

      case 'Environment':
        var name = latexExpression.a;
        var args = latexExpression.b;
        var body = latexExpression.c;
        return A3($author$project$Internal$RenderToLatex$renderEnvironment, name, args, body);

      case 'LatexList':
        var args = latexExpression.a;
        return $author$project$Internal$RenderToLatex$renderLatexList(args);

      case 'LXString':
        var str = latexExpression.a;
        return str;

      case 'LXError':
        var error = latexExpression.a;
        return 'LXError';

      default:
        var name = latexExpression.a;
        var args = latexExpression.b;
        var body = latexExpression.c;
        return 'NewCommand';
    }
  };

  var $author$project$Internal$RenderToLatex$renderArgList = function $author$project$Internal$RenderToLatex$renderArgList(args) {
    return A2($elm$core$String$join, '', A2($elm$core$List$map, function (x) {
      return '{' + (x + '}');
    }, A2($elm$core$List$map, $author$project$Internal$RenderToLatex$render, args)));
  };

  var $author$project$Internal$RenderToLatex$renderEnvironment = F3(function (name, args, body) {
    return '\\begin{' + (name + ('}' + ($author$project$Internal$RenderToLatex$renderArgList(args) + ('\n' + ($author$project$Internal$RenderToLatex$render(body) + ('\n\\end{' + (name + '}\n')))))));
  });
  var $author$project$Internal$RenderToLatex$renderItem = F2(function (level, latexExpression) {
    return '\\item ' + ($author$project$Internal$RenderToLatex$render(latexExpression) + '\n\n');
  });

  var $author$project$Internal$RenderToLatex$renderLatexList = function $author$project$Internal$RenderToLatex$renderLatexList(args) {
    return A3($elm$core$List$foldl, F2(function (item, acc) {
      return _Utils_ap(acc, item);
    }), '', A2($elm$core$List$map, $author$project$Internal$RenderToLatex$render, args));
  };

  var $author$project$Internal$RenderToLatex$renderMacro = F3(function (name, optArgs, args) {
    return ' \\' + (name + ($author$project$Internal$RenderToLatex$renderOptArgList(optArgs) + $author$project$Internal$RenderToLatex$renderArgList(args)));
  });

  var $author$project$Internal$RenderToLatex$renderOptArgList = function $author$project$Internal$RenderToLatex$renderOptArgList(args) {
    return A2($elm$core$String$join, '', A2($elm$core$List$map, function (x) {
      return '[' + (x + ']');
    }, A2($elm$core$List$map, $author$project$Internal$RenderToLatex$render, args)));
  };

  var $author$project$Internal$RenderToLatex$renderSMacro = F4(function (name, optArgs, args, le) {
    return ' \\' + (name + ($author$project$Internal$RenderToLatex$renderOptArgList(optArgs) + ($author$project$Internal$RenderToLatex$renderArgList(args) + (' ' + ($author$project$Internal$RenderToLatex$render(le) + '\n\n')))));
  });

  var $author$project$Internal$RenderToLatex$renderBackToLatex = function $author$project$Internal$RenderToLatex$renderBackToLatex(str) {
    return A3($elm$core$List$foldl, F2(function (par, acc) {
      return acc + (par + '\n\n');
    }), '', A2($elm$core$List$map, $author$project$Internal$RenderToLatex$renderLatexList, A2($elm$core$List$map, $author$project$Internal$Parser$parse, $author$project$Internal$Paragraph$logicalParagraphify(str))));
  };

  var $author$project$Internal$RenderToLatex$renderBackToLatexTest = function $author$project$Internal$RenderToLatex$renderBackToLatexTest(str) {
    return _Utils_eq(str, $author$project$Internal$RenderToLatex$renderBackToLatex(str));
  };

  var $elm$core$String$replace = F3(function (before, after, string) {
    return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
  });

  var $author$project$Internal$RenderToLatex$renderBackToLatexTestModSpace = function $author$project$Internal$RenderToLatex$renderBackToLatexTestModSpace(str) {
    var b = A3($elm$core$String$replace, ' ', '', $elm$core$String$trim($author$project$Internal$RenderToLatex$renderBackToLatex(str)));
    var a = $elm$core$String$trim(A3($elm$core$String$replace, ' ', '', str));
    return _Utils_eq(a, b);
  };

  var $elm$core$Debug$toString = _Debug_toString;

  var $author$project$Main$transform = function $author$project$Main$transform(str_) {
    var str = $elm$core$String$trim(str_);
    var weaklyEqual = $author$project$Internal$RenderToLatex$renderBackToLatexTestModSpace(str);
    var latex = $author$project$Internal$RenderToLatex$renderBackToLatex(str);
    var equal = $author$project$Internal$RenderToLatex$renderBackToLatexTest(str);
    var indicator = $elm$core$Debug$toString(_Utils_Tuple2(equal, weaklyEqual));
    var diff = A2($elm$core$List$cons, '', A2($elm$core$List$cons, 'DIFF: ', A2($elm$core$List$map, $elm$core$Debug$toString, A2($jinjor$elm_diff$Diff$diffLines, str, latex))));
    var ast = A2($elm$core$List$map, $elm$core$Debug$toString, $author$project$MiniLatex$parse(str));
    return ast;
  };

  var $author$project$Main$update = F2(function (msg, model) {
    var kIn = msg.a;
    var kOut = $author$project$Main$transform(kIn);
    return _Utils_Tuple2(model, $author$project$Main$put(kOut));
  });
  var $elm$core$Platform$worker = _Platform_worker;
  var $author$project$Main$main = $elm$core$Platform$worker({
    init: $author$project$Main$init,
    subscriptions: $author$project$Main$subscriptions,
    update: $author$project$Main$update
  });

  _Platform_export({
    'Main': {
      'init': $author$project$Main$main($elm$json$Json$Decode$succeed(_Utils_Tuple0))({
        "versions": {
          "elm": "0.19.1"
        },
        "types": {
          "message": "Main.Msg",
          "aliases": {
            "Main.InputType": {
              "args": [],
              "type": "String.String"
            }
          },
          "unions": {
            "Main.Msg": {
              "args": [],
              "tags": {
                "Input": ["Main.InputType"]
              }
            },
            "String.String": {
              "args": [],
              "tags": {
                "String": []
              }
            }
          }
        }
      })
    }
  });
})(void 0);