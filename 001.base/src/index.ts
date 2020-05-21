// 1.基本类型定义
const str:string = 'string';
const num:number = 123;
const bol:boolean = false;

// 2.null和undefined
const nl = null;
const und = undefined;

// 3.Symbol
const sb = Symbol('a')

// 4.BigInt
const max:number = Number.MAX_SAFE_INTEGER
// console.log((max + 1) === (max + 2)) // true
const max2:bigint = BigInt(Number.MAX_SAFE_INTEGER)
// console.log((max2 + BigInt(1)) === (max2 + BigInt(2))) // false

// 5.any & unknown 都表示未知类型
let value1:any;
let value2:unknown;
// value1.a = '123'
// value2.a.b = 123 // 报错，unknown在未被确定类型之前是不能进行实例操作的

// 6.never 永远不存在的类型，可以赋值给任何类型
const emptyArr:never[] = []
// emptyArr.push(1) // 报错

// 7.数组
const array1:string[] = ['1', 'b', 'c']
const array2:Array<string> = ['a']
const array3:Array<string | number> = ['a', 1, 2, 'c'] // 声明多种

// 8.Tuple 元组（严格版的数组）,// 一一对应，不能多也不能少
const tuple1:[string] = ['a']
const tuple2:[string, number] = ['a', 20]
// const tuple3:[string, number] = [20, 'a'] // 报错，顺序不对
// const tuple3:[string, number] = ['', 2, 2] // 报错，多出来也不行

// 9.Object
const obj = {
    name: 'aaa',
    age: 20
}
