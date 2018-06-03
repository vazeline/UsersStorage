import React, { Component } from 'react';
import Layout from './Layout';
import * as st from '../MaterialStyles';
import * as urls from '../Urls';
import Button from '../Button';

export default class ImportUsers extends Component{
    render(){
        return (<Layout>
            <form id="postFile" action="/api/Users/Upload" enctype="multipart/form-data" method="POST">
            <div style={{display:"table"}}>
            <div style={{display:"table-cell", verticalAlign: "left"}} >
            <Button style={{...st.wbutton, height:'40px', width:'400px'}}>
                <input type="file" label="Add file" accept=".csv" id="fileInput" multiple name='fileInput'/>
                </Button>
                </div>
                <div style={{display:"table-cell", verticalAlign: "right"}} >
                <Button label="Upload" style={st.wbutton} onClick={(event) => postFile.submit() } />
                </div>
                </div>
            </form>
        </Layout>);
    }
}