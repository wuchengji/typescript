// 抽象类: 不能实例化，只能被继承，内部抽象方法没有实现，但是被实体类继承后必须实现抽象方法
namespace absClass{
    abstract class Animal{
        // 抽象方法不能实现, 实体类继承之后必须实现抽象方法
        abstract say():void
        run():void{
            console.log('running......')
        }
    }
    // const a = new Animal() // 无法创建抽象类的实例

    // 可以继承
    class Dog extends Animal{
        say():void{
            console.log('dog say......')
        }
        run():void{
            console.log('dog running......')
        }
    }
    const dog = new Dog()
    // dog.run() // dog running......
    // dog.say() // dog say......
}

// 访问限定符
namespace abs{
    class Animal{
        private born():void {
            console.log('born...')
        }
        protected run():void {
            console.log('running...')
        }
        public main():void {
            this.born()
        }
    }
    const animal = new Animal()
    // animal.main() // 可以访问 born...
    // animal.run() // 报错不可以访问
    // animal.born() // 报错不可以访问

    class Dog extends Animal {
        done():void {
            this.run() // 可以访问
            this.main() // 可以访问
            // this.born() // 不可以访问
        }
    }
}