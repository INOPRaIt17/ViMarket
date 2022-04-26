import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
	componentDidMount() {
		this.props.getUsers();
	}

	handleDeleteUser(id) {
		return (e) => this.props.deleteUser(id);
	}

	render() {
		const { user, users } = this.props;

		return (
			<div className='container-fluid' style={{ height: 10060 }}>
				<div className='row'>
					<div className='row'>
						<div className='col-md-6'>
							<nav class="navbar navbar-light bg-dark fixed-top">
								<div class="container-fluid">
									<button class="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
										<span class="navbar-toggler-icon"></span>
									</button>
									<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
										<div class="offcanvas-header">
											<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
											<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
										</div>
										<div class="offcanvas-body">
											<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
												<li class="nav-item">
													<a class="nav-link active" aria-current="page" href="#">Главная</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" href="#">Ссылка</a>
												</li>
												<li><a class="dropdown-item" href="#">{user.username}</a></li>
												<li class="nav-item dropdown">
													<a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
														Выпадающий список
													</a>
													<ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
														<li><a class="dropdown-item" href="#">Действие</a></li>
														<li><a class="dropdown-item" href="#">Другое действие</a></li>
														<li>
															<hr class="dropdown-divider" />
														</li>
														<li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>

													</ul>
												</li>
											</ul>
											<form class="d-flex">
												<input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
												<button class="btn btn-outline-success" type="submit">Поиск</button>
											</form>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>

					<div className='row' style={{ marginTop: 40, color: 'white', }}>
						<div className="col-md-4 gy-5" >
							<img src="src\img\4.png" class="d-block w-100" style={{ width: 800 }} />
						</div>
						<div className="col-md-4" style={{ backroudColor: 'white' }}>
							<h1 style={{ fontSize: 40, textAlign: 'center', marginTop: 40, fontFamily: 'cursive' }}>Приветсвуем тебя, {user.username}</h1>
							<h2 style={{ fontSize: 40, textAlign: 'center', fontFamily: 'cursive' }}>Добро пожаловать в ViMarket</h2>
							<button style={{ textAlign: 'center', width: 250, height: 50, marginLeft: 190, marginTop: 100, fontSize: 20 }} className='btn btn-primary'>
								Купить Vi-коины
							</button>
						</div>
						<div className='col-md-4 gy-5'>
							<img src="src\img\6.png" class="d-block w-100" style={{ width: 800 }} />
						</div>

						<div className='row'>
							<div className='col-md-7' style={{ marginLeft: 280 }}>
								<h1 style={{ fontSize: 55, fontFamily: "revert", marginLeft: 280 }}>У нас самые выгодные цены;)</h1>
								<img src='src\img\8.png' style={{ width: 1300 }} />
								<button className='btn btn-success' style={{ fontSize: 25, fontFamily: "revert", marginLeft: 450, width: 400, height: 60 }}>
									Начни торговать
								</button>
							</div>
						</div>

						<div className='row g-2'>
							<div className='col-md-6'>
								<img src='src\img\3.gif' style={{ width: 450, marginTop: 130, marginLeft: 280 }} />
							</div>
							<div className='col-md-4'>
								<h1 style={{ fontSize: 40, marginTop: 240 }}>О нашей валюте</h1>
								<h3>
									ViCoin - основная валюта на нашем сайте. Нельзя купить скины за рубли, здесь так не работает,
									хочешь быть крутым, купи ViCoin и торгуй им. ViCoin можно приобрести в нашем банке и у
									других пользователей. Если у тебя осталось пару лишних коинов просто продай их кому-нибудь , а
									деньги придут тебе на карту.
								</h3>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-4' style={{ marginLeft: 260 }}>
								<h1 style={{ fontSize: 40, marginTop: 240 }}>Маркетплейс</h1>
								<h3>
									Надёжность нашего маркетплейса обусловлена тем, что человек с которым ты договариваешься, сам
									предлагает тебе обмен, а ты его подтверждаешь или наоборот. Ассортимент большой, а все скины есть на торговой
									площадке стима. Простой и понятный интерфейс обеспечат вам простую и быструю торговлю. В нашем маркетплейсе торгуют Vi-коинами,
									поэтому быстрее приобретай их по низкой цене в банке или у других пользователей. 

								</h3>
							</div>
							<div className='col-md-6'>
								<img src='src\img\9.png' style={{ width: 850, marginTop: 100 }} />
							</div>
						</div>















						{/* <div className='col-md-4'>
							<img src='src\img\5.gif' style={{ width: 250, marginLeft: 300 }} />
						</div> */}

					</div>
				</div>
			</div>

		);
	}
}

function mapState(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	return { user, users };
}

const actionCreators = {
	getUsers: userActions.getAll,
	deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };





































{/* {users.loading && <p>Loading users...</p>}
						{users.error && <span className="text-danger">ERROR: {users.error}</span>}
						{users.items &&
							<ul>
								{users.items.map((user, index) =>
									<h4 key={user.id}>
										{user.firstName + ' ' + user.lastName}
										{
									user.deleting ? <em> - Deleting...</em>
										: user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
											: <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
								}
					
									</h4>
								)}
							</ul>
						} */}




{/* <p>
							<Link to="/login">Выйти</Link>
						</p>					
					 */}