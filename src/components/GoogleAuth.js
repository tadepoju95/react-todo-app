import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { GrGoogle } from 'react-icons/gr';



class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '294572762333-9ug3q5m0q2fdoe7825nmb01qompqgka1.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				
				this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
			})
		});
	}

	onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

	renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} type="button" className="btn btn-danger">
          <GrGoogle className="google-button" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} type="button" className="btn btn-danger">
          <GrGoogle className="google-button" />
          Sign In with Google
        </button>
      );
    }
  }

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);