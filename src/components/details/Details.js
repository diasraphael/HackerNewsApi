import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Details extends Component {

    render() {
        let news = '';
  
        if(this.props.location.state.key){
            
              return (
                   <div>
                          <a target="_blank" href={this.props.location.state.key.url}>Story</a>
                          <Link to="/">Home</Link>
                          <div className="title">{this.props.location.state.key.title}</div>
                          <div className="row">{this.props.location.state.key.score}</div>
                          <div className="row">{this.props.location.state.key.by}</div>
                          <div className="row">{this.props.location.state.key.karma}</div>
                          <div className="row">{this.props.location.state.key.created}</div>  
                          <div className="row">{this.props.location.state.key.descendants}</div>
                          <div className="row">{this.props.location.state.key.id}</div>
                          <div className="row">{this.props.location.state.key.time}</div>
                          <div className="row">{this.props.location.state.key.type}</div>  
                  </div>
                  )
            
        }
  
        return(
  
          <div className="mainStart">
               <div class="sandbox sandbox-correct-pronounciation">
					<h1 class="heading heading-correct-pronounciation">
					<em>Details View</em>
					</h1>
		   </div>
               <ul id="nav" className="chartWidth">
                    <li>
                	      <Link to="/">Home</Link>
			  </li>
                </ul>
                {news}
          </div>
        )
      }
}

export default Details;