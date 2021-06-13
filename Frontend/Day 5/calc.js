function add() {
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('ans').innerHTML= parseFloat(x) + parseFloat(y);
}
function sub() {
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('ans').innerHTML= parseFloat(x) - parseFloat(y);
}
function mul() {
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('ans').innerHTML= parseFloat(x) * parseFloat(y);
}
function div() {
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('ans').innerHTML= parseFloat(x) / parseFloat(y);
}
function mod() {
    x=document.getElementById('fnum').value;
    y=document.getElementById('snum').value;
    document.getElementById('ans').innerHTML= parseFloat(x) % parseFloat(y);
}
function res() {
    document.getElementById('fnum').value=null;
    document.getElementById('snum').value=null;
    document.getElementById('ans').innerHTML="NULL";
}