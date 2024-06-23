import {pi,getarea,getcicumference,getvolume} from './E26modules.mjs';
// in module we can access some value ,function from different file through export and can import
console.log(pi);
let cicum=getcicumference(10);
console.log(cicum);


/*Use the .cjs extension for CommonJS modules:

Rename your basics2.js file to basics2.cjs.
Node.js will now treat this file as a CommonJS module, even if your project is configured to treat .js files as ES modules.


Use the .mjs extension for ES modules:

If you want to use ES modules in your project, rename your basics2.js file to basics2.mjs.
Node.js will treat files with the .mjs extension as ES modules, regardless of the project configuration.*/