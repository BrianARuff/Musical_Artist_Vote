import '../artistData';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtistList from '../components/ArtistList';

ReactDOM.render(<ArtistList artists={Artists}/>, document.querySelector('#index'));