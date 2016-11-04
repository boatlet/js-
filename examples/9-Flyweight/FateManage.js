var Role = function(type){
    this.type = type
}
var factory = require("./FlyweightFactory")(Role);
var FateManage = (function(){
    var count = 0;
    return {
        add:function(type,name){
            var role = factory.create(type);
            role.name = name;
            console.log("add",count++,role);
        }
    }
})()
module.exports = FateManage;