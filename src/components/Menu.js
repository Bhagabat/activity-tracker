import React from 'react';
import Modal from '../common/Modal';
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
			return(<Modal onClose={()=>this.hidePopup('logAct')} title="Activity Log">
				<table className={styles.formTable}>
					<tbody>
						<tr>
							<td>Type:</td>
							<td><input type="text"/></td>
						</tr>
						<tr>
							<td>Description:</td>
							<td><input type="textarea"/></td>
						</tr>
					</tbody>
				</table>
				
			</Modal>);
		}else if(this.state.scheduleEvent){
			return(<Modal onClose={()=>this.hidePopup('scheduleEvent')} title="Event Scheduler"></Modal>);
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