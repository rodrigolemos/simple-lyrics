import React, { Component } from 'react';
import { MyList } from './styles'

export default class List extends Component {
  render() {

    const { songs } = this.props;

    return (
      <MyList>
        { songs[0] ? songs[0].map((song, i) => (
          <li key={i}>
            {song.title}
          </li>
        )) : (
          <li>ok</li>
        )}
      </MyList>
    );
  }
}
