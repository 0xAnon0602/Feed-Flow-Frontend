import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { predictROPerformance } from '../services/api';
import FeedWaterDataPopup from "./popups/FeedWaterDataPopup";
import FlowRatesPopup from "./popups/FlowRatesPopup";
import ArrayReactorPopup from "./popups/ArrayReactorPopup";
import ProductDataPopup from "./popups/ProductDataPopup";
import ConcentrateDataPopup from "./popups/ConcentrateDataPopup";
import SimulationInsights from "./SimulationInsights";

import { updateIonValueProduct, updateParameterProduct } from '../redux/slices/productSlice';
import { updateIonValueConcentrate, updateParameterConcentrate } from '../redux/slices/concentrateSlice';
import { selectFeedWaterErrorCount } from '../redux/slices/feedWaterSlice';
import { selectReactorErrorCount } from '../redux/slices/reactorSlice';

import "../css/FlowDiagram.css";

const FlowDiagram = () => {
  const [isFeedPopupOpen, setIsFeedPopupOpen] = useState(false);
  const [isFlowPopupOpen, setIsFlowPopupOpen] = useState(false);
  const [isReactorPopupOpen, setIsReactorPopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [isConcentratePopupOpen, setIsConcentratePopupOpen] = useState(false);

  const dispatch = useDispatch();
  const { ionValues, parameters } = useSelector(state => state.feedWater);
  const flowValues = useSelector(state => state.flowRates.flowValues);
  const stageData = useSelector(state => state.reactor[0]);

  // Get error counts from different slices
  const feedWaterErrors = useSelector(selectFeedWaterErrorCount);
  const reactorErrors = useSelector(selectReactorErrorCount);
  const totalWarnings = feedWaterErrors + reactorErrors;

  // Helper function to render error indicator
  const renderErrorIndicator = (errorCount) => {
    if (errorCount > 0) {
      return (
        <div className="error-indicator">
          <span className="error-count">{errorCount}</span>
        </div>
      );
    }
    return null;
  };


  const handleIonChangeProduct = (key, value) => {
    dispatch(updateIonValueProduct({ key, value }));
  };

  const handleParameterChangeProduct = (key, value) => {
    dispatch(updateParameterProduct({ key, value }));
  };

  const handleIonChangeConcentrate = (key, value) => {
    dispatch(updateIonValueConcentrate({ key, value }));
  };

  // Handle parameter changes
  const handleParameterChangeConcentrate = (key, value) => {
    dispatch(updateParameterConcentrate({ key, value }));
  };


  const sortData = () => {

    const rawValues = { 
      ...ionValues, 
      ...parameters, 
      ...flowValues, 
      ...stageData 
    };
    
    const formData = Object.fromEntries(
      Object.entries(rawValues).map(([key, val]) => {
        const floatVal = parseFloat(val);
        return [key, Number.isNaN(floatVal) ? val : floatVal];
      })
    );

    const orderedKeys = [
      'Feed Flow (m3/hr)', 'Feed Temperature', 'Feed water pH', 'Pass Stage', 'Pressure Vessel', 
      'Elements', 'Element age(years)', 'Recovery(%)', 'Ca_FW', 'Mg_FW', 'Na_FW', 'K_FW', 
      'NH4_FW', 'Ba_FW', 'Sr_FW', 'H_FW', 'CO3_FW', 'HCO3_FW', 'SO4_FW', 'Cl_FW', 'F_FW',
      'NO3_FW', 'PO4_FW', 'OH_FW', 'SiO2_FW', 'B_FW', 'CO2_FW', 'NH3_FW', 'Feed Water TDS',
      'CaSO4 / ksp * 100, %_FW', 'SrSO4 / ksp * 100, %_FW', 'BaSO4 / ksp * 100, %_FW', 
      'SiO2 saturation, %_FW', 'CaF2 / ksp * 100, %_FW'
    ];

    const orderedFormData = {};
    orderedKeys.forEach(key => {
      if (formData.hasOwnProperty(key)) {
        orderedFormData[key] = formData[key];
      }
    });
    
    return orderedFormData
    
  }

  const outputSchema = () => {

    const productSchema = {
        "ions": [
            "Ca_P",
            "Mg_P",
            "Na_P",
            "K_P",
            "NH4_P",
            "Ba_P",
            "Sr_P",
            "H_P",
            "SO4_P",
            "Cl_P",
            "F_P",
            "NO3_P",
            "OH_P",
            "PO4_P",
            "B_P",
            "SiO2_P",
            "HCO3_P",
            "CO2_P",
            "CO3_P",
            "NH3_P",
            ],
          "parameters": [
            'Permeate TDS',
            'Total Power Consumption(KW)',
            'Feed Pressure(bar)',
            'Flux(lmh)',
          ]
    }

    const concentrateSchema = {
        "ions": [
            "Ca_C",
            "Mg_C",
            "Na_C",
            "K_C",
            "NH4_C",
            "Ba_C",
            "Sr_C",
            "H_C",
            "SO4_C",
            "Cl_C",
            "F_C",
            "NO3_C",
            "OH_C",
            "PO4_C",
            "B_C",
            "SiO2_C",
            "HCO3_C",
            "CO2_C",
            "CO3_C",
            "NH3_C",
            'BaSO4 / ksp * 100, %_C',
            'CaF2 / ksp * 100, %_C',
            'CaSO4 / ksp * 100, %_C',
            'SiO2 saturation, %_C',
            'SrSO4 / ksp * 100, %_C'
            ],
          "parameters": [
            'Concentrate TDS'
          ]
    }

    return { productSchema, concentrateSchema}

  }

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

  const handleRunSimulation = async() => {

    setIsLoading(true);

    const formData = sortData()
    const result = await predictROPerformance(formData);
    const prediction = result.predictions

    const { productSchema, concentrateSchema} = outputSchema()

    const productIons = productSchema.ions
    for(const ion of productIons) {
      if(ion in prediction){
        handleIonChangeProduct(ion, prediction[ion].toFixed(2))
      }
    }

    const productParameters = productSchema.parameters
    for(const parameter of productParameters) {
      if(parameter in prediction){
        handleParameterChangeProduct(parameter, prediction[parameter].toFixed(2))
      }
    }


    const concentrateIons = concentrateSchema.ions
    for(const ion of concentrateIons) {
      if(ion in prediction){
        handleIonChangeConcentrate(ion, prediction[ion].toFixed(2))
      }
    }

    const concentrateParameters = concentrateSchema.parameters
    for(const parameter of concentrateParameters) {
      if(parameter in prediction){
        handleParameterChangeConcentrate(parameter, prediction[parameter].toFixed(2))
      }
    }

    setIsLoading(false)
    setIsProductPopupOpen(true)
    setIsConcentratePopupOpen(true)

  };

  return (
    <div>
      <div className="flow-diagram-layout">
        <div className="flow-diagram-main">
          
          {/* Feed Flow Range Warning */}
          <div className="feed-flow-warning">
            <div className="warning-banner">
              <span className="warning-icon">⚠</span>
              <span className="warning-text">
                <strong>Important:</strong> This software is optimized for feed flow rates between 
                <strong> 27 - 200 m³/hr</strong>. Results outside this range may not be accurate.
              </span>
            </div>
          </div>

          <div className="flow-diagram-container">
            
            {/* Feed box */}
            <div className="flow-box feed-box" onClick={() => handleBoxClick('feed')}>
              <div className="icon-container">
                <div className="water-drop-icon"></div>
              </div>
              <span className="box-title">Feed</span>
              {renderErrorIndicator(feedWaterErrors)}
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
              {renderErrorIndicator(reactorErrors)}
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
          
            {/* Run Button - Moved back inside the flow-diagram-container */}
            <div className="run-button-container">
              <div className="run-button-wrapper">
                <button 
                  className="run-simulation-button" 
                  onClick={handleRunSimulation}
                  disabled={isLoading || totalWarnings > 0}
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
              {totalWarnings > 0 && (
                <div className="warning-message">
                  <span className="warning-icon">⚠</span>
                  Please fix {totalWarnings} error{totalWarnings > 1 ? 's' : ''} before running simulation
                </div>
              )}
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
        
        {/* SimulationInsights moved to the right */}
        <SimulationInsights />
      </div>
    </div>
  );

};

export default FlowDiagram;