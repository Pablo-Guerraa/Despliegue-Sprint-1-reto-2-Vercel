import React, { Component } from 'react';
import { ContainerName, H3Name, ImgCard, Requirements, SeparatorCircle, StyledCard, KnowledgesContainer, Knowledge, Novetly } from '../styles/StyledCard';

export default class  extends Component {
  render() {
    const primary = "hsl(180, 29%, 50%)";
    const veryDarkGrayish = `hsl(180, 14%, 20%)`;
    const {name, logo, novetly, job, required, knowledge  } = this.props.details;
    return (
      <StyledCard >
        <ImgCard src={logo} alt={name} />

        <ContainerName >
          <H3Name >{name}</H3Name>
          {
            novetly.map(e => (
              <Novetly background={e === "NEW" ? primary : veryDarkGrayish}>{e}</Novetly>
            ))
          }
        </ContainerName>
        <div>
          <h5>{job}</h5>
          <Requirements>
            {
              required.map(e => (
                <>
                  <p>{e}</p>
                  <SeparatorCircle />
                </>
              ))
            }
          </Requirements>
        </div>
        <KnowledgesContainer >
          {
            knowledge.map(e => (
              <Knowledge>{e}</Knowledge>
            ))
          }
        </KnowledgesContainer>
      </StyledCard>
    )
  }
}
