
document.addEventListener('DOMContentLoaded', function () {
    // Get the arrow elements
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Get the new-items and new2 elements
    const newItems = document.querySelector('.new-items');
    const new2 = document.querySelector('.new2');

    // Function to hide all items
    function hideAllItems() {
        const allItems = document.querySelectorAll('.new-item');
        allItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    // Show initial items
    hideAllItems();
    const initialItems = newItems.querySelectorAll('.new-item');
    initialItems.forEach(item => {
        item.style.display = 'block';
    });

    // Add click event listener to left arrow
    leftArrow.addEventListener('click', function () {
        hideAllItems();
        const itemsToShow = newItems.querySelectorAll('.new-item');
        itemsToShow.forEach(item => {
            item.style.display = 'block';
        });
        new2.style.display = 'none'; // Hide .new2 on left arrow click
    });

    // Add click event listener to right arrow
    rightArrow.addEventListener('click', function () {
        hideAllItems();
        const itemsToShow = new2.querySelectorAll('.new-item');
        itemsToShow.forEach(item => {
            item.style.display = 'block';
        });
        new2.style.display = 'flex'; // Show .new2 on right arrow click
    });
});
