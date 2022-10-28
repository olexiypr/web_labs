let edit = document.querySelectorAll('.edit');
let text = document.querySelectorAll('.text');
let names = [];
for( let i = 0; i < edit.length; i++ ){
    names.push(edit[i].textContent);
    let editMode = false;
    edit[i].addEventListener('click', function(){
        if( editMode ) {
            if (names === undefined) {
                names = localStorage.getItem("names").split(" ")
            }
            this.textContent = names[i];
            text[i].removeAttribute('contentEditable');
        } else {
            names[i] = this.textContent;
            let button = document.createElement("button")
            button.appendChild(document.createTextNode("Reset"));
            button.onclick = () => {
                let t = localStorage.getItem(names[i])
                text[i].innerText = t;
            }
            text[i].appendChild(button);
            this.textContent = "Ok";
            localStorage.setItem(names[i], text[i].innerText.replace("Reset", ""));
            text[i].setAttribute('contentEditable', true);
            text[i].focus();
        }
        editMode = !editMode;
    });
}
localStorage.setItem("names", names.join(" "));
