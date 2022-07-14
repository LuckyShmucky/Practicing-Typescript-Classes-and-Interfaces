class User {
    readonly name: string;
    constructor(name: string){
        this.name = name
    }

 
    logName(user: User):void{
        console.log(user.name)
     }
 }
 

 // lucky.logName(lucky)

 
 class Administrator extends User {
     name: string;
     constructor(name: string){
    super(name)
    this.name = name
     }
 
    logWholeObject(admin: Administrator):void{
        console.log(admin)
    }
    changeName(newName:string):void{
        this.name = newName
        console.log(this.name)
    }
 }
 
 const Luciano2 = new Administrator('Luciano2')
 Luciano2.logWholeObject(Luciano2)
 Luciano2.changeName('Christian')
//   Luciano2.logName(Luciano2)