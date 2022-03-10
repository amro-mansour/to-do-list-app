function newItem() {

  // The following code is needed to add new items to the list 	
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
   }


   // This is for crossing out items off the list of items  
   li.on('dblclick', function() {
    li.toggleClass('strike');
  });
}