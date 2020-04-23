import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import {Cards} from "./cards"

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
		

			

			<div className="cards-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}
