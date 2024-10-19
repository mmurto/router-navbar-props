import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SharedLayout } from "../shared-layout";

export const Route = createFileRoute("/one")({
	component: () => (
		<SharedLayout
			// Can I use this to narrow down the subroutes' `to` prop?
			from="/one"
			subRoutes={[
				{ to: "first", label: "one/first" },
				{
					to: "second",
					label: "one/second",
				},
			]}
		>
			<Outlet />
		</SharedLayout>
	),
});
