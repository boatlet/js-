function FlyweightFactory(obj){
    var flyweightObj = {};
    return {
        create:function(type){
            if(flyweightObj[type]){
                console.log("old",flyweightObj)
                return flyweightObj[type]
            }
            console.log("new",flyweightObj)
            flyweightObj[type] = new obj(type)
            return flyweightObj[type] ;
        }
    }
}
module.exports = FlyweightFactory;