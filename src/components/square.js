import React from 'react'

class Square extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        color: "white",
        clicked: false
      }
      
    }
    
    newClick = () => {
      this.props.onClick();
      this.setState({
        color: "red",
        clicked :true
      });
    }
    
    render(){
    return (
      <button className={this.state.clicked ? "clicked":"square"} onClick={this.newClick.bind(this)}
        style={{color:this.state.color}}>
        {this.props.value}
      </button>
    );
    }
  }
  
export default Square