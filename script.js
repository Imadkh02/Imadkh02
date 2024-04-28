// script.js

// Example: Adding a click event to menu items
document.querySelectorAll('.menu-items li').forEach(item => {
  item.addEventListener('click', () => {
    // Do something when an item is clicked
    console.log('Item clicked:', item.textContent);
  });
});
