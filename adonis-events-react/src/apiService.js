import axios from 'axios'

class ApiService{
  constructor(){
    this.http = axios.create({baseURL: 'http://localhost:3333/api'})
  }

  getEvents = async () => {
    return this.http.get('/events')
  }

  storeEvent = async (event) => {
    return this.http.post('/events', event)
  }

  deleteEvent = async (id) => {
    return this.http.delete(`/events/${id}`)
  }
}


export default ApiService;