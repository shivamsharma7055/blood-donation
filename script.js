// Handle form submission
document.getElementById('registerDonor').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;

    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span>  ${bloodType} , ${location} ,  ${phone}`;

    // Add to donor list
    document.getElementById('donors').appendChild(li);

    // Clear form inputs
    document.getElementById('registerDonor').reset();
});