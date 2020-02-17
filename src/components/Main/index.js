import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Title, MyInput, MyButton } from './styles';
import GlobalStyle from '../../styles/global';
import List from '../List'

export default class Main extends Component {
  state = {
    excerpt: '',
    songs: []
  };

  handleInput = (e) => {
    this.setState({
      excerpt: e.target.value
    });
  }

  searchExcerpt = async () => {

    const excerpt = encodeURI(this.state.excerpt);

    try {

      const response = await axios.get(`https://api.vagalume.com.br/search.excerpt?q=${excerpt}&limit=10`);

      const songs = response.data.response.docs;

      this.setState({
        excerpt: '',
        songs: [...this.state.songs, songs]
      });

    } catch(err) {

    }
  }

  render() {
    
    const { songs } = this.state;

    return (
      <>
        <Container>
          <Form>
            <Title>Search</Title>
            <MyInput
              type="text"
              placeholder="Type an excerpt from a song..."
              onChange={this.handleInput}
            />
            <MyButton type="button" onClick={() => this.searchExcerpt()}>Get information</MyButton>
          </Form>
          <List songs={songs}/>
        </Container>
        <GlobalStyle/>
      </>
    );
  }
}

