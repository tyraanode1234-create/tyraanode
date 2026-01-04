let cartcount = 0;

//cart function
function addToCart() {
    cartcount++;
    document.getElementById("cart-count").textContent = cartcount;
}


//greeting + date
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
    const hour = new Date().getHours();
    let greeting = "Hello";


    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const today = new Date().toDateString();
    greetingElement.textContent = `${greeting}! Today is ${today}.`;
}


//Theme toggle
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}
    togggh
