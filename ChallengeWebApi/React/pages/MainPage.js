import React, { Component } from 'react';
import Layout from './Layout';
import * as urls from '../common/Urls';
import * as st from '../common/MaterialStyles';
import * as req from '../common/Helpers';
import * as routes from '../common/routes';


export default class MainPage extends Component {
 
constructor(props) {
       super(props);
        this.state = {
            userItems: [],
            selectedUser: null
         };
    }

    refreshUsers(){
        let self = this;
        req.genericGetRequest.call(self, (resp) => {
            //let arr = Object.keys(students).map(function (key) { return students[key]; });
            self.setState({ userItems: resp.data });
        }, urls.ApiBaseUrl + routes.listUsers, null, null, true);
    }

   componentDidMount() {
       this.refreshUsers();
    }
    nvl (variable1, variable2) {
        if (!variable2)
            variable2 = "";
        return variable1 ? variable1 : variable2;
    }
    editButtonClick(evt) {
        var row = evt.target;
        var ind = row.getAttribute('index');
        let item = this.state.userItems[ind];
        
        var self = this;
        req.genericPutRequest.call(this, item, (resp) => { self.refreshUsers(); }, urls.ApiBaseUrl + routes.putUser, null, null);

        row.parentElement.parentElement.classList.remove('animateSaved')
        setTimeout(() => { row.parentElement.parentElement.classList.add("animateSaved");  }, 0);
    }

    deleteButtonClick(evt) {
        var that = evt.target;
        var ind = that.getAttribute('index');
        
        var self = this;
        var id = this.state.userItems[ind].Id;
        req.genericDeleteRequest.call(this,  (resp) => { self.refreshUsers(); }, urls.ApiBaseUrl + routes.deleteUser+"/"+id, null, null);
    }

    addButtonClick(evt) {
        var row = evt.target.parentElement.parentElement;
        //document.querySelector("<selector>[myAttribute = \'aValue\']")
        var item = {};
        var fn =row.querySelector('input[data-prop=first_name]');
        var ln =row.querySelector('input[data-prop=last_name]');
        var pn =row.querySelector('input[data-prop=phone_number]');
        var sr =row.querySelector('input[data-prop=salary]');
        item.FirstName = fn.value;
        item.LastName = ln.value;
        item.PhoneNumber = pn.value;
        item.Salary  = sr.value;
        
        //this.state.userItems.push(item);
        var self = this;
        req.genericPostRequest.call(this, item, (resp) => { 
            self.refreshUsers(); 
            fn.value = ln.value = pn.value = sr.value = "";
        }, urls.ApiBaseUrl + routes.postUser, null, null);
    }
    updateFname(e, nv) 
    { 
        var ind = e.target.getAttribute('index');
        this.state.userItems[ind].FirstName = e.target.value; 
        this.setState({ userItems: this.state.userItems});
    }
    updateLname(e, nv) 
    { 
        var ind = e.target.getAttribute('index');
        this.state.userItems[ind].LastName = e.target.value; 
        this.setState({ userItems: this.state.userItems});
    }
    updatePhone(e, nv) 
    { 
        var ind = e.target.getAttribute('index');
        this.state.userItems[ind].PhoneNumber = e.target.value; 
        this.setState({ userItems: this.state.userItems });
    }
    updateSalary(e, nv) 
    { 
        var ind = e.target.getAttribute('index');
        this.state.userItems[ind].Salary = e.target.value; 
        this.setState({ userItems:this.state.userItems});
    }
    
    render() {
        let listItems = [];
        if(this.state.userItems.length>0)
            for (let i in this.state.userItems)
            {
                var row = this.state.userItems[i];
                listItems.push(
                        (<tr style={{ color: 'white' }} value={row} key={row.Id} version={row.Version}>
                        <td><input index={i} data-prop="first_name" type="text" className="myinput" value={ this.nvl(row.FirstName)} onChange={this.updateFname.bind(this)}/></td>
                        <td><input index={i} data-prop="last_name" type="text" className="myinput" value={ this.nvl(row.LastName)} onChange={this.updateLname.bind(this)}/></td>
                        <td><input index={i} data-prop="phone_number" type="text" className="myinput" value={ this.nvl(row.PhoneNumber)} onChange={this.updatePhone.bind(this)}/></td>
                        <td><input index={i} data-prop="salary" type="text" className="myinput" value={ this.nvl(row.Salary)} onChange={this.updateSalary.bind(this)}/></td> 
                            <td><span data-prop="SalaryRatio" className="myinput"> { this.nvl(row.SalaryRatio, null) }</span></td>
                            <td><button index={i} className="btn btn-xs btn-success" onClick={this.editButtonClick.bind(this)}>Сохранить</button></td>
                            <td><button index={i} className="btn btn-xs btn-danger" onClick={this.deleteButtonClick.bind(this)} >Удалить</button></td>
                            <td colspan="2"><button id="addBtn" style={{margin:"auto auto auto auto", display: "none"}} className="btn btn-xs btn-info">Добавить</button></td>
                        </tr>)
                );
            }

        return (<Layout>
                    <div className="commonContainer">
                        <div className="headerText">Manage users</div> 
                            <div className="panel panel-default mytable table-broad" style={{width:"100%"}} >
                                <div className="panel-heading">
                                    <h4 className="panel-title">Persons</h4>
                                </div> 

                                <table id="persons" className="table table-striped table-hover">
                                    <tr>
                                        <td>first_name</td>
                                        <td>last_name</td>
                                        <td>phone_number</td>
                                        <td>salary</td>
                                        <td>salary ratio</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr> 
                                    {listItems}
                                        <tr style={{ color: 'white' }}>
                                        <td><input data-prop="first_name" type="text" className="myinput" /></td>
                                        <td><input data-prop="last_name" type="text" className="myinput" /></td>
                                        <td><input data-prop="phone_number" type="text" className="myinput" /></td>
                                        <td><input data-prop="salary" type="text" className="myinput" /></td> 
                                        <td></td>

                                        <td style={{display:"none"}}><button id="editBtn" className="btn btn-xs btn-success">Сохранить</button></td>
                                        <td style={{display:"none"}}><button id="deleteBtn" className="btn btn-xs btn-danger">Удалить</button></td>
                                        <td colspan="2"><button id="addBtn" style={{ margin: "auto auto auto auto", display: "block"}} onClick={this.addButtonClick.bind(this)} 
                                                    className="btn btn-xs btn-info">Добавить</button></td>
                                    </tr> 
                                </table>
                            </div>
                        </div>  
                </Layout>);
        
    }
}
