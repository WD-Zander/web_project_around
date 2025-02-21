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

    getUserInfo() { //1. Obtiene el usuario y nombre de la API
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    getInitialCards() { //2. Obtiene las tarjetas de la API
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    editUserInfo(data) { //3. Edita la información del usuario
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then(this._checkResponse);
    }
    addCard(){
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers:this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
        
            }).then(this._checkResponse)
      
        })
}

}