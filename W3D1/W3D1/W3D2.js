function a(){
    class User{
        constructor(name){
    this.name = name; // this calls the setter
        }
        sayHi(){
            console.log(`Hello, ${this.name}`);
            
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(name.length<4){
            alert("THE NAME IS TOO SHORT");
                return ;
        }
        this._name = name;
    }
    
    }
    let  fili = new User();
    fili.sayHi();
    console.log(fili);
    console.log(fili.__proto__);
    console.log(User.prototype);
    let bob = new User();
    console.log(bob);
    console.log(this.name);
}
//a();
  function b(){

class Animal{
    constructor(name){
this.speed =0;
this.name =name;

}
run(speed){
    this.speed+=speed;
    alert(`${this.name} run with speed${this.speed}`);
}
stop(){
    this.speed =0;
    alert(`${this.name} stands still`);


}
}
class Rabbit{
    constructor(name){
        this.name = name
    }
    hide(){
        alert(`${this.name} hide!`);
    }
}
  }
  b();

