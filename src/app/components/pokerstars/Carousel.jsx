import React from "react";




function Carousel() {
  return (
    <main className="container">


      <div className="row justify-content-center">
        <div className="col-md-4 mb-2">
          <div
            className="img-container"
           
          >
            <img  style={{ height: "300px", overflow: "hidden" }} src="/carouselimg6.jpg" className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div
            className="img-container"
           
          >
            <img style={{ height: "300px", overflow: "hidden" }} src="/carouselimg7.webp" className="img-fluid w-100" alt="" />
          </div>
        </div>
       
      </div>
    </main>
  );
}

export default Carousel;
