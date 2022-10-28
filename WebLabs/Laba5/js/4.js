if (localStorage.getItem("box") === "checked") {
    upperCase();
    localStorage.clear();
}
function upperCase() {
    let words = document.querySelector('.article-text').innerText;
    let arr = words.split(" ");
    arr = arr.map(word => word[0].toUpperCase() + word.slice(1));
    document.querySelector('.article-text').innerText = arr.join(' ')
}
document.querySelector('.form').addEventListener("blur", ev => {
    const checkBox = document.querySelector('#task-4')
    if (ev.target.tagName === "INPUT" && ev.target.getAttribute("type") === "text" && checkBox.checked) {
        upperCase();
        localStorage.setItem("box", "checked")
    }
}, true);
