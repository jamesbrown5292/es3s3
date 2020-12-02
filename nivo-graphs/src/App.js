import CdpScore from './climate-reporting/CdpScore';
import ClimateReporting from './climate-reporting/ClimateReporting';
import ClimateTargets from './climate-targets/ClimateTargets';
import GraphsGrid from './GraphsGrid'
import './index.css'

function App() {
  return (
    <div>
    <GraphsGrid />
    <ClimateReporting />
    <CdpScore />
    </div>
  );
}

export default App;
