export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "recursive-closures/_app",
	assets: new Set(["US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents.html","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00001.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00002.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00003.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00004.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00005.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-D00006.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/US08435570-20130507-P00001.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/api.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/cb=gapi.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/client.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/contextmenu.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/css.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/css2.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/css_002.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/css_003.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/css_004.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/lazy.min.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/logo16.png","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/null_loader.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/proxy.html","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/proxy_002.html","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/proxy_data_002/cb=gapi.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/proxy_data_002/googleapis.proxy.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/s3downbar.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/search-app-vulcanized.js","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/tooltip.css","US8435570B1 - Nitrite formulations and their use as nitric oxide prodrugs - Google Patents_files/webcomponents-lite.min.js","_*_OLL - Speed Cube Database.pdf","favicon.png","rubiks-cube-3x3-cases-oll-rbjlabs.pdf","src/.vscode/settings.json","src/app.d.ts","src/app.html","src/lib/Clone_screenshot.png","src/lib/Composition.png","src/lib/Cubeshot.png","src/lib/Cubeshot2.png","src/lib/CubeshotR.png","src/lib/F.png","src/lib/Firefox_test.png","src/lib/Firefox_test_2.png","src/lib/OLL.png","src/lib/OLL1.png","src/lib/OLL17.png","src/lib/OLL18.png","src/lib/OLL19.png","src/lib/OLL2.png","src/lib/OLL20.png","src/lib/OLL3.png","src/lib/OLL4.png","src/lib/OLL47.png","src/lib/OLL48.png","src/lib/OLL49.png","src/lib/OLL50.png","src/lib/OLL51.png","src/lib/OLL52.png","src/lib/OLL53.png","src/lib/OLL54.png","src/lib/OLL55.png","src/lib/OLL56.png","src/lib/Oll.png","src/lib/Screenshot from 2023-12-22 19-00-09.png","src/lib/Screenshot from 2024-02-03 18-07-40.png","src/lib/Screenshot_array.png","src/lib/Screenshot_async.png","src/lib/Screenshot_asyncId.png","src/lib/clickDemo.png","src/lib/cube.svelte","src/lib/cubejs/LICENSE","src/lib/cubejs/README.md","src/lib/cubejs/karma.conf.coffee","src/lib/cubejs/lib/async.js","src/lib/cubejs/lib/cube.js","src/lib/cubejs/lib/solve.js","src/lib/cubejs/lib/worker.js","src/lib/cubejs/package.json","src/lib/cubejs/spec/cube.spec.coffee","src/lib/cubejs/src/async.coffee","src/lib/cubejs/src/cube.coffee","src/lib/cubejs/src/solve.coffee","src/lib/cubejs/src/worker.coffee","src/lib/demo.png","src/lib/et.png","src/lib/function.png","src/lib/green.png","src/lib/image.png","src/lib/object.png","src/lib/oppH.png","src/lib/page.js","src/lib/passBy.png","src/lib/red.png","src/lib/stores.js","src/lib/transformations/BlueL.png","src/lib/transformations/F12.png","src/lib/transformations/L_Chart.png","src/lib/transformations/Undocumented_1a.png","src/lib/transformations/Undocumented_1b.png","src/lib/transformations/greenL.png","src/lib/transformations/king.L6.png","src/lib/transformations/redL.png","src/routes/+layout.svelte","src/routes/+page.svelte","src/routes/Bell-Inequality/+page.svelte","src/routes/Clones/+page.svelte","src/routes/Clones/backup.svelte","src/routes/Cube2LL/+page.svelte","src/routes/CubeSide","src/routes/FormTest/+page.svelte","src/routes/Intro/+page.svelte","src/routes/Pilot-Wave/+page.svelte","src/routes/Quantum/+page.svelte","src/routes/Snippets/+page.svelte","src/routes/WebSockets/+page.svelte","src/routes/__layout.svelte","src/routes/arrays/+page.svelte","src/routes/async/+page.svelte","src/routes/async2/+page.svelte","src/routes/async3/+page.svelte","src/routes/async4/+page.svelte","src/routes/async5/+page.svelte","src/routes/clone/+page.svelte","src/routes/cube/+page.svelte","src/routes/cube/backup.svelte","src/routes/cube1/+page.svelte","src/routes/cube1/OLL.png","src/routes/cube2/+page.svelte","src/routes/cube3/+page.svelte","src/routes/cube4/+page.svelte","src/routes/cube5/+page.svelte","src/routes/cube6/+page.svelte","src/routes/cube7/+page.svelte","src/routes/cube8/+page.svelte","src/routes/cube9/+page.svelte","src/routes/factors/+page.svelte","src/routes/functional/+page.svelte","src/routes/game/+page.svelte","src/routes/game2/+page.svelte","src/routes/image.png","src/routes/index.svelte","src/routes/jump_rope/+page.svelte","src/routes/jump_rope/clone.js","src/routes/matrix/+page.svelte","src/routes/monads.svelte","src/routes/pagejs/+page.svelte","src/routes/rc1/+page.svelte","src/routes/rc2/+page.svelte","src/routes/score/+page.svelte","src/routes/sockets/+page.svelte","src/routes/store.js","src/routes/stores.js","src/routes/style.css","src/routes/td/+page.svelte","src/routes/test/+page.svelte","src/routes/test.js","src/routes/test10.js","src/routes/test12.js","src/routes/test13.js","src/routes/test14.js","src/routes/test15","src/routes/test16.js","src/routes/test17.js","src/routes/test19.js","src/routes/test2.js","src/routes/test3.js","src/routes/test4.js","src/routes/test5.js","src/routes/test6,hs","src/routes/test7.js","src/routes/test8.js","src/routes/test9.js","src/routes/transformations/+page.svelte","src/routes/trash/+page.svelte","src/routes/war/+page.svelte","src/routes/websocket/+page.svelte","src/style.css","worker.js","workers/worker.js"]),
	mimeTypes: {".html":"text/html",".png":"image/png",".js":"text/javascript",".css":"text/css",".pdf":"application/pdf",".json":"application/json",".ts":"video/mp2t",".md":"text/markdown",".coffee":"text/coffeescript"},
	_: {
		client: {start:"_app/immutable/entry/start.DN7dmyTW.js",app:"_app/immutable/entry/app.DrO0HFOo.js",imports:["_app/immutable/entry/start.DN7dmyTW.js","_app/immutable/chunks/BVXBCMaG.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/DNwIStK0.js","_app/immutable/entry/app.DrO0HFOo.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Bell-Inequality",
				pattern: /^\/Bell-Inequality\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Clones_backup",
				pattern: /^\/Clones_backup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Clone",
				pattern: /^\/Clone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Collatz",
				pattern: /^\/Collatz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Cube2LL",
				pattern: /^\/Cube2LL\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/D&S",
				pattern: /^\/D&S\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/FormTest",
				pattern: /^\/FormTest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Intro",
				pattern: /^\/Intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Martingale",
				pattern: /^\/Martingale\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Pilot-Wave",
				pattern: /^\/Pilot-Wave\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Python",
				pattern: /^\/Python\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/Quantum",
				pattern: /^\/Quantum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Snippets",
				pattern: /^\/Snippets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/WebSockets",
				pattern: /^\/WebSockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/arrays",
				pattern: /^\/arrays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/async2",
				pattern: /^\/async2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/async3",
				pattern: /^\/async3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/async4",
				pattern: /^\/async4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/async5",
				pattern: /^\/async5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/async",
				pattern: /^\/async\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/clone",
				pattern: /^\/clone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/cube1",
				pattern: /^\/cube1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/cube2",
				pattern: /^\/cube2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/cube3",
				pattern: /^\/cube3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/cube4",
				pattern: /^\/cube4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/cube5",
				pattern: /^\/cube5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/cube6",
				pattern: /^\/cube6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/cube7",
				pattern: /^\/cube7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/cube8",
				pattern: /^\/cube8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/cube9",
				pattern: /^\/cube9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/cube",
				pattern: /^\/cube\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/digitalannealing",
				pattern: /^\/digitalannealing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/factors",
				pattern: /^\/factors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/functional",
				pattern: /^\/functional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/jump_rope",
				pattern: /^\/jump_rope\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/matrix",
				pattern: /^\/matrix\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/overview",
				pattern: /^\/overview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/pagejs",
				pattern: /^\/pagejs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/rc1",
				pattern: /^\/rc1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/rc2",
				pattern: /^\/rc2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/sockets",
				pattern: /^\/sockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/td",
				pattern: /^\/td\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/test2",
				pattern: /^\/test2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/transformations",
				pattern: /^\/transformations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/trash",
				pattern: /^\/trash\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/war",
				pattern: /^\/war\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/websocket",
				pattern: /^\/websocket\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
