//Case 1. Basic Type
let a : number[] = [1];
let b : string[] = ["i1"];
let c : boolean[] = [true];

/*------------------------------------*/
//Case 2. Optional Type

const player : {
    name : string,
    age ?: number //optional parameter 지정
} = {
    name : "minjeong"
}

if (player.age && player.age < 10) {

}

/*------------------------------------*/
//Case 2. Alias Type

type Age = number;
type Name = string;

type Player = {
     name : Name,
    age ?: Age
}

//name이 Minjeong인 Player 객체 minjeong 생성
// const minjeong : Player = {
//     name: "Minjeong"
// }

function playerMaker(name:string) : Player {
    return {
        name
    }
}

const minjeong = playerMaker("minjeong")
//Error: Property 'age' does not exist on type '{ name: string; }'.
minjeong.age = 23
