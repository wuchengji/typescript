declare namespace base {
}
declare namespace mutGenerics {
}
declare namespace mutGenerics {
}
declare namespace genericsInterface {
}
declare namespace genericsClass {
}
declare function getObjVal<T extends Object, U extends keyof T>(obj: T, key: U): T[U];
