import ClimateGovernance from './climate-governance/ClimateGovernance'
import ClimateGovernanceBar from './climate-governance/ClimateGovernanceBar'
import ClimateRisksOil from './climate-risks/ClimateRisksOil'
import ClimateRisksEnergy from './climate-risks/ClimateRisksEnergy'
import ClimateOpportunitiesBySector from './climate-opportunities/ClimateOpportunitiesBySector'
import ScenarioAnalysis from './scenario-analysis/ScenarioAnalysis'
import './index.css'

function App() {
  return (
    <div>
      <h1>Climate Governance Charts</h1>
      <ClimateGovernance />
      <div>
        <h2>Climate governance arrangements, by sector</h2>
        <ClimateGovernanceBar />
      </div>
      <div>
        <h2>Risks identified as climate-related risks, by sector</h2>
        <h3>Oil & Gas</h3>        
        <ClimateRisksOil />
        <h3>Electric, Utility & Energy Producers</h3>        
        <ClimateRisksEnergy />
      </div>
      <div>
        <h1>Climate-related opportunities</h1>
        <ClimateOpportunitiesBySector />
      </div>
      <div>
        <h1>Scenario Analysis</h1>
        <ScenarioAnalysis />
      </div>
    </div>
  );
}

export default App;
