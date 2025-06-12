import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/Bell-Inequality" | "/Clone" | "/Clones_backup" | "/Collatz" | "/Cube2LL" | "/D&S" | "/FormTest" | "/Intro" | "/Martingale" | "/Pilot-Wave" | "/Python" | "/Quantum" | "/Snippets" | "/WebSockets" | "/arrays" | "/async" | "/async2" | "/async3" | "/async4" | "/async5" | "/clone" | "/cube" | "/cube1" | "/cube2" | "/cube3" | "/cube4" | "/cube5" | "/cube6" | "/cube7" | "/cube8" | "/cube9" | "/digitalannealing" | "/factors" | "/functional" | "/game" | "/jump_rope" | "/matrix" | "/overview" | "/pagejs" | "/rc1" | "/rc2" | "/score" | "/sockets" | "/td" | "/test" | "/test2" | "/transformations" | "/trash" | "/war" | "/websocket" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }