'use strict';
'use strict';

class JsonPlaceholderApi {
   #BASE_URL = 'https://jsonplaceholder.typicode.com'
  constructor() {
    this.page = 1
  }
  fetchPosts() {
    return fetch(`${this.#BASE_URL}/posts?_limit=9&_page=${this.page}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
 }

 export default JsonPlaceholderApi