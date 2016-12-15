import React from 'react';
import styles from '../css/main.css';
export default class Modal extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state={
				visible:true
		}
	}
	hidePopup=()=>{
		this.setState({visible:false});
		this.props.onClose();
	}
	componentWillReceiveProps(props){
		this.setState({visible:true});
	}
	// It will pass down the props to children 
	/*getChildContext() {
	    return { doSomething : this.doSomething };
	  }*/
	render(){
		console.log("this.state.visible....",this.state.visible);
		if(this.state.visible){
			return (<div>
				<div className={styles.overlay} onClick={this.hidePopup}></div>
				<div className={styles['modal-content']} >
					<div className={styles['modal-title']}>{this.props.title}</div>
					{this.props.children}
				</div>
			</div>);
		}else{
			return null;
		}
		
	}
}