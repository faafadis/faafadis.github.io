 export class Person{
    constructor( name , dob){
        this._name =name;
        this._dateOfBirth= dob;
    }
     getName(){
         return this._name;

     }
     setName(name){
         this._name =name;
     }
     getDateOfBirth(){
        return this._dateOfBirth;

    }
    setDateOfBirth(dob){
        this._dateOfBirth =dob;
    }
     toString(){
       console.log(`[  name: ${this.getName()} Date of Birth:${this.getDateOfBirth().toDateString()} ]`);


   }
}

let person = new Person();
person.setName("filmon");
person.setDateOfBirth(new Date(1987,0,23));
person.toString();
console.log(person);


