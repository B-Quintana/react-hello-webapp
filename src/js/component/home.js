import React from "react";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";

let va = [
	"https://i.imgur.com/r7BkgqL.png",
	"https://i.imgur.com/XoRnSGT.png",
	"https://i.imgur.com/XoRnSGT.png",
	"https://i.imgur.com/eJznJUg.png",
	"https://i.imgur.com/hPdaRoZ.png",
	"https://i.imgur.com/4jJSUbG.png",
	"https://i.imgur.com/4jJSUbG.png",
	"https://i.imgur.com/KggQ7wb.png"
];

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
