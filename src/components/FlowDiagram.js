import React, { useState } from "react";
import "../css/FlowDiagram.css";
import FeedWaterDataPopup from "./popups/FeedWaterDataPopup";
import FlowRatesPopup from "./popups/FlowRatesPopup";
import ArrayReactorPopup from "./popups/ArrayReactorPopup";
import ProductDataPopup from "./popups/ProductDataPopup";
import ConcentrateDataPopup from "./popups/ConcentrateDataPopup";

const FlowDiagram = () => {
  const [isFeedPopupOpen, setIsFeedPopupOpen] = useState(false);
  const [isFlowPopupOpen, setIsFlowPopupOpen] = useState(false);
  const [isReactorPopupOpen, setIsReactorPopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [isConcentratePopupOpen, setIsConcentratePopupOpen] = useState(false);

  // Replace individual handlers with generic ones
  const handleBoxClick = (type) => {
    switch (type) {
      case 'feed':
        setIsFeedPopupOpen(true);
        break;
      case 'flow':
        setIsFlowPopupOpen(true);
        break;
      case 'reactor':
        setIsReactorPopupOpen(true);
        break;
      case 'product':
        setIsProductPopupOpen(true);
        break;
      case 'concentrate':
        setIsConcentratePopupOpen(true);
        break;
      default:
        break;
    }
  };

  const closePopup = (type) => {
    switch (type) {
      case 'feed':
        setIsFeedPopupOpen(false);
        break;
      case 'flow':
        setIsFlowPopupOpen(false);
        break;
      case 'reactor':
        setIsReactorPopupOpen(false);
        break;
      case 'product':
        setIsProductPopupOpen(false);
        break;
      case 'concentrate':
        setIsConcentratePopupOpen(false);
        break;
      default:
        break;
    }
  };

  // Add a loading state
  const [isLoading, setIsLoading] = useState(false);

  const handleRunSimulation = () => {
    // Set loading state to true when simulation starts
    setIsLoading(true);
    console.log("Running simulation...");
    
    // Simulate API call
    // Replace this with your actual API call
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => {
        console.log("Simulation results:", data);
        // Process your data here
      })
      .catch(error => {
        console.error("Error running simulation:", error);
      })
      .finally(() => {
        // Set loading state back to false when API call completes
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="flow-diagram-container">
        {/* Feed box */}
        <div className="flow-box feed-box" onClick={() => handleBoxClick('feed')}>
          <div className="icon-container">
            <div className="water-drop-icon"></div>
          </div>
          <span className="box-title">Feed</span>
        </div>

        {/* Arrow: Feed -> Flow */}
        <div className="arrow-container feed-to-flow">
          <div className="arrow-line"></div>
        </div>

        {/* Flow box */}
        <div className="flow-box flow-input-box" onClick={() => handleBoxClick('flow')}>
          <div className="icon-container">
            <div className="flow-meter-icon"></div>
          </div>
          <span className="box-title">Flow</span>
        </div>

        {/* Arrow: Flow -> Array Reactor */}
        <div className="arrow-container flow-to-reactor">
          <div className="arrow-line"></div>
        </div>

        {/* Array Reactor box */}
        <div className="flow-box reactor-box" onClick={() => handleBoxClick('reactor')}>
          <div className="icon-container">
            <div className="reactor-icon"></div>
          </div>
          <span className="box-title">Array Reactor</span>
        </div>

        {/* Arrow: Array Reactor -> Product */}
        <div className="arrow-container reactor-to-product">
          <div className="arrow-line"></div>
        </div>

        {/* Product box */}
        <div className="flow-box product-box" onClick={() => handleBoxClick('product')}>
          <div className="icon-container">
            <div className="product-icon"></div>
          </div>
          <span className="box-title">Product</span>
        </div>

        {/* Arrow: Array Reactor -> Concentrate */}
        <div className="arrow-container reactor-to-concentrate">
          <div className="arrow-line"></div>
        </div>

        {/* Concentrate box */}
        <div className="flow-box concentrate-box" onClick={() => handleBoxClick('concentrate')}>
          <div className="icon-container">
            <div className="concentrate-icon"></div>
          </div>
          <span className="box-title">Concentrate</span>
        </div>

        {/* Feed Water Data Popup */}
        <FeedWaterDataPopup isOpen={isFeedPopupOpen} onClose={() => closePopup('feed')} />
        
        {/* Flow Rates Popup */}
        <FlowRatesPopup isOpen={isFlowPopupOpen} onClose={() => closePopup('flow')} />
        
        {/* Array Reactor Popup */}
        <ArrayReactorPopup isOpen={isReactorPopupOpen} onClose={() => closePopup('reactor')} />
        
        {/* Product Data Popup */}
        <ProductDataPopup isOpen={isProductPopupOpen} onClose={() => closePopup('product')} />
        
        {/* Concentrate Data Popup */}
        <ConcentrateDataPopup isOpen={isConcentratePopupOpen} onClose={() => closePopup('concentrate')} />
        
        {/* Run Button - Positioned at the bottom */}
        <div className="run-button-container">
          <button 
            className="run-simulation-button" 
            onClick={handleRunSimulation}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                <span className="run-text">Processing...</span>
              </>
            ) : (
              <>
                <span className="run-icon">▶</span>
                <span className="run-text">Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Welcome Guide */}
      <div className="welcome-guide">
        <h2>Our software operates as follows:</h2>
        <ol>
          <li>Select the feed and input all relevant water ions and properties.</li>
          <li>Navigate to the flow section and specify the desired product or feed flow rate.</li>
          <li>In the array reactor module, configure the number of pressure vessels and elements with membranes.</li>
          <li>Run the simulation to obtain results for both the product and concentrate streams.</li>
        </ol>
      </div>
    </div>
  );
};

export default FlowDiagram;