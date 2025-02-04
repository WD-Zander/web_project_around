export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  // Método para obtener la información del usuario
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    };
  }

  // Método para establecer la nueva información del usuario
  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
