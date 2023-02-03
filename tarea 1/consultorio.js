
function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

Consultorio.prototype.getNombre = function () {
  return this.nombre;
};

Consultorio.prototype.getPacientes = function () {
  return this.pacientes;
};

Consultorio.prototype.searchPacientes = function (nombre) {
  return this.pacientes.filter((paciente) => (paciente.nombre === nombre));
};

export default Consultorio;