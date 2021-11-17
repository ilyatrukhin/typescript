// строки
let str: string = 'Hello'
console.log(str)

// логические типы
let isFetching: boolean = true
let isLoading: boolean = false

// числа
let int: number = 42
const float: number = 2.5
const num: number = 3e10

// массивы
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

// Tuple
const contact: [string, number] = ['Ilya', 12342553]

// Any
let variable: any = 42
variable = 'New string'

// ================
function sayName(name: string): void{
    console.log(name)
}
sayName('Ilya')

// Never
function throwError(message: string): never{
    throw new Error(message); 
}

function infinite(): never {
    while(true){ }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '12345'

type SomeType = string | null | undefined