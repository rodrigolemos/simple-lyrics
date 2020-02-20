import React, { Component } from 'react';
import { Container, Song, Band, Lyric, MyButton } from './styles';

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

    return (
      <Container show={show}>
        { info[0] ? (
          <>
            <header>
              <Song>{info[0].mus[0].name}</Song>
              <Band>{info[0].art.name}</Band>
              <section>
                <MyButton type="button" active={translated}  onClick={() => this.changeTranslate(false)}>Original</MyButton>
                <MyButton type="button" active={!translated} onClick={() => this.changeTranslate(true)}>Translated</MyButton>
              </section>
            </header>
            <article>
            { translated ? (
              <Lyric>{info[0].mus[0].translate[0].text}</Lyric>
            ) : (
              <Lyric>{info[0].mus[0].text}</Lyric>
            )}
            </article>
            <footer>
              <a href="https://www.vagalume.com.br/">Powered by Vagalume</a>
            </footer>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
