// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./main.css"; // Import custom styles

// function Carousel() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "50", // No padding inside the slider
//     slidesToShow: 3,
//     speed: 500,
//   };

//   return (
//     <main className="container">
//       <h1 className="py-5" style={{ fontWeight: "bolder" }}>
//         JOUEZ À VOS JEUX PRÉFÉRÉS
//       </h1>
//       <p>
//         Avec de nouvelles parties à chaque seconde, vous êtes certain d'y
//         trouver votre compte.
//       </p>
//       <div className="container ">
//         <Slider {...settings}>
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className=" ">
//               <picture>
//                 <img
//                   src="/accordion-image.jpg"
//                   className="p-5 "
//                   height={400}
//                   width={500}
//                   alt=""
//                 />
//               </picture>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </main>
//   );
// }

// export default Carousel;
