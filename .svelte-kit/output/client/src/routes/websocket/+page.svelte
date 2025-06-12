

<script>

// import { onMount } from 'svelte';
var WebSocket = require('ws');
var Random = ("Not yet.")

var send = () => Random = "Dummy send was sent"
  var sock = new WebSocket('ws://main3002.schalk3.com')
  Random = "waiting"    
  sock.onmessage = e => {
    console.log(e);
    Random = e.data;
  }
  var send = function send () {
    sock.send(1000);
  }
</script>

<h2>{Random}</h2>
<button on:click = {send}>Get Random Number</button>


