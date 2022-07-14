'use Strict';
let goingLeft = true;
let i = 0;
let j = 0;
let HeroGoingleft = false;

// function moveEnemy() {
//     let speed = 5;
//     let enemy = document.querySelector(".enemy");
//     let enemyImg = document.querySelector(".enemyImg");
//     let enemyProgress = document.querySelector(".progressEnemy");
//     let width = document.documentElement.clientWidth;
//     position = enemy.style.right;
//     progressPosition = enemyProgress.style.right;
//     position = Number(position.substring(0, position.length - 2));
//     progressPosition = Number(progressPosition.substring(0, progressPosition.length - 2));
//     // console.log(position);

//     let img1 = "Enemy/enemy-left-1.png";

//     (goingLeft) ? img1 = "Enemy/enemy-left-" + i % 3 + ".png" : img1 = "Enemy/enemy-right-" + i % 3 + ".png";
//     // console.log(img1);
//     // position+=10;
//     if ((position + speed) <= width - 50 && goingLeft) {
//         position = position + speed;
//         progressPosition = progressPosition + speed;
//         if (position === width - 50) {
//             goingLeft = false;
//             enemyImg.src = "Enemy/enemy-0-right.png"
//         }
//     }
//     else {
//         position = position - speed;
//         progressPosition = progressPosition - speed;
//         if (position === 0) {
//             goingLeft = true;
//             enemyImg.src = "Enemy/enemy-0-left.png"
//         }
//     }
//     if (position % 6 === 0) {
//         i++;
//     }
//     enemyImg.src = img1;
//     // console.log(position);
//     position += "px";
//     progressPosition += "px";
//     // console.log(position);
//     enemy.style.right = position;
//     enemyProgress.style.right = progressPosition;
// }

document.addEventListener("DOMContentLoaded", function () {
    //   if(e.key==="w"){
    // console.log("dom contant loaded");
    // moveEnemy();
    //   }
});

document.addEventListener("keydown", function (e) {
    moveHero(e.key);
});

function moveHero(key) {
    let standingStill = false;
    let shooting = false;
    let speedH = 10;
    let hero = document.querySelector(".hero");
    let heroImg = document.querySelector(".heroImg");
    let heroProgress = document.querySelector(".progressHero");
    let width = document.documentElement.clientWidth;
    positionH = hero.style.left;
    progressPositionH = heroProgress.style.left;
    positionH = Number(positionH.substring(0, positionH.length - 2));
    progressPositionH = Number(progressPositionH.substring(0, progressPositionH.length - 2));
    // console.log(position);

    let imgH = "Hero/hero-left-1.png";
    if (key === "ArrowLeft" || key === "a") {
        HeroGoingleft = true;
        standingStill = false;
    }
    else if (key === "ArrowRight" || key === "d") {
        HeroGoingleft = false;
        standingStill = false;
    }
    else if (key === "v") {
        standingStill = true;
        shooting = true;
    }
    else if (key === " "){
        let jumpMe=document.querySelector(".hero");
        let jumpBar=document.querySelector(".progressHero");
        jumpMe.style.animation="jump ease-in-out 0.8s 1";
        jumpBar.style.animation="jumpBar ease-in-out 0.8s 1";
        setTimeout(function(){
            jumpMe.style.animation="";
            jumpBar.style.animation="";
        },1000);
        standingStill= true;
        j= 0;
    }
    else {
        standingStill = true;
        j = 0;
    }


    (!HeroGoingleft) ? imgH = "Hero/hero-right-" + j % 3 + ".png" : imgH = "Hero/hero-left-" + j % 3 + ".png";
    // console.log(img1);
    // position+=10;
    // console.log(HeroGoingleft);
    if (!standingStill) {
        standingStill = true;
        if ((positionH + speedH) <= width - 150 && !HeroGoingleft) {
            positionH = positionH + speedH;
            progressPositionH = progressPositionH + speedH;
            if (positionH === width - 150) {
                HeroGoingleft = true;
                heroImg.src = "Hero/hero-0-right.png"
            }
        }
        else {
            positionH = positionH - speedH;
            progressPositionH = progressPositionH - speedH;
            if (positionH <= 0) {
                HeroGoingleft = false;
                heroImg.src = "Hero/hero-0-left.png"
            }
        }
    }
    if (positionH % 6 === 0) {
        j++;
    }
    heroImg.src = imgH;
    // console.log(position);
    positionH += "px";
    progressPositionH += "px";
    // console.log(position);
    hero.style.left = positionH;
    heroProgress.style.left = progressPositionH;
    if(shooting){
        shooting=false;
        shoot(positionH.substring(0,positionH.length-2));
    }
}

function shoot(gunPosition){
    let gun=document.querySelector(".gun");
    let bulletPosition=Number(gunPosition);
    let gunImg=document.querySelector(".gunImg");
    let speedG=80;
    gun.classList.remove("hidden");
    gun.style.left = bulletPosition;
    gun.style.left = bulletPosition + "px";
    if(!HeroGoingleft){
        gun.style.animation="GunRight linear 2s 1";
        gunImg.src="Bullets/bullet-0.png";
    }
    else{
        gun.style.animation="GunLeft linear 2s 1";
        gunImg.src="Bullets/bullet-1.png";
    }
    setTimeout(function(){
        gun.classList.add("hidden");
    },2000);
}