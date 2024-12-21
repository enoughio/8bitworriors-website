// Sample event data (in a real application, this would come from a backend)
const events = [
    { id: 1, title: "AI Conference 2023", date: "2023-09-15", description: "Explore the latest in artificial intelligence", upcoming: true },
    { id: 2, title: "Web Dev Workshop", date: "2023-08-20", description: "Hands-on workshop for modern web development", upcoming: true },
    { id: 3, title: "Cybersecurity Summit", date: "2023-07-10", description: "Learn about the latest in cybersecurity", upcoming: false },
    { id: 4, title: "Data Science Expo", date: "2023-06-05", description: "Showcase of data science projects and innovations", upcoming: false },
];

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <p>${event.description}</p>
    `;
    card.addEventListener('click', () => {
        window.location.href = `event-details.html?id=${event.id}`;
    });
    return card;
}

function populateEvents() {
    const upcomingGrid = document.getElementById('upcoming-events-grid');
    const pastGrid = document.getElementById('past-events-grid');

    events.forEach(event => {
        const card = createEventCard(event);
        if (event.upcoming) {
            upcomingGrid.appendChild(card);
        } else {
            pastGrid.appendChild(card);
        }
    });
}

// Call the function to populate events when the page loads
window.addEventListener('load', populateEvents);

