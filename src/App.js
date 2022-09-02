import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/MealCard';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
