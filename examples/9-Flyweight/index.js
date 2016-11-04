/**
 * 一个通用的享元模式：由两个部分组成，一个是factory用于生成obj，一个manage使用factory来实现业务
 * factory应该抛出的接口有：create
 * manage：add
 * {
 *
 * }
 */
var FateManage = require("./FateManage")

for(var i=0;i < 10;i++){
    var rand = Math.random();
    console.log("rand",rand);
    switch (true){
        case rand < 0.3:
            FateManage.add("master","土狼");
            break;
        case (0.3 < rand && rand < 0.6):
            FateManage.add("servant","saber");
            break;
        case rand > 0.6:
            FateManage.add("master","ling")
            break;
        default:
            break;
    }
}
