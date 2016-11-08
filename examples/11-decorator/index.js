/**
 装饰器的作用像是在为本体加翅膀或者假肢，在不修改本体的前提下给本体添加外设
 想象一个使用场景：一个adduser的操作，ajax之前检测userid和username是否已经传了 ajax成功之后 记录操作日志
 好吧其实这个场景应该是代理模式
 装饰器必须满足的两个特点应该是 before after的arguments 要一致，before和after的执行不依赖self的结果
 */
Function.prototype.before = function(beforefn){
    var self = this;
    return function(){
        if(!beforefn.apply(this,arguments)) return ;
        return self.apply(this,arguments);
    }
}
Function.prototype.after = function(afterfn){
    var self = this;
    return function(){
        var ret = self.apply(this,arguments);
        if(ret){
            afterfn.apply(this,arguments);
        }
        return ret;
    }
}
function addUser(userId,userName){
    var ret = Math.random() > 0.5;
    console.log("add",arguments,ret)
    return ret;
}
addUser = addUser.before(function(userid,userName){
    console.log("before",arguments)
    return userid && userName;
})
addUser = addUser.after(function(userId,userName){
    console.log("添加成功%s,编号为%s",userName,userId)
})

addUser("89757","江南");