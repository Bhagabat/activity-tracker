import React from 'react';
import styles from '../css/main.css';
export default class Menu extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state={
				logAct:false,
				scheduleEvent:false
		}
	}
	hidePopup(key){
		var state={};
		state[key] = false;
		this.setState(state);
	}
	handlePopups(){
		
		if(this.state.logAct){
			return(<div>
					<div className={styles.overlay} onClick={()=>this.hidePopup('logAct')}></div>
					<div className={styles['modal-content']} >Activity</div>
			</div>);
		}else if(this.state.scheduleEvent){
			return(<div>
				<div className={styles.overlay} onClick={()=>this.hidePopup('scheduleEvent')}></div>
				<div className={styles['modal-content']} >Activity</div>
			</div>);
		}
		
	}
	handleClick(key){
		var state= {};
		state[key] = true;
		this.setState(state);
	}
	render(){
		
		return (
				<div className={styles.menu}>
					<ul>
						<li onClick={()=>this.handleClick("logAct")}>Log Activities</li>
						<li onClick={()=>this.handleClick("scheduleEvent")}>Schedule events</li>
					</ul>
					{this.handlePopups()}
				</div>
				);
	}
}