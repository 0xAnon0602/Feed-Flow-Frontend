import React from "react";
import "../css/FlowDiagram.css";

export default function FlowDiagram() {
  // Example data – in a real app these could be props or come from a backend
  const feedLabel = "Feed";
  const flowLabel = "Flow";
  const flowValue = 0.0;         // gpm
  const reactorLabel = "Array Reactor";
  const reactorPercent = 0.0;    // %
  const productLabel = "Product";
  const productValue = 0.0;
  const concentrateLabel = "Concentrate";
  const concentrateValue = 0.0;

  return (
    <div className="flow-container">
      <div className="flow-row">
        {/* Feed */}
        <div className="flow-box">
          <div>{feedLabel}</div>
        </div>

        <div className="flow-arrow">&rarr;</div>

        {/* Flow */}
        <div className="flow-box">
          <div>{flowLabel}</div>
          <div className="flow-value">
            {flowValue.toFixed(2)} gpm
          </div>
        </div>

        <div className="flow-arrow">&rarr;</div>

        {/* Array Reactor */}
        <div className="flow-box">
          <div>{reactorLabel}</div>
          <div className="flow-value">
            {reactorPercent.toFixed(2)} %
          </div>
        </div>

        {/* Product & Concentrate branch */}
        <div className="output-container">
          <div className="flow-box" style={{ minWidth: "150px" }}>
            <div>{productLabel}</div>
            <div className="flow-value">
              {productValue.toFixed(2)}
            </div>
          </div>
          <div className="flow-box" style={{ minWidth: "150px" }}>
            <div>{concentrateLabel}</div>
            <div className="flow-value">
              {concentrateValue.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
