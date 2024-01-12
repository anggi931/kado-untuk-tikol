const myButton = document.getElementById("siapcountdown");
myButton.style.display = "none";

// const countToDate = new Date().setHours(new Date().getHours() + 24)
const countToDate = new Date('2024-01-13T00:00:00.000+07:00').getTime();
let previousTimeBetweenDates

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

  // Check if the countdown has reached zero
  if (timeBetweenDates <= 0) {
    clearInterval(intervalId);
    const myButton = document.getElementById("siapcountdown");
    myButton.style.display = "block";
    return;
  }

  flipAllCards(timeBetweenDates);
}, 250);

function flipAllCards(time) {
    const days = Math.floor(time / (24 * 3600));
    const seconds = time % 60;
    const minutes = Math.floor((time % 3600) / 60);
    const hours = Math.floor((time % (24 * 3600)) / 3600 );

  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}