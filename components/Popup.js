export default  class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    
     
    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this);
    this._closeButton = this._popup.querySelector('.form__close');
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
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup__open") ||
        event.target.classList.contains("form__close")
      ) {
        this.close();
        
      }
    });

  }

  }