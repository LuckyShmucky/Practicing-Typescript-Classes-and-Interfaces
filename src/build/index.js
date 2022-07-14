"use strict";
const newUser = {
    name: 'new user',
    logName(user) {
        console.log(user.name);
    }
};
// lucky.logName(lucky)
newUser.logName(newUser);
class Admin {
    name;
    constructor(name) {
        this.name = name;
    }
    logName(user) {
        console.log(user.name);
    }
}
const Luciano = new Admin('Luciano');
Luciano.logName(Luciano);
