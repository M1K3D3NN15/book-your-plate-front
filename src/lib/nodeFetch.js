const fetch = require('node-fetch');

const serverUrl = 'http://localhost:3030'
/**
 * @class
 * @classdesc Class for the communication with server
 */
class nodeFetch {

  static async get (url, body) {
    try {

    }catch (e) {

    }
  }

  /**
   * POST Request
   * @param url --> relative path of url
   * @param body - request body
   * @returns {Promise<*>}
   */
  static async post (url, body = {}) {
    try {
      const result = await fetch(serverUrl + url, { method: 'POST', body: body })
      return result
    }catch (e) {
      console.error(e)
    }
  }

  static async put (url, body) {
    try {

    }catch (e) {

    }
  }

  static async delete (url, body) {
    try {

    }catch (e) {

    }
  }

}

export default nodeFetch