export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer; // Función que va a renderizar las tarjetas
    this._container = document.querySelector(containerSelector);
  }

  // Método para agregar una tarjeta al contenedor
  addItem(element) {
    this._container.append(element);
  }

  // Método para renderizar todas las tarjetas
  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }
}
