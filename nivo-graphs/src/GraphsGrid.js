import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ClimateGovernanceBar from './climate-governance/ClimateGovernanceBar.js'
import ClimateRisksEnergy from './climate-risks copy/ClimateRisksEnergy.js';
import ClimateRisksOil from './climate-risks copy/ClimateRisksOil.js';
import './index.css'

const GraphsGrid = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <ClimateGovernanceBar />
          </Grid.Column>
          <Grid.Column width={4}>
            <ClimateRisksEnergy />
          </Grid.Column>
          <Grid.Column width={4}>
            <ClimateRisksOil />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default GraphsGrid;
