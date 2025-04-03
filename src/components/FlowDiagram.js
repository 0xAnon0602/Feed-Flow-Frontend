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
          <span className="box-title">Feed</span>
        </div>

        {/* Arrow: Feed -> Flow */}
        <svg className="arrow arrow-feed-flow">
          <defs>
            <marker
              id="arrowhead1"
              markerWidth="6"
              markerHeight="6"
              refX="3"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 Z" fill="#000" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="10"
            x2="100"
            y2="10"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrowhead1)"
          />
        </svg>

        {/* Flow box */}
        <div className="flow-box flow-input-box" onClick={() => handleBoxClick('flow')}>
          <span className="box-title">Flow</span>
        </div>

        {/* Arrow: Flow -> Array Reactor */}
        <svg className="arrow arrow-flow-reactor">
          <defs>
            <marker
              id="arrowhead2"
              markerWidth="6"
              markerHeight="6"
              refX="3"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 Z" fill="#000" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="10"
            x2="100"
            y2="10"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrowhead2)"
          />
        </svg>

        {/* Array Reactor box */}
        <div className="flow-box reactor-box" onClick={() => handleBoxClick('reactor')}>
          <span className="box-title">Array Reactor</span>
        </div>

        {/* Arrow: Array Reactor -> Product */}
        <svg className="arrow arrow-reactor-product">
          <defs>
            <marker
              id="arrowhead3"
              markerWidth="6"
              markerHeight="6"
              refX="3"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 Z" fill="#000" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="10"
            x2="120"
            y2="-60"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrowhead3)"
          />
        </svg>

        {/* Arrow: Array Reactor -> Concentrate */}
        <svg className="arrow arrow-reactor-concentrate">
          <defs>
            <marker
              id="arrowhead4"
              markerWidth="6"
              markerHeight="6"
              refX="3"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 Z" fill="#000" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="10"
            x2="120"
            y2="90"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrowhead4)"
          />
        </svg>

        {/* Product box */}
        <div className="flow-box product-box" onClick={() => handleBoxClick('product')}>
          <span className="box-title">Product</span>
        </div>

        {/* Concentrate box */}
        <div className="flow-box concentrate-box" onClick={() => handleBoxClick('concentrate')}>
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