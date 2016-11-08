/**
 * Created by wyz on 2016/11/4.
 */
/**
 *职责链模式有些像switch case 算是一种强化版的switch case
 * 我们来开发一个找你妹的模式：
 */
"use strict"
var Chain = require("./Chain")
var MM = function(name,nickname){
    this.name = name;
    this.nickname = nickname;
}
MM.prototype.fn = function(){
    var name = this.name;
    var nickname = this.nickname;
    return function(target){
        if(target === nickname){
            console.log("我叫"+name+"我就是"+target)
        }else{
            console.log(`我叫${name}我不是${target}`)
            return "pass"
        }
    }

}
let a = new Chain((new MM("杨幂","臭脚")).fn())
let b = new Chain((new MM("刘诗诗","面瘫")).fn())
let c = new Chain((new MM("唐嫣","gikka")).fn())

a.setNextSuccesor(c).setNextSuccesor(b);
a.start("gikka")
