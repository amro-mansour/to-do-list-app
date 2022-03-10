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

   
  // This code adds a delete button to delete items from the list 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass("delete");
  }

  // Reordering the items inside the list of items 
  $('#list').sortable();
}