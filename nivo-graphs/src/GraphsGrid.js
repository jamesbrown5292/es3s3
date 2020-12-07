import { React, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import axios from 'axios'
import ClimateGovernanceBar from './climate-governance/ClimateGovernanceBar.js'
import ClimateOpportunitiesBySector from './climate-opportunities/ClimateOpportunitiesBySector.js';
import CdpScore from './climate-reporting/CdpScore.js';
import ClimateReporting from './climate-reporting/ClimateReporting.js';
import TcfdSignatories from './climate-reporting/TcfdSignatories.js';
import ClimateRisksEnergy from './climate-risks/ClimateRisksEnergy.js';
import ClimateRisksOil from './climate-risks/ClimateRisksOil.js';
import ClimateTargets from './climate-targets/ClimateTargets.js';
import EmissionsData from './scope3-emissions/EmissionsData.js';
import ScenarioAnalysis from './scenario-analysis/ScenarioAnalysis.js';
import ScenarioAnalysisEnergy from './scenario-analysis/ScenarioAnalysisEnergy.js';
import './index.css'

const GraphsGrid = (props) => {

    return (
      <div>

        <Grid columns={3}>
          <Grid.Row >
            <Grid.Column >
              <ClimateGovernanceBar />
            </Grid.Column>
            <Grid.Column >
              <ClimateRisksEnergy />
            </Grid.Column>
            <Grid.Column >
              <ClimateRisksOil />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column >
              <ClimateOpportunitiesBySector />
            </Grid.Column>
            <Grid.Column >
              <ScenarioAnalysis />
            </Grid.Column>
            <Grid.Column >
              <ScenarioAnalysisEnergy />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={2}>

          <Grid.Row >
            <Grid.Column >
              <ClimateTargets />
            </Grid.Column>
            <Grid.Column >
              <EmissionsData />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
          <Grid.Column >
              <ClimateReporting />
            </Grid.Column>
          <Grid.Column >
              <CdpScore />
            </Grid.Column>
          </Grid.Row>

        </Grid>

        <Grid>
          <Grid.Column >
            <TcfdSignatories />
          </Grid.Column>
        </Grid>
      </div>
    )
}

export default GraphsGrid;
