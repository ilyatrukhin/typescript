function add(a: number, b: number): number{
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface IPosition {
    x: number | undefined
    y: number | undefined
}

interface IPositionDefault extends IPosition {
    default: string
}

function position(): IPosition
function position(a: number): IPositionDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number){
    if(a !== 0 && b !== 0 && !a && !b){
        return {x: undefined, y: undefined}
    }

    if(a && b !== 0 && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(13))
console.log('Two params: ', position(3, 35))
console.log('Zero params: ', position(0, 0))