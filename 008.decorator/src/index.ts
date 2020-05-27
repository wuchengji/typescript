namespace classDecortor{
    function addAge(constructor: Function) {
        constructor.prototype.age = 20
    }
    @addAge
    class Animal{
        name:string
        age!:number
        constructor(name:string){
            this.name = name
        }
    }
    let a1 = new Animal('dog')
    // console.log(a1.age)
}

namespace methodDecorator{
    function methods(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(target) // Person { say: [Function] } 传入的装饰的类
        console.log(propertyKey) // 装饰的方法
        console.log(descriptor) // 方法属性 { value: [Function], writable: true, enumerable: true, configurable: true }
    }
    class Person{
        constructor(){}
        @methods
        say() {
            console.log('say...')
        }
    }
    const p1 = new Person()
}