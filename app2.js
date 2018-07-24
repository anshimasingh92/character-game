var timeout;
var timerIds = [];

function pause(counter){
clearTimeout(timeout);
};

function closureFn1(counter){
    return function(){
 
    var text=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var length=text.length;
         var char=text.charAt(0);
        text2 = text2 + char;
        document.getElementById("text2").value = text2;
        var newtext=text.substring(1,length);
        document.getElementById("text1").value= newtext;

    };
}

function closureFn2(counter){
    return function(){
    var text=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var length=text2.length;
   
         var char=text2.charAt(length-1);
    document.getElementById("text1").value = char + text;
    var newtext=text2.substring(0,length-1);
    document.getElementById("text2").value= newtext;
    };
}

document.getElementById("btn1").addEventListener("click",function(){    
   var text=document.getElementById("text1").value;
    var length=text.length;
    if(length==0){
        alert("Please enter text in text 1");
    }
    
    else {for(var i=0; i<length; i++){
    ;
     timeout=timerIds.push(setTimeout(closureFn1(i), i*1000));
    }
    }
    
});


document.getElementById("btn2").addEventListener("click", function(){
     timerIds.forEach(function(id){
        clearTimeout(id);
            });
  
         });
                            
document.getElementById("btn3").addEventListener("click",function(){
    var text2=document.getElementById("text2").value;
    var length=text2.length;
    
     if(length==0){
        alert("Please enter text in text 2");
    }
    else{
    for(var i=0; i<length; i++){
   timeout=timerIds.push(setTimeout(closureFn2(i), i*1000));
 }
    }
       
});

