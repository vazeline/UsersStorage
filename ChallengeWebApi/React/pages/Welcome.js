import React, { Component } from 'react';
import Button from '../Button';
import * as st from '../MaterialStyles';
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
                    <div style={{ width: '100%' }}>
                        <Button label="Upload Users" style={st.wbutton} onClick={(event) => this.toupload(event)} />
                        <Button label="Users List" style={st.wbutton} onClick={(event) => this.tolist(event)} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Welcome;