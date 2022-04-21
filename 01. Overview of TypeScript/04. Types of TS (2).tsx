// 1. readonly
// Case 1.
type Age = number;
type Name = string;
type Player = {
    readonly name : Name //name을 수정 불가
    age ?: Age
}

const playerMaker = (name : string) : Player => ({name})
const minjeong = playerMaker("minjeong")
minjeong.name = "Carly" //Error: readonly의 영향으로 name을 수정 불가

// Case 2.
const numbers : readonly number[] = [1, 2, 3, 4]
numbers.push(1) //Error: readonly의 영향으로 배열 numbers를 수정 불가

// Case 3.
const names : readonly string[] = ["1", "2"]
names.push("3") //Error: readonly의 영향으로 배열 names를 수정 불가

/*---------------------------------------------------------------*/

// 2. Tuple
//순서에 맞는 type을 가져야 함.
const player: [string, number, boolean] = ["minjeong", 1, true]
player[0] = 1 // Error: Type 'number' is not assignable to type 'string'.

//Tuple + readonly
const players: readonly [string, number, boolean] = ["minjeong", 1, true]
//Error: Cannot assign to '0' because it is a read-only property.
players[0] = "hi"

/*---------------------------------------------------------------*/

// 3. null & any
let a : undefined = undefined
let b : null = null

//비어있는 값을 썼을 때 값은 기본적으로 any임.
// TypeScript의 보호장치에서 벗어나는 것. 권장하지 않음.
let arr = []

const c : any[] = [1, 2, 3, 4]
const b : any = true
