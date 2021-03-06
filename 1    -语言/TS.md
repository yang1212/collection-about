## TS 

### TS是JS的一个超集（超集即向下兼容，通俗来说就是你有的我也有，我有的你不一定有），相比于JS增加的核心内容主要为 类型支持 & 类型校验。
<br/>

### 笔记记录(•◡•)

### 函数:

1）入参为数组：`Array<number>`代表数组组成的值类型为number
````typeScript
function missValue(nums: Array<number>): number {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) { return i + 1 }
  }
  return 0
}
missValue([1])
````
2）入参设置默认值

````typeScript
function missValueD(numOption: {suit: string; card?: number;}[]): number {
  console.log(numOption)
  return 0
}
missValueD([{suit: 'a'}])
````

3） void: 来表示函数没有返回值
````typeScript
function alertName(): void {
  alert('My name is Tom')
}
````

### 接口：

````typeScript
interface tempValue {
  label: string,
  name?: string // 可选属性, 属性名后添加?
  [propName: string]: any // 带有任意数量的其它属性
}
function missValueJ(nums: tempValue) : number{
  console.log(nums)
  return 1
}
missValueJ({label: '1', test: '2'})
````
接口的继承 + 联合类型(表示一个值可以是几种类型之一。 用竖线（ |）分隔每个类型，所以 number | string表示一个值可以是 number， string)
````typeScript
interface temp1 {
  label: string
  name?: string
}
interface temp2 extends temp1 {
  label: 'temp2Label'
}
interface temp3 extends temp1 {
  lable: 'temp3Label'
}
type temp4 = temp2 | temp3
function testFn(num: temp4): number {
  return 1
}
testFn({label: 'temp2Label'})
````

### 类型保护
在使用联合类型时，一个值可以表示几种类型，为了解决具体每一种类型所做的操作，可通过类型保护

1） in 操作符
````typeScript
interface obj1 {
  label: string,
  status: boolean
}

interface obj2 {
  label: string,
  date: string
}
type person = obj1 | obj2

function fn(emp: person) {
  if ("status" in emp) {
    console.log(emp.status)
  }
  if ("date" in emp) {
    console.log(emp.date)
  }
}
fn({label: 'a', date: 'b'})
````

2） typeof
````typeScript
function fn(label: string, num: number | string) {
  if (typeof num === 'number') {
    return num + 1
  }
  if (typeof num === 'string') {
    return +num + 1
  }

}
fn('a', 1)
````

3） instanceof
````typeScript
interface Obj3 {
  mainFn(): string
}

class Pot implements Obj3 {
  constructor(private name: string) {}
  mainFn() {
    console.log(111, this.name)
    return '2'
  }
}
class Bot implements Obj3 {
  constructor(private year: string) {}
  mainFn() {
    console.log(222, this.year)
    return '1'
  }
}

let temp: Obj3 = new Bot('a')

if (temp instanceof Bot) {
  console.log(1, temp.mainFn())
}
````

自定义等，[参考](https://cloud.tencent.com/developer/article/1600711)


### 泛型：

能够支持当前的数据类型，同时也能支持未来的数据类型, 并使得返回的值类型与入参类型一致,使得大型应用在可重用性方面有更好的拓展
````typeScript
function missValueT<T>(nums: T) : T {
  return nums
}
missValueT(2)
````

假设操作的T类型为数组
````typeScript
function missValueT1<T>(nums: T[]) : T[] {
  console.log(nums.length)
  return nums
}
````

### 其他：

基于剩余参数得出最小值报错(类型为数组的参数不能赋给类型number的参数)
````
Math.min(...arr)

应为:
Math.min.apply(Math, arr)
````