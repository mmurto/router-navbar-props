import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/two/third/")({
	component: () => <div>Hello /two/third/!</div>,
});
