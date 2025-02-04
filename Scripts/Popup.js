export default  class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);


    }
  
    // Método público para abrir el popup
    open() {
      this._popup.classList.add('popup__open');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    // Método público para cerrar el popup
    close() {
      this._popup.classList.remove('popup__open');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
    // Método privado para manejar el cierre del popup al presionar la tecla Esc
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    // Método público para agregar los listeners de eventos
    setEventListeners() {
      // Cerrar el popup al hacer clic en el icono de cierre
      this._closeButton.addEventListener('click', this.close);
      
      // Cerrar el popup al hacer clic en el área sombreada del formulario
      this._popup.addEventListener('mousedown', (evt) => {
        if (evt.target === this._popup) {
          this.close();
        }
      });
    }
  }
  