// import React, { Component } from 'react';
// import * as st from './MaterialStyles';
// import * as msg from './MessageStrings';
// import DropDownMenu from '@material-ui/core/DropDownMenu';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import ModalDialog from './ModalDialog';
// import TextField from './TextField';
// import { ValidatorForm } from 'react-material-ui-form-validator';

// export default class AddDialog extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: ''};
//     }
//     handleChange(event) {
//         let newstate = {};
//         newstate[event.target.name] = event.target.value;
//         this.setState(newstate);
//     }
//     render() { 
//         return (
//         <ValidatorForm ref={this.props.getForm} onSubmit={()=>{
//             this.props.handleSubmit(this.state);
//         }
//             } onError={errors => console.log(errors)}>
//             <ModalDialog title={this.props.class ? "Add Class" : "Add Student"} handleClose={()=>{
//                     this.setState({name:'', lastName:'', school:'', selectedDlgClasses:[], newclass:''});
//                     this.props.handleClose();
//                 }
//             }
//                 bodyStyle={{ overflowX: 'hidden', overflowY: 'scroll' }}
//                 cancel={true} ok={true} validation={true} open={this.props.addOpen} handleOk={this.props.handleAddClass}>
//                 <div>
//                     {this.props.class ? <div>Enter name:</div> : ''}
//                     <TextField
//                         hintText={this.props.class ? "Class Name" : "First Name"}
//                         name="name" 
//                         style={st.studentsTextBox}
//                         onChange={this.handleChange.bind(this)}
//                         validators={['required', 'nameLength']}
//                         value={this.state.name}
//                         errorMessages={[msg.nameRequired, msg.nameLength]}
//                     />
//                     {
//                         !this.props.class ? (
//                             <div>
//                                 <TextField
//                                     hintText="Last Name"
//                                     name="lastName" style={st.studentsTextBox}
//                                     onChange={this.handleChange.bind(this)}
//                                     validators={['required', 'nameLength']}
//                                     value={this.state.lastName}
//                                     errorMessages={[msg.nameRequired, msg.nameLength]} />
//                                 <TextField
//                                     hintText="School Name"
//                                     name="school" style={st.studentsTextBox}
//                                     onChange={this.handleChange.bind(this)}
//                                     validators={['required', 'nameLength']}
//                                     value={this.state.school}
//                                     errorMessages={[msg.nameRequired, msg.nameLength]} />
//                                 <div style={st.classTable}>
//                                     <div style={st.studentsClassName}>
//                                         <div>Choose classes:</div>
//                                         <DropDownMenu maxHeight={300}
//                                             style={st.ddlClasses}
//                                             labelStyle={st.textField}
//                                             iconStyle={st.ddlIcon}
//                                             value={this.state.selectedDlgClasses}
//                                             underlineStyle={{ display: 'none' }}
//                                             menuStyle={{ width: '260px' }}
//                                             multiple={true}
//                                             autoWidth={false}
//                                             onChange={
//                                                 (event, index, value)=>{
//                                                     this.setState({ selectedDlgClasses: value });
//                                                 this.props.setSelectedClasses(event, index, value);
//                                             }}>
//                                             {this.props.classItems}
//                                         </DropDownMenu>
//                                     </div>
//                                     <div style={st.studentClassNameContainer}></div>
//                                     <div style={st.studentsClassName}>
//                                         <div>New class:</div>
//                                         <TextField
//                                             hintText="Class Name"
//                                             name="newclass" 
//                                             style={st.tfClassName}
//                                             onChange={this.handleChange.bind(this)}
//                                             validators={['nameLength']}
//                                             value={this.state.newclass}
//                                             errorMessages={[msg.nameLength]} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ) : ''
//                     }
//                 </div>
//             </ModalDialog>
//         </ValidatorForm>
//         );
//     }
// }