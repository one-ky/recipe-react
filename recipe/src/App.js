import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom';


function App() {

    return (
        <BrowserRouter>
            <div className='App'>
                <Category />
                <Pages />
            </div>
        </BrowserRouter>
    );
}

export default App;