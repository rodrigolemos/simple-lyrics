import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Footer } from './styles';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from '../About';
import Details from '../../components/Details';
import Form from '../../components/Form';

export default class Main extends Component {
  state = {
    artist: '',
    song: '',
    info: [],
    component: 'Form'
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showForm = () => {
    this.setState({
      artist: '',
      song: '',
      info: [],
      component: 'Form'
    });
  }

  showAbout = () => {
    this.setState({
      component: 'About'
    });
  }

  searchForDetails = async () => {

    const artist = encodeURI(this.state.artist);
    const song = encodeURI(this.state.song);

    try {

      const apiInfo = await api.get(`/search.php?art=${artist}&mus=${song}`);

      const info = apiInfo.data;

      if (info.type === 'exact') {

        const artInfo = await api.get(`/image.php?bandID=${info.art.id}&limit=1`);

        info.art.img = artInfo.data.images[0].url;

        this.setState({
          artist: '',
          song: '',
          info: [...this.state.info, info],
          component: 'Details'
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

    const { artist, song, info, component } = this.state;

    return (
      <>
        <Container>
          <About show={component} close={this.showForm}/>
          <Details info={info} show={component} close={this.showForm}/>
          <Form
            show={component}
            artist={artist}
            song={song}
            handle={this.handleInput}
            searchForDetails={this.searchForDetails}
            showAbout={this.showAbout}/>
          <ToastContainer/>
        </Container>
        <Footer>
          Criado com &#9829; por&nbsp;<a href="https://github.com/rodrigolemos">Rodrigo</a>
          &nbsp;utilizando a API&nbsp;<a href="https://www.vagalume.com.br/">Vagalume</a>
        </Footer>
      </>
    );
  }
}

