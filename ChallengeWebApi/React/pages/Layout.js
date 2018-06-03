import React, { Component } from 'react';
import * as st from '../MaterialStyles';
import * as Urls from '../Urls';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class Layout extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                <div className="layoutContainer">
                    <div className="layoutAuth">
                        {this.props.children}
                    </div>
                    <div className="footerAuth"></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Layout;