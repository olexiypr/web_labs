const area = (len) => {
    return Math.pow(len,2) * 5 / (4 * Math.tan((180 / 5) * Math.PI/180));
}
const len = 10
const result = area(len)
document.querySelector(".main-text").innerText += ` AREA: ${result}`
