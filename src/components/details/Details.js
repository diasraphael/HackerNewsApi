import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Details.css'
class Details extends Component {

    render() {
        let news = '';
  
        if(this.props.location.state.key){
            
              return (
                   <div>
                     <div className="sandbox sandbox-correct-pronounciation">
                        <h1 className="heading heading-correct-pronounciation">
                        <em>Details View</em>
                        </h1>
                      </div>
                      <ul id="nav" className="navWidth">
                          <li>
                              <a target="_blank" href={this.props.location.state.key.url}>Story</a>
                          </li>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                      </ul>
                          <div className="mainStart">
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="title">Title</th>
                                        <th className="row">Score</th>
                                        <th className="row">Author</th>
                                        <th className="row">Author's Karma</th>
                                        <th className="row">Date Created</th>
                                        <th className="row">Descendants</th>
                                        <th className="row">Id</th>
                                        <th className="row">Time</th>
                                        <th className="row">Type</th>
                                    </tr>
                                    <tr>
                                        <td className="title">{this.props.location.state.key.title}</td>
                                        <td className="row">{this.props.location.state.key.score}</td>
                                        <td className="row">{this.props.location.state.key.by}</td>
                                        <td className="row">{this.props.location.state.key.karma}</td>
                                        <td className="row">{this.props.location.state.key.created}</td>
                                        <td className="row">{this.props.location.state.key.descendants}</td>
                                        <td className="row">{this.props.location.state.key.id}</td>
                                        <td className="row">{this.props.location.state.key.time}</td>
                                        <td className="row">{this.props.location.state.key.type}</td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            </div>
                  )
            
        }
  
        return(
  
          <div className="mainStart">
                {news}
          </div>
        )
      }
}

export default Details;