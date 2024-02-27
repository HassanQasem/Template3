//Check if There is Storage Color Option
let maincolor = localStorage.getItem("color_option");

if (maincolor !== null) {
    document.documentElement.style.setProperty('--main-color', maincolor);

    //Remove Active Class from All Colors List Items 
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        //Add Active Class On Element With Data-Color ===Local Storage Item
        if (element.dataset.color === maincolor) {

            //Add Active Class
            element.classList.add("active");
        }

    });

}

// Toggol Spin Class  On Icon 
document.querySelector(".set-toggole i").onclick = function () {
    // Toggole Class Fa-spin for Rotation On Self 
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");

};


//Function check active Class
function CheckActive(eve) {

    //Remove Active Class from All Span 
    eve.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });


    //Add Active Class On Self
    eve.target.classList.add("active");
}

//Switch Colors 
const colorLi = document.querySelectorAll(".colors-list li");

//Loop In All List Item

colorLi.forEach(li => {

    //Click On Every List Items

    li.addEventListener("click", (e) => {

        //Set color In Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set Color On Loclal Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        CheckActive(e);

    })
})


//Random Background Option
let background_option = true;

//Variable To Control The Background Interval
let theInterval;

//Check If There is Loclal Storage Random Background Item
let backgoundLocalItem = localStorage.getItem("backgroundOption");

if (backgoundLocalItem !== null) {

    if (backgoundLocalItem === 'true') {
        background_option = true;

    }

    else {
        background_option = false;
    }
    console.log(backgoundLocalItem);

    //Remove Active Class From Spans
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgoundLocalItem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else {
        document.querySelector(".random-background .no").classList.add("active");

    }
}
//Switch Random Background Option 
const randBackground = document.querySelectorAll(".random-background span");

//Loop In All Spans



randBackground.forEach(span => {

    //Click On Every Span

    span.addEventListener("click", (e) => {

        CheckActive(e);

        if (e.target.dataset.backgrounds === "yes") {
            background_option = true;
            RandomizeImags();
            localStorage.setItem("backgroundOption", true);
        }
        else {
            background_option = false;
            clearInterval(theInterval);
            localStorage.setItem("backgroundOption", false);

        }
    })
})
// Select Landing pag Elements 

let landpag = document.querySelector(".landing");
let imgarry = ["01.jpg", "02.jpg", "01.jpg", "03.jpg", "04.jpg", "06.jpg", "07.jpg"];



//Function To Randomaize Imags
function RandomizeImags() {
    if (background_option === true) {

        // Chang Background Image 
        theInterval = setInterval(() => {
            //Get Random Number
            let randomNum = Math.floor(Math.random() * imgarry.length);

            landpag.style.backgroundImage = 'url("Images/' + imgarry[randomNum] + ' ")';

        }, 10000);

    }
}
RandomizeImags();


// Select Skills Selector 

let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {

    // Skills offset Top 
    let skillsOffsetTop = ourSkills.offsetTop;

    //Skills Outer height
    let SkillsOuterHeight = ourSkills.offsetHeight;

    //Window Height
    let windowHeight = this.innerHeight;

    //Window ScroolTop
    let WindowScrollTop = window.pageYOffset;

    if (WindowScrollTop > (SkillsOuterHeight + skillsOffsetTop - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }


};

// Create The Popop With The Image 

let OurGalaryImag = document.querySelectorAll('.galary .images img');

OurGalaryImag.forEach(img => {
    img.addEventListener('click', (e) => {

        //Create Overlay Element
        let overLay = document.createElement("div");

        //  Add Class To Overlay 
        overLay.className = 'popop-overlay';


        // Append Overlay To Body 
        document.body.appendChild(overLay);

        // Create The Popop 
        let popopBox = document.createElement("div");

        // Add Class To Popop Box 
        popopBox.className = 'popop-box';

        // Create The Image 
        let popopImage = document.createElement("img");

        // Set Image Source 
        popopImage.src = img.src;

        //Create Heading
        let imageheading = document.createElement("h3");


        // Append The Popop Heading To The Popop Box 
        popopBox.appendChild(imageheading);

        // Add Image To Popop Box 
        popopBox.appendChild(popopImage);

        // Add popop Box To The Body 
        document.body.appendChild(popopBox);

        if (img.alt !== null) {


            // Create Text For Heading 
            let imageText = document.createTextNode(img.alt);

            //Append The Text To The Heading 
            imageheading.appendChild(imageText);

            //Create The Close Span
            let CloseButton = document.createElement("span");

            //Crete Close Text
            let CloseText = document.createTextNode("X");

            // Add Text To Close Button
            CloseButton.appendChild(CloseText);

            // Add Class To Close Button 
            CloseButton.className = "Close-Button";

            // Append Close Button To Popop Box 
            popopBox.appendChild(CloseButton);



        }

    });
});
// Close Popop 
document.addEventListener("click", function (e) {

    if (e.target.className == 'Close-Button') {

        // Remove The Current Popop 
        e.target.parentNode.remove();

        //Remove Overlay
        document.querySelector(".popop-overlay").remove();
    }

});


// Select All Bullets 
const Bullets = document.querySelectorAll(".Bullet");

// Sellect All Links 
const AllLinks = document.querySelectorAll(".links a");

function ScrollToSomeWhere(Elements) {
    Elements.forEach(element => {

        element.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            })
        });
    });

}

let navBullet = document.querySelector(".Nav-Bullets");

// Start Bullets Option
const BulletsOption = document.querySelectorAll(".Bullet-testing span");

let BulletLocalItem = localStorage.getItem("Bullets_option");

BulletsOption.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        if (bullet.dataset.display === "block") {

            navBullet.style.display = 'block';

            localStorage.setItem("Bullets_option", "block");
        }
        else {
            navBullet.style.display = 'none';

            localStorage.setItem("Bullets_option", "none");


        }
        CheckActive(e);
    });


});

if (BulletLocalItem !== null) {
    BulletsOption.forEach(span => {
        span.classList.remove("active");
    });

    if (BulletLocalItem === 'block') {
        navBullet.style.display = 'block';

        document.querySelector(".Bullet-testing .yes").classList.add("active");

    }

    else {
        navBullet.style.display = 'none';

        document.querySelector(".Bullet-testing .no").classList.add("active");


    }
}

ScrollToSomeWhere(AllLinks);
ScrollToSomeWhere(Bullets);


//Reset Button
document.querySelector(".Reset-option").onclick = function () {
    localStorage.clear();

    // localStorage.removeItem("Bullets_option");
    // localStorage.removeItem("backgroundOption");

    window.location.reload();
}

//Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");

let theLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    //Toggle Class Open On Links
    this.classList.toggle("menu-active");

    //Toggle Class Open On Links
    theLinks.classList.toggle("open");
}

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== theLinks) {

        // Check if Menu is Open 
        if (theLinks.classList.contains("open")) {

            //Toggle Class Open On Links
            toggleBtn.classList.toggle("menu-active");

            //Toggle Class Open On Links
            theLinks.classList.toggle("open");

        }

    }
});

// Stop Propagation On Menu 
theLinks.onclick = function (e) {
    e.stopPropagation();

}



