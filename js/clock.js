const interval = setInterval(() => {
 const now = new Date();
 const horus = now.getHours()
 const minutes = now.getMinutes()
 const seconds = now.getSeconds()

    document.getElementById("horus").textContent = format(horus)
    document.getElementById("minutes").textContent = format(minutes)
    document.getElementById("seconds").textContent = format(seconds)
}, 1000);

function format(clock){
    return clock < 10 ? "0" + clock : clock
}
