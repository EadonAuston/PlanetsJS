export function minBy(array, cb) {
   if (array.length === 0) {
      return undefined;
    }
   let minElement = array[0];
   let minValue = cb(minElement);
   for (let i = 1; i < array.length; i++) {
     const element = array[i];
     const value = cb(element);
     if (value < minValue) {
       minElement = element;
       minValue = value;
     }
   }
   return minElement;
 }

export  function maxBy(array, cb) {
   if (array.length === 0) {
      return undefined;
    }
   return array.reduce((max, current) => (cb(current) > cb(max) ? current : max));
 }
