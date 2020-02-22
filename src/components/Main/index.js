import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Footer, Form, OpenForm, Title, Quote, MyInput, MyButton } from './styles';
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

      const apiInfo = await api.get(`/search.php?art=${artist}&mus=${song}`);

      const info = apiInfo.data;

      if (info.type === 'exact') {

        const artInfo = await api.get(`image.php?bandID=${info.art.id}&limit=1`);

        info.art.img = artInfo.data.images[0].url;

        this.setState({
          artist: '',
          song: '',
          info: [...this.state.info, info],
          showSearch: false
        });

      } else {
        toast.warn('Ops! Música não encontrada. Por favor, tente novamente ;)', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          transition: Bounce
        });
      }

    } catch(err) {
      toast.error('Ops! Não foi possível consultar as informações. Por favor, tente novamente.', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        transition: Bounce
      });
    }
  }

  render() {

    const { artist, song, info, showSearch } = this.state;

    return (
      <>
        <Container>
          <Form show={showSearch}>
            <Title>infosong</Title>
            <MyInput
              type="text"
              name="artist"
              placeholder="Nome da banda ou artista"
              spellcheck="false"
              value={artist}
              onChange={this.handleInput}
            />
            <MyInput
              type="text"
              name="song"
              placeholder="Música"
              spellcheck="false"
              value={song}
              onChange={this.handleInput}
            />
            <MyButton onClick={() => this.searchForDetails()}>Procurar</MyButton>
            <Quote>
              <span>"Sem música, a vida seria um erro."</span>
              <small>Friedrich Nietzsche</small>
            </Quote>
          </Form>
          <Details info={info} show={showSearch}/>
          <OpenForm show={showSearch} onClick={() => this.cleanSearch()}>Voltar</OpenForm>
          <ToastContainer/>
        </Container>
        <Footer>
          <a href="https://www.vagalume.com.br/">Powered by Vagalume</a>
        </Footer>
      </>
    );
  }
}

