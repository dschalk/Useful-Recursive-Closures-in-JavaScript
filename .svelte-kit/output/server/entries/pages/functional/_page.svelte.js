import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-3beg8g">Functional Programming</h1> <h3 data-svelte-h="svelte-j9f1i4">FUNCTIONAL PROGRAMMING</h3> <p data-svelte-h="svelte-2ei7fv">&quot;Functional programming&quot; means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.</p> <p data-svelte-h="svelte-1inxiqk">Mimicking features of the Haskell programming language vaguely hoping Haskell&#39;s reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. &quot;The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., &quot;cargo&quot;), via
	Western airplanes.&quot;</p> <a href="https://www.youtube.com/watch?v=yvfAtIJbatg" data-svelte-h="svelte-gywew">Cargo Cult Science -- Richard Feynman&#39;s 1974 Caltech lecture</a> <h4 data-svelte-h="svelte-b951yi">Cargo Cult</h4> <p data-svelte-h="svelte-6v62el">According to the Wikipedia article &quot;Cargo Cult&quot;, &quot;a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. <a href="https://en.wikipedia.org/wiki/Cargo_cult">Cargo Cult</a> The article goes on to say, &quot;The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., &quot;cargo&quot;), via Western airplanes.&quot; citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.</p> <p data-svelte-h="svelte-1owqqlu">Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call &quot;cargo cult functional JavaScript&quot; for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of &quot;monads&quot; along with monad transformers and
	mechanisms for lifting values into composite monadic types.</p> <p data-svelte-h="svelte-1vm6qwe">Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn&#39;t the first and I won&#39;t be the last
	JavaScript programmer to get lost in this manner. Strict typing, where it serves no useful purpose
	and insisting on immutability where all it does is pollute memory with useless intermediate values,
	is trendy these days.</p> <p data-svelte-h="svelte-10098gr">Code where functions might collide over mutable global variables leads programmers to religiously avoid mutable global variables. I&#39;m using the Svelte framework for this project, and I try to keep my modules small. Mutable global variables can&#39;t cause problems because I have no modules or hierarchies of nested modules in which clashes might occur. I don&#39;t hesitate to mutate variables withing the scope of functions, or within the scope of my reasonably sized svelte modules.</p> <h4 data-svelte-h="svelte-sk55zo">References</h4> <a href="https://www.youtube.com/watch?v=nm22duia0jU" data-svelte-h="svelte-dkxzs1">Cargo Cult Programming video presentation</a> <a href="https://www.youtube.com/watch?v=yvfAtIJbatg" data-svelte-h="svelte-gywew">Cargo Cult Science -- Richard Feynman&#39;s 1974 Caltech lecture</a>`;
});
export {
  Page as default
};
