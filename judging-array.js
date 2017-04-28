let arr = [1, 2, 4, 6, 9];
let obj = {name: 'szm'};

//1.利用 constructor 属性
arr.constructor === Array    //true
obj.constructor === Array    //false

//2.利用 instanceof 运算符
arr instanceof Array    //true
obj instanceof Array    //false

//3.利用 Object.prototype.toString() 方法
Object.prototype.toString.call(arr) === '[object Array]'    //true
Object.prototype.toString.call(obj) === '[object Array]'    //false

//4.利用 ES5 新增的 Array.isArray() 方法
Array.isArray(arr)    //true
Array.isArray(obj)    //false


//注意： typeof 运算符无法区分数组与对象
typeof arr    //'object'
typeof obj    //'object'
