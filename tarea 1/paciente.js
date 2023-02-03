'use strict';

/**
 * Paciente class.
 *
 * @constructor
 * @param {String} nombre - name of a paciente.
 * @param {Number} edad  - edad of a paciente.
 * @param {String} rut  - rut of a paciente.
 * @param {String} diagnostico  - rut of a paciente.
 */

function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;

  this.getNombre = function(){
    return this.nombre;
  }
}

// Paciente.prototype.getNombre = function () {
//   return this.nombre;
// };

Paciente.prototype.getEdad = function () {
  return this.edad;
};

Paciente.prototype.getRut = function () {
  return this.rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this.diagnostico;
};

Paciente.prototype.setName = function (name) {
  return this.name = name;
};

Paciente.prototype.setEdad = function (edad) {
  return this.edad = edad;
};

Paciente.prototype.setRut = function (rut) {
  return this.rut = rut;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
  return this.diagnostico = diagnostico;
};

export default Paciente;


