import React, { Component } from 'react'
import Card from "../Components/Card";
import { Container, Header } from "../styles/StyledContainerMain";
import axios from 'axios';


class App extends Component {
  constructor () {
    super();
    this.state = {
      business: []
    }
  }

  componentDidMount () {
    this.getApi();
  }

  async getApi () {
    const res = await axios.get("https://sprint-2-reto-1.herokuapp.com/business/");
    const businessData = res.data;
    this.setState({
      business: businessData
    })

  }

  render() {

    return (
      <div className="App">
      <Header />
      <Container>
        {
          this.state.business.map(element => {
            
            return(
              <Card key={element.id}details={element}/>
            )
          })
        }
        
      </Container>
    </div>
    )
  }
}


export default App;
