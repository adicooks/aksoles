document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const newItems = document.querySelector('.new-items');
    const new2 = document.querySelector('.new2');
    const new3 = document.querySelector('.new3');

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

    let currentItems = 'new-items';

    // Add click event listener to left arrow
    leftArrow.addEventListener('click', function () {
        hideAllItems();
        const itemsToShow = newItems.querySelectorAll('.new-item');
        itemsToShow.forEach(item => {
            item.style.display = 'block';
        });
        new2.style.display = 'none';
        new3.style.display = 'none';
        currentItems = 'new-items';
    });

    // Add click event listener to right arrow
    rightArrow.addEventListener('click', function () {
        hideAllItems();
        if (currentItems === 'new-items') {
            const itemsToShow = new2.querySelectorAll('.new-item');
            itemsToShow.forEach(item => {
                item.style.display = 'block';
            });
            new2.style.display = 'flex';
            currentItems = 'new2';
        } else if (currentItems === 'new2') {
            const itemsToShow = new3.querySelectorAll('.new-item');
            itemsToShow.forEach(item => {
                item.style.display = 'block';
            });
            new3.style.display = 'flex';
            currentItems = 'new3';
        }
        // Add a condition to prevent further action after new3 is shown
        else if (currentItems === 'new3') {
            const itemsToShow = newItems.querySelectorAll('.new-item');
            itemsToShow.forEach(item => {
                item.style.display = 'block';
            });
            newItems.style.display = 'flex';
            currentItems = 'new-items';
        }
    });
});
