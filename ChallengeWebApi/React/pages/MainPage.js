// import React, { Component } from 'react';
// import Layout from './Layout';
// import * as urls from '../../resources/Urls';
// import * as st from '../../resources/MaterialStyles';
// import DropDownMenu from '@material-ui/core/DropDownMenu';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import { genericPostRequest, genericGetRequest } from '../../resources/Helpers';
// import * as routes from '../../resources/routes';
// import ModalDialog from '../../Components/ModalDialog';
// import * as msg from '../../resources/MessageStrings';
// import TextField from '@material-ui/core/TextField';
// import { ValidatorForm } from 'react-material-ui-form-validator';
// import IconButton from '@material-ui/core/IconButton';
// import IconMenu from '@material-ui/core/IconMenu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/core/svg-icons/navigation/more-vert';
// import SelectableList from '../../Components/SelectableList';
// import { ListItem } from '@material-ui/core/List';
// import AddDialog from './AddDialog';

// export default class MainPage extends Component {
 
// constructor(props) {
//         super(props);
//         this.state = {
//             value: 10,
//             classItems: [],
//             studentItems: [],
//             currentStudents:[],
//             selectedClass: null,
//             dialogOpen: false,
//             dialogCancel: true,
//             dialogOk: true,
//             dialogAction: null,
//             addOpen: false,
//             name: '',
//             sortText: "˅",
//             ascending:true,
//             search: ""
//          };
//         this.ascending = true;
//     }

//     componentWillMount(){
//         ValidatorForm.addValidationRule('nameLength', (value) => {
//             return !value || (value.length >= 6 && value.length <= 255);
//         });
//     }
//     handleClose(){
//         this.setState({ addOpen: false });
//     }
//     onClassSelected(event, index, value) {
//         this.setState({ selectedClass: value });
//         this.refreshStudents(value);
//     }
//     addClass() {
//         this.setState({ addOpen: true, class: true, name: '' });
//     }
//     sortStudents() {
//         this.ascending = !this.state.ascending;
//         this.setState({ sortText: this.ascending ? "˅" : "˄", ascending: this.ascending });
//         this.setState({ studentItems: this.state.studentItems.sort(this.compareStudentNames.bind(this)) });
//     }

//     addStudent() {
//         this.setState({ addOpen: true, class: false, name: '', lastName:'',firstName:'', selectedDlgClasses:[], newclass:'',school:'' });
//     }
//     compareStudentNames(a, b) {
//         let aname = a.lastName+' '+a.name;
//         let bname = b.lastName+' '+b.name;
//         if (aname < bname ) return this.ascending ? -1 : 1;
//         if (aname > bname) return this.ascending ? 1: -1;
//         return 0;
//     }
//     refreshStudents(classid){
//         let self = this;
//         let classUid = classid ? classid : self.state.selectedClass;
//         if(!classUid)
//             return;
//         genericGetRequest.call(self, (resp) => {
//             let students = resp.data.students;
//             let arr = Object.keys(students).map(function (key) { return students[key]; });
//             self.setState({ currentStudents: arr});
//             self.setState({ studentItems: arr.sort(self.compareStudentNames.bind(this)) });
//         }, urls.ApiBaseUrl + routes.listStudent.replace(':classUid', classUid).replace(":isRoster", '0'), null, null, true);
//     }

//     handleAddClass(event) {
//         this.form.submit();
//     }

//     handleSubmit(state) {
//         let self = this;
//         self.setState({ addOpen: false, name: '' });
//         //todo: add modal progress dialog
//         if (this.state.class) {
//             let payload = { class: { name: state.name } };
//             genericPostRequest.call(this, payload, (resp) => { self.refreshclassItems(); }, urls.ApiBaseUrl + routes.newClass, null, null, true);
//         }
//         else {
//             let payload = { student: { name: state.name, lastName: state.lastName, school: state.school }, classes: state.selectedDlgClasses, newClass: state.newclass };
//             genericPostRequest.call(this, payload, (resp) => { self.refreshclassItems(); }, urls.ApiBaseUrl + routes.newStudent, null, null, true);
//         }
//     }

//     componentDidMount() {
//         this.refreshclassItems(true);
//     }

//     refreshclassItems(init) {
//         let self = this;
//         genericGetRequest.call(self, (resp) => {
//             let classes = resp.data.classes;
//             let classItems = [];
//             let j = 0;
//             for (let i in resp.data.classes) {
//                 if (j++ === 0 && init)
//                     self.setState({ selectedClass: i });
//                 classItems.push(<MenuItem value={i} key={i} primaryText={resp.data.classes[i].name} />);
//             }
//             self.setState({ classList: classes });
//             self.setState({ classItems: classItems });
//             this.refreshStudents();
//         }, urls.ApiBaseUrl + routes.listClass, null, null, true);
//     }
//     searchKeyPress(e)
//     {
//         e = e || window.event;
//         if (e.key == 'Enter')
//         {
//             this.searchStud();
//             return false;
//         }
//         return true;
//     }
//     onSearchChanged(e,newValue){
//         this.setState({ search: newValue });
//         if (!newValue)
//             this.searchStud(newValue);
//     }
//     setSelected(stud){
//         stud.classes = [];
//         let keys = Object.keys(this.state.classList);
//         for(let i in Object.keys(stud.studentClasses)){
//             stud.classes.push({id:keys[i], value: this.state.classList[keys[i]]});
//         }
//         this.props.setSelectedStudent(stud);
//     }
//     searchStud(value){
//         self=this;
//         let substr = (value === "" ? value : self.state.search).toLowerCase();
//         if(!self.state.search){
//             self.setState({ studentItems: self.state.currentStudents.sort(self.compareStudentNames.bind(this)) });
//             return;
//         }
//         let studs = [];
//         let current=self.state.currentStudents;
//         for(let i in current)
//             {
//                 let flname =  ('' + current[i].lastName + ' ' + current[i].name).toLowerCase();
//                 if(flname.indexOf(substr) >=0)
//                     studs.push(current[i]);
//             }

//         self.setState({ studentItems: studs.sort(self.compareStudentNames.bind(this)) });
//     }

//     render() {
//         return (<Layout>
//         <div>
//             <div className="studBlock">
//                 <h2>Manage users</h2>
//             </div>
//             <div className="studBlock">
//                 {
//                     stud.name || stud.lastName ? (<h2>Goals</h2>) : ''
//                 }
//             </div>
//             </div>
//         </Layout>);
//     }
// }
