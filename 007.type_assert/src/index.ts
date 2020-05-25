namespace base{
    interface Obj{
        name?:string,
        age?:number
    }
    const o = {} as Obj
    o.name = '123'
    o.age = 12
}

namespace doubleAssert{
    interface Obj {
        name?:string,
        age?:number
    }
    const o = 'aaaa' as any as Obj
    // o.name = '123'  // 报错
    // o.age = 22  // 报错
    // console.log(o)
}

namespace instances{
    // 判断参数是什么类型
    class Dog{ name:string = 'dog' }
    class Cat{ age:number = 10 }
    function fn<T>(arg: T) {
        if(arg instanceof Dog) {
            console.log('dog')
        }
        if(arg instanceof Cat) {
            console.log('cat')
        }
    }
    fn(new Dog()) // dog
    fn(new Cat()) //cat
}

namespace ins{
    // 判断参数是否含有某个属性
    class Dog{ name:string = 'dog' }
    class Cat{ age:number = 10 }
    function fn<T>(arg: T) {
        if('name' in arg) {
            console.log('dog name')
        }
        if('age' in arg) {
            console.log('cat age')
        }
    }
    fn(new Dog()) // dog name
    fn(new Cat()) // cat age
}