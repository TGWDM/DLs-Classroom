import App from '../App';
import { renderWithRouter } from './renderWithRouter';

test('app renders without crashing', () => {
  renderWithRouter(<App />);
});