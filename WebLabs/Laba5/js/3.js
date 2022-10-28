document.querySelector('.task-3').onclick = swither;

function swither() {
    if (document.cookie.indexOf("res") !== -1) {
        return;
    }
    if (document.querySelector('.main-text').hidden) {
        document.querySelector('.main-text').hidden = false;
        document.querySelector('.form').hidden = true;
    }else {
        document.querySelector('.main-text').hidden = true;
        document.querySelector('.form').hidden = false;
    }
}
document.querySelector('.form-submit').onclick = (e) => {
    const a = parseInt(document.getElementById('1').value)
    const b = parseInt(document.getElementById('2').value)
    const c = parseInt(document.getElementById('3').value)
    const res = a + b >= c && a + c >= b && b + c >= a
    if (res) {
        alert(res)
    }
    else {
        alert(res)
    }
    document.cookie = `res=${res}`
}
if (document.cookie.indexOf("res")!==-1) {
    alert(document.cookie.replace("res=", "") + "\nDelete all cookies")
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    alert("Cookie has been deleted")
    location.reload();
}
