interface IRect {
    readonly id: number | string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: IRect = {
    id: 123,
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}

const rect2 = {} as IRect
const rect3 = <IRect>{}

//=======================
// Наследование интерфейсов
interface IRectWidthArea extends IRect {
    getArea: () => number
}

const rect4: IRectWidthArea = {
    id: 12345,
    size: {
        width: 20,
        height: 40
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//console.log(rect4.getArea())

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }       
}

// ===========================

interface IStyles {
    [key: string]: string
}

const ccc: IStyles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
