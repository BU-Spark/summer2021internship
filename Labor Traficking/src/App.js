import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AssessScreen from './screens/AssessScreen';
import PrepareScreen from './screens/PrepareScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import MassLawScreen from './screens/MassLawScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import AssessExtortion from './screens/AssessExtortion';
import AssessSeriousHarm from './screens/AssessSeriousHarm';
import AssessPhysicalRestraint from './screens/AssessPhysicalRestraint';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/assess' component={AssessScreen} exact />
          <Route path='/prepare' component={PrepareScreen} exact />
          <Route path='/resources' component={ResourcesScreen} exact />
          <Route path='/massLaw' component={MassLawScreen} exact />
          <Route path='/aboutUs' component={AboutUsScreen} exact />
          <Route path='/assess/SeriousHarm' component={AssessSeriousHarm} exact />
          <Route path='/assess/PhysicalRestraint' component={AssessPhysicalRestraint} exact />
          <Route path='/assess/Extortion' component={AssessExtortion} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
