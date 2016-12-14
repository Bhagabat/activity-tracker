import React from 'react';
export default class Widget extends React.Component{
	render(){
		return (
				<div style={{width:this.props.width,height:this.props.height}} className={this.props.cls}>
					<div>{this.props.title}</div>
					<div>10</div>
				</div>
				);
	}
}