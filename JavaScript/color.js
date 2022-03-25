var cnt=1;
function changeBackground(color) {
document.body.style.background = color;

}
const col = ['red','blue','green','orange','pink','yellow'];
function func(){
    let x = Math.random();
    x=Math.floor(x*100);
    x=x%6;
    document.body.style.backgroundColor = col[x];
}