// Button Click
const menuBtn = document.getElementById('menu-btn');
menuBtn.onclick = () => {
    alert("Menu opening...");
};

// Nav Item Click
const items = document.querySelectorAll('.nav-item');
items.forEach(item => {
    item.onclick = () => {
        // Remove active class from all
        items.forEach(i => i.classList.remove('active'));
        // Add to clicked one
        item.classList.add('active');
    };
});