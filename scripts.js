<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>repl.it</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  
	<div class="container">
		<h2>To Do List App</h2>
		<p><em> Double click to mark an item off, click on "X" to delete an item, and drag items to reorder.</em></p>
       
		<form name="toDoList">
			<input type="text" name="ListItem" id="input"/>
		</form>
    
		<div onclick="newItem()" id="button">Add</div>
		<br/>
		<ol id="list"></ol>
  </div>
  
  <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
  <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"></script>
  <script src="script.js"></script>
  </body>
</html>