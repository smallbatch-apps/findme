import {data} from './data';

export default class PersistenceService {

  getJobs() {
    return data;
  }

  getJob(id) {
    return data.filter(job => job.id === id)[0];
  }
}