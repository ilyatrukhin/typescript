/* class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
} */

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){}
}

// ===================

class Animal {
    protected voice: string = ''
    public color: string  = 'black'

    constructor(){
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)

// ======================
