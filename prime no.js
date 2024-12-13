var a=prompt("enter digit here:")
var count=0
for(i=0;i<=a;i++){
    if(a%i==0){
        count++
    }
}
if(count==2){
    console.log(a,"Is a prime num")
}else{
    console.log(a,"Is not a prime num")
}


var b=prompt("Enter digit here:")
var cnt=0
    if(b<0){
        console.log(b,"is less than 0")
    }
    else{
        for(x=0;x<=b;x++){
        if(b%x==0){
            cnt++
        }
    }
        if(cnt==2){
            console.log(b,"is a prime num")
        }else{
            console.log(b,"is not a prime num")
        }
    }


var c=prompt("enter num here :")
var num=0
if(c>=0){
    for(p=0;p<=c;p++){
        if(c%p==0){
            num++
        }
    }
    if(num==2){
        console.log(c,"Is a prime num")
    }else{
        console.log(c,"is not a prime num")
    }
} else{
    console.log(c,"Is less than zero")
}