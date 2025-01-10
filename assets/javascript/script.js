// Optional JavaScript for interactivity
console.log('Portfolio loaded');

// Header mobile responsiveness
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});


// JavaScript for Modal Functionality
const projects = {
    project1: {
        name: "Aakri App",
        overview: "A feature-rich booking system with item pickup and secure payment integration.",
        techstacks: "PHP, Laravel, MySQL, AWS,  HTML, CSS, JavaScript",
        contributions: "Designed database schema, implemented payment gateway integration, optimized page loading speed by 40%.",
        challenges: "Handling concurrent users and ensuring smooth transaction processing.",
        solution: "Implemented caching mechanisms and load balancers to improve performance."
    },
    project2: {
        name: "iAlignEd",
        overview: "Developed a learning platform and integrate third-party services and manage seamless data exchange.",
        techstacks: "PHP, Laravel, MySQL, Postman, Redis",
        contributions: "Developed secure authentication using JWT, documented APIs using Swagger.",
        challenges: "Ensuring API security and data validation.",
        solution: "Implemented thorough testing and secure middleware."
    },
    project3: {
        name: "Portfolio Website",
        overview: "A personal portfolio website showcasing skills, projects, and achievements.",
        techstacks: "HTML, CSS, JavaScript, Bootstrap",
        contributions: "Designed and implemented responsive UI, optimized for SEO.",
        challenges: "Creating a unique yet functional design.",
        solution: "Followed modern UI/UX principles and conducted usability testing."
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    const modalDetails = document.getElementById("modalDetails");

    modalDetails.innerHTML = `
        <h3>${project.name}</h3>
        <p><strong>Overview:</strong> ${project.overview}</p>
        <p><strong>Tech Stacks:</strong> ${project.techstacks}</p>
        <p><strong>My Contributions:</strong> ${project.contributions}</p>
        <p><strong>Challenges:</strong> ${project.challenges}</p>
        <p><strong>Solution:</strong> ${project.solution}</p>
    `;

    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
