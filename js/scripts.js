// Fetch projects data from the projects.json file
fetch('projects.json')
    .then(response => response.json()) // Parse the JSON response
    .then(projects => {
        const container = document.querySelector('.projects-container'); // Get the container for projects

        // Loop through the projects and create HTML for each one
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank" class="project-link">View Project</a>
    `;

            container.appendChild(projectElement); // Append the project to the container
        });
    })
    .catch(error => {
        console.error('Error loading projects:', error);
    });

function resizeCanvas() {
    const canvas = document.getElementById('viewport');
    const padding = 25;
    canvas.width = window.innerWidth - padding;
    canvas.height = window.innerHeight / 2 - padding;
}

// Initial call to set canvas dimensions
resizeCanvas();

// Listen for window resize events
window.addEventListener('resize', resizeCanvas);