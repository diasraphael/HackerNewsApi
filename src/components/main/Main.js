import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUserInfo} from '../../actions/news.js';

import './Main.css';
class Main extends Component {
    constructor(props) {
        super(props);
        }

        onLogout=function (data) {
              this.props.history.push({
                pathname: '/details',
                 state: {
                    key: data
                } 
            });  
        }

    state= {

    }

    static getDerivedStateFromProps(props,state) {  
      if(props.news.newsArray.length === 10 && props.news.userProfile.length === 0){
          for(var a=0;a<=9;a++){
            props.userInfo(props.news.newsArray[a]);
          }
        }
        if(props.news.newsArray.length === 10 && props.news.userProfile.length === 10){
          for(var i=0;i<props.news.newsArray.length;i++){
              for(var j=0;j<props.news.userProfile.length;j++){
                    if(props.news.newsArray[i].by === props.news.userProfile[j].id){
                        props.news.newsArray[i].karma = props.news.userProfile[j].karma;
                        props.news.newsArray[i].created = props.news.userProfile[j].created;
                    }
              }
          }
          props.news.newsNoSort = props.news.newsArray.slice(0);
          props.news.noSortArray = [];
          for(var k=0;k<props.news.newsNoSort.length;k++){
            props.news.noSortArray.push(props.news.newsNoSort[k].score);
          }
          props.news.newsArray.sort(function(obj1,obj2){
             return obj2.score - obj1.score;
          });
        }
      return props;
    }

    render() {
      let moviestorender = '';

      if(this.props.news.newsArray && this.props.news.newsArray.length === 10 && this.props.news.userProfile && this.props.news.userProfile.length === 10){

     moviestorender = this.props.news.newsArray.map((data, i) => {
          if (i < 9)
          {
            return (<tr key={data.id} data-item={data} className="pointer" onClick={()=>this.onLogout(data)}>
                        <td className="title">{data.title}</td>
                        <td className="row">{data.score}</td>
                        <td className="row">{data.by}</td>
                        <td className="row">{data.karma}</td>
                        <td className="row">{data.created}</td>
                </tr>)
          }
        })
      }

      return(

        <div className="mainStart">
            <table>
                <tbody>
                    <tr>
                        <th className="title">Title</th>
                        <th className="row">Score</th>
                        <th className="row">Author</th>
                        <th className="row">Author's Karma</th>
                        <th className="row">Date Created</th>
                    </tr>{moviestorender}
                </tbody>
            </table>
                
        </div>
      )
    }
}
function mapStateToProps(state,ownProps){
    return {
        news: state.news,
        id: state.newsArray,
        user: state.userProfile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userInfo :(selectedIndex)=> {
            dispatch(loadUserInfo(selectedIndex));
        }
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); //  this is used to get the history object from with router and to connect to store
