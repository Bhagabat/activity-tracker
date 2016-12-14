import React from 'react';
import Widget from './Widget';
import styles from '../css/main.css';
export default class DashBoard extends React.Component{
	render(){
		return (
				<div>
					<Widget title="Activity Logged"  width={200} height={200} cls={styles.widget}/>
					<Widget title="Activity Scheduled"  width={200} height={200} cls={styles.widget}/>
				</div>
				);
	}
}