import React from "react";
import { Link } from "react-router-dom";
import IcGoogle from "../assets/icons/google.svg";
import IcFacebook from "../assets/icons/facebook.svg";
export default function Login() {
	return (
		<>
			<header className="spicing-sm header-bg">
				<div className="text-center">
					<Link to="/tokopedia" className="btn btn-disabled">
						<span className="text-judul">tokopedia</span>
					</Link>
				</div>
				<div className="container">
					<div className="row">
						<div
							className="card align-item-center mt-5"
							style={{ borderRadius: "10px", width: "30%" }}
						>
							<div className="card-body">
								<div className="card-text">
									Masuk
									<div className="card-text" style={{ float: "right" }}>
										<Link
											className="text-green text-decoration-none"
											style={{ color: "green" }}
										>
											Daftar
										</Link>
									</div>
								</div>
								<form className="mt-4">
									<div className="form-group">
										<small
											for="nohp&email"
											className="text-gray"
											style={{ color: "gray" }}
										>
											Nomor Ponsel atau Email
										</small>
										<input
											type="text"
											className="form-control"
											id="nohp&email"
										/>
										<small id="text" className="form-text text-muted">
											Contoh: email@tokopedia.com
										</small>
									</div>
									<button
										type="submit"
										className="btn btn-secondary  btn-block"
										disabled
									>
										Selanjutnya
									</button>
								</form>
								<div className="text-center mt-4">
									<small style={{ color: "gray" }}>atau masuk dengan</small>
								</div>

								<button
									className="btn btn-block btn-light mt-4"
									style={{ border: "1px solid #e2e6ea" }}
								>
									<img
										src={IcGoogle}
										width={20}
										style={{ float: "left" }}
										alt=""
									/>
									Google
								</button>
								<button
									className="btn btn-block btn-light mt-4"
									style={{ border: "1px solid #e2e6ea" }}
								>
									<img
										src={IcFacebook}
										width={20}
										style={{ float: "left" }}
										alt=""
									/>
									Facebook
								</button>
								<div className="text-center mt-3">
									<small>
										Belum punya akun Tokopedia?{" "}
										<Link
											className="text-success text-decoration-none"
											to="/daftar"
										>
											Daftar
										</Link>
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
