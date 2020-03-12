import axios from 'axios';

const LISTINGS_SERVICE_URI = 'http://listings-service:7100';

export default class ListingsService {
  static async fetchAllListings() {
    const { data } = await axios.get(`${LISTINGS_SERVICE_URI}/listings`);
    const listings = data.listings;
    return listings;
  }
}
