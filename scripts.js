document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
    
    // Agregar evento a los enlaces de navegación
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Prevenir la acción predeterminada de recargar la página
            const sectionId = link.getAttribute('href').substring(1);  // Obtener el ID de la sección
            showSection(sectionId);

            // Eliminar la clase 'selected' de todos los enlaces
            links.forEach(link => link.classList.remove('selected'));
            
            // Agregar la clase 'selected' al enlace clicado
            link.classList.add('selected');
        });
    });

    // Agregar evento a los enlaces de proyectos dentro del panel lateral
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('href').substring(1);
            const projectElements = document.querySelectorAll('.project');
            
            // Ocultar todos los proyectos
            projectElements.forEach(project => {
                project.style.display = 'none';
            });
            
            // Mostrar el proyecto seleccionado
            const selectedProject = document.getElementById(projectId);
            if (selectedProject) {
                selectedProject.style.display = 'block';  // Mostrar solo el proyecto seleccionado
                selectedProject.scrollIntoView({ behavior: 'smooth' }); // Desplazar suavemente a la sección del proyecto
            }

            // Eliminar la clase 'selected' de todos los enlaces de proyecto
            projectLinks.forEach(link => link.classList.remove('selected'));
            
            // Agregar la clase 'selected' al enlace clicado
            link.classList.add('selected');
        });
    });

    // Esperar 5 segundos y luego ocultar el footer
    setTimeout(() => {
        const footer = document.getElementById('footer');
        footer.classList.add('hide');  // Agregar la clase que hace que desaparezca
    }, 1000);  // 5000 milisegundos = 5 segundos
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
