import React from 'react';
import Menu from '../components/Menu';
import DashBoard from '../components/DashBoard';
import styles from '../css/main.css';
export default class MainContainer extends React.Component{
	render(){
		return (
					<div className={styles.container}>
						<div className={styles.header}>Activity Tracker</div>
						<div className={styles['left-nav']}><Menu/></div>
						<div className={styles['center-container']}><DashBoard/></div>
						<div className={styles.footer}>footer</div>
					</div>
				);
	}
}