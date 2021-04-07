

//************************************************************************************************ */
// assignment  lab  9;
//question :1
function f(){
    console.log( "ASS 1 q1 running");
    let person ={ name:"",dateOfBirth:null,
    getName:function (){
        return this.name;

                  }, 
    setName:function(name){
        this.name =name;
    }
                 };

 let p1 =Object.create(person);
 
 p1.setName("jhone");
 p1.dateOfBirth = new Date(1987,12,01);

 console.log(p1);
 console.log(p1.__proto__);
console.log(`the perons's name is  ${p1.getName()}`)
console.log( `  ${p1.getName()} was born in ${p1.dateOfBirth.getFullYear()}-${p1.dateOfBirth.getMonth()}-${p1.dateOfBirth.getDay()}`);
}
f();
//******************        ******************      ******************
//question :2
function g(){
person= {fname: "",lname:"", age:""};
   const employee = Object.create(person);
   employee.salary = 0;
   employee.hiredDate =Date.now();
   
   employee.doJob =function(jobTitle){
       return `[${employee.fname} is ${jobTitle} who earn$ ${ employee.salary}]`;
   }
   console.log(employee);
  console.log(employee.__proto__);
  console.log(person.constructor);
  console.log(employee.doJob("welder"));
  ana = Object.create(employee);
  console.log(ana);
  
}

g();
//******************        ******************      ******************
//question :3

function h(){
   function Person(name, dOb){
    this.name = name;
    this.dOb = dOb;
      
    }
    Person.prototype.toString =  function(){
        console.log(`Name: ${this.name} Dateofbirth: ${this.dOb}`);
   }

   let person = new Person("filmon",new Date(12-03-1987));
person.toString();
  
//   console.log(Person.prototype===person.__proto__);
//   console.log(person.constructor);
//   console.log(Person.prototype.constructor===Person);
//   console.log(person.__proto__.toString===Person.prototype.toString);
}

  

//h();
//******************************************************************************** */





/*  b.__proto__ === Foo.prototype, // true
  c.__proto__ === Foo.prototype, // true
 
  // also "Foo.prototype" automatically creates a special 
  //property "constructor", which is a reference to the 
  //constructor function itself; instances "b" and "c" may 
  //use to check their constructor
  b.constructor === Foo, // true
  c.constructor === Foo, // true
  Foo.prototype.constructor === Foo, // true
 
  b.calculate === b.__proto__.calculate, // true
  b.__proto__.calculate === Foo.prototype.calculate // true
  );
*/
    
//    Person.prototype.toString =function(){

//    }
// let n = new Number(2);
// console.log(n.toString());
