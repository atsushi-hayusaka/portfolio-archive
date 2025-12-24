import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../sass/style.scss';
import Header from './Header';
import Home from './Home';
import About from './About';
import Works from './Works';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Works" component={Works} />
      <Route path="/Work/:id" component={Work} />
      <Route path="/Contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
