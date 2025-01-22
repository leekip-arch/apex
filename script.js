// Handle Parcel Form Submission
async function submitParcelForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3001/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Order submitted successfully!');
            event.target.reset();
        } else {
            alert('Failed to submit order. Try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Check the console for details.');
    }
}

// Fetch and Display Orders
async function fetchOrders() {
    try {
        const response = await fetch('http://localhost:3001/api/orders');
        const orders = await response.json();

        const ordersList = document.getElementById('orders-list');
        ordersList.innerHTML = ''; // Clear existing orders

        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            orderDiv.innerHTML = `
                <p><strong>Order ID:</strong> ${order._id}</p>
                <p><strong>Description:</strong> ${order.packageDescription}</p>
                <p><strong>Status:</strong> ${order.status}</p>
                <button onclick="acceptOrder('${order._id}')">Accept Order</button>
            `;
            ordersList.appendChild(orderDiv);
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

// Accept Order
async function acceptOrder(orderId) {
    alert(`Order ${orderId} accepted!`);
}

// Attach Event Listeners
document.querySelector('#parcel-booking-form form').addEventListener('submit', submitParcelForm);

// Fetch orders on page load
window.onload = function () {
    handleResponsiveNav();
    fetchOrders(); // Load real-time orders
};
