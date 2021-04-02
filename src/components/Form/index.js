import React, { Component } from 'react';
import { FaMusic } from 'react-icons/fa';
import { MyForm, Title, Quote, MyInput, MyButton, ShowAbout } from './styles';

export default class Form extends Component {
    render() {

        const { artist, song, show, handle, searchForDetails, showAbout } = this.props;

        return (
          <MyForm show={show} onSubmit={searchForDetails}>
            <Title><FaMusic/> Simple Lyrics</Title>
            <MyInput
              autoFocus
              required
              type="text"
              name="song"
              placeholder="Música"
              spellcheck="false"
              value={song}
              onChange={handle}
            />
            <MyInput
              required
              type="text"
              name="artist"
              placeholder="Nome da banda ou artista"
              spellcheck="false"
              value={artist}
              onChange={handle}
            />
            <MyButton>Procurar</MyButton>
            <Quote>
              <span>"Sem música, a vida seria um erro."</span>
              <small>Friedrich Nietzsche</small>
            </Quote>
            <ShowAbout onClick={() => showAbout()}>Sobre este app</ShowAbout>
          </MyForm>
        );
    }
}
