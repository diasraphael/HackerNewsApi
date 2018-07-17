import React, {Component} from "react";

class LoadingDots extends Component{
    constructor(props) {
        super(props);
        this.state = {frame: 1};
    }

    componentDidMount() {
        this.interval = setInterval(()=> {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }
    componentWillUnMount() {
        clearInterval(this.interval);
    }
    render(){
            let dots = this.state.frame % (this.props.dots + 1);
            let text = '';
            while(dots > 0){
                text += '.';
                dots --;
            }
            return <span {...this.props}>{text}&nbsp;</span>;
    }
}
LoadingDots.defaultProps = {
    interval:300,dots:3
};

export default LoadingDots;