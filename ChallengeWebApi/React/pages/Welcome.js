import React, { Component } from 'react';
import Button from '../common/Button';
import * as st from '../common/MaterialStyles';
import Layout from './Layout';

class Welcome extends Component {
    toupload(event) {
        window.location.href = '/react/importusers';
    }
    tolist(event) {
        window.location.href = '/react/mainpage';
    }
    render() {
        return (
            <Layout>
                <div className="commonContainer">
                    <span className="headerText">Welcome to users storage</span>
                    <div className="containerNarrow">
                        <Button label="Upload Users" style={st.wbutton} onClick={(event) => this.toupload(event)} />
                        <Button label="Users List" style={st.wbutton} onClick={(event) => this.tolist(event)} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Welcome;