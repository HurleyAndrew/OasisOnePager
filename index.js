<<<<<<< HEAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
=======
// https://tobiasahlin.com/moving-letters/#6

>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
//letter animation
let playedAlready = [];
// Tablet and phone rotations
var lastScrollTop = 0;

let rotation = 0;
let rotMax = 2;
function myFunction(dir) {
  if (dir == "up") {
    rotation += 0.05;
  } else if (dir == "down") {
    rotation -= 0.05;
  }

  let phone = document.getElementById("phone");
  let tablet = document.getElementById("tablet");

  if (rotation < rotMax || rotation > 0) {
    if (rotation >= rotMax) {
      rotation = rotMax;
    } else if (rotation <= 0) {
      rotation = 0;
    }
    if (currentCrumb == "#Summary" || "#Features") {
      phone.style.transform = ` translateY(${-rotation * 60}px)`;
<<<<<<< HEAD
      tablet.style.transform = ` translateY(${rotation * 40}px)`;
=======
      tablet.style.transform = ` translate(600px,${rotation * 40}px)`;
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
    }

    // phone.style.transform = `rotate(${
    //   rotation + 6
    // }deg) translateY(${rotation}px)`;
    // tablet.style.transform = `rotate(${-rotation - 6}deg) translate(600px,${
    //   rotation * 40
    // }px)`;
  }
}

// Crumbs

let crumb = document.querySelector("#crumbText");
let crumbLine = document.querySelector(".crumbLine");

let crumbTextArr = [
  "Intro",
  "Summary",
  "Features",
  "Problem",
  "Problem",
  "Solution",
  "Hardware",
  "Demo",
  "Technology",
<<<<<<< HEAD
  "Challenges",
  "Visual Language",
  "A Takeaway",
  "The Team",
=======
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
];
let crumbTargetArr = [
  "#Intro",
  "#Summary",
  "#Features",
  "#Problem",
  "#TakesAToll",
  "#Solution",
  "#Hardware",
  "#Demo",
  "#Technology",
<<<<<<< HEAD
  "#Challenges",
  "#Designs",
  "#Takeaway",
  "#TheTeam",
];

let titleTargetArr = [
  "#introTitle",
  "#summaryTitle",
  "#problemTitle",
  "#takesatollTitle",
  "#solutionTitle",
  "#hardwareTitle",
  "#technologyTitle",
  "#codingTitle",
  "#beforeyougoTitle",
];

=======
];

let titleTargetArr = [
  "#introTitle",
  "#summaryTitle",
  "#problemTitle",
  "#takesatollTitle",
  "#solutionTitle",
  "#hardwareTitle",
  "#technologyTitle",
];
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
let currentCrumb;
document.addEventListener("load", wordAnimation("#introTitle"));
function checkTarget(target, i) {
  if (isInViewport(document.querySelector(target))) {
<<<<<<< HEAD
    // console.log(target);
=======
    console.log(target);
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
    currentCrumb = target;
    crumb.innerHTML = crumbTextArr[i];
    let currAnimID;
    switch (target) {
      case "#Intro":
        // currAnimID = "#introTitle";
        break;
      case "#Summary":
        currAnimID = "#summaryTitle";
        wordAnimation(currAnimID);
        break;
      case "#Problem":
        currAnimID = "#problemTitle";
        wordAnimation(currAnimID);
        break;
      case "#TakesAToll":
        currAnimID = "#takesatollTitle";
        wordAnimation(currAnimID);
        break;
      case "#Solution":
        currAnimID = "#solutionTitle";
        wordAnimation(currAnimID);
        break;
      case "#Hardware":
        currAnimID = "#hardwareTitle";
        wordAnimation(currAnimID);
        break;
      case "#Technology":
        currAnimID = "#technologyTitle";
        wordAnimation(currAnimID);
        break;
<<<<<<< HEAD
      case "#Challenges":
        currAnimID = "#codingTitle";
        wordAnimation(currAnimID);
        break;
      case "#Designs":
        currAnimID = "#designTitle";
        wordAnimation(currAnimID);
        break;
      case "#Takeaway":
        currAnimID = "#beforeyougoTitle";
        wordAnimation(currAnimID);
        break;
=======
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
      default:
      // currAnimID = "#introTitle";
    }

    if (
      target == "#Intro" ||
      target == "#Solution" ||
      target == "#Hardware" ||
<<<<<<< HEAD
      target == "#Demo" ||
      target == "#Technology"
=======
      target == "#Demo"
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
    ) {
      // console.log("at first section");

      crumb.classList.remove("blueCrumb");
      crumbLine.classList.remove("blueCrumbLine");
    } else {
      crumbLine.classList.add("blueCrumbLine");
      crumb.classList.add("blueCrumb");
      // console.log("after first section");
    }
  }
}

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  // console.log(distance.top);
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Scroll behaviors
window.onscroll = function () {
  for (let i = 0; i < crumbTargetArr.length; i++) {
    checkTarget(crumbTargetArr[i], i);
  }

  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    myFunction("up");
  } else {
    myFunction("down");
  }
  lastScrollTop = st <= 0 ? 0 : st;
};

function wordAnimation(sentenceID) {
  let title = document.querySelector(sentenceID);
  let letterArray = title.innerHTML.split("");

  let arrayString = [];
  let newArray = [];

  if (playedAlready.includes(sentenceID)) {
<<<<<<< HEAD
    // console.log(playedAlready + " bounced");
=======
    console.log(playedAlready + " bounced");
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
    return;
  }
  playedAlready.push(sentenceID);
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] == undefined) {
    } else {
      if (letterArray[i] == " ") {
<<<<<<< HEAD
        // console.log("found a space");
=======
        console.log("found a space");
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
      } else {
        if (letterArray[i] == "/") {
          newArray.push("&nbsp;");
        } else if (letterArray[i] == "%") {
<<<<<<< HEAD
          // console.log("is an ampersand");
=======
          console.log("is an ampersand");
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
          newArray.push("&amp;");
        } else if (letterArray[i] == "^") {
          newArray.push("<br>");
        } else {
          newArray.push(letterArray[i]);
        }
      }
    }
  }
  // console.log(newArray);
  let idArr = [];
  for (let i = 0; i < newArray.length; i++) {
    idArr.push(Date.now() + i);
    arrayString += `<span class="letter" id="${idArr[i]}"> ${newArray[i]} </span>`;
  }

  title.innerHTML = arrayString;

  for (let i = 0; i < newArray.length; i++) {
    setTimeout(function () {
      document.getElementById(`${idArr[i]}`).className += " textAnimation";
    }, i * 30 + i / newArray.length);
  }

  // console.log(arrayString);
}
// potential easing function
function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}
<<<<<<< HEAD

document.addEventListener("load", function () {});
titleTargetArr.forEach((title) => {
  document.querySelector(title).className += " hideText";
  // console.log(title);
});
=======
>>>>>>> e3ba44c148ea1d466302089388bf703d6ec843c8
