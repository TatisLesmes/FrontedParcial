const BuscarCedula = () => {
    const idDocente = document.getElementById('docenteId').value;
    console.log(idDocente);
    fetch(`http://localhost:8080/practica/docente/${idDocente}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = ''; // Clear previous details
    
        if (responseData.status === 'FOUND' && Array.isArray(responseData.data)) {
            responseData.data.forEach(practica => {
                const destinoLabel = document.createElement('div');
                destinoLabel.textContent = `Destino: ${practica.destino}`;
                detailsContainer.appendChild(destinoLabel);
    
                const fechaLabel = document.createElement('p');
                fechaLabel.textContent = `Fecha: ${practica.fecha}`;
                detailsContainer.appendChild(fechaLabel);
    
                const periodoLabel = document.createElement('p');
                periodoLabel.textContent = `Periodo: ${practica.periodo}`;
                detailsContainer.appendChild(periodoLabel);

                const empresaLabel = document.createElement('p');
                empresaLabel.textContent = `Empresa: ${practica.empresa.nombre}`;
                detailsContainer.appendChild(empresaLabel);

                const docenteLabel = document.createElement('p');
                docenteLabel.textContent = `Docente: ${practica.docente.nombre} ${practica.docente.apellido}`;
                detailsContainer.appendChild(docenteLabel);

                const numIdentificacionLabel = document.createElement('p');
                numIdentificacionLabel.textContent = `Num Identificacion: ${practica.docente.numIdentificacion}`;
                detailsContainer.appendChild(numIdentificacionLabel);

                detailsContainer.appendChild(document.createElement('p'));
            });
        } else {
            const errorLabel = document.createElement('p');
            errorLabel.textContent = 'No se encontraron prácticas para el docente especificado.';
            detailsContainer.appendChild(errorLabel);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = 'Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.';
    });

}
















  
                
