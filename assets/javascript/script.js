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
        techstacks: "PHP, Laravel, MySQL, AWS, HTML, CSS, JavaScript",
        contributions: "Designed database schema, implemented payment gateway integration, optimized page loading speed by 40%, Enhanced user experience with a streamlined booking workflow, Developed robust error-handling mechanisms for smoother operations.",
        challenges: "Handling concurrent users and ensuring smooth transaction processing, Managing real-time notifications for bookings and updates.",
        solution: "Implemented caching mechanisms and load balancers to improve performance, Integrated WebSocket for real-time updates and notifications."
    },
    project2: {
        name: "iAlignEd",
        overview: "Developed a learning platform and integrated third-party services to manage seamless data exchange.",
        techstacks: "PHP, Laravel, MySQL, Postman, Redis",
        contributions: "Developed secure authentication using JWT, documented APIs using Swagger, Created role-based access control for user management, Designed efficient database queries to handle large datasets.",
        challenges: "Ensuring API security and data validation, Maintaining performance with increasing user base and data volume.",
        solution: "Implemented thorough testing and secure middleware, Optimized database indexing to improve query performance."
    },
    project3: {
        name: "Portfolio Website",
        overview: "A personal portfolio website showcasing skills, projects, and achievements.",
        techstacks: "HTML, CSS, JavaScript, Bootstrap",
        contributions: "Designed and implemented responsive UI, optimized for SEO, Integrated analytics tools for tracking user interactions, Ensured cross-browser compatibility for wider accessibility.",
        challenges: "Creating a unique yet functional design, Managing performance with multimedia-heavy content.",
        solution: "Followed modern UI/UX principles and conducted usability testing, Minimized media sizes and utilized lazy loading for improved page performance."
    },
    project4: {
        name: "AI Photography",
        overview: "A cutting-edge software designed to seamlessly distribute AI-processed photos to users through WhatsApp, enabling efficient and personalized photo sharing.",
        techstacks: "PHP, Laravel, MySQL, Postman, Python, HTML",
        contributions: "Developed the core backend system for processing and distributing photos, Optimized database queries for faster user-specific photo retrieval, Coordinated API integrations for WhatsApp-based photo delivery.",
        challenges: "Integrating Python-based AI prototypes with the existing PHP framework.",
        solution: "Successfully bridged Python's AI processing capabilities with Laravel by designing an API-driven integration module, ensuring smooth communication between the technologies and maintaining data consistency."
    },
    project5: {
        name: "Fuerza Fashion",
        overview: "An e-commerce platform tailored for the fashion industry, providing seamless user experiences for browsing, purchasing, and managing products online.",
        techstacks: "PHP, Laravel, MySQL, Postman, HTML, CSS, JavaScript",
        contributions: "Designed and implemented the product catalog and user management system, Enhanced user interface for responsive and visually appealing design, Streamlined payment and order management workflows.",
        challenges: "Developing an inventory management system to handle fluctuating stock levels and multiple product variants.",
        solution: "Built a robust inventory management module that tracks stock levels in real-time, supports multiple warehouses, and generates automated restocking alerts."
    },
    project6: {
        name: "Namma Reparts",
        overview: "A marketplace for buying and selling second-hand vehicle parts, providing a user-friendly platform for both sellers and buyers.",
        techstacks: "PHP, Laravel, MySQL, Postman, HTML, Bootstrap, JavaScript",
        contributions: "Conducted client meetings to understand business requirements and set clear project goals, Planned project timelines and assigned tasks to team members to ensure timely delivery, Developed the front-end interface and contributed to backend architecture design.",
        challenges: "Frequent design changes requested by stakeholders, impacting project timelines.",
        solution: "Implemented a modular design framework using Bootstrap to accommodate quick design iterations. Maintained clear communication with stakeholders to align expectations and prioritize changes effectively."
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    const modalDetails = document.getElementById("modalDetails");

    modalDetails.innerHTML = `
        <h3>${project.name}</h3>
        <p><strong>Overview:</strong> ${project.overview}</p>
        <p><strong>Tech Stack:</strong> ${project.techstacks}</p>
        <h4>My Contributions:</h4>
        <ul>
            ${project.contributions.split(', ').map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h4>Challenges:</h4>
        <p>${project.challenges}</p>
        <h4>Solution:</h4>
        <p>${project.solution}</p>
    `;

    document.getElementById("projectModal").style.display = "flex";
}


function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
