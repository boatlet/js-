/**
 * create用于分配对象池里的对象
 * recover 用于收回对象
 */
function ObjectPoolFactory(construct){
    var objs = [];
    return{
        create:function(){
            var obj = objs.length === 0 ? construct.apply(this,arguments) : objs.shift();
            return obj;
        },
        recover:function(obj){
            objs.push(obj);
        }
    }
}
