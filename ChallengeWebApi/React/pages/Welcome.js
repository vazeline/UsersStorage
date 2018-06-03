import React, { Component } from 'react';
import Button from '../Button';
import * as st from '../MaterialStyles';
import Layout from './Layout';

class Welcome extends Component {
    toupload(event) {
        //this.props.history.push('importusers');
        window.location.href = '/react/importusers';
    }
    tolist(event) {
        //this.props.history.push('mainpage');
        window.location.href = '/react/mainpage';
    }
    render() {
        return (
            <Layout>
                <div className="welcomeContainer">
                    <span className="welcomeText">Welcome to users storage</span>
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