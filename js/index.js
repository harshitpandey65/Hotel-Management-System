document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const roomList = document.getElementById('roomList');

    // Sample room data
    const rooms = [
        { id: 1, type: 'Single', available: true },
        { id: 2, type: 'Double', available: true },
        { id: 3, type: 'Suite', available: false },
    ];

    // Function to display rooms
    function displayRooms() {
        roomList.innerHTML = '';
        rooms.forEach(room => {
            const roomItem = document.createElement('li');
            roomItem.textContent = `${room.type} Room ${room.available ? '(Available)' : '(Not Available)'}`;
            roomList.appendChild(roomItem);
        });
    }

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = bookingForm.name.value;
        const checkin = bookingForm.checkin.value;
        const checkout = bookingForm.checkout.value;
        const roomType = bookingForm.roomType.value;

        // Simple form validation
        if (!name || !checkin || !checkout || !roomType) {
            alert('Please fill in all fields.');
            return;
        }

        alert(`Booking confirmed for ${name}.\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRoom Type: ${roomType}`);
        bookingForm.reset();
    });

    displayRooms();
});
