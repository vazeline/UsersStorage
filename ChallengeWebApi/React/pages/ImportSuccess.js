import React, { Component } from 'react';
import Layout from './Layout';


export default class ImportSuccess extends Component{
    render(){
        return (
        <Layout>
           <div className="commonContainer">
            <span className="headerText">Users imported successfuly</span>
            </div>
        </Layout>);
    }
}