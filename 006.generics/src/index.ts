namespace base{
    // T 是指类型变量
    function fn<T>(words:T):T{
        return words
    }
    fn(123)
    fn('123')
}

namespace mutGenerics{
    // 定义多个参数
    function fn<T, U>(name: T, age:U):[T, U]{
        return [ name, age ]
    }
    fn(1123, '123')
    fn(1123, 999)
}

namespace mutGenerics{
    // 未知类型参数
    function fn<T>(arg: Array<T>):Array<T>{
        console.log(arg.length)
        return arg
    }
    fn([1,2,3,4,5,'6'])
}

namespace genericsInterface{
    // 接口泛型
    interface Animals<T>{
        (arg:T): T
    }
    const returnItem: Animals<string> = para => para
}

namespace genericsClass{
    // 泛型类
    class Stack<T>{
        private arr:T[] = []
        push(arg:T){
            this.arr.push(arg)
        }
        pop(){
            this.arr.pop()
        }
    }
}

// e.g.
function getObjVal<T extends Object, U extends keyof T>(obj:T, key:U){
    return obj[key]
}
getObjVal({name:'123'}, 'name')