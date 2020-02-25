import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(res => {
        const persons = res.data.slice(0, 10);
        // this.setState({ persons });
        persons.forEach(id => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/` + id + '.json')
          .then((res) => {
            this.setState((state) => ({
            persons: [...this.state.persons, res.data] 
          }))
        })
          .catch((err) =>{
            this.err=err
        })
        });
        
      })
  }

  render() {
    const {persons} = this.state
    return (
      <ul>
        {persons.map(person => 
        <li>
        <h3>{person.title}</h3>
        <h4>By: {person.by}</h4>
        <h5>Score: {person.score}</h5>
        <a href={person.url}>LINK</a>
        
       
        </li>)}
        {console.log('hey',persons)}
      </ul>
    )
  }
}

