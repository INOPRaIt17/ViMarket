import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className='bg-black'>

      <div className='container'>
        <div className='row'>
        <div className='col-sm-5'>
          <img src='src\img\2.png' style={{width: 700, marginLeft: 270, marginTop: 60}}/>
        </div>
        <div className="col-md-5 bg-gray-400" style={{marginTop: 70, marginLeft: 345, fontSize: 15 }}>
          <h2 style={{color: 'white', textAlign: 'center'}}>Регистрация</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
              <h3 htmlFor="firstName" style={{color: 'white'}}>Имя</h3>
              <input placeholder='Имя' type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} style={{ fontSize: 15 }}/>
              {submitted && !user.firstName &&
                <div className="help-block">Введите имя</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
              <h3 htmlFor="lastName" style={{color: 'white'}}>Фамилия</h3>
              <input placeholder='Фамилия' type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} style={{ fontSize: 15 }}/>
              {submitted && !user.lastName &&
                <div className="help-block">Введите имя</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
              <h3 htmlFor="username" style={{color: 'white'}}>Nickname</h3>
              <input type="text" placeholder='Nickname' className="form-control" name="username" value={user.username} onChange={this.handleChange} style={{ fontSize: 15 }}/>
              {submitted && !user.username &&
                <div className="help-block">Введите Nickname</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
              <h3 htmlFor="password" style={{color: 'white'}}>Пароль</h3>
              <input type="password" placeholder='Пароль' className="form-control" name="password" value={user.password} onChange={this.handleChange} style={{ fontSize: 15 }}/>
              {submitted && !user.password &&
                <div className="help-block">Введите пароль</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary" style={{ width: 160, heigth: 50, fontSize: 15 }}>Зарегистрироваться</button>
              {registering &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
              <Link to="/login" className="btn btn-link" style={{ width: 100, heigth: 50, fontSize: 15 }}>Cancel</Link>
            </div>
          </form>
        </div>
        </div>
        <footer className='bd-footer py-5 bg-black' style={{height: 182}}>
              
        </footer>
      </div>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };