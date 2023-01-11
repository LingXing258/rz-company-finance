export const toFixed=function(num,decimal) {
    num = num.toString();
	let index = num.indexOf('.');
	if (index !== -1) {
		num = num.substring(0, decimal + index + 1)
	} else {
		num = num.substring(0)
	}
	return parseFloat(num).toFixed(decimal)
}

export const  dealBigMoney=function(rmb) {  
    var reg=/^\D/;//定义正则表达式，检查第一个字符是否为数字；
    var patrn = /^\d+(.\d+)?$/;
    if(patrn.test(rmb)){
      rmb=toFixed(rmb,4)
    }
     if((reg.test(rmb))||(rmb.length>=17)){//同时检查输入小写金额是否大于16位数？
             return (reg.test(rmb))?"对不起，您输入的金额不正确！":"请输入小于九千万亿以下的数据！";
     }else{
             var number=parseInt(rmb*10000);//大于16位数是这里会直接转为科学计算法，后面取余时计算不准确；
             var str=[];//定义一个接受转换结果额字符串数组；
             var cn=["","拾","佰","仟"];//配合 j 使用
             var cns=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];//用余数作为该数组的下标，返回对应的大写；
             var temp=number;//创建临时变量temp；为了便于理解，假设temp为 54321
             for (var j=0,n=0;temp!=0;j++,n++){// j 用于判断 个 拾 佰 仟 万 ，n 用于判断 亿 位；
                     //下面一步取余，如果余数为零，则不需要加cn=["","拾","佰","仟"]
                     temp%10==0?str=cns[temp%10]+str:str=cns[temp%10]+cn[j]+str;//
                     temp=(temp-temp%10)/10;//54321减去54321%10后为54320，除以十（54320/10）后为5432，
                     if(j%3==0&&j!=0){//当 j 为3时表示已经到了第四位，下次循环时到了 万 位
                             if(temp!=0) n%7!=0?str="万"+str:str="亿"+str;// 54321到这个时候str应该为   万肆仟叁佰二拾一
                             j-=4;//重置  j   为0；
                     }
             }
             str=str.toString().replace(/[零]+/g,"零");//去掉重复的零
             str=str.toString().replace(/[零][亿]+/g,"亿");
             str=str.toString().replace(/[零][万]+/g,"万");
             str=str.toString().replace(/[零][仟]+/g,"仟");
             str=str.toString().replace(/[零][佰]+/g,"佰");
             str=str.toString().replace(/[零][拾]+/g,"拾");
             str=str.toString().replace(/[万][仟]+/g,"万");
             str=str.toString().replace(/[亿][万]+/g,"亿");
             str=str.toString().replace(/[壹][拾]/,"拾");//如果第一位为 壹拾万····，则改为十万······
             if(str[str.length-1]=="零") str=str.slice(0,str.length-1);//去掉末尾的零
             return str+"元整";//返回结果
     }//else结束
       
    } 