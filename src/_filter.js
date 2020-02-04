/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `callback` returns truthy for.
 *
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [callback] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * 
 **/

let isArray = Array.isArray;
let _filter = function(callback,collection){
    if(!isArray(collection)) return [];
    let arr = [];
    for(let i=0;i<collection.length;i++){
        if(callback(collection[i]))arr.push(collection[i]);
    }
    return arr;
}
module.exports = _filter;