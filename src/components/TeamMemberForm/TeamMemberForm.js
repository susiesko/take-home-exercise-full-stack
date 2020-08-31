import React from 'react';
import './TeamMemberForm.css';
import {ThemeProvider} from "styled-components"
import srcTheme from "smart-react-components/theme";
import ColorPicker from "smart-react-components/color-picker"

class TeamMemberForm extends React.Component {
  state = {
    colorValue: '#3466F2'
  };

  setColorValue = (val) => {
    console.log('fav color: ', val);
    this.props.updateTeamMemberColor(val);
  }

  render() {    
    return (
      <div className="teamMemberForm">
        <label>
          First Name:
          <input name="firstName" type="text"></input>
        </label>
        <label>
          Last Name:
          <input name="lastName" type="text"></input>
        </label>
        <label>
          Title:
          <input name="title" type="text"></input>
        </label>
        <div className="colorPickerContainer">
          Favorite color:          
          <div className="colorPickerInput">
            <ThemeProvider theme={{src:srcTheme}}>
              <ColorPicker 
                className="test"
                size={ "small" } 
                showConsole={ false } 
                showButtons={ false } 
                showPalette={ false }
                allowOpacity={ false }
                setValue={ this.setColorValue }
                value={ '#3466F2' }
                />
            </ThemeProvider>
          </div>
        </div>
        <label>
          Story:
          <textarea name="story"/>
        </label>
      </div>
    );
  }
}

export default TeamMemberForm;
