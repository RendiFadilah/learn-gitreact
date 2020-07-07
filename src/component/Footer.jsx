import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div>
			<footer className="text-center fixed-bottom">
				<small style={{ color: "gray" }}>
					2009-2020 © PT Tokopedia{" "}
					<Link className="text-success text-decoration-none" to="/bantuan">
						Bantuan
					</Link>
				</small>
			</footer>
		</div>
	);
}
