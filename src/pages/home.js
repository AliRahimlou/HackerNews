import React from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";


export default class HackerNews extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(res => {
        const news = res.data.slice(0, 25);
        // this.setState({ news });
        news.forEach(id => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/` + id + '.json')
          .then((res) => {
            this.setState((state) => ({
            news: [...this.state.news, res.data] 
          }))
        })
          .catch((err) =>{
            this.err=err
        })
        });
        
      })
  }

  render() {
    const {news} = this.state
    return (
    <MDBContainer> HackerNews by Ali
      {news.map(data => 
    <MDBCard style={{ width: "", marginTop: "1rem" }}>
      <MDBCardHeader color="black" tag="h3">
      {data.title}
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>BY: {data.by}</MDBCardTitle>
        <MDBCardText>
        Score: {data.score}
        </MDBCardText>
        <MDBBtn color=" grey lighten-3"><a href={data.url}target="_blank"rel="noopener noreferrer">LINK TO STORY</a></MDBBtn>
      </MDBCardBody>
    </MDBCard>
    )}
  </MDBContainer>
    )
  }
}

    // <ul> 
    //     {news.map(data => 
    //     <li>
    //     <h3>{data.title}</h3>
    //     <h4>By: {data.by}</h4>
    //     <h5>Score: {data.score}</h5>
    //     <a href={data.url}target="_blank"rel="noopener noreferrer">LINK TO STORY</a>
    //     </li>)}
    //     {console.log('hey',news)}
    //   </ul>