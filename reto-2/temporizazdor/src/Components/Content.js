import React, { useEffect, useState } from 'react'
import { AnimationCard, StyledCard, StyledTextTime, StyledTime, StyledTitle } from '../Styles/StyledContent'

export default function Content() {

  const [ objTime, setObjTime ] = useState({
    seg: 0,
    min: 0,
    horas: 0, 
    dias: 0
  })

  useEffect(()=>{
    setInterval( ()=> {
      difTiempo("Apr 28 2022 00:55:29 GMT-0500")
    }, 1000)
  }, []);

  const difTiempo = (fechaLanzamiento)=>{
    const fechaActual = new Date();
    const fechaLejana = new Date(fechaLanzamiento);
    const diferenciaTiempo =  (fechaLejana - fechaActual / 1000) + 1;

    const segundos = ( "0" + parseInt((diferenciaTiempo % 60)+1)) .slice(-2);
    const minutos = ( "0" + parseInt(diferenciaTiempo/60 % 60)) .slice(-2);
    const horas = ( "0" + parseInt(diferenciaTiempo/3600 % 24)) .slice(-2);
    // const dias = ( "0" + parseInt(diferenciaTiempo / (3600 * 24) ) ) .slice(-2) ;
    const dias =  ("0" + parseInt((new Date("Apr 28 2022 02:00:29 GMT-0500")  -  new Date() ) /1000/(3600 * 24))).slice(-2)
    setObjTime({
      seg: segundos,
      min: minutos,
      horas: horas, 
      dias: dias
    })
    

  }

  return (
    <div>
      <StyledTitle>WE´RE LAUNCHING SOON</StyledTitle>
      <StyledTime>

          <StyledCard>
            {objTime.dias}
          </StyledCard>
          <StyledCard>{objTime.horas}</StyledCard>
          <StyledCard>{objTime.min}</StyledCard>
          <StyledCard>{objTime.seg}<AnimationCard/></StyledCard>
          <StyledTextTime>DAYS</StyledTextTime>
          <StyledTextTime>HOURS</StyledTextTime>
          <StyledTextTime>MINUTES</StyledTextTime>
          <StyledTextTime>SECONDS</StyledTextTime>

       </StyledTime>
    </div>
  )
}
