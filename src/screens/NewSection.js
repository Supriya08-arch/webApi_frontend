import React from "react";
// import bg1 from "../style/images/featured/bg1.jpg";
import Rating from "react-rating";
// import blackfit from "../style/images/blackfit.jpg"
import girl from "../style/images/girl.jpg";
import boy from "../style/images/boy.jpg";
import both from "../style/images/both.jpg";
import men from "../style/images/featured/men.jpg";
import shoe1 from "../style/images/featured/shoe1.jpg";
import shoe2 from "../style/images/featured/shoe2.jpg";
import dress1 from "../style/images/featured/dress1.jpg";
import dress6 from "../style/images/featured/dress6.jpg";
import dress5 from "../style/images/featured/dress5.jpg";
import men1 from "../style/images/featured/men1.jpg";
import men4 from "../style/images/featured/men4.jpg";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const handleClick = (mylink) => () => {
  window.location.href = mylink;
};

export const NewSection = () => {
  
  return (
    <div id="new" className="w-100">
      <div className="row p-0 m-0">
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src={girl}
          ></img>

          <div className="details">
            <h2>women</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src={both}
          ></img>

          <div className="details">
            <h2>Active-Wear</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img
            className="img-fluid"
            src={boy}
          ></img>

          <div className="details">
            <h2>Men</h2>
            <button className="tex-uppercase">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div>
      <div id="featured" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h3>Our Collections</h3>
          <hr className="mx-auto  org-hr" />
          <p>
             Our new products with fair price in Ship_Shop.
          </p>
        </div>

        <div className="row mx-auto container-fluid">
          <div
            onClick={handleClick('/sproduct')}
            className="product text-center col-lg-3 col-md-4 col-sm-12"
          >
            {/* <img className="img-fluid mb-3" src="https://ezgif.com/png-to-webp/ezgif-5-2c8f2afb53.png"></img> */}
            <img src={men} className="img-fluid login-img" />
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
            {/* <img className="img-fluid mb-3" src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chunky-intarsia-football-t-shirt-ready-to-wear--HMN66WJYB900_PM2_Front%20view.png?wid=656&hei=656"></img> */}
            <img src={dress1} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={3}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Julliet Dress</h5>
            <h4 className="p-price">$40</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            {/* <img className="img-fluid mb-3" src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-tie-dye-t-shirt-with-lv-signature-ready-to-wear--HMY73WNPL50Z_PM2_Front%20view.png?wid=656&hei=656"></img> */}
            <img src={shoe1} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={4}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Women Active-Wear</h5>
            <h4 className="p-price">$400</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            {/* <img className="img-fluid mb-3" src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-horizon-soft-55-other-monogram-canvas-travel--M20115_PM2_Front%20view.png?wid=656&hei=656"></img> */}
            <img src={shoe2} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Men Active-Wear</h5>
            <h4 className="p-price">$600</h4>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div id="banner" className="my-5 py-5">
      <div className="container">
        <h4>MID FINALE SALE</h4>
        <h1>
         UP TO 25% OFF
        </h1>
        <button className="text-uppercase">Shop Now</button>
      </div>
    </div>
  );
};

export const BrandNew = () => {
  return (
    <div>
      <div id="featured my-5 py-4">
        <div className="container text-center mt-5 py-5">
          <h3> New Arrivals</h3>
          <hr className="mx-auto org-hr" />
          <p>
           Check it out.
          </p>
        </div>

        <div className="row mx-auto container-fluid">
          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            {/* <img className="img-fluid mb-3" src="https://www.goldstarshoes.com/Media/starlite_04_(2).jpg"></img> */}
            <img src={dress5} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Black Frock</h5>
            <h4 className="p-price">$150</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            {/* <img className="img-fluid mb-3" src="https://www.goldstarshoes.com/Media/271212202_5067592363260644_7908891534745222614_n.jpg"></img> */}
            <img src={men1} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
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
            {/* <img className="img-fluid mb-3" src="https://www.goldstarshoes.com/Media/271463519_5070666249619922_1619995335154167526_n.jpg"></img> */}
            <img src={dress6} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Blue Fairy</h5>
            <h4 className="p-price">$85</h4>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="product text-center col-lg-3 col-md-4 col-sm-12">
            {/* <img className="img-fluid mb-3" src="https://www.goldstarshoes.com/Media/l_1004_(2).jpg"></img> */}
            <img src={men4} className="img-fluid login-img" />
            <div className="star">
              <Rating
                style={{ color: colors.orange }}
                initialRating={5}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                readonly={true}
              />
            </div>
            <h5 className="p-name">Super-Dry</h5>
            <h4 className="p-price">$30</h4>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
