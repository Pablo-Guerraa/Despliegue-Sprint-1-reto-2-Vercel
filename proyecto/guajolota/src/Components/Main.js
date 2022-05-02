import React, { useContext, useEffect } from 'react';
import { MainStyled } from '../Styles/MainStyled';
import { GlobalStyled } from '../Styles/StyledGlobal';
import PagOne from './PagOne';
import PagTwo from './PagTwo';
import ProviderCurrentIndex from '../hooks/ContextCurrentIndex';
import ProviderArrProducts from '../hooks/ContextArrProducts';
import ProviderConditional from '../hooks/ContextConditional';
import ProviderObjProduct from '../hooks/ContextObjProduct';
import ProviderListCar from '../hooks/ContextListCar';
import PagThree from './PagThree';
import ProviderCounterSum from '../hooks/ContextCounterSum';

export default function Main() {

  return (
    <ProviderArrProducts>
      <ProviderObjProduct>
          <ProviderCurrentIndex> 
            <ProviderConditional>
              <ProviderListCar>
                <ProviderCounterSum>

                  <MainStyled>
                    <GlobalStyled/>
                    <PagOne/>
                    <PagTwo />
                    <PagThree />
                  </MainStyled>

                </ProviderCounterSum>
              </ProviderListCar>
            </ProviderConditional>
          </ProviderCurrentIndex>
      </ProviderObjProduct>
    </ProviderArrProducts>
  )
}