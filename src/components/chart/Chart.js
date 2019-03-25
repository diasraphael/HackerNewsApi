import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Line as LineChart} from 'react-chartjs';
import {connect} from 'react-redux';
import './Chart.css'

	const options = {
	  scaleShowGridLines: true,
	  scaleGridLineColor: '#fff',
	  scaleGridLineWidth: 1,
	  scaleShowHorizontalLines: true,
	  scaleShowVerticalLines: true,
	  bezierCurve: true,
	  bezierCurveTension: 0.4,
	  pointDot: true,
	  pointDotRadius: 4,
	  pointDotStrokeWidth: 1,
	  pointHitDetectionRadius: 20,
	  datasetStroke: true,
	  datasetStrokeWidth: 2,
	  datasetFill: true,
	  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',

	}
	
	const styles = {
	  graphContainer: {
	    width: '600px',
	    padding: '50px 0',
        margin: '0 auto'
	  }
	}
	function mapStateToProps(state,ownProps){
        return {
            score: state.news.noSortArray
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
        
        };
    }

class LineChartExample extends Component {

    constructor(props) {
	    super(props)
	    this.state = {
	      data: this.chartData(props)
	    }
	}

    chartData = (props) => {
	  return {
	    labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10'],
	    datasets: [
	      {
	        label: 'Score',
	        fillColor: '#FFA500',
	        strokeColor: '#FFA500',
	        pointColor: '#FFA500',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: '#FFA500',
	        data: props.score,
	      }
	    ]
	  }
	}
    
    render() {
        return (
            <div>
				<div className="sandbox sandbox-correct-pronounciation">
					<h1 className="heading heading-correct-pronounciation">
					<em>Chart View</em>
					</h1>
				</div>
				<ul id="nav" className="chartWidth">
                    <li>
                	<Link to="/">Home</Link>
					</li>
                </ul>
                <div style={styles.graphContainer}>
                    <LineChart data={this.state.data}
                    options={options}
                    width="600" height="250"/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChartExample);