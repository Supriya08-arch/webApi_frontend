import React from "react";
// import bg1 from "../style/images/featured/bg1.jpg";
import men from "../style/images/featured/men.jpg";
import men1 from "../style/images/featured/men1.jpg";
import men3 from "../style/images/featured/men3.jpg";
import men4 from "../style/images/featured/men4.jpg";
import Rating from "react-rating";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function Sproduct() {
  return (
    <div>
      <div className="sproduct my-5 py-5 container">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-md-12">
            <img className="img-fluid w-100 pb-1" src={men} />
            {/* <div className="small-img-group">
              <div className="small-img-col">
                <img className="small-img w-100" src={bg1} />
              </div> */}

              {/* <div className="small-img-col">
                <img className="small-img w-100" src={bg1} />
              </div> */}

              {/* <div className="small-img-col">
                <img className="small-img w-100" src={bg1} />
              </div> */}

              {/* <div className="small-img-col">
                <img className="small-img w-100" src={bg1} />
              </div> */}
            {/* </div> */}
          </div>
          <div className="col-lg-6 col-md-12 col-md-12">
            <h6>Home / T-shirt</h6>
            <h3 className="py-4">Jack&Jones</h3>
            <h2>$35.00</h2>
            <select className="my-3">
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>L</option>
            </select>

            <input type="Number" value="1" />

            <button className="buy-btn">Add to Cart</button>

            <h4 className="mt-5 mb-5">Product Details</h4>
            {/* <span>
              To get started you'll need to install the following packages into
              your project using a package manager like npm (opens new
              window)and yarn (opens new window). Here are examples that install
              everything you need and our solid style of icons using each
              respective package manager.
            </span> */}
          </div>

          <div>
            <div id="featured" className="my-5 pb-5">
              <div className="container text-center mt-5 py-5">
                <h3>Our Collections</h3>
                <hr className="mx-auto" />
                <p>
                  Best Collections for this summer
                  Ship_Shop.
                </p>
              </div>

              <div className="row mx-auto container-fluid">
                <div className="product text-center col-lg-3 col-md-4 col-sm-12">
                  <img className="img-fluid mb-3" src={men}></img>
                  <div className="star">
                    <Rating
                      style={{ color: colors.orange }}
                      initialRating={5}
                      emptySymbol="fa fa-star-o "
                      fullSymbol="fa fa-star"
                      readonly={true}
                    />
                  </div>
                  <h5 className="p-name">Jack&Jones</h5>
                  <h4 className="p-price">$35</h4>

                  <button className="buy-btn">Buy Now</button>
                </div>

                <div className="product text-center col-lg-3 col-md-4 col-sm-12">
                  <img className="img-fluid mb-3" src={men3}></img>
                  <div className="star">
                    <Rating
                      style={{ color: colors.orange }}
                      initialRating={3}
                      emptySymbol="fa fa-star-o "
                      fullSymbol="fa fa-star"
                      readonly={true}
                    />
                  </div>
                  <h5 className="p-name">Super-Dry</h5>
                  <h4 className="p-price">$40</h4>

                  <button className="buy-btn">Buy Now</button>
                </div>

                <div className="product text-center col-lg-3 col-md-4 col-sm-12">
                  <img className="img-fluid mb-3" src={men1}></img>
                  <div className="star">
                    <Rating
                      style={{ color: colors.orange }}
                      initialRating={2}
                      emptySymbol="fa fa-star-o "
                      fullSymbol="fa fa-star"
                      readonly={true}
                    />
                  </div>
                  <h5 className="p-name">Adidas</h5>
                  <h4 className="p-price">$45</h4>

                  <button className="buy-btn">Buy Now</button>
                </div>

                <div className="product text-center col-lg-3 col-md-4 col-sm-12">
                  <img className="img-fluid mb-3" src={men4}></img>
                  <div className="star">
                    <Rating
                      style={{ color: colors.orange }}
                      initialRating={4}
                      emptySymbol="fa fa-star-o "
                      fullSymbol="fa fa-star"
                      readonly={true}
                    />
                  </div>
                  <h5 className="p-name">Super-Dry</h5>
                  <h4 className="p-price">$55</h4>

                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
