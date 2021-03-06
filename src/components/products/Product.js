import React, { Component } from "react";
import "../../styles/Products.css";
import Cartitems from "./Cartitems";
import ProductIndividual from "./ProductIndividual";
import Popup from "../../Popup";
import "../../../src/Style.css";
import WineSoap from "../../images/WineSoap.png";
import ClaySoap from "../../images/ClaySoap.png";
import CinaSoap from "../../images/CinaSoap.png";
import CoffTeaSoap from "../../images/CoffTeaSoap.png";
import OceanSoap from "../../images/OceanSoap.png";
import MacronSoap from "../../images/MacronSoap.png";
import WaterMelonSoap from "../../images/WaterMelonSoap.png";
import HoneylemonSoap from "../../images/HoneylemonSoap.png";
import RainbowSoap from "../../images/RainbowSoap.png";
import LavenderSoap from "../../images/LavenderSoap.png";
import GradientSoap from "../../images/GradientSoap.png";
import BtsSoap from "../../images/BtsSoap.png";

/**
 * This class represents all products and operations on them
 */
class Product extends Component {
  /**
   * Initializing State variable and binding functions
   */
  constructor(props) {
    super(props);

    /**
     * Contains product data and cart data  that is to displayed on product page
     *
     * @var {array}
     */
    this.state = {
      soapData: [
        {
          id: "0",
          soapPrice: "$10.99",
          soapImgUrl: WineSoap,
          soapName: "Wine Soap with golden goodness",
          SoapDes:
            "With its Anti-oxidant property, wine soap helps in anti-aging and firmness of the skin.",
        },

        {
          id: "1",
          soapPrice: "$12.99",
          soapImgUrl: ClaySoap,
          soapName: "Clay soap",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },

        {
          id: "2",
          soapPrice: "$10.99",
          soapImgUrl: CinaSoap,
          soapName: "Cinnamon roll soaps with coffee exfoliation",
          SoapDes: "A little coffee, a lot cinnamon frangrance for your skin",
        },
        {
          id: "3",
          soapPrice: "$15.99",
          soapImgUrl: CoffTeaSoap,
          soapName: "Coffee and Tea exfoliation bar",
          SoapDes:
            "Wake your skin very morning with tea and coffee exfoliation bar",
        },
        {
          id: "4",
          soapPrice: "$12.99",
          soapImgUrl: OceanSoap,
          soapName: "OceanSoap",
          SoapDes: "Feel refreshed with methonal, its like a ocean in a bar",
        },
        {
          id: "5",
          soapPrice: "$9.99",
          soapImgUrl: MacronSoap,
          soapName: "Macron Soaps",
          SoapDes:
            "with vanilla fragrance, these tiny hand soaps make the perfect gift",
        },
        {
          id: "6",
          soapPrice: "$13.99",
          soapImgUrl: WaterMelonSoap,
          soapName: "Watermelon Soaps",
          SoapDes:
            "Not just look like watermelon, but smells the same and exfolites with watermelon seeds",
        },
        {
          id: "7",
          soapPrice: "$14.99",
          soapImgUrl: HoneylemonSoap,
          soapName: "Honey Lemon Soap",
          SoapDes: "A set of honey and lemon soap to keep your skin hydrated",
        },
        {
          id: "8",
          soapPrice: "$10.99",
          soapImgUrl: RainbowSoap,
          soapName: "Oat milk Rainbow Soap",
          SoapDes: "Soap made with oat milk, treat to your skin and eye",
        },
        {
          id: "9",
          soapPrice: "$11.99",
          soapImgUrl: LavenderSoap,
          soapName: "Lavender Swirl soap",
          SoapDes: "with goodness of lavender, to calm your skin",
        },
        {
          id: "10",
          soapPrice: "$13.99",
          soapImgUrl: GradientSoap,
          soapName: "Gradient Soaps",
          SoapDes: "Gifting soaps made with goat milk and glycerin",
        },
        {
          id: "11",
          soapPrice: "$54.99",
          soapImgUrl: BtsSoap,
          soapName: "BTS Themed Soaps",
          SoapDes: "For the BTS fan in you, BTS themed curated soaps",
        },
      ],
      cartData: [],
      isOpen: false,
      sObj: {},
    };

    //binding all methods
    this.addItemToCart = this.addItemToCart.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
    this.buyNow = this.buyNow.bind(this);
  }

  /**
   * opens the cart popup on click
   *
   * @return  {void}
   */
  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  /**
   * Handles adding items to cart when clicked on "Add to cart button"
   */
  addItemToCart(val) {
    let arr = [...this.state.cartData, this.state.soapData[val]];
    this.setState({
      cartData: arr,
    });

    console.log("my cart is", arr);
  }
  /**
   * Stores values when user selects color and shape from customize option
   */
  handleChange(e, key) {
    this.setState({
      sObj: {
        ...this.state.sObj,
        [key]: e.target.value,
      },
    });
  }

  /**
   * converting hexadecimal color value to RGB value
   *
   * @param   {object}  hex  [Hexadecimal value]
   *
   * @return  {object}       [returns an array of object]
   */
  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [];
  }

  /**
   * Caluculated the cost of the object in the customiable section
   *
   * @param   {object}  sobj  [Object array containing color and shape value]
   *
   * @return  {object}        [returns the cost value]
   */
  calculateCost(sobj) {
    if (Object.keys(sobj).length > 0) {
      let rgbObj = [];
      rgbObj = this.hexToRgb(sobj?.sColor || "");
      console.log("rgbobj", rgbObj);

      let colorSum = 0;
      (rgbObj || []).forEach((elem) => {
        colorSum += elem;
      });

      let priceFromShape = 0;
      let shapPriceObj = {
        square: 4.99,
        rectangle: 6.99,
        circle: 5.99,
        "": 0,
      };

      console.log("sobj", sobj);
      priceFromShape = shapPriceObj[sobj?.sShapes || ""];
      console.log("shap price", priceFromShape);
      return `$${priceFromShape + Math.round(colorSum / 100)}`;
    }
  }

  /**
   * Shows an alert when user clicks on Buy now
   */
  buyNow() {
    alert("Thank you for shopping with us");
  }

  render() {
    return (
      <React.Fragment>
        <button className="cart-button" onClick={() => this.togglePopup()}>
          Cart
        </button>
        {this.state.isOpen && (
          <Popup
            content={
              <>
                {this.state.cartData.length > 0 ? (
                  this.state.cartData.map((e) => {
                    return <Cartitems cartObj={e} />;
                  })
                ) : (
                  <h1 className="empty-cart">
                    The cart is empty, please shop with us
                  </h1>
                )}
              </>
            }
            handleClose={() => this.togglePopup()}
          />
        )}
        <div className="customize">
          <form>
            <h3>Customize with us:</h3>
            <h5>
              Let us know your color and shape choice for our Shea butter Soaps
            </h5>
            <br />
            <label>Please pick a color:</label>
            <input
              type="color"
              name="sColor"
              value={this.state.sColor}
              onChange={(e) => this.handleChange(e, "sColor")}
            />
            <br />
            <label>Please pick a Shape:</label>
            <select
              name="shapes"
              id="shapes"
              value={this.state.sShapes}
              onChange={(e) => this.handleChange(e, "sShapes")}
            >
              <option value="">Please Select an option</option>
              <option value="circle">circle</option>
              <option value="rectangle">Rectangle</option>
              <option value="square">square</option>
            </select>
            <br />
            <label>Your Cost will be: </label>
            <label>{this.calculateCost(this.state.sObj)}</label>

            <div className="soap-cart-btn">
              <button className="soap-cart-text" onClick={this.buyNow}>
                Buy now
              </button>
            </div>
          </form>
        </div>
        <div>
          {this.state.soapData.map((e) => {
            return (
              <ProductIndividual
                soapObj={e}
                addItemToCart={this.addItemToCart}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
