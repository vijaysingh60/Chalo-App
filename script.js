let scan = document.getElementById("scan1");
change();
function change(){
    let x =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var date = new Date();
    var time = date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();

    scan.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+"wKLJPV6UwiD4v1q0NRHzuw==Z1684853"+date.getSeconds()*10000;

    let p = document.getElementById("head");
    p.innerHTML = `${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}:${('0'+date.getSeconds()).slice(-2)}, ${('0'+date.getDate()).slice(-2)} ${x[date.getMonth()-1]} ${date.getFullYear()}`
    setTimeout(change,1000);
}
