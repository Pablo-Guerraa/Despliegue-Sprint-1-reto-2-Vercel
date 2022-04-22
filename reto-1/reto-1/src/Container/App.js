import React, { Component } from 'react'
import Card from "../Components/Card";
import { Container, Header } from "../styles/StyledContainerMain";
import axios from 'axios';
import FilterKnowledge from '../Components/FilterKnowledge';


class App extends Component {
  constructor () {
    super();
    this.state = {
      business: [],
      selcted: [],
      KnowledgeList: true
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
  };

  selectKnowledge = (e) => {
    const nameKnowledge = e.target.innerText;
    this.setState((state) => {
      let addKnowledge = state.selcted; 
      addKnowledge.push(nameKnowledge)
      return {selcted: addKnowledge}
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          {this.state.selcted.length > 0 ? <FilterKnowledge selected={this.state.selcted}/> : <div/>}
          {
            this.state.business.map(element => {
              
              return(
                <Card key={element.id} details={element} selectKnowledge={this.selectKnowledge}/>
              )
            })
          }
          
        </Container>
      </div>
    )
  }
}


export default App;
