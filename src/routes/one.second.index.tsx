import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/one/second/")({
	component: () => <div>Hello /one/second/!</div>,
});
