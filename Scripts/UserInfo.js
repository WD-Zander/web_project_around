export default class UserInfo {
  constructor({ nameSelector, jobSelector , imageProfile}) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._imageProfile = document.querySelector(imageProfile);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
      avatar: this._imageProfile.src,
    };
   
  }

  setUserInfo({ name, about , avatar} = {}) {
    if (name) {
      this._nameElement.textContent = name;
    }
    if (about) {
      this._jobElement.textContent = about;
    }
   
    if (avatar) {
      this._imageProfile.src = avatar;
    }
  }
  
}