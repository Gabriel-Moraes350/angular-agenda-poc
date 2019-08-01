export class Contato{
    id : number
    lastName: string
    name: string
    email: string
    birthDate: string

    public constructor(init?: Partial<Contato>) {
        Object.assign(this, init);
        
        //ajustando data
        this.birthDate = `${this.birthDate.substr(0,2)}/${this.birthDate.substr(2, 2)}/${this.birthDate.substr(4)}`; 
    }
}