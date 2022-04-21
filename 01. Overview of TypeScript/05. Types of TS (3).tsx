// 1. unknown
let a : unknown;

if (typeof a === 'number') {
    let b = a + 1
}

if (typeof a === 'string') {
    // a가 string이기 때문에 a를 대상으로 toUpperCase() 사용 가능.
    let b = a.toUpperCase();
}

/*-------------------------------------------------------------*/
// 2. void
//void는 아무것도 반환하지 않음.

function hello() {
    console.log('x') // 반환하는 값 없음
}

const arr = hello();
// Error: Property 'toUpperCase' does not exist on type 'void'.
arr.toUpperCase

/*-------------------------------------------------------------*/
//3. never

//return하지 않고 오류를 일으킴
function hello() : never{
    throw new Error("XXX")
}

function bye(name : string | number){
    if (typeof name === "string") {
        name //string
    } else if (typeof name === "number") {
        name //number
    } else { //절대 작동하면 안 되는 부분!
        name
    }
}
