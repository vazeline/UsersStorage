import React, { Component } from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//import '../Content/App.css';

//import Welcome from './Authentication/Welcome';
//import { BrowserRouter, Route } from 'react-router-dom';
//import MainPage from './pages/MainPage';
//import ImportUsers from './pages/ImportGoals';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<br/>);
        //return (
        //    <BrowserRouter> /*basename={Config.baseUrl}*/
        //        <div>
        //            <Route exact path="/" render={(rprops) => <Welcome history={rprops.history} />} />
        //            <Route path="/mainpage" render={(rprops) => <MainPage history={rprops.history} />} />
        //            <Route path="/importgoals" render={(rprops) => <ImportUsers history={rprops.history} />} />
        //        </div>
        //    </BrowserRouter>
        //);
    }
}

export default App;