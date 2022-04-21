// Case 1.
// a는 string으로, string으로 바꾸었기 때문에 오류 없음.
let a = "hello"
a = "bye"

// string인 a를 정수로 바꿔 error 발생
a = 1

/*-----------------------------------*/

//Case 2
let b = "hello"

// Type 'string' is not assignable to type 'boolean'.
// Type Checker와 소통, let c = "x"와 동일.
let c : boolean = "x" 

//error 발생하지 않음
let c : boolean = false

/*-----------------------------------*/

//Case 3
let d = "hello"
let e = false
let f = [1, 2, 3]
let f : number[] = []

//Argument of type 'string' is not assignable to parameter of type 'number'
f.push("4")

/*-----------------------------------*/

//Case 4
const player = {
    //string
    name: "minjeong"
}

//Type 'number' is not assignable to type 'string'.
player.name = 1
//Property 'hello' does not exist on type '{ name: string; }'.
player.hello()
