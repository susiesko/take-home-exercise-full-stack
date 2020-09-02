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
      <form name="teamMemberForm" method="post" className="teamMemberForm">
        <section>
          <label>First Name:</label>
          <input name="firstName" type="text"></input>
        </section>
        <section>
          <label>Last Name:</label>
          <input name="lastName" type="text"></input>
        </section>
        <section>
          <label>Title:</label>
          <input name="title" type="text"></input>
        </section>
        <section>
          <label>Favorite color:</label>
          <div className="colorPickerContainer">  
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
        </section>
        <section>
          <label>Story:</label>
          <textarea name="story"/>
        </section>
        <button className="btn addTeamMember">Add Team Member</button>
      </form>
    );
  }
}

export default TeamMemberForm;
