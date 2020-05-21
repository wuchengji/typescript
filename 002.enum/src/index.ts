// 枚举，一组命名的常数
enum enum1 {
    a,
    b,
    c
}
// console.log(enum1.a) // 0
// console.log(enum1.b === 1) // true

enum enum2 {
    a,
    b = 10,
    c,
    d,
}
// console.log(enum2.a, enum2.b, enum2.c, enum2.d) // 0 10 11 12, b赋值之后，后面的cd也会累加
// console.log(enum2[10]) // b 反向枚举

enum enum3 {
    a = 'A',
    b = 'B',
    str = 'abcde'
}
// console.log(enum3.a) // A
// console.log(enum3['str']) // abcde

// 当做类型使用
type t = 0
// let x: t = 1 // 报错：不能将类型“1”分配给类型“0”
let y:t = enum1.a

enum Animals {
    Dog,
    Cat
}
const animals:Animals = Animals.Dog
const animals2:Animals = Animals.Cat