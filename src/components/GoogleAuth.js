import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, resetStore } from '../actions';
import { GrGoogle } from 'react-icons/gr';



class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: process.env.REACT_APP_GOOGLE_AUTH_ID,
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
      this.props.resetStore();
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
  { signIn, signOut, resetStore  }
)(GoogleAuth);