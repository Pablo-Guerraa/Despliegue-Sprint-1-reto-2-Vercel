import React, { Component } from 'react';
import { ContainerName, H3Name, ImgCard, Requirements, SeparatorCircle, StyledCard, KnowledgesContainer, Knowledge, Novetly, ColumnDesktop, H5Styled } from '../styles/StyledCard';

export default class Card extends Component {
  render() {
    const primary = "hsl(180, 29%, 50%)";
    const veryDarkGrayish = `hsl(180, 14%, 20%)`;
    const {id, name, logo, novetly, job, required, knowledge  } = this.props.details;
    return (
      <StyledCard >
          <ImgCard src={logo} alt={name} />
        <ColumnDesktop>
          <ContainerName >
            <H3Name >{name}</H3Name>
            {
              novetly.map(e => (
                <Novetly background={e === "NEW" ? primary : veryDarkGrayish}>{e}</Novetly>
                ))
              }
          </ContainerName>
          <div>
            <H5Styled>{job}</H5Styled>
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
        </ColumnDesktop>
        <KnowledgesContainer >
          {
            knowledge.map(e => (
              <Knowledge onClick={this.props.selectKnowledge}>{e}</Knowledge>
            ))
          }
        </KnowledgesContainer>
      </StyledCard>
    )
  }
}
