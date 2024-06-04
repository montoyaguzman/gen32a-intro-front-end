import './App.css';
import { FormTrainer } from './pages/FormTrainer';
import { Home } from './pages/Home/';
import { DetailTrainer } from './pages/DetailTrainer';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <>
      <div>
        App Trainers works!
      </div>
      <Home />
      <FormTrainer />
      <DetailTrainer />
      <About />
      <NotFound />
    </>
  )
}

export { App };
