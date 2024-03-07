let planetName = "mercury";
let planetBtns = document.querySelectorAll('.planet-btn');
let planetImg = document.querySelector('.planet-fade-up');
const starToggle = document.querySelector('.star-toggle');
let starsVisible = true;

//dynamic image resizing


document.querySelector('.top-1 img').classList.remove('planet-fade-up'); //reset the planet fade up animation 

let planetData = {
    mercury: ["Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.", "59 Days", "88 Days", "2,440 KM", "430°C", "20rem", "https://en.wikipedia.org/wiki/Mercury_(planet)", "#8fabb7","10rem"],
    venus: ["Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.", "243 Days", "225 Days", "6,52 KM", "471°C", "25rem", "https://en.wikipedia.org/wiki/Venus", "#be8b55", "12rem"],
    earth: ["Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.", "1 Days", "365 Days", "6,371 KM", "16°C", "30rem", "https://en.wikipedia.org/wiki/Earth", "#545bfe", "15rem"],
    mars: ["Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.", "1 Days", "2 Years", "3,390 KM", "-28°C", "30rem", "https://en.wikipedia.org/wiki/Mars", "#d04237", "15rem"],
    jupiter: ["Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.", "10 Hours", "12 Years", "69,911 KM", "-108°C", "35rem", "https://en.wikipedia.org/wiki/Jupiter", "#dc8e61", "17rem"],
    saturn: ["Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.", "11 Hours", "29 Years", "58,232 KM", "-138°C", "30rem", "https://en.wikipedia.org/wiki/Saturn", "#b3863d", "15rem"],
    uranus: ["Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.", "17 Hours", "84 Years", "25,362 KM", "-195°C", "30rem", "https://en.wikipedia.org/wiki/Uranus", "#35a19a", "15rem"],
    neptune: ["Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.", "16 Hours", "165 Years", "24,622 KM", "-201°C", "28rem", "https://en.wikipedia.org/wiki/Neptune", "#2255ca", "14rem"]
}

const hamburgerIcon = document.querySelector('.fa-bars');
let faBars = 1; 

//drop down menu
hamburgerIcon.addEventListener("click", () => {
    if (faBars) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
        faBars = 0;
        planetBtns.forEach((btn) => {
            btn.style.display = "inline-block";
        });
    }
    else {
        hamburgerIcon.classList.add("fa-bars");
        hamburgerIcon.classList.remove("fa-xmark");
        faBars = 1;
        planetBtns.forEach((btn) => {
            btn.style.display = "none";
        });
    }
});

//hamburger-icon fix 
window.addEventListener('resize', ()=> {
    if (window.innerWidth>1000) {
        planetBtns.forEach((btn)=> {
            btn.style.display = "inline-block";
        })
    }
    else {
        planetBtns.forEach((btn)=> {
            btn.style.display = "none";
        })
    }
});


starToggle.addEventListener("click", ()=> {
    const stars = document.querySelectorAll('.falling-star');
    starsVisible = !starsVisible;

    stars.forEach((star) => {
        star.style.display = starsVisible ? "block" : "none";
    });
})

planetBtns.forEach((btn)=> {
    btn.addEventListener("mouseover", ()=> {
        btn.style.borderBottom = `1px solid ${planetData[btn.value][7]}`;
    });
    btn.addEventListener("mouseout", () => {
        // Reset the border color when the mouse leaves the button
        btn.style.borderBottom = "";
    });
});

planetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        planetName = btn.value;

        let responsiveWidth = window.innerWidth;
        let useWidth = resizeImg(responsiveWidth);

        let activeNavBtn = document.querySelector('.hover-btn.active');
        activeNavBtn.classList.remove('active');

        let activeInfoBtn = document.querySelector('.btn-hover.overview-class');
        informationBtnClick(activeInfoBtn);

        document.querySelector('.btn-hover.active').style.backgroundColor = `${planetData[planetName][7]}`;
        const planetImg = document.querySelector('.top-1 img')
        document.querySelector('.planet-name').textContent = `${planetName}`.toUpperCase();
        planetImg.src = `assets/planet-${planetName}.svg`;

        btn.classList.add('active');
        
        planetImg.classList.add('planet-fade-up'); // Add the grow animation class
        setTimeout(() => {
            planetImg.classList.remove('planet-fade-up'); // Remove the grow animation class after the animation duration
        }, 500);

        planetImg.classList.add('planet-grow'); // Add the grow animation class
        setTimeout(() => {
            planetImg.classList.remove('planet-grow'); // Remove the grow animation class after the animation duration
        }, 500);

        planetImg.style.width = useWidth; //dynamic resizing
        
        document.querySelector('.planet-description').innerText = `${planetData[planetName][0]}`;

        document.querySelector('.top-2 span a').href = `${planetData[planetName][6]}`
        
        let i = 1;
        document.querySelectorAll('.information').forEach((item) => {
            item.querySelector('h1').textContent = `${planetData[planetName][i]}`
            i++;
        });
    });
});

function resizeImg(currentSize) {
    if (currentSize > 640) {
        console.log(planetName);
        return `${planetData[planetName][5]}`;
    }
    else {
        return `${planetData[planetName][8]}`;
    }
}

window.addEventListener("resize", ()=> {
    responsiveWidth = window.innerWidth;
    useWidth = resizeImg(responsiveWidth);
    planetImg.style.width = useWidth;
}); 



let initialScrollPosition = 0;
document.addEventListener("DOMContentLoaded", function () {
    var scrollIcon = document.querySelector(".scroll-icon");
    var lastScrollPosition = window.scrollY;
    

    window.addEventListener("scroll", function () {
        var currentScrollPosition = window.scrollY;

        // Show or hide the scroll icon based on scroll direction and position
        if (currentScrollPosition > lastScrollPosition || currentScrollPosition < initialScrollPosition) {
            scrollIcon.classList.add("hidden");
        } else {
            scrollIcon.classList.remove("hidden");
        }

        // Update the initial scroll position when the user scrolls back to the top
        if (currentScrollPosition <= initialScrollPosition) {
            initialScrollPosition = 0;
        }

        lastScrollPosition = currentScrollPosition;
    });
});

function informationBtnClick(currentBtn) {
    // styling information button
    let oldActive = document.querySelector('.btn-hover.active');
    
    // Check if oldActive exists before manipulating it
    if (oldActive) {
        oldActive.classList.remove('active');
        oldActive.classList.add('info-border');
        oldActive.style.background = "none";
    }

    currentBtn.classList.add('active');
    currentBtn.classList.remove('info-border');

    // Update the style only if there's an active button
    if (document.querySelector('.btn-hover.active')) {
        document.querySelector('.btn-hover.active').style.backgroundColor = `${planetData[planetName][7]}`;
    }

    //adding functioning
    if (currentBtn.classList.contains('active')) {
        if (currentBtn.value === "overview") {
            if (document.querySelectorAll('.top-1 img')[1].style.display === "block") {
                document.querySelectorAll('.top-1 img')[1].style.display = "none";
            }
            document.querySelector('.top-1 img').src = `assets/planet-${planetName}.svg`;
        }
        else if (currentBtn.value === "structure") {
            if (document.querySelectorAll('.top-1 img')[1].style.display === "block") {
                document.querySelectorAll('.top-1 img')[1].style.display = "none";
            }
            document.querySelector('.top-1 img').src = `assets/planet-${planetName}-internal.svg`;
        }
        else if (currentBtn.value === "surface geology") {
            document.querySelectorAll('.top-1 img')[1].style.display = "block";
            document.querySelector('.top-1 img').src = `assets/planet-${planetName}.svg`;
            document.querySelectorAll('.top-1 img')[1].src = `assets/geology-${planetName}.png`;
        }
    }
}
