import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import MatterEmptyAvatar from '../../assets/matter_empty_avatar.svg';
import TeamMemberForm from '../TeamMemberForm';

class TeamMember extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string
  };

  static defaultProps = {
    photoUrl: MatterEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  constructor(props){
    super(props);

    this.state = {
      showNewTeamMemberForm: false,
      teamMemberColor: props.favoriteColor
    }    
  };

  renderTeamMemberName = (name) => {
    return (
      name === 'Join us!' 
      ? 
      <button className="newTeamMemberBtn" style={{backgroundColor: this.props.favoriteColor }} onClick={this.handleJoinUsClick}>{name}</button> 
      :
      <h1 className="name">{name}</h1>
    );
  };

  createTeamMember = (event) => {
    const newTeamMember = {
      name: 'susie',
      desc: 'hello world'
    };

    this.props.addTeamMember(newTeamMember);
  };

  updateTeamMemberColor = (colorVal) => {
    this.setState({ teamMemberColor: colorVal });
  }

  handleJoinUsClick = (event) => {
    this.setState({ showNewTeamMemberForm: true });
  };

  handleCancelClick = (event) => {
    this.setState({ showNewTeamMemberForm: true });
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          { 
            !this.state.showNewTeamMemberForm
            ?
            this.renderTeamMemberName(this.props.name) 
            :
            ''
          }
        </header>
        <div className="body">        
        {
          this.state.showNewTeamMemberForm
          ?
          <TeamMemberForm updateTeamMemberColor={ this.updateTeamMemberColor }/>
          :
          ''
        } 
        {this.props.story}
        </div>
        <footer style={{ backgroundColor: this.state.teamMemberColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TeamMember;
