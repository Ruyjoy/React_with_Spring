import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "";

class ClienteService {

  getAllClientes() {
    return axios.get(CLIENTE_BASE_REST_API_URL );
  }

}

export default new ClienteService();