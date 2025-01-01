// Pages
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");


// Page One
const mainText = document.querySelector(".main-text");
const secText = document.querySelector(".sec-text");
const ballonImg = document.querySelector(".ballon-img");
const cakeImg = document.querySelector(".cake-img");
const smlText = document.querySelector(".small-text");

// Page Two
const card = document.querySelector(".card");
const cardBtn = document.querySelector(".inside .btn");

// Page three
const candleConatiner = document.querySelector(".candle-container");
const candles = document.querySelectorAll(".candle");
var candleBlowOut = 0;

// Page four
const fourthPage = document.querySelector(".fourth-page");
const wishText = document.querySelector(".fourth-page textarea");
const wishBtn = document.querySelector(".fourth-page .btn");

// Page five
const fifthPage = document.querySelector(".fifth-page");
const age = document.querySelector(".age");
const ageText = document.querySelector(".age-small-text");
const ageComment = document.querySelector(".age-small-comment");
const secondNumber = document.querySelector(".second-number");

// Page six
const sixthPage = document.querySelector(".sixth-page");
const messageContainer = document.querySelector(".message");
const messageSmallText = document.querySelector(".message-small-text");

var end = Date.now() + (5 * 1000);

var colors = ['#FF4D6D', '#FFF0F3'];

window.onload = () => {
    mainText.classList.remove("visible");
    secText.classList.remove("visible");
    ballonImg.classList.remove("visible");
    cakeImg.classList.remove("visible");
    smlText.classList.remove("visible");
    smlText.classList.remove("fade-in-out-animation");
    setTimeout(() => {
        mainText.classList.add("visible");
        secText.classList.add("visible");
        ballonImg.classList.add("visible");
        setTimeout(() => {
            cakeImg.classList.add("visible");
            celebrationAnimaion();
            setTimeout(() => {
                smlText.classList.add("visible");
                smlText.classList.add("fade-in-out-animation");
            }, 5000)
        }, 800)
    }, 500)
}

setTimeout(() => {
    firstPage.onclick = () => {
        setTimeout(() => {
            mainText.classList.remove("visible");
            secText.classList.remove("visible");
            ballonImg.classList.remove("visible");
            cakeImg.classList.remove("visible");
            smlText.classList.remove("visible");
            smlText.classList.remove("fade-in-out-animation");
            setTimeout(() => {
                firstPage.style.display = 'none';
            }, 1000)
        }, 1000)

        secondPageStructure();
    }
}, 6000)

// celebration Animation
function celebrationAnimaion() {
    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 40,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 40,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Second page
function secondPageStructure() {
    card.classList.remove("visible");

    setTimeout(() => {
        secondPage.style.display = 'inline';
        setTimeout(() => {
            card.classList.add("visible");
        }, 500)
    }, 1800)
}

card.onclick = () => {
    card.classList.toggle("clicked");
}

cardBtn.onclick = () => {
    setTimeout(() => {
        card.classList.remove("clicked");
        card.classList.remove("visible");
        setTimeout(() => {
            secondPage.style.display = "none";
            thirdPageStructure();
        }, 500);
    }, 1500);
}

// Third page
function thirdPageStructure() {
    candleConatiner.classList.remove("visible");

    setTimeout(() => {
        thirdPage.style.display = 'inline';
        setTimeout(() => {
            candleConatiner.classList.add("visible");
        }, 500)
    }, 100)
}

candles.forEach(candle => {
    const flame = candle.querySelector(".candle-flame");
    candle.onclick = () => {
        flame.classList.add("unvisible");
        candle.setAttribute("blowed-out", "true");
        if (candle.getAttribute("blow-out") != "true") {
            candleBlowOut++;

            setTimeout(() => {
                if (candleBlowOut >= 3) {
                    candleConatiner.classList.remove("visible");
                    fourthPageStructure();
                }
            }, 800)
        }
    }
})

// fourth page
function fourthPageStructure() {
    fourthPage.classList.remove("visible");
    setTimeout(() => {
        thirdPage.style.display = "none";
    }, 1000)

    setTimeout(() => {
        fourthPage.style.display = 'inline';
        setTimeout(() => {
            fourthPage.classList.add("visible");
        }, 500)
    }, 1000)
}

wishBtn.onclick = () => {
    const errMsg = document.querySelector(".err-msg");
    var wishValue = wishText.value;
    if (wishValue != "") {
        errMsg.style.display = "none";
        sendMail(wishValue);
        fourthPage.classList.remove("visible");

        fifthPageStructure();
    }
    else {
        errMsg.style.display = "block";
    }
}

// fifth page
function fifthPageStructure() {
    ageText.classList.remove("visible");
    ageComment.classList.remove("visible");
    age.classList.remove("visible");

    setTimeout(() => {
        fourthPage.style.display = "none";
    }, 1000);

    setTimeout(() => {
        fifthPage.style.display = "inline";

        setTimeout(() => {
            celebrationAnimaion();
            ageText.classList.add("visible");
            age.classList.add("visible");

            setTimeout(() => {
                secondNumber.classList.add("changed");
                setTimeout(() => {
                    ageComment.classList.add("visible");

                    setTimeout(() => {
                        ageText.classList.remove("visible");
                        ageComment.classList.remove("visible");
                        age.classList.remove("visible");

                        sixthPageStructure();
                    }, 3500)
                }, 2000)
            }, 1500);
        }, 500)
    }, 1000)
}

// sixth page
function sixthPageStructure() {
    messageContainer.classList.remove("visible");
    messageSmallText.classList.remove("visible");

    setTimeout(() => {
        fifthPage.style.display = "none";
    }, 1000);

    setTimeout(() => {
        sixthPage.style.display = "inline";

        setTimeout(() => {
            messageContainer.classList.add("visible");

            setTimeout(() => {
                messageSmallText.classList.add("visible");
            }, 3000)
        }, 500)
    }, 1000)
}

function sendMail(wish) {
    var params = {
        from_name: "Muwo",
        to_name: "zuhayb",
        wish: wish
    }

    emailjs.send("service_efzes2y", "template_kxctg96", params);
}