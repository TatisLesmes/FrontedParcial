const cargarEstudiantes = () => {
    const practicaId = document.getElementById('practicaId').value;
    console.log(practicaId);

    fetch(`http://localhost:8080/estudiante/practica/${practicaId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        const tablaEstudiantes = document.getElementById('tablaEstudiantes');
        tablaEstudiantes.innerHTML = ''; // Clear previous details

        if (responseData.status === 'FOUND' && Array.isArray(responseData.data)) {
            responseData.data.forEach(estudiante => {
                const fila = document.createElement('tr');

                const nombreCelda = document.createElement('td');
                nombreCelda.textContent = `Nombre: ${estudiante.nombre}`;
                fila.appendChild(nombreCelda);

                const identificacionCelda = document.createElement('td');
                identificacionCelda.textContent = estudiante.numeroIdentificacion;
                fila.appendChild(identificacionCelda);

                tablaEstudiantes.appendChild(fila);
            });
        } else {
            const errorRow = document.createElement('tr');
            const errorCell = document.createElement('td');
            errorCell.colSpan = 2;
            errorCell.textContent = 'No se encontraron estudiantes para esta práctica.';
            tablaEstudiantes.appendChild(errorRow);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const tablaEstudiantes = document.getElementById('tablaEstudiantes');
        tablaEstudiantes.innerHTML = '<tr><td colspan="2">Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.</td></tr>';
    });
}

});
