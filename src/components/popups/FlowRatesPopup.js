import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateFlowValue, updateSelectedOption } from '../../redux/slices/flowRatesSlice';
import "../../css/FlowRatesPopup.css";

const FlowRatesPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { flowValues, selectedOption } = useSelector(state => state.flowRates);

  const handleFlowChange = (key, value) => {
    dispatch(updateFlowValue({ key, value }));
  };

  const handleOptionChange = (option) => {
    dispatch(updateSelectedOption(option));
  };

  if (!isOpen) return null;

  return (
    <div className="flow-popup-overlay">
      <div className="flow-popup-container">
        <div className="flow-popup-header">
          <h2>Flow Rates</h2>
          <button className="flow-close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="flow-popup-content">
          <div className="flow-section">
            <h3>Flow</h3>
            <div className="flow-options">

              <div className="flow-option">
                  <label>
                    <input 
                      type="radio" 
                      name="flowOption" 
                      checked={selectedOption === "feed"} 
                      onChange={() => handleOptionChange("feed")}
                    />
                    <span>Specify Feed</span>
                  </label>
                  <div className="flow-input">
                    <input 
                      type="text" 
                      value={flowValues.feedFlow} 
                      onChange={(e) => handleFlowChange("feedFlow", e.target.value)}
                      disabled={selectedOption !== "feed"}
                    />
                    <span className="flow-unit">gpm</span>
                  </div>
              </div>

              <div className="flow-option">
                  <label>
                    <input 
                      type="radio" 
                      name="flowOption" 
                      checked={selectedOption === "product"} 
                      onChange={() => handleOptionChange("product")}
                    />
                    <span>Specify Product</span>
                  </label>
                  <div className="flow-input">
                    <input 
                      type="text" 
                      value={flowValues.productFlow} 
                      onChange={(e) => handleFlowChange("productFlow", e.target.value)}
                      disabled={selectedOption !== "product"}
                    />
                    <span className="flow-unit">gpm</span>
                  </div>
              </div>
              
              <div className="flow-option">
                <label>
                  <input 
                    type="radio" 
                    name="flowOption" 
                    checked={selectedOption === "concentrate"} 
                    onChange={() => handleOptionChange("concentrate")}
                  />
                  <span>Specify Concentrate</span>
                </label>
                <div className="flow-input">
                  <input 
                    type="text" 
                    value={flowValues.concentrateFlow} 
                    onChange={(e) => handleFlowChange("concentrateFlow", e.target.value)}
                    disabled={selectedOption !== "concentrate"}
                  />
                  <span className="flow-unit">gpm</span>
                </div>
              </div>

            </div>
          </div>

          <div className="reactor-button-row">
            <button className="reactor-ok-button" onClick={onClose}>OK</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlowRatesPopup;