class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static authenticateEmp(token){
    localStorage.setItem('tokenEmp', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */

  static isUserAuthenticated() {
    if(localStorage.getItem('token') !==null ){

        return 1;

    }
    if(localStorage.getItem('emp') !== null ){

          return 2 ;

    }
    if(localStorage.getItem('admin') !==null){

          return 3;
    }
    if(localStorage.getItem('unive') !== null){
      return 4;
    }
    if(localStorage.getItem('proye') !== null){
      return 5;
    }
    if(sessionStorage.getItem('escuela') !==null){
      return 9;
    }
    else {
      return false;
    }

  }

static rCache(){
  sessionStorage.removeItem('escuela')
}
  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('emp');
    localStorage.removeItem('admin');
    localStorage.removeItem('unive');
    localStorage.removeItem('proye');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;
