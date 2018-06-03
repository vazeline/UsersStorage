// import React from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import FlatButton from '@material-ui/core/FlatButton';
// import RaisedButton from '@material-ui/core/RaisedButton';

// export default class ModalDialog extends React.Component {

//   render() {
//     const actions = [];
//     if(this.props.ok || typeof this.props.ok === 'undefined')
//       actions.push(<FlatButton
//         label="Ok"
//         type="submit"
//         primary={true}
//         onClick={(event)=>{
//           if(!this.props.validation)
//             this.props.handleClose();
//           if(this.props.handleOk)
//             this.props.handleOk(event);
//         }}
//         />);
//     if (this.props.cancel)
//       actions.push(<FlatButton
//         label="Cancel"
//         primary={true}
//         onClick={this.props.handleClose}
//       />);

//     return (
//       <div>
//         <Dialog actions={actions} modal={true} title="Datability Web" {...this.props}>
//           {this.props.children}
//         </Dialog>
//       </div>
//     );
//   }
// }