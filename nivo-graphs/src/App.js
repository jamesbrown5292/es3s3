import ClimateGovernance from './climate-governance/ClimateGovernance'
import ClimateGovernanceBar from './climate-governance/ClimateGovernanceBar'
import './index.css'

function App() {
  return (
    <div>
      <h1>Climate Governance Charts</h1>
      <ClimateGovernance />
      <div>
        <ClimateGovernanceBar />
      </div>
    </div>
  );
}

export default App;
