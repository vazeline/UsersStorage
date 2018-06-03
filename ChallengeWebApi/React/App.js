import React, { Component } from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//import '../Content/App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import MainPage from './pages/MainPage';
import ImportUsers from './pages/ImportUsers';
import ImportSuccess from './pages/ImportSuccess';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter basename={"http://localhost:63563/react"}> 
                <div>
                    <Route exact path="/react/welcome" render={(rprops) => <Welcome history={rprops.history} />} />
                    <Route path="/react/mainpage" render={(rprops) => <MainPage history={rprops.history} />} />
                    <Route path="/react/importusers" render={(rprops) => <ImportUsers history={rprops.history} />} />
                    <Route path="/react/uploadsuccess" render={(rprops) => <ImportSuccess history={rprops.history} />} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;