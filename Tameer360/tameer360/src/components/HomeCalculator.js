import React, { useState } from 'react';
import './HomeCalculator.css'

function HomeCalculator() {
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [plotSize, setPlotSize] = useState('');
  const [coveredArea, setCoveredArea] = useState('');
  const [constructionMode, setConstructionMode] = useState('');
  const [foundation, setFoundation] = useState('');
  const [waterProofing, setWaterProofing] = useState('');
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [basement, setBasement] = useState('');
  const [lift, setLift] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handlePlotSizeChange = (event) => {
    setPlotSize(event.target.value);
  };

  const handleCoveredAreaChange = (event) => {
    setCoveredArea(event.target.value);
  };

  const handleConstructionModeChange = (event) => {
    setConstructionMode(event.target.value);
  };

  const handleFoundationChange = (event) => {
    setFoundation(event.target.value);
  };

  const handleWaterProofingChange = (event) => {
    setWaterProofing(event.target.value);
  };

  const handleScopeOfWorkChange = (event) => {
    setScopeOfWork(event.target.value);
  };

  const handleBasementChange = (event) => {
    setBasement(event.target.value);
  };

  const handleLiftChange = (event) => {
    setLift(event.target.value);
  };

  const handleSubmit = () => {
    // Perform calculations and display results here
    console.log('City:', city);
    console.log('Region:', region);
    console.log('Plot Size:', plotSize);
    console.log('Covered Area:', coveredArea);
    console.log('Construction Mode:', constructionMode);
    console.log('Foundation:', foundation);
    console.log('WaterProofing:', waterProofing);
    console.log('Scope of Work:', scopeOfWork);
    console.log('Basement:', basement);
    console.log('Lift:', lift);
  };

  return (
    <div className="HomeCalculator">
      <header className="hero-section">
        {/* <img src="/hero-bg.jpg" alt="Hero" className="hero-image" /> */}
        <div className="hero-text">
          <h1>Construction Cost Calculator</h1>
          <p>Use our Construction Cost Calculator to get a quick estimate of required building materials along with their costs.</p>
        </div>
      </header>


      <main className="main-content">
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="city">City:</label>
        <select id="city" value={city} onChange={handleCityChange}>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
          {/* Add more city options here */}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor="region">Region:</label>
        <select id="region" value={region} onChange={handleRegionChange}>
        <option value="I8">I-8 Markaz</option>
        <option value="I9">I-9</option>
        <option value="G8">G-8</option>
        <option value="G9">G-9</option>
          {/* Add more region options here */}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor ="plotSize">Plot Size:</label>
        <select id="plotSize" value={plotSize} onChange={handlePlotSizeChange}>
          <option value="5 Marla">5 Marla</option>
          <option value="7 Marla">7 Marla</option>
          <option value="10 Marla">10 Marla</option>
          <option value="14 Marla">14 Marla</option>
          <option value="1 Kanal">1 Kanal</option>
          <option value="2 Kanal">2 Kanal</option>
          <option value="4 Kanal">4 Kanal</option>
          <option value="5 Kanal">5 Kanal</option>
          <option value="10 Kanal">10 Kanal</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor="coveredArea">Covered Area:</label>
        <input
          type="text"
          id="coveredArea"
          value={coveredArea}
          onChange={handleCoveredAreaChange}
        />
      </div>
      <div>
        <h2>Construction Mode:</h2>
        <div>
          <input
            type="radio"
            id="constructionModeWithMaterial"
            name="constructionMode"
            value="With Material"
            checked={constructionMode === 'With Material'}
            onChange={handleConstructionModeChange}
          />
          <label htmlFor="constructionModeWithMaterial">With Material</label>
        </div>
        <div>
          <input
            type="radio"
            id="constructionModeWithoutMaterial"
            name="constructionMode"
            value="Without Material"
            checked={constructionMode === 'Without Material'}
            onChange={handleConstructionModeChange}
          />
          <label htmlFor="constructionModeWithoutMaterial">Without Material</label>
        </div>
      </div>
      <div>
        <h2>Foundation:</h2>
        <div>
          <input
            type="radio"
            id="foundationRaft"
            name="foundation"
            value="Raft"
            checked={foundation === 'Raft'}
            onChange={handleFoundationChange}
          />
          <label htmlFor="foundationRaft">Raft</label>
        </div>
        <div>
          <input
            type="radio"
            id="foundationWithoutRaft"
            name="foundation"
            value="Without Raft"
            checked={foundation === 'Without Raft'}
            onChange={handleFoundationChange}
          />
          <label htmlFor="foundationWithoutRaft">Without Raft</label>
        </div>
      </div>
      <div>
        <h2>WaterProofing:</h2>
        <div>
          <input
            type="radio"
            id="waterProofingYes"
            name="waterProofing"
            value="Yes"
            checked={waterProofing === 'Yes'}
            onChange={handleWaterProofingChange}
          />
          <label htmlFor="waterProofingYes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="waterProofingNo"
            name="waterProofing"
            value="No"
            checked={waterProofing === 'No'}
            onChange={handleWaterProofingChange}
          />
          <label htmlFor="waterProofingNo">No</label>
        </div>
      </div>
      <div>
        <h2>Scope of Work:</h2>
        <div>
          <input
            type="radio"
            id="scopeOfWorkGreyStructure"
            name="scopeOfWork"
            value="Grey Structure"
            checked={scopeOfWork === 'Grey Structure'}
            onChange={handleScopeOfWorkChange}
          />
          <label htmlFor="scopeOfWorkGreyStructure">Grey Structure</label>
        </div>
        <div>
          <input
            type="radio"
            id="scopeOfWorkFinishing"
            name="scopeOfWork"
            value="Finishing"
            checked={scopeOfWork === 'Finishing'}
            onChange={handleScopeOfWorkChange}
          />
          <label htmlFor="scopeOfWorkFinishing">Finishing</label>
        </div>
        <div>
          <input
            type="radio"
            id="scopeOfWorkCompleteProject"
            name="scopeOfWork"
            value="Complete Project"
            checked={scopeOfWork === 'Complete Project'}
            onChange={handleScopeOfWorkChange}
          />
          <label htmlFor="scopeOfWorkCompleteProject">Complete Project</label>
        </div>
      </div>
      <div>
        <h2>Basement:</h2>
        <div>
          <input
            type="radio"
            id="basementYes"
            name="basement"
            value="Yes"
            checked={basement === 'Yes'}
            onChange={handleBasementChange}
          />
          <label htmlFor="basementYes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="basementNo"
            name="basement"
            value="No"
            checked={basement === 'No'}
            onChange={handleBasementChange}
          />
          <label htmlFor="basementNo">No</label>
        </div>
      </div>
      <div>
        <h2>Lift:</h2>
        <div>
          <input
            type="radio"
            id="liftYes"
            name="lift"
            value="Yes"
            checked={lift === 'Yes'}
            onChange={handleLiftChange}
          />
          <label htmlFor="liftYes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="liftNo"
            name="lift"
            value="No"
            checked={lift === 'No'}
            onChange={handleLiftChange}
          />
          <label htmlFor="liftNo">No</label>
        </div>
      </div>
      <button onClick={handleSubmit}>Calculate</button>
    </div>
    </main>
    </div>
  );
}

export default HomeCalculator;
