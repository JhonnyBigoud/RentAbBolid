// var i = 0;
// var images = [
//         './images/bg1.jpg',
//         './images/bg2.jpg',
//         './images/bg3.jpg',
//         './images/bg4.jpg',
//         './images/bg5.jpg',
//         './images/bg6.jpg',
//         './images/bg7.jpg',
//         './images/bg8.jpg',
//     ];
// var time = 2000;

// document.getElementById("header").style.backgroundImage ="url('./images/bg1.jpg')";


// document.getElementById("header").style.backgroundImage ="url('./images/bg2.jpg')";

// // document.getElementById( "header" ).style.backgroundImage = images[ i ];

//     function changeImg() {

//     let adress = "url('./images/bg"+{i}+".jpg')"
    
//     if (i < images.length -1) {
//             document.getElementById("header").style.backgroundImage = adress;
//             i++;
//         }
//         else {
//             i =0;
//         }
//             setTimeout("changeImg()",time);
//     }

//     window.onload = changeImg;

function chnageHeaderImage() {

    const images = [
        'url("./images/bg1.jpg")',
        'url("./images/bg2.jpg")',
        'url("./images/bg3.jpg")',
        'url("./images/bg4.jpg")',
        'url("./images/bg5.jpg")',
        'url("./images/bg6.jpg")',
        'url("./images/bg7.jpg")',
        'url("./images/bg8.jpg")',
    ]

    const section =  document.querySelector('section');
    const bg = images[Math.floor(Math.random()*images.length)];
    section.style.backgroundImage = bg;
}

setInterval(chnageHeaderImage, 1000)