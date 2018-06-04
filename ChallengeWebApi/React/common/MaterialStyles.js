const rbStyle = { margin: 10, width: '100%', borderRadius: '5px', backgroundColor: '#ADD6FE', color: '#242B45'/*, padding: '0 0 0 10px'*/, boxSizing: 'inherit' }
const wbutton = { borderRadius: '5px', fontSize: "14px", backgroundColor: '#ADD6FE', color: '#242B45', float: 'left', width: '150px', margin: '10px', botton: '0px', position: 'relative', top: '100px' }
const inputBasic = { backgroundColor: 'white', borderRadius: '5px', height: '36px' }
const textFieldStyle = { ...inputBasic, margin: '0px 10px 25px', width: '100%', color: '#242B45 !important' }
const inputStyle = { borderRadius: '5px', width: '100%', padding: '0 0 0 10px' }

const btnText = { color: '#242B45', fontWeight: 'bold', padding: '0px', margin: '0px auto' }
const btnStyle = { borderRadius: '5px', backgroundColor: '#ADD6FE',  } //padding: '0 0 0 10px'
const texts = { color: '#ADD6FE', display: 'inline-block' }
const inputWidth = {maxWidth:'340px'}

//main page
const dropdownClasses = { ...inputBasic, width: '300px', float: 'left' }
const ddlIcon ={ padding: '0', top: '0', height: '36px', right: '26px' }

//layout
const iconMenu = { height:'100%', marginRight:'20px', float: 'right', maxWidth: '50px', height: '80px', minWidth: '48px' }
const tabText = { color: 'black', fontWeight: '600' }
const layoutTabs = { float: 'left', width: '60%', height: '80px', display: 'inline-block' }
const tabItemContainer = { height: '100%', backgroundColor: 'white' }
const inkbar = { backgroundColor: 'cyan' }
const settingsMenuIcon = {height:'100%',width:'initial', padding:'0'}
const textField = {lineHeight: '36px', height: '36px', border: 'lightgray 1px solid', borderRadius: '5px'}
const studentsTextBox = { ...textField, display: 'block',width:'100%', marginBottom:'25px' }
const studentsClassName = { display: 'table-cell', verticalAlign: 'middle', width:'45%' }
const studentClassNameContainer = { display: 'table-cell', verticalAlign: 'middle', minWidth:'5px',maxWidth:'5px' }
const ddlClasses ={...dropdownClasses, marginBottom:'25px', width:'100%'}
const classTable ={ display: 'table' , width:'100%' }
const tfClassName = { ...textField, marginBottom:'25px', width:'100%' }
const ddlLabel ={ lineHeight: '36px', height: '36px' }

export {
    rbStyle,
    textFieldStyle,
    btnText,
    btnStyle,
    wbutton,
    inputBasic,
    dropdownClasses,
    iconMenu,
    tabText,
    layoutTabs,
    ddlIcon,
    tabItemContainer,
    inkbar,
    texts,
    settingsMenuIcon,
    textField,
    studentsTextBox,
    studentsClassName,
    studentClassNameContainer,
    ddlClasses,
    classTable,
    tfClassName,
    ddlLabel,
    inputStyle,
    inputWidth
}