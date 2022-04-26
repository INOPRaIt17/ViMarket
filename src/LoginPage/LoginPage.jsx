import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.props.logout();

		this.state = {
			username: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		if (username && password) {
			this.props.login(username, password);
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className='bg-black'>
				<div className='container '>
					<div className='row'>
						<div className='col-sm-5'>
							<img src='src\img\2.png' style={{width: 700, marginLeft: 270, marginTop: 60}}/>
						</div>
						<div className="col-md-5 bg-gray-400" style={{marginTop: 70, marginLeft: 345, fontSize: 15 }}>
							<h1 style={{color: 'white', textAlign: 'center'}}>Логин</h1>
							<form name="form"  onSubmit={this.handleSubmit}>
								<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
									<h2 htmlFor="username" style={{color: 'white'}}>Nickname</h2>
									<input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Имя" style={{ fontSize: 15 }} />
									{submitted && !username &&
										<div className="help-block">Некоректный Nickname</div>
									}
								</div>
								<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
									<h2 htmlFor="password" style={{color: 'white'}}>Пароль</h2>
									<input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Пароль" style={{ fontSize: 15 }} />
									{submitted && !password &&
										<div className="help-block">Некоректный пароль</div>
									}
								</div>
								<div className="form-group">
									<button className="btn btn-primary" style={{ width: 100, heigth: 50, fontSize: 15 }}>Вход</button>
									{loggingIn &&
										<img src="
														data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYW
														QuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYD
														EZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAA
														BAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6Twfwy
														YsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWC
														I3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
									}
									<Link to="/register" className="btn btn-link" style={{ width: 100, heigth: 50, fontSize: 15, marginLeft: 10 }}>Регистрация</Link>
								</div>
							</form>
						</div>
					</div>
					<footer className='bd-footer py-5 bg-black' style={{height: 320}}></footer>
				</div>
			</div>
		);
	}
}

function mapState(state) {
	const { loggingIn } = state.authentication;
	return { loggingIn };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
