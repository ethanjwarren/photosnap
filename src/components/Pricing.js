import React, { useState } from "react";
import HeroArea from "./utils/HeroArea";
import iconcheck from "../assets/pricing/desktop/check.svg";

const Pricing = () => {
  const [toggle, setToggle] = useState("monthly");

  return (
    <div className="pricing-content">
      <section className="hero-area">
        <HeroArea
          heading="Pricing"
          text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          image="/assets/pricing/desktop/hero"
        />
      </section>
      <section className="pricing-area">
        <div className="pricing-area__toggle">
          <p style={toggle === "monthly" ? { color: "black" } : {}}>Monthly</p>
          <button
            onClick={() => {
              toggle === "monthly" ? setToggle("yearly") : setToggle("monthly");
            }}
          >
            <div
              className="pricing-toggle-state"
              style={toggle === "yearly" ? { marginLeft: "auto" } : {}}
            ></div>
          </button>
          <p style={toggle === "yearly" ? { color: "black" } : {}}>Yearly</p>
        </div>
        <div className="pricing-area__options">
          <div className="pricing-area__outer">
            <h3>Basic</h3>
            <p className="pricing-area__description">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <p className="pricing-area__price">
              $19{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="pricing-area__per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>

          <div className="pricing-area__inner">
            <h3>Pro</h3>
            <p className="pricing-area__description">
              More advanced features available. Recommended for photograhy
              veterans and professionals.
            </p>
            <p className="pricing-area__price">
              $39{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="pricing-area__per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>

          <div className="pricing-area__outer">
            <h3>Business</h3>
            <p className="pricing-area__description">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <p className="pricing-area__price">
              $99{toggle === "monthly" ? "" : "0"}.00
            </p>
            <p className="pricing-area__per">
              per {toggle === "monthly" ? "month" : "year"}
            </p>
            <button>PICK PLAN</button>
          </div>
        </div>
      </section>
      <section className="pricing-table">
        <h2>COMPARE</h2>
        <table>
          <tr>
            <th style={{ textAlign: "left" }}>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
          <tr>
            <td>UNLIMITED STORY POSTING</td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>UNLIMITED PHOTO UPLOAD</td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>EMBEDDING CUSTOM CONTENT</td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>CUSTOMIZE METADATA</td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>ADVANCED METRICS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>PHOTO DOWNLOADS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>SEARCH ENGINE INDEXING</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
          <tr>
            <td>CUSTOM ANALYTICS</td>
            <td></td>
            <td></td>
            <td>
              <img src={iconcheck} alt="available"></img>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Pricing;
