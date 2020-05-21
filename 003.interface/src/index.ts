namespace base{
    interface User {
        name: string,
        age: number
    }
    const fn =(user:User):void => {
        user.name = 'newName'
        console.log(user)
    }
    // fn({ name: 'a', age: 20})
}

namespace attr{
    interface Int{
        age?:number,
        readonly name: string
    }
    function fn(user:Int):void{
        console.log(user)
    }
    // fn({ name: 'a', age: 20})
}

namespace functionInt{
    interface Fn{
        say: (words:string) => string,
        run: (name:string) => void
    }
    function fn(user: Fn):void {
        user.say('123')
        user.run('2222')
    }
    function say(words:string):string{
        return words
    }
    function run(name:string):void{
        console.log(name + 'running')
    }
    // fn({say, run})
}

namespace attrCheck{
    interface Check{
        width?:number,
        [props: string]: any // 添加签名解决额外参数
    }
    function area(config: Check): { area: number } {
        let area = 0
        if(config.width) {
            area = config.width**2
        }
        console.log(area)
        return { area }
    }
    // area({ wdf: 123 } as Check)
    // area({ wdf: 123 })
}

namespace obj{
    interface UserInfo{
        username: string,
        password: string,
        [prop:string]: any
    }
    interface Obj{
        name: string,
        userInfo:UserInfo
    }
    function fn(obj:Obj):void{
        console.log(obj)
    }
    // fn({name: 'aaaa', userInfo:{username: 'bbb', password: 'cccc', age: 20}})
}

namespace extendsInter{
    interface A{
        name: string
    }
    interface B{
        age: number
    }
    interface C extends A, B{
        sex: string
    }
    function fn(user: C):void{
        console.log(user)
    }
    // fn({name: 'aa', age: 20, sex: 'man'})
}