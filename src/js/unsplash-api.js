export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com/';
  #API_KEY = 'Xn_eH2Gi-hkj7ulpwwCcpyWldnnOhEEXSryD5-QYcnQ';
  constructor() {
    this.searchQuery = ''
    this.page = 1
  }

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      query: this.searchQuery,
      per_page: 12,
      page: this.page,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    });
    return fetch(`${this.#BASE_URL}/search/photos?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
