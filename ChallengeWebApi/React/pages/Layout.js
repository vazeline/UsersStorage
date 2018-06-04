import React, { Component } from 'react';
import * as st from '../common/MaterialStyles';
import * as Urls from '../common/Urls';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class Layout extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                <div className="layoutContainer">
                    <div className="layoutMain">
                        {this.props.children}
                    </div>
                    <div className="footerCommon"></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Layout;