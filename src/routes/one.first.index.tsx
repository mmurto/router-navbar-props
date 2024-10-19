import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/one/first/")({
	component: () => <div>Hello /one/first/!</div>,
});
