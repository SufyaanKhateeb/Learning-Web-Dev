var eq='';
function dis(val)
{
    var op = document.getElementById("input").value;
    var ch = op.charAt(op.length-1);
    if(val=='-'||val=='+'||val=='×'||val=='÷')
    {
        if(ch=='-'||ch=='+'||ch=='×'||ch=='÷'||ch=='')
            return;
    }
    if(val=='.')
    {
        if(ch=='.')
            return;
    }
    document.getElementById("input").value+=val;
}
  
function del() {
    var del = document.getElementById("input").value;
    document.getElementById("input").value=del.substring(0,del.length - 1);
}

//function that evaluates the digit and return result
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
  
//function that clear the display
function clr()
{
    document.getElementById("input").value = "";
    eq='';
}