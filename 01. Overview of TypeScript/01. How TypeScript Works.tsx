const minjeong = {
    nickname: "jeong"
}

//잘못된 코드 1
//Property 'hello' does not exist on type '{ nickname: string; }'
minjeong.hello();

//잘못된 코드 2
//Operator '+' cannot be applied to types 'number[]' and 'boolean'.
[1, 2, 3, 4] + false

//잘못된 코드 3
//Expected 2 arguments, but got 1
function divide(a, b) {
    return a / b
}

divide("hello")
