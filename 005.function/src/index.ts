namespace base{
    function fn(name: string, ...reset:string[]):void{}
    const fn2 = (name:String, age?: number):void => {}
}
namespace fnOverload{
    interface Direct{
        top: number,
        left?: number,
        right?: number,
        bottom?: number
    }
    function fn(top: number):Direct
    function fn(top: number, left?:number):Direct
    function fn(top:number, left?:number, right?:number, bottom?:number):Direct{
        return {
            top,
            left,
            right,
            bottom
        }
    }
    fn(1)
    fn(1, 2)
    // fn(1, 2, 3) // 报错
    // fn(1, 2, 3, 4) // 报错
}