 
    // File Name: script.js
    // Date: 12/2023


function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


// SERVICE SLIDER


    // var Swiper = new Swiper(".service-slider", {
    //     slidesPerView: 1,
    //     spaceBetween: 70,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     navigation: {
    //         nextEl: ".service-slider .swiper-button-next",
    //         prevEl: ".service-slider .swiper-button-prev",
    //     },
    //     breakpoints: {
    //       640: {
    //         slidesPerView: 2,
     
    //       },
    //       950: {
    //         slidesPerView: 3,
         
    //       },
    //       1200: {
    //         slidesPerView: 4,
 
    //       },
    //     },
    //   });


// F O R M

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");

// function sendEmail() {
//   const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;


//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "w.lashesandeauty@gmail.com",
//     Password : "B1CF3D4B897C6E01FC686B4E5347BB2DB634",
//     To : 'w.lashesandeauty@gmail.com',
//     From : "w.lashesandeauty@gmail.com",
//     Subject : subject.value,
//     Body : bodyMessage
// }).then(
//     message => { 
//       if (message == "OK") {
//         Swal.fire({
//           title: "Welcome!",
//           text: "Message sent successfully!",
//           icon: "success"
//         });
//       }
//     }
//   );
// }

// function checkInputs() {
//   const items = document.querySelectorAll(".item");

//   for (const item of items) {
//     if (item.value == "") {
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//     }

//     // if (items[1].value != ""){
//     //   checkEmail();
//     // }

//     items[1].addEventListener("keyup", () => { 
//       checkEmail();
//     });

//     item.addEventListener("keyup", () => {
//       if (item.value != "") {
//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");
//       }
//       else {
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//       }
//     });
//   }
// }

// function checkEmail() {
//   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//   const errorTxtEmail = document.querySelector(".error-txt.email");

//   if (!email.value.match(emailRegex)) {
//     email.classList.add("error");
//     email.parentElement.classList.add("error");

//     if (email.value != "") {
//       errorTxtEmail.innerText = "Enter a valid email address";
//     }
//     else {
//       errorTxtEmail.innerText = "Email Address can't be Blank";
//     }


//   }
//   else {
//     email.classList.remove("error");
//     email.parentElement.classList.remove("error");
//   }
  
// }


// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInputs();


//   if (!fullName.classList.contains("error") && !Email.classList.contains("error") 
//   && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
//       console.log("OK");
//   }
//   // sendEmail();
// });