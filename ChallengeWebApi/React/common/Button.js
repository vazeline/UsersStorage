import React, { Component } from 'react';
import RaisedButton from '@material-ui/core/Button'
import * as st from './MaterialStyles';

class Button extends Component {
    render() {
        return (
            <RaisedButton 
                variant="raised"
                primary={true}
                style={st.rbStyle}
                buttonStyle={st.btnStyle}
                label={st.btnText}
                {...this.props}                
                >{this.props.label}{this.props.children}</RaisedButton>
        );
    }
}

export default Button;