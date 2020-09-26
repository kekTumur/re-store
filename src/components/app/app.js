import React from 'react'
import { 
	Route
} from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/card" component={CardPage} />
            </div>
        </main>
    )
}

export default App;