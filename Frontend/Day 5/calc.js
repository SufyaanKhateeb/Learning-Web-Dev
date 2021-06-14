var ans='';
function dis(val)
{
    document.getElementById("input").value+=val;
    if(val=='÷')
        val='/';
    if(val=='×')
        val='*';
    ans+=val;
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = ans;
    let y = eval(x);
    document.getElementById("input").value = y;
}
  
//function that clear the display
function clr()
{
    document.getElementById("input").value = "";
    ans='';
}