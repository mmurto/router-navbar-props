import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="p-2">
			<Link to="/one" className="p-2 border m-2">
				Page One
			</Link>
			<Link to="/two" className="p-2 border m-2">
				Page Two
			</Link>
		</div>
	);
}
