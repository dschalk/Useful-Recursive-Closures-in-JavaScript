


<style>

    input[type=checkbox] {
         content: "";
         display: block;
         position: absolute;
         width: 30px;
         height: 30px;
         top: 40;
         left: 40;
         border: 2px solid #555555;
         border-radius: 3px;
         background-color:beige;
         padding:5px;
         box-shadow: 0 0 10px 4px;
         border-radius: 10px;
         font-family: monospace;
         font-size:27px
}
    input[type=checkbox]:before {
         content: "";
         display: block;
         position: absolute;
         width: 60px;
         height: 60px;
         top: 0;
         left: 0;
         border: 2px solid #555555;
         border-radius: 3px;
         background-color: beige;
}
    input[type=checkbox]:checked:after {
         content: "";
         display: block;
         width: 60px;
         height: 60px;  
         border: solid black;
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 2px;
         left: 6px;
}

input[type=text] {
    background-color:beige;
    width:22%;
    padding:10px;
    box-shadow: 0 0 10px 4px;
    border-radius: 10px;
    font-family: monospace;
    font-size:27px
}

input:hover {
    box-shadow: 0 0 10px 7px;
}

input:focus  {
    background-color:white;
    box-shadow: 0 0 4 4;
    border-width: 2px;
}

body {
    background-color: white;
}
</style>


<body>
<input type="text" >
<br><br>
<input type="text" >
<br><br>
<input type="text" >

<br><br>
<br><br>
<input type="checkbox" >

</body>















