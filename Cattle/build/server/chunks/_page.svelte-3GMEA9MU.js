import { c as create_ssr_component, e as escape } from './ssr-0d8NzNEj.js';
import { B as BROWSER, w as writable } from './index-9xo89m6N.js';

const browser = BROWSER;
const css = {
  code: "pre.svelte-6bq8z1{margin-left:3%}",
  map: null
};
function ret() {
}
function M(x) {
  return function go(func) {
    if (func === ret)
      return x;
    x = func(x);
    return go;
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const userName = writable(browser);
  const top = writable(browser);
  userName.subscribe((val) => browser);
  top.subscribe((val) => browser);
  var m2;
  var FIN = 1001;
  var d2;
  var d2 = "";
  var AA, BB, CC, DD;
  var b0 = "none";
  var b1 = "none";
  var b2 = "none";
  var b3 = "none";
  var b4 = "none";
  var b5 = "none";
  var b6 = "none";
  var b7 = "none";
  var s = ret;
  var AA;
  var BB;
  var CC;
  var DD;
  var WW;
  var XX;
  var YY;
  var ZZ;
  var Z = "";
  m2 = M([
    [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    [],
    ["+"],
    [],
    [0],
    [],
    [0],
    []
  ]);
  var ZWIN = "";
  var fuDem = `function fu (a) {                  // fu
      a[5].push(clone(a));
      a[7].push(clone(a)); // All game states for use in "Back" and "Forward."
      a[6][0] += 1;
        // a[1].push(a[0].pop());
      var result;
      SCORE = a[4];
      var a1;
      if (a[1].length === 2 && a[2].length === 1)   {
        a1 = a[1];
        result = calc(a[1][0], a[1][1],a[2][0]);
        a[0].push(result);
        a[3].push(result);
        a[1] = [];
        m2 = M(a);
      }
    
      if (a[1].length === 3) {
        a[0].push(a[1].pop());
      }
    
      if (result == 20 && intersection(a1, a[3]).length > 0) {
          if (SCORE === 4) {
              ZWIN = "You win! "
              a[4][0] = 0;
              runRoll(0);
          }
          else {
              var aint = parseInt(a[4][0], 10);
              aint += 1;
              Z = "           Your score increased to " + aint;
              runRoll(aint);
          }
          setTimeout(() => Z = ZWIN = "", 3000);
      }
      update();
      sfunc();
      return m2(s);
    };
    
    var update = () => { // The button displays will correspond to the values in m2.
      AA = m2(s)[0][0];
      BB = m2(s)[0][1];
      CC = m2(s)[0][2];
      DD = m2(s)[0][3];
      EE = m2(s)[2];
      FF = m2(s)[3];
      SCORE = m2(s)[4];
      WW = m2(s)[1][0];
      XX = m2(s)[1][1];
      YY = m2(s)[1][2];
      ZZ = m2(s)[1][3];
    }
    
    function sfunc () {
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none"; // All button displays controlled by b's disappear.
        if (AA != (undefined && 0)) b0 = "inline"; // Next, selected buttons are diplayed.
        if (BB != (undefined && 0)) b1 = "inline";
        if (CC != (undefined && 0)) b2 = "inline";
        if (DD != (undefined && 0)) b3 = "inline";
        if (WW != (undefined && 0)) b4 = "inline";
        if (XX != (undefined && 0)) b5 = "inline";
        if (YY != (undefined && 0)) b6 = "inline";
        if (ZZ != (undefined && 0)) b7 = "inline";
    }`;
  var monad = `function M (x) {
        return function go (func) {
            if (func === ret) return x
            else x = func(x);
            return go;
      }
    }`;
  var monadNew = `function M (x) {
      return function go (func) {
        if (func) {x = func(x); return go}
        else return x;
      }`;
  var retCode = `function ret () {}`;
  var runR = `runRoll = x => {
        m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
        updateRoll();
        EEE = "yet to be selected";
        XO = m2('stop');
        AR = [];
        index = 0;
    }
    
    const updateRoll = () => {
      AA = m2(s)[0][0];
      BB = m2(s)[0][1];
      CC = m2(s)[0][2];
      DD = m2(s)[0][3];
    
      WW = m2(s)[1][0];
      XX = m2(s)[1][1];
      YY = m2(s)[1][2];
      ZZ = m2(s)[1][3];
      EE = m2(s)[2];
      FF = m2(s)[3];
      SCORE = m2(s)[4];
      b0 = b1 = b2 = b3 = "inline";
      b4 = b5 = b6 = b7 = 'none';
    };`;
  var clickFuncs = `var click0 = a => {
        a[1].push(a[0][0])
        a[0].shift();
        m2 = M(a);
        m2(fu);
        // sfunc();
    };
    
    var click1 = a => {
        a[1].push(a[0].splice(1,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click2 = a => {
        a[1].push(a[0].splice(2,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click3 = a => {
        a[1].push(a[0].splice(3,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    function clic0 (m) {
      EEE = "add";
      m[2] = "+";
      m2 = M(m) ;
    }
    
    $: clic1 = m => {
      EEE = "subtract";
      m[2] = "-";
      m2 = M(m) ;
    }
    
    function clic2 (m) {
      EEE = "multiply";
      m[2] = "*";
      m2 = M(m) ;
    }
    
    function clic3 (m) {
      EEE = "divide";
      m[2] = "/";
      m2 = M(m) ;
    }
    
    function clic4 (m) {
      EEE = "concat";
      m[2] = "@"
      m2 = M(m);
    };`;
  var putBack = `if (a[1].length === 3) {
        a[0].push(a[1].pop());  // Returns a clicked third number.
      };`;
  var caution = `var s = ret;
    var log = console.log;
    
    function M(x) {
      return function go(func) {
        if (typeof func === "function") {
          x = func(x);
          return go;
        } else if (func === "stop") return x;
      }
    };
    
    var m3 = M(3);
    
    m3(async a => await 888); // m3(s) will return a Promise with value 888.
    
    m3(s).then(v => m3((z => v + 112)));
    // m3(s) will return 1000 after the promise is fulfilled.
    
    m3(s).then(v => setTimeout(() => console.log("m3(s) resolved is", v,), 2000));
    // The promise is still pending, so the value of "v" is 888.
    
    setTimeout(() => console.log("m3(s) is", m3(s)),0);
    // This gets bumped to the bottom of the stack, behind (2).
    // m3(s) is called after x has been updated to 1000.
    
    // Result:
    16:13:15.590 m3(s) is 1000
    16:13:17.590 m3(s) resolved is 888
    // Two seconds after "1000" appears in the console log, "888" is displayed.`;
  var start = `m2 = M(
        [ 
          [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
          [], ['+'], [], [0], [], [0], [] 
        ]);`;
  $$result.css.add(css);
  Z = Z;
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  m2(s)[2];
  m2(s)[3];
  m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  m2(s);
  return `${$$result.head += `<!-- HEAD_svelte-1t861vf_START -->${$$result.title = `<title>The Solitaire Game of Score</title>`, ""}<!-- HEAD_svelte-1t861vf_END -->`, ""} <div style="margin-left:12%; margin-right: 12%;"><br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <h1 style="text-align: center" data-svelte-h="svelte-12jmyso">The Solitaire Game of Score</h1> <p data-svelte-h="svelte-1ddt8vg">The game is held in the closure returned initially by M(x) where M is:</p> <pre class="svelte-6bq8z1">${escape(monad)}</pre> <p data-svelte-h="svelte-b2vf74">and x is an array of eight arrays defined as:</p> <pre class="svelte-6bq8z1">${escape(start)}</pre> <p data-svelte-h="svelte-ixx4tx">It doesn&#39;t matter what, if anything, the function ret() would do if it were to be called because it doesn&#39;t get called. It&#39;s only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in <span>M(2)(v=&gt;v+4)(v=&gt;v*7)(ret) = 42</span>.</p> <p>Here, ret() is defined as <span>${escape(retCode)}</span>. Later versions of M dispense with ret(), returning the value held in the m-M(x) closure whenever the argument is null.
        </p><pre class="svelte-6bq8z1">${escape(monadNew)}</pre> <p data-svelte-h="svelte-12plheh">Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You&#39;ll have two 1&#39;s before the multiplication. It won&#39;t matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two.</p>    <h2>${escape(d2)}</h2>  <br> <button data-svelte-h="svelte-1p8ycuh">Reset</button> <br><br> <button style="${"display: " + escape(b0, true)}">${escape(AA)}</button> <button style="${"display: " + escape(b1, true)}">${escape(BB)}</button> <button style="${"display: " + escape(b2, true)}">${escape(CC)}</button> <button style="${"display: " + escape(b3, true)}">${escape(DD)}</button> <span style="margin-left: 8%; font-size: 32px">Operator: ${escape(m2(s)[2])}</span> <span style="margin-left: 64px; font-size: 32px">Score: ${escape(m2(s)[4])}</span> <br><br> <button data-svelte-h="svelte-1e12d00">add</button> <button data-svelte-h="svelte-1kswafo">subtract</button> <button data-svelte-h="svelte-1yud9f9">multiply</button> <button data-svelte-h="svelte-gsri11">divide</button> <button data-svelte-h="svelte-1ta58wz">concat</button> <span style="margin-left: 20px; font-size:28px">${escape(Z)}</span> <span style="margin-left: 20px; font-size:38px">${escape(ZWIN)}</span> <span style="margin-left: 20px; font-size:38px">${escape(FIN)}</span> <br><br> <button data-svelte-h="svelte-1fzj6m7">ROLL</button> <br><br> <button data-svelte-h="svelte-1pj6w29">test</button> <button style="${"display: " + escape(b4, true)}">${escape(WW)}</button> <button style="${"display: " + escape(b5, true)}">${escape(XX)}</button> <button style="${"display: " + escape(b6, true)}">${escape(YY)}</button> <button style="${"display: " + escape(b7, true)}">${escape(ZZ)}</button> <br><br> <button data-svelte-h="svelte-10mew4k">Back</button> <button data-svelte-h="svelte-1fu3ck2">Forward</button> <p data-svelte-h="svelte-1j12tk4">Remember, just computing 20 isn&#39;t always enough. One of the numbers used to get 20 has to be the
        result of a prior computation</p> <p data-svelte-h="svelte-o0cwe5"></p><h2 data-svelte-h="svelte-1c47mae">Background</h2> <p data-svelte-h="svelte-1iwmjdh">Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version.</p> <p data-svelte-h="svelte-90lq4n">After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers.</p> <p data-svelte-h="svelte-14y7d2j">One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe &quot;euphoric&quot; is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.</p> <p data-svelte-h="svelte-ipd2o">In the online game, players can gain a point by	clicking &quot;Impossible&quot; unless another player finds a solution. In that case, the player who clicked &quot;Impossible&quot; loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default	value of 20. </p> <h2 data-svelte-h="svelte-nx0ma9">About this Solitaire Version</h2> <p data-svelte-h="svelte-92aqys">This demonstration doesn&#39;t rely on a remote server, nor does it feature any Haskell code. It&#39;s just a little solitaire game providing an opportunity to consider the interesting possibilities of closures. You can traverse the history of game play for the current roll. If you make a
        mistake, you can take back your move and do something else. If you traverse back and forth very
        far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.</p> <p data-svelte-h="svelte-ho031a">The function fu() is the brains behind the game of Score. Each time a number or operator is
        clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
        state of play in M is an array of seven arrays. Let&#39;s call it ar. If an operator op is in ar[2]
        and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
        ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
        least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
        number of points reaches 5, fu causes &quot;You win&quot; to be displayed, sets the score back to 0, and
        calls runRoll, starting another round of play.</p> <p data-svelte-h="svelte-1sqt9j8">At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
        buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
        to values of undefine and shows buttons that correspond to numbers in ar. This is done by
        switching variables p in &quot;style = &#39;display: p&#39; back and forth between &quot;none&quot; and &quot;inline&quot;.</p> <a id="scoreDef"></a> <pre class="svelte-6bq8z1">${escape(fuDem)}</pre> <p data-svelte-h="svelte-15rv1aj">Clicking &quot;ROLL&quot; calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p> <pre class="svelte-6bq8z1">${escape(runR)}</pre> <p data-svelte-h="svelte-gtqu57">The &quot;x =[ 
            [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
            [], [&#39;+&#39;], [], [0], [], [0], [] ]);&quot; format will be maintained throught game play. x[0]
        simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
        x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
        in arriving at 20. That&#39;s the reason, toward the end of fu(), that the intersection of a[0] and
        a[4] is examined when 20 is computed. Here are the first few functions called when a number is
        clicked:</p> <pre class="svelte-6bq8z1">${escape(clickFuncs)}</pre> <p data-svelte-h="svelte-zq379y">The first line of fu() is the calculation result that is generated whenever there are two items in
        (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()&#39;s bottom test. If
        &quot;intersect&quot;, the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
        the last test in fu fails, even though 20 was produced on the second computation.</p> <p data-svelte-h="svelte-yzh3on">If no operator has been selected, it&#39;s possible to click a third number. The program doesn&#39;t
        complain, it just puts the number back for you with:</p> <pre class="svelte-6bq8z1">${escape(putBack)}</pre> <p data-svelte-h="svelte-412cb9">If you roll the dice and keep clicking on the leftmost number, you&#39;ll see the numbers shift back
        and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
        position and pushed back on the right.</p> <p data-svelte-h="svelte-9wuunx">sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
        display strings are changed back and forth between &quot;none&quot; and &quot;inline&quot;. fu() calls sfunc(). Here&#39;s
        how it is defined:</p> <p data-svelte-h="svelte-1dbb3x7">For solitaire version presented here, a function named &quot;m2&quot; will form a closure with M as
        follows: &quot;m2 = M(x)&quot; where x = [ Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [&#39;+&#39;], [], [0], [], [0], []]) m2 will consume functions
        that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
        game play. After each click on a number or operator button, m2(fu) is called. The record of prior
        states kept in x[7] allows players to traverse the history of their choices.</p> <p data-svelte-h="svelte-7tl240">In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
        arrays [ [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [&#39;+&#39;], [], [0], [], [0], []] ] where x[0], x[1], x[2], and x[3] start out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
        number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
        of successes until the player wins by reaching 5, x[5] contains all prior states as the player
        selects numbers and operators and is used for reversing state a little or all the way back to the
        original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
        state during a round. using x[6] to travers the history of game play in both directions.</p>  <h2 data-svelte-h="svelte-1kuwtpn">Why I Call Them &quot;Monads&quot;</h2> <p data-svelte-h="svelte-1bae15k">I sometimes call functions returned by M &quot;monads&quot;, much to the consternation of some &quot;functional
        programmers&quot; who scoff at the idea that JavaScript could possibly have monads such as those
        defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
        Theory monads. Haskell monads insulate chained computation from the global space, consuming
        functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
        navigate through various types but I don&#39;t bother with that. The definition of &quot;M&quot; shows that the
        returned function responds to arguments that are functions and also to the string &quot;Stop.&quot;</p> <p data-svelte-h="svelte-ht7zg4">In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
        Haskell Prelude module, amusing though it may be, isn&#39;t likely to produce anything very useful.
        People who think Haskell, or the supposed mathematical category of Haskell types and functions
        called &quot;Hask&quot;, are actually Category Theory categories are mistaken. Category Theory inspired the
        development of Haskell monads and it might not be merely coincidental that the monads I am about
        to define are functionally similar to Haskell state monads, though superficially quite different. Both
        transform state along pipelines isolated from their outer scope by operating on functions that
        return new monads. Both preserve state for future transformations or for eventual use in their
        outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
        wait to do it in a main() function. I&#39;m not trying to mimic Haskell or any other functional
        programming language. I&#39;ll probably stop calling my little closures &quot;monads.&quot;</p>
    
    Caution:
    <pre class="svelte-6bq8z1">${escape(caution)}</pre> <br><br> </div> ${slots.default ? slots.default({}) : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3GMEA9MU.js.map
