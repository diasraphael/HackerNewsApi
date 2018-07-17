import React, { Component } from 'react';
import Nav from './common/nav/Nav';
import Main from './components/main/Main';
import LoadingDots from './common/LoadingDots';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <div className="sandbox sandbox-correct-pronounciation">
            <h1 className="heading heading-correct-pronounciation">
              <em>Hacker news API</em>
            </h1>
          </div>
          <Nav></Nav>{this.props.loading && <LoadingDots className="dots" interval={200} dots={20}/>}
          <Main></Main>
      </div>
    );
  }
}

function mapStateToProps (state,ownprops) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect (mapStateToProps) (App);
