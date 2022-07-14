"use strict";
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    logName(user) {
        console.log(user.name);
    }
}
// lucky.logName(lucky)
class Administrator extends User {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    logWholeObject(admin) {
        console.log(admin);
    }
    changeName(newName) {
        this.name = newName;
        console.log(this.name);
    }
}
const Luciano2 = new Administrator('Luciano2');
Luciano2.logWholeObject(Luciano2);
Luciano2.changeName('Christian');
//   Luciano2.logName(Luciano2)
