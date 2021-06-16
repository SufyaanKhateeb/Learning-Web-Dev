var eq='';
var flag1=0;
function dis(val)
{
    var op = document.getElementById("input").value;
    var ch = op.charAt(op.length-1);
    if(val=='-'||val=='+'||val=='×'||val=='÷')
    {
        if(flag1==1)
            flag1=0;
        if(ch=='-'||ch=='+'||ch=='×'||ch=='÷'||ch=='')
            return;
    }
    if(val=='.')
    {
        if(ch=='.' || flag1==1)
            return;
        flag2=0;
        flag1=1;
        flag2=flag1;
    }
    document.getElementById("input").value+=val;
}
  
function del() {
    var del = document.getElementById("input").value;
    var dot = del.charAt(del.length-1);
    if(dot=='.')
        flag1=0;
    if((dot=='-'||dot=='+'||dot=='×'||dot=='÷') && flag2==1)
        flag1=1;
    document.getElementById("input").value=del.substring(0,del.length - 1);
}

function solve()
{
    eq=document.getElementById("input").value;
    eq=eq.replace(/×/g,'*');
    eq=eq.replace(/÷/g,'/');    
    let x = eq;
    let y = eval(x);
    document.getElementById("input").value = y;
    eq=y;
}
  
function clr()
{
    document.getElementById("input").value = "";
    eq='';
    flag1=0;
    flag2=0;
}