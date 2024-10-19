import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SharedLayout } from "../shared-layout";

export const Route = createFileRoute("/two")({
	component: () => (
		<SharedLayout
			from="/two"
			subRoutes={[
				{
					to: "third",
					label: "/two/third",
				},
				{ to: "fourth", label: "/two/fourth" },
			]}
		>
			<Outlet />
		</SharedLayout>
	),
});
