interface IUser {
   readonly name: string;

   

    logName(user: IUser):void;
}

const newUser:IUser = {
    name: 'new user',
    logName(user:IUser | Admin){
        console.log(user.name)
    }
}
// lucky.logName(lucky)
newUser.logName(newUser)

class Admin implements IUser {
    name: string;
    constructor(name: string){
     this.name = name
    }

    logName(user: IUser | Admin): void {
        console.log(user.name)
    }

}

const Luciano = new Admin('Luciano')
Luciano.logName(Luciano)

