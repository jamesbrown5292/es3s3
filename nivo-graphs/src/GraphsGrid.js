import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ClimateGovernanceBar from './climate-governance/ClimateGovernanceBar.js'
import ClimateOpportunitiesBySector from './climate-opportunities/ClimateOpportunitiesBySector.js';
import ClimateRisksEnergy from './climate-risks/ClimateRisksEnergy.js';
import ClimateRisksOil from './climate-risks/ClimateRisksOil.js';
import './index.css'

const GraphsGrid = () => {
  return (
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <ClimateGovernanceBar />
          </Grid.Column>
          <Grid.Column>
            <ClimateRisksEnergy />
          </Grid.Column>
          <Grid.Column>
            <ClimateRisksOil />
          </Grid.Column>
          <Grid.Column>
            <ClimateOpportunitiesBySector />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
}

export default GraphsGrid;
