'use strict';
import axios from 'axios'
export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com/';
  #API_KEY = 'Xn_eH2Gi-hkj7ulpwwCcpyWldnnOhEEXSryD5-QYcnQ';
  constructor() {
    this.searchQuery = ''
    this.page = 1
    this.perPage = 12
  }

  fetchPhotos() {
    const searchParams = {
      query: this.searchQuery,
      per_page: this.perPage,
      page: this.page,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    };
    return axios.get(`${this.#BASE_URL}/search/photos`, {params: searchParams})
  }
}
