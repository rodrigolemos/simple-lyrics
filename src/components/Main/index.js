import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Form, OpenForm, Title, SubTititle, MyInput, MyButton } from './styles';
import { IoMdSkipBackward } from 'react-icons/io';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from '../Details';

export default class Main extends Component {
  state = {
    artist: '',
    song: '',
    info: [],
    showSearch: true
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cleanSearch = () => {
    this.setState({
      artist: '',
      song: '',
      info: [],
      showSearch: true
    });
  }

  searchForDetails = async () => {

    const artist = encodeURI(this.state.artist);
    const song = encodeURI(this.state.song);

    try {

      const response = await api.get(`/search.php?art=${artist}&mus=${song}`);

      const info = response.data;

      if (info.type === 'exact') {
        this.setState({
          artist: '',
          song: '',
          info: [...this.state.info, info],
          showSearch: false
        });
      } else {
        toast.warn('Ops! Song not found. Please try again.', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          transition: Bounce
        });
      }

    } catch(err) {

    }
  }

  render() {

    const { artist, song, info, showSearch } = this.state;

    return (
      <>
        <Container>
          <Form show={showSearch}>
            <Title>Lemos Lyrics</Title>
            <SubTititle>Without music life would be a mistake ;)</SubTititle>
            <MyInput
              type="text"
              name="artist"
              placeholder="Artist or band name..."
              value={artist}
              onChange={this.handleInput}
            />
            <MyInput
              type="text"
              name="song"
              placeholder="Song name..."
              value={song}
              onChange={this.handleInput}
            />
            <MyButton type="button" onClick={() => this.searchForDetails()}>Search</MyButton>
          </Form>
          <Details info={info} show={showSearch}/>
          <OpenForm show={showSearch} onClick={() => this.cleanSearch()}>
            <IoMdSkipBackward size={20}/>
          </OpenForm>
          <ToastContainer/>
          <footer>
            <a href="https://www.vagalume.com.br/">Powered by Vagalume</a>
          </footer>
        </Container>
      </>
    );
  }
}

