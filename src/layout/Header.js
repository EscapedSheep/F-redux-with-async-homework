import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearUserInfo, signIn } from '../actions';
import './Header.scss';

class Header extends Component {
  render() {
    const handleClick = this.props.userInfo.logged
      ? this.props.handleSignOut
      : this.props.handleSignIn;
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={handleClick}>
            {this.props.userInfo.logged ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

const mapDispatchToProps = dispatch => ({
  handleSignIn() {
    dispatch(signIn());
  },
  handleSignOut() {
    dispatch(clearUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
