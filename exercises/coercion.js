{
  /**
   * 1 + "1" + 5 + 7 -> (1 + "1") + 5 + 7 -> ("11" + 5) + 7 ->
   * null + undefined
   * null + '' + false + 1
   * false + true
   * 'true' + false
   * !!'0' + Boolean('1')
   * !'false' + 9
   * 'js' + +'59'
   * 'evondev' + -'frontend' (dấu - hoạt động tương tự dấu +)
   * !!'false' == !!'0'
   * !!'true' === true
   * true == 'true'
   * 'false' == 'false'
   */
}

// 1 + "1" + 5 + 7 -> (1 + "1") + 5 + 7 -> ("11" + 5) + 7 -> "115" + 7 -> "1157"
console.log(1 + "1" + 5 + 7); // "1157"

// null + undefined -> Number(null) + Number(undefined) -> 0 + NaN -> NaN
console.log(null + undefined); // NaN

// null + '' + false + 1 -> (null + '') + false + 1 -> ('null' + false) + 1 -> 'nullfalse' + 1 -> 'nullfalse1'
console.log(null + "" + false + 1); // nullfalse1

// false + true -> Number(false) + Number(true) -> 0 + 1 -> 1
console.log(false + true); // 1

// 'true' + false -> "truefalse"
console.log("true" + false); // "truefalse"

// !!'0' + Boolean('1') -> true + true -> Number(true) + Number(true) -> 1 + 1 -> 2
console.log(!!"0" + Boolean("1")); // 2

// !'false' + 9 -> false + 9 -> Number(false) + 9 -> 0 + 9 -> 9
console.log(!"false" + 9); // 9

// 'js' + +'59' -> 'js' + 59 -> js59
console.log("js" + +"59"); // js59

// 'evondev' + -'frontend' -> 'evondev' + Number('frontend') -> 'evondev' + NaN -> evondevNaN
console.log("evondev" + -"frontend"); //evondevNaN

// !!'false' == !!'0' -> true == true -> true
console.log(!!"false" == !!"0"); // true

// !!'true' === true -> true === true -> true
console.log(!!"true" === true); // true

// true == 'true' -> Number(true) == Number('true') -> 1 == NaN -> false
console.log(true == "true"); // false

// 'false' == 'false' -> true
console.log("false" == "false"); // true
