import React from "react";
import { Firstdiv, Leftdiv, Maindiv, Rightdiv, Seconddiv } from "./cartstyle";
import cartcar from "../../assets/cartcar.svg";

const Cartpagecomponent = () => {
  return (
    <div
      style={{
        margin: "100px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", fontFamily: "Montserrat" }}>Cart</h2>
      <br />
      <br />
      <Maindiv>
        <Leftdiv>
          <img src={cartcar} alt="" />
          <button>
            <p>Purchase price</p>
            <p>
              <strong>52541$</strong>
            </p>
          </button>
        </Leftdiv>
        <Rightdiv>
          <Firstdiv>
            <h2>Car Name</h2>
            <h3>550$</h3>
            <h4>Description</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              viverra amet, tortor tristique odio scelerisque aenean sodales.
              Nunc risus dolor amet porttitor tellus
            </p>
            <button>
              <p>Continue to payment</p>
            </button>
          </Firstdiv>

          <Seconddiv>
            <h2>Enter Account Details</h2>
            <p>First name</p>
            <input type="text" placeholder="First name" />
            <p>Last name</p>
            <input type="text" placeholder="Last name" />
            <p>Email</p>
            <input type="text" placeholder="Email" />
            <p>Mobile Phone Number</p>
            <input type="text" placeholder="Mobile Phone Number" />
          </Seconddiv>
          <Seconddiv>
            <h2>Card</h2>
            <p>Name on card</p>
            <input type="text" placeholder="Name on card" />
            <p>Card Number</p>
            <input type="text" placeholder="Card Number" />
            <p>Expiration Month</p>
            <input type="text" placeholder="Expiration Month" />
            <p>CVV</p>
            <input type="text" placeholder="CVV" />
            <p>Billing Zip Cod</p>
            <input type="text" placeholder="Billing Zip Cod" />
            <button>
              <p>Place Order</p>
            </button>
          </Seconddiv>
        </Rightdiv>
      </Maindiv>
    </div>
  );
};

export default Cartpagecomponent;
