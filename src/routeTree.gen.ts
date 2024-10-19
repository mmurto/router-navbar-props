/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AboutImport } from "./routes/about";
import { Route as TwoRouteImport } from "./routes/two.route";
import { Route as OneRouteImport } from "./routes/one.route";
import { Route as IndexImport } from "./routes/index";
import { Route as TwoThirdIndexImport } from "./routes/two.third.index";
import { Route as TwoFourthIndexImport } from "./routes/two.fourth.index";
import { Route as OneSecondIndexImport } from "./routes/one.second.index";
import { Route as OneFirstIndexImport } from "./routes/one.first.index";

// Create/Update Routes

const AboutRoute = AboutImport.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => rootRoute,
} as any);

const TwoRouteRoute = TwoRouteImport.update({
	id: "/two",
	path: "/two",
	getParentRoute: () => rootRoute,
} as any);

const OneRouteRoute = OneRouteImport.update({
	id: "/one",
	path: "/one",
	getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const TwoThirdIndexRoute = TwoThirdIndexImport.update({
	id: "/third/",
	path: "/third/",
	getParentRoute: () => TwoRouteRoute,
} as any);

const TwoFourthIndexRoute = TwoFourthIndexImport.update({
	id: "/fourth/",
	path: "/fourth/",
	getParentRoute: () => TwoRouteRoute,
} as any);

const OneSecondIndexRoute = OneSecondIndexImport.update({
	id: "/second/",
	path: "/second/",
	getParentRoute: () => OneRouteRoute,
} as any);

const OneFirstIndexRoute = OneFirstIndexImport.update({
	id: "/first/",
	path: "/first/",
	getParentRoute: () => OneRouteRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/one": {
			id: "/one";
			path: "/one";
			fullPath: "/one";
			preLoaderRoute: typeof OneRouteImport;
			parentRoute: typeof rootRoute;
		};
		"/two": {
			id: "/two";
			path: "/two";
			fullPath: "/two";
			preLoaderRoute: typeof TwoRouteImport;
			parentRoute: typeof rootRoute;
		};
		"/about": {
			id: "/about";
			path: "/about";
			fullPath: "/about";
			preLoaderRoute: typeof AboutImport;
			parentRoute: typeof rootRoute;
		};
		"/one/first/": {
			id: "/one/first/";
			path: "/first";
			fullPath: "/one/first";
			preLoaderRoute: typeof OneFirstIndexImport;
			parentRoute: typeof OneRouteImport;
		};
		"/one/second/": {
			id: "/one/second/";
			path: "/second";
			fullPath: "/one/second";
			preLoaderRoute: typeof OneSecondIndexImport;
			parentRoute: typeof OneRouteImport;
		};
		"/two/fourth/": {
			id: "/two/fourth/";
			path: "/fourth";
			fullPath: "/two/fourth";
			preLoaderRoute: typeof TwoFourthIndexImport;
			parentRoute: typeof TwoRouteImport;
		};
		"/two/third/": {
			id: "/two/third/";
			path: "/third";
			fullPath: "/two/third";
			preLoaderRoute: typeof TwoThirdIndexImport;
			parentRoute: typeof TwoRouteImport;
		};
	}
}

// Create and export the route tree

interface OneRouteRouteChildren {
	OneFirstIndexRoute: typeof OneFirstIndexRoute;
	OneSecondIndexRoute: typeof OneSecondIndexRoute;
}

const OneRouteRouteChildren: OneRouteRouteChildren = {
	OneFirstIndexRoute: OneFirstIndexRoute,
	OneSecondIndexRoute: OneSecondIndexRoute,
};

const OneRouteRouteWithChildren = OneRouteRoute._addFileChildren(
	OneRouteRouteChildren,
);

interface TwoRouteRouteChildren {
	TwoFourthIndexRoute: typeof TwoFourthIndexRoute;
	TwoThirdIndexRoute: typeof TwoThirdIndexRoute;
}

const TwoRouteRouteChildren: TwoRouteRouteChildren = {
	TwoFourthIndexRoute: TwoFourthIndexRoute,
	TwoThirdIndexRoute: TwoThirdIndexRoute,
};

const TwoRouteRouteWithChildren = TwoRouteRoute._addFileChildren(
	TwoRouteRouteChildren,
);

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/one": typeof OneRouteRouteWithChildren;
	"/two": typeof TwoRouteRouteWithChildren;
	"/about": typeof AboutRoute;
	"/one/first": typeof OneFirstIndexRoute;
	"/one/second": typeof OneSecondIndexRoute;
	"/two/fourth": typeof TwoFourthIndexRoute;
	"/two/third": typeof TwoThirdIndexRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/one": typeof OneRouteRouteWithChildren;
	"/two": typeof TwoRouteRouteWithChildren;
	"/about": typeof AboutRoute;
	"/one/first": typeof OneFirstIndexRoute;
	"/one/second": typeof OneSecondIndexRoute;
	"/two/fourth": typeof TwoFourthIndexRoute;
	"/two/third": typeof TwoThirdIndexRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/one": typeof OneRouteRouteWithChildren;
	"/two": typeof TwoRouteRouteWithChildren;
	"/about": typeof AboutRoute;
	"/one/first/": typeof OneFirstIndexRoute;
	"/one/second/": typeof OneSecondIndexRoute;
	"/two/fourth/": typeof TwoFourthIndexRoute;
	"/two/third/": typeof TwoThirdIndexRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/one"
		| "/two"
		| "/about"
		| "/one/first"
		| "/one/second"
		| "/two/fourth"
		| "/two/third";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/one"
		| "/two"
		| "/about"
		| "/one/first"
		| "/one/second"
		| "/two/fourth"
		| "/two/third";
	id:
		| "__root__"
		| "/"
		| "/one"
		| "/two"
		| "/about"
		| "/one/first/"
		| "/one/second/"
		| "/two/fourth/"
		| "/two/third/";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	OneRouteRoute: typeof OneRouteRouteWithChildren;
	TwoRouteRoute: typeof TwoRouteRouteWithChildren;
	AboutRoute: typeof AboutRoute;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	OneRouteRoute: OneRouteRouteWithChildren,
	TwoRouteRoute: TwoRouteRouteWithChildren,
	AboutRoute: AboutRoute,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/one",
        "/two",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/one": {
      "filePath": "one.route.tsx",
      "children": [
        "/one/first/",
        "/one/second/"
      ]
    },
    "/two": {
      "filePath": "two.route.tsx",
      "children": [
        "/two/fourth/",
        "/two/third/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/one/first/": {
      "filePath": "one.first.index.tsx",
      "parent": "/one"
    },
    "/one/second/": {
      "filePath": "one.second.index.tsx",
      "parent": "/one"
    },
    "/two/fourth/": {
      "filePath": "two.fourth.index.tsx",
      "parent": "/two"
    },
    "/two/third/": {
      "filePath": "two.third.index.tsx",
      "parent": "/two"
    }
  }
}
ROUTE_MANIFEST_END */
