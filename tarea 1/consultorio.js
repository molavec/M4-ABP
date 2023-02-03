
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

Consultorio.prototype.setNombre = function (nombre) {
  return this.nombre = nombre;
};

Consultorio.prototype.setPacientes = function (pacientes) {
  return this.pacientes = pacientes;
};

export default Consultorio;