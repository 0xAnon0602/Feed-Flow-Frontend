import React, { useState } from "react";
import "../css/FlowDiagram.css";
import FeedWaterDataPopup from "./FeedWaterDataPopup";
import FlowRatesPopup from "./FlowRatesPopup";
import ArrayReactorPopup from "./ArrayReactorPopup";

const FlowDiagram = () => {
  const [isFeedPopupOpen, setIsFeedPopupOpen] = useState(false);
  const [isFlowPopupOpen, setIsFlowPopupOpen] = useState(false);
  const [isReactorPopupOpen, setIsReactorPopupOpen] = useState(false);

  const handleFeedClick = () => {
    setIsFeedPopupOpen(true);
  };

  const closeFeedPopup = () => {
    setIsFeedPopupOpen(false);
  };

  const handleFlowClick = () => {
    setIsFlowPopupOpen(true);
  };

  const closeFlowPopup = () => {
    setIsFlowPopupOpen(false);
  };

  const handleReactorClick = () => {
    setIsReactorPopupOpen(true);
  };

  const closeReactorPopup = () => {
    setIsReactorPopupOpen(false);
  };

  return (
    <div className="flow-diagram-container">
      {/* Feed box */}
      <div className="flow-box feed-box" onClick={handleFeedClick}>
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
          strokeDasharray="5,3"
          markerEnd="url(#arrowhead1)"
        />
      </svg>

      {/* Flow box */}
      <div className="flow-box flow-input-box" onClick={handleFlowClick}>
        <span className="box-title">Flow</span>
      </div>

      {/* Rest of the component remains unchanged */}
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
          strokeDasharray="5,3"
          markerEnd="url(#arrowhead2)"
        />
      </svg>

      {/* Array Reactor box */}
      <div className="flow-box reactor-box" onClick={handleReactorClick}>
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
          strokeDasharray="5,3"
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
          strokeDasharray="5,3"
          markerEnd="url(#arrowhead4)"
        />
      </svg>

      {/* Product box */}
      <div className="flow-box product-box">
        <span className="box-title">Product</span>
        <span className="box-value">0.00</span>
      </div>

      {/* Concentrate box */}
      <div className="flow-box concentrate-box">
        <span className="box-title">Concentrate</span>
        <span className="box-value">0.00</span>
      </div>

      {/* Feed Water Data Popup */}
      <FeedWaterDataPopup isOpen={isFeedPopupOpen} onClose={closeFeedPopup} />
      
      {/* Flow Rates Popup */}
      <FlowRatesPopup isOpen={isFlowPopupOpen} onClose={closeFlowPopup} />
      
      {/* Array Reactor Popup */}
      <ArrayReactorPopup isOpen={isReactorPopupOpen} onClose={closeReactorPopup} />
    </div>
  );
};

export default FlowDiagram;