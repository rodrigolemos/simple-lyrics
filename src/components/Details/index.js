import React, { Component } from 'react';
import { Container, Song, Band, Lyric, MyButton } from './styles';

export default class Details extends Component {
  state = {
    showTranslate: false
  };

  changeTranslate = () => {
    this.setState({
      showTranslate: true
    });
  }

  render() {

    const { info, show } = this.props;

    return (
      <Container show={show}>
        { info[0] ? (
          <>
            <header>
              <Song>{info[0].mus[0].name}</Song>
              <Band>{info[0].art.name}</Band>
              <section>
                <MyButton type="button" onClick={() => this.changeTranslate()}>Translate</MyButton>
              </section>
            </header>
            { this.state.showTranslate ? (
              <article>
                <Lyric>{info[0].mus[0].translate[0].text}</Lyric>
              </article>
            ) : (
              <article>
                <Lyric>{info[0].mus[0].text}</Lyric>
              </article>
            )}
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
