const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function(otherProperty) { //multiword name must be quoted
        
        let a;
        a=2+4;
        return a;        
    }
  };
  console.log(myObject.otherProperty);
  console.log(myObject["obnoxious property"]());//for printing function value

const variable = 'property';

console.log(myObject.variable); // this gives us 'undefined' because it's looking for a property named 'variable' in our object

console.log(myObject[variable]); // this

