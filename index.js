var btn=document.getElementById('perform');
var result=document.getElementById('result');
var text=document.getElementById('text');
var inf=document.getElementById('inf');

var clear=document.getElementById('clear');
var up=document.getElementById('upperCase');
var lw=document.getElementById('lowerCase');
var replicate=document.getElementById('repo');
var newText;


function replaceAll(data,searchText,elm){
    return data.split(searchText).join(elm);
}

function wordCounts(data){
    if(data.length==0){
        return 0
    }
    else{
        var x=data.split(' ');
        return x.length;
    }

}

function replaceAllUpperCase(data,searchText,elm){
    data=data.toUpperCase();

    return data.split(searchText).join(elm);
}


function replaceAllLowerCase(data,searchText,elm){
    data=data.toLowerCase();

    return data.split(searchText).join(elm);
}

btn.addEventListener('click',()=>{
    var data=text.value
    var searchText=document.getElementById('searchText').value;
    var replaceText=document.getElementById('replaceText').value;


    
    if(replaceText==""){
        newText=replaceAll(data,searchText,`<strong style="color:white;background-color:red;"><strong>${(searchText)}</strong></strong>`);
        inf.innerHTML="Total words,"+wordCounts(data)+`<br>`+"Total Characters,"+data.length;

        result.innerHTML=`${(newText)}`; 


    }
    else{
        newText=replaceAll(data,searchText,`<strong style="color:white;background-color:red;"><strong>${(replaceText)}</strong></strong>`)
        inf.innerHTML="Total words,"+wordCounts(data)+`<br>`+"Total Characters,"+data.length;
        result.innerHTML=`${(newText)}`; 
   
    }
    
    up.addEventListener('click',()=>{
        var sText=searchText.toUpperCase();
        newText=replaceAllUpperCase(data,sText,`<strong style="color:white;background-color:red;"><strong>${(sText)}</strong></strong>`)
        inf.innerHTML="Total words,"+wordCounts(data)+`<br>`+"Total Characters,"+data.length;
        result.innerHTML=`${(newText)}`; 


    });

    lw.addEventListener('click',()=>{
        var lText=searchText.toLowerCase();
        newText=replaceAllLowerCase(data,lText,`<strong style="color:white;background-color:red;"><strong>${(lText)}</strong></strong>`)
        inf.innerHTML="Total words,"+wordCounts(data)+`<br>`+"Total Characters,"+data.length;
        result.innerHTML=`${(newText)}`; 


    });

    replicate.addEventListener('click',()=>{
        text.value=result.innerText;

    });




});

clear.addEventListener('click',()=>{

    result.innerHTML="";
    text.value="";
    inf.innerHTML="Total words,"+0+`<br>`+"Total Characters,"+0;

    
});