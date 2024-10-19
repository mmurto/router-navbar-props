import {
	Link,
	LinkProps,
	ReactNode,
	RegisteredRouter,
} from "@tanstack/react-router";

/**
 * Layout component shared between subroutes. It takes in different links based on the subroute.
 */
export const SharedLayout = <From extends string>({
	children,
	subRoutes,
	from,
}: {
	from: From;
	children: ReactNode;
	subRoutes: (LinkProps<"a", RegisteredRouter, From> & { label: string })[];
}) => {
	return (
		<div>
			<div className="p-2 flex gap-2 text-lg">
				{subRoutes.map((route) => (
					<Link key={route.label} from={from} {...route}>
						{route.label}
					</Link>
				))}
			</div>
			<hr />
			<main>{children}</main>
		</div>
	);
};
