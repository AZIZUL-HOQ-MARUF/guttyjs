Array.prototype._filter = function(_filter){
    let arr = [];
    for(let i=0;i<this.length;i++){
        if(_filter(this[i]))arr.push(this[i]);
    }
    return arr;
}
export default Array.prototype;
