import React, { Component } from 'react';
import { Container, InfoArtista, Song, Band, Lyric, MyButton } from './styles';

export default class Details extends Component {
  state = {
    translated: false
  };

  changeTranslate = (translated) => {
    this.setState({
      translated
    });
  }

  render() {

    const { info, show } = this.props;
    const { translated } = this.state;
    const body = info[0];

    return (
      <Container show={show}>
        { body ? (
          <>
            <header>
              <InfoArtista>
                <div>
                  <Song>{body.mus[0].name}</Song>
                  <Band>{body.art.name}</Band>
                </div>
                <img src={body.art.img} alt="Foto do artista"/>
              </InfoArtista>
              <div>
                <section>
                  <MyButton type="button" active={translated}  onClick={() => this.changeTranslate(false)}>Original</MyButton>
                  <MyButton type="button" active={!translated} onClick={() => this.changeTranslate(true)}>Traduzida</MyButton>
                </section>
              </div>
            </header>
            <article>
            { translated ? (
              <Lyric>{body.mus[0].translate[0].text}</Lyric>
            ) : (
              <Lyric>{body.mus[0].text}</Lyric>
            )}
            </article>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
