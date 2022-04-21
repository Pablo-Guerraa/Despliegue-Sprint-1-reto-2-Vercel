import React, { Component } from 'react';
import { ItemKnowledge, NameKnowledge, RemoveKnowledge, StyledFilter } from '../styles/StyledFilter';

export default class FilterKnowledge extends Component {

  

  render() {
    console.log(this.props.selected)
    return (
      <StyledFilter >
        {
          this.props.selected.map(el => (
            <div>
              <ItemKnowledge>
                <NameKnowledge>{el}</NameKnowledge>
                <RemoveKnowledge src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650539832/Sprint-2-reto-1/icon-remove_m2re7i.svg" alt="remove-icon" />
              </ItemKnowledge>
            </div>
          ))
        }

      </StyledFilter>
    )
  }
}
