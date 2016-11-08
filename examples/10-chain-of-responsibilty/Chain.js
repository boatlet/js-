/**
 * Created by wyz on 2016/11/4.
 */
function Chain(fn){
    this.fn = fn;
    this.succesor = null;
}
Chain.prototype.setNextSuccesor = function(sucessor){
    return this.succesor = sucessor;
}
Chain.prototype.start = function(){
    var ret = this.fn.apply(this.fn,arguments);
    if(ret === "pass" && this.succesor){
        this.succesor.start.apply(this.succesor,arguments)
    }else{
        return ret;
    }
}
module.exports = Chain;