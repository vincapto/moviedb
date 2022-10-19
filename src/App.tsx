import { movieListData } from './data';

import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from 'pages/NotFound';
import Form from './pages/Form';
import MovieItem from './components/movieItem/index';
import { render } from '@testing-library/react';
import { IMovie } from './model';

export default class App extends Component {
  state = { movieList: movieListData };
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
}
