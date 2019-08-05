export class Contato{
    id : number
    lastName: string
    name: string
    email: string
    birthDate: string

    public constructor(init?: Partial<Contato>, id?: number) {
        Object.assign(this, init);
        
        //ajustando data
        if(!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(this.birthDate))
            this.birthDate = 
            `${this.birthDate.substr(0,2)}/${this.birthDate.substr(2, 2)}/${this.birthDate.substr(4)}`; 
        this.id = id;
    }
}