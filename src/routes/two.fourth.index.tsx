import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/two/fourth/")({
	component: () => <div>Hello /two/fourth/!</div>,
});
