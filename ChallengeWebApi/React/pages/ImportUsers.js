import React, { Component } from 'react';
import Layout from './Layout';
import * as st from '../common/MaterialStyles';
import * as urls from '../common/Urls';
import Button from '../common/Button';

export default class ImportUsers extends Component{
    render(){
        return (
        <Layout>
           <div className="commonContainer">
            <span className="headerText">Choose csv file to upload</span>
                    <form id="postFile" className="containerNarrow" action="/api/Users/Upload" enctype="multipart/form-data" method="POST">
            <div style={{display:"table"}}>
            <div style={{display:"table-cell", verticalAlign: "left"}} >
            <Button style={{...st.wbutton, height:'40px', width:'300px'}}>
                <input type="file" label="Add file" accept=".csv" id="fileInput" multiple name='fileInput'/>
                </Button>
                </div>
                <div style={{display:"table-cell", verticalAlign: "right"}} >
                <Button label="Upload" style={st.wbutton} onClick={(event) => postFile.submit() } />
                </div>
                </div>
            </form>
            </div>
        </Layout>);
    }
}