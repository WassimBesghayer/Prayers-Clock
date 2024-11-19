// Function to update the clock
function updateClock() {
    // Get the current date and time in the Tunisia timezone
    const options = { timeZone: 'Africa/Tunis', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const timeParts = formatter.formatToParts(new Date());

    // Format the time as HH:MM:SS
    const formattedTime = timeParts
        .filter(part => part.type !== 'literal')
        .map(part => part.value)
        .join(':');

    // Update the clock element
    document.getElementById('clock').textContent = formattedTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();


// Function to update the Hijri clock and date
function updateHijriClock() {
    // Get current date and time in Tunisia timezone
    const now = new Date();
    const dateOptions = { timeZone: 'Africa/Tunis', calendar: 'islamic', day: 'numeric', month: 'long', year: 'numeric' };

    // Format time and Hijri date
    const dateFormatter = new Intl.DateTimeFormat('ar-SA', dateOptions);

    const formattedDate = dateFormatter.format(now);

    // Update elements on the page
    document.getElementById('date').textContent = `Hijri Date: ${formattedDate}`;
}

// Update the clock and date every second
setInterval(updateHijriClock, 1000);

// Initial call to display immediately
updateHijriClock();
