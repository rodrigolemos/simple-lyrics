import React, { Component } from 'react';
import { Container, InfoArtist, Song, Band, Lyric, MyButton, Close } from './styles';

export default class Details extends Component {
  state = {
    translated: false
  };

  changeTranslate = (translated) => {
    this.setState({
      translated
    });
  }

  clearTranslate = () => {
    this.setState({
      translated: false
    });
  }

  render() {

    let { info, show, close } = this.props;
    let { translated } = this.state;
    let details = '';

    if (info[0]) {

      let artist = info[0].art;
      let song = info[0].mus[0];
      let translation = false;

      if (typeof song.translate !== 'undefined') {
        translation = song.translate[0].text
      }

      details = <Container show={show} bg={artist.img}>
                  <header>
                    <InfoArtist>
                      <div>
                        <Song>{song.name}</Song>
                        <Band>{artist.name}</Band>
                      </div>
                    </InfoArtist>
                    <div>
                      <section>
                        <MyButton type="button" active={translated}  show={true} onClick={() => this.changeTranslate(false)}>Original</MyButton>
                        <MyButton type="button" active={!translated} show={translation} onClick={() => this.changeTranslate(true)}>Tradução</MyButton>
                      </section>
                    </div>
                  </header>
                  <article>
                  { translated ? (
                    <Lyric>{translation}</Lyric>
                  ) : (
                    <Lyric>{song.text}</Lyric>
                  )}
                  </article>
                  <Close onClick={() => {this.clearTranslate(); close()}}>Voltar</Close>
                </Container>
    }

    return details;
  }
}
