import {Person} from "./person.js";
export class Employee extends Person{
    constructor(name, dob , salary,hiredDate){
        super(name, dob);
        this._salary = salary;
        this._hiredDate = hiredDate;

    }
    set salary(salary){
        this._salary =salary;
    }
    set hiredDate(hiredDate){
        this._hiredDate =hiredDate;
    }
    get salary(){
        return this._salary;
    }
    get hiredDate(){
        return this._hiredDate;
    }
    dojob(jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this._salary}`);

    }
}