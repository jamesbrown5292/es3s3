import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
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
        <Grid columns='16'>
          <Grid.Row >
            <Grid.Column width='4'>
              <ClimateGovernanceBar />
            </Grid.Column>
            <Grid.Column width='4'>
              <ClimateRisksEnergy />
            </Grid.Column>
            <Grid.Column width='4'>
              <ClimateRisksOil />
            </Grid.Column>
            <Grid.Column width='4'>
              <ClimateRisksOil />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width='4'>
              <ClimateOpportunitiesBySector />
            </Grid.Column>
            <Grid.Column width='4'>
              <ScenarioAnalysis />
            </Grid.Column>
            <Grid.Column width='4'>
              <ScenarioAnalysisEnergy />
            </Grid.Column>
            <Grid.Column width='4'>
              <ClimateTargets />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width='4'>
              <EmissionsData />
            </Grid.Column>
            <Grid.Column width='4'>
              <ClimateReporting />
            </Grid.Column>
            <Grid.Column width='4'>
              <CdpScore />
            </Grid.Column>
            <Grid.Column width='4'>
              <TcfdSignatories />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}

export default GraphsGrid;
