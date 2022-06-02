import classes from './User.module.css';

// class User {
// 	render() {
// 		return <li className={classes.user}>{props.name}</li>
// 	}
// }

const User = (props) => {
	return <li className={classes.user}>{props.name}</li>;
};

export default User;
