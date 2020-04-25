// Tablet and phone rotations
var lastScrollTop = 0;

let rotation = 0;
let rotMax = 20;
function myFunction(dir) {
  if (dir == "up") {
    rotation += 0.5;
  } else if (dir == "down") {
    rotation -= 0.5;
  }

  let phone = document.getElementById("phone");
  let tablet = document.getElementById("tablet");
  if (rotation < rotMax || rotation > 0) {
    if (rotation >= rotMax) {
      rotation = rotMax;
    } else if (rotation <= 0) {
      rotation = 0;
    }
    phone.style.transform = `rotate(${rotation}deg) translateY(${rotation}px)`;
    tablet.style.transform = `rotate(${-rotation}deg) translateY(${rotation}px)`;
  }
}

// Crumbs

let crumb = document.querySelector("#crumbText");
let crumbLine = document.querySelector(".crumbLine");

let crumbTextArr = ["Intro", "Summary", "Features", "Problem"];
let crumbTargetArr = ["#Intro", "#Summary", "#Features", "#Problem"];

function checkTarget(target, i) {
  if (isInViewport(document.querySelector(target))) {
    console.log(target);
    crumb.innerHTML = crumbTextArr[i];

    if (target == "#Intro") {
      console.log("at first section");

      crumb.classList.remove("blueCrumb");
      crumbLine.classList.remove("blueCrumbLine");
    } else {
      crumbLine.classList.add("blueCrumbLine");
      crumb.classList.add("blueCrumb");
      console.log("after first section");
    }
  }
}

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  console.log(distance.top);
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
