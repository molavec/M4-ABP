import pacienteList from './pacientes.js';
import Paciente from './paciente.js';
import Consultorio from './consultorio.js';

const pacienteArray = pacienteList.map((paciente)=> {
  return new Paciente(
    paciente.nombre,
    paciente.edad,
    paciente.rut,
    paciente.diagnostico,
  );
});

const consultorio = new Consultorio('Consultorio Curitas', pacienteArray);

const buildListadoPacientes = (pacientes) => {
  return pacientes.map((paciente)=>{
    return `
      <div>
        <p><b>Nombre:</b> ${paciente.getNombre()}</p>
        <p><b>Edad:</b> ${paciente.edad}</p>
        <p><b>Rut:</b> ${paciente.rut}</p>
        <p><b>Diagnóstico:</b> ${paciente.diagnostico}</p>
      </div>
    `;
  }).join('<br><hr><br>');
}

document.getElementById('pacientes').innerHTML = `${buildListadoPacientes(consultorio.getPacientes())}`;


//console.log(buildListadoPacientes(consultorio.getPacientes()));

const search = (event) => {

  /* YOUR CODE GOES HERE */
  
  console.log(event.target.value);

  const input = event.target.value;
  
  if (input) {
    document.getElementById('pacientes').innerHTML = `${buildListadoPacientes(consultorio.searchPacientes(input))}`;
  } else {
    document.getElementById('pacientes').innerHTML = `${buildListadoPacientes(consultorio.getPacientes())}`;
  }

}


document.getElementById('input-name').addEventListener('change', search);
