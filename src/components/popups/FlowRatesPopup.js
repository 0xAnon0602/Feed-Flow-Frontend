import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateFlowValue, updateSelectedOption } from '../../redux/slices/flowRatesSlice';
import "../../css/FlowRatesPopup.css";

const FlowRatesPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { flowValues, selectedOption } = useSelector(state => state.flowRates);
  const recovery = useSelector(state => parseFloat(state.feedWater.parameters['Recovery(%)']) || 45);

  const handleFlowChange = (key, value) => {
    if (key === 'Permeate Flow (m3/hr)') {
      // Convert permeate flow to feed flow
      const permeateValue = parseFloat(value);
      if (!isNaN(permeateValue) && recovery > 0) {
        const feedFlow = (permeateValue * 100) / recovery;
        dispatch(updateFlowValue({ key: 'Permeate Flow (m3/hr)', value }));
        dispatch(updateFlowValue({ key: 'Feed Flow (m3/hr)', value: feedFlow.toFixed(2) }));
      } else {
        dispatch(updateFlowValue({ key, value }));
      }
    } else {
      dispatch(updateFlowValue({ key, value }));
    }
  };

  const handleOptionChange = (option) => {
    if (option === "permeate" && selectedOption === "feed") {
      // Calculate permeate flow from feed flow when switching to permeate option
      const feedValue = parseFloat(flowValues['Feed Flow (m3/hr)']);
      if (!isNaN(feedValue) && recovery > 0) {
        const permeateFlow = (feedValue * recovery) / 100;
        dispatch(updateFlowValue({ key: 'Permeate Flow (m3/hr)', value: permeateFlow.toFixed(2) }));
      }
    }
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
                      value={flowValues['Feed Flow (m3/hr)']} 
                      onChange={(e) => handleFlowChange('Feed Flow (m3/hr)', e.target.value)}
                      disabled={selectedOption !== "feed"}
                    />
                    <span className="flow-unit">m<sup>3</sup>/hr</span>
                  </div>
              </div>

              <div className="flow-option">
                  <label>
                    <input 
                      type="radio" 
                      name="flowOption" 
                      checked={selectedOption === "permeate"} 
                      onChange={() => handleOptionChange("permeate")}
                    />
                    <span>Specify Permeate</span>
                  </label>
                  <div className="flow-input">
                    <input 
                      type="text" 
                      value={flowValues['Permeate Flow (m3/hr)']} 
                      onChange={(e) => handleFlowChange('Permeate Flow (m3/hr)', e.target.value)}
                      disabled={selectedOption !== "permeate"}
                    />
                    <span className="flow-unit">m<sup>3</sup>/hr</span>
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