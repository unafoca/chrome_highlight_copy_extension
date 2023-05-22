// Create a button element
var button = document.createElement('button');
button.innerHTML = 'Copy Text with URL';
button.style.position = 'fixed';
button.style.top = '30px';
button.style.right = '20px';
button.style.zIndex = '9999';
button.style.padding = '10px 20px'; // Add some padding
button.style.fontSize = '16px'; // Increase the font size
button.style.border = 'none'; // Remove the border
button.style.borderRadius = '5px'; // Add some border radius to make it look like a round button
button.style.backgroundColor = '#007BFF'; // Change the background color
button.style.color = '#FFFFFF'; // Change the text color
button.style.cursor = 'pointer'; // Change the cursor when hovering over the button
button.style.boxShadow = '2px 2px 3px rgba(0,0,0,0.3)'; // Add a subtle shadow

// Append the button to the body of the page
document.body.appendChild(button);


function copyTextAndURL() {
  // Get the highlighted text
  var highlightedText = window.getSelection().toString();

  // Get the current URL
  var currentUrl = window.location.href;

  // Create the text to be copied
  var copiedText = '[' + highlightedText + '](' + currentUrl + ')';

  // Copy the text to the clipboard
  navigator.clipboard.writeText(copiedText)
    .then(function() {
      // Alert the user
      alert('Highlighted text and URL copied to the clipboard:\n\n' + copiedText);
    })
    .catch(function(error) {
      console.error('Unable to copy text:', error);
    });
}

// Add click event listener to the button
// button.addEventListener('click', function() {
//   // Get the highlighted text
//   var highlightedText = window.getSelection().toString();

//   // Get the current URL
//   var currentUrl = window.location.href;

//   // Create the text to be copied
//   var copiedText = '[' + highlightedText + '](' + currentUrl + ')';

//   // Copy the text to the clipboard
//   navigator.clipboard.writeText(copiedText)
//     .then(function() {
//       // Alert the user
//       alert('Highlighted text and URL copied to the clipboard:\n\n' + copiedText);
//     })
//     .catch(function(error) {
//       console.error('Unable to copy text:', error);
//     });
// });

button.addEventListener('click', copyTextAndURL);

// Add keydown event listener for the shortcut
document.addEventListener('keydown', function(event) {
  // Check if Command+C was pressed on Mac
  if (event.metaKey && event.key === 'l') {
    copyTextAndURL();
  }
});


