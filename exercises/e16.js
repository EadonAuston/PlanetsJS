// see e16.md

export function find(array, callback) {
   for (const element of array) {
     const found = callback(element);
     if (found) {
       return element;
     }
   }
   return undefined;
 }

