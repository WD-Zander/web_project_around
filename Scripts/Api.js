export default class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    //1. Obtiene el usuario y nombre de la API
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    //2. Obtiene las tarjetas de la API
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo(data) {
    //3. Edita la información del usuario
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }
  addCard(data) {
    //4. Agrega una nueva tarjeta
    return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link,
        }),
    }).then(this._checkResponse);
  }
  like(cardId) {
    //5. Agrega un like a una tarjeta
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  notLike(cardId) {
    //6. Elimina un like a una tarjeta
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  
}
 

export const api = new Api("https://around-api.es.tripleten-services.com/v1", {
  authorization: "dc190778-fc60-4d05-91c2-46d4fb62cf61",
  "Content-Type": "application/json",
});
