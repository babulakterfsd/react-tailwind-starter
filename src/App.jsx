import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './shared/sharedcomponents/AllRoutes';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
}

export default App;
