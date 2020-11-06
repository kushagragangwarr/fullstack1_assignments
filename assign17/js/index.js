const timeDiv = document.querySelector("#time");
const wishDiv = document.querySelector("#wish");
const nameDiv = document.querySelector("#name");
const dateDiv = document.querySelector("#date");

if (localStorage.getItem("name") === null)
    localStorage.setItem("name", "[ENTER NAME]");
nameDiv.value = localStorage.getItem("name");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';
    let wish = hours >= 12 ? 'Evening' : 'Morning';
    document.body.style.backgroundImage = hours >= 12 ? "url('./images/night.jpg')" : "url('./images/morning.jpg')";
    timeDiv.style.animation = hours >= 12 ? 'night-color-changer 10s infinite' : 'day-color-changer 10s infinite';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDiv.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
    wishDiv.innerHTML = 'Good ' + wish;
    dateDiv.innerHTML = date.toDateString();
}, 1000);

nameDiv.addEventListener("blur", () => {
    localStorage.setItem("name", nameDiv.value);
});