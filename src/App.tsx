import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GrantorHomePage from './pages/grantorHome';
import store from './redux/store';
import BeneficiariesPage from './components/beneficiaries/index';
import ConditionsPage from './components/conditions/index';
import HomePage from './pages/Home/home';
import BeneficiaryHome from './pages/beneficiaryHome/beneficiaryHome';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/grantorhome' component={GrantorHomePage} />
        <Route exact path='/beneficiaries' component={BeneficiariesPage} />
        <Route exact path='/conditions' component={ConditionsPage} />
        <Route exact path='/beneficiaryhome' component={BeneficiaryHome} />
      </Router>
    </Provider>
  );
};

export default App;
