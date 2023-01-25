import axios from "axios";

const apiNote = {
  findAllNote: {
    get() {
      return axios.get("http://localhost:18080/v1/note");
    },
  },
  findByNote: {
    get(postId) {
      return axios.get(`http://localhost:18080/v1/note/${postId}`);
    },
  },
  createNote: {
    post(post) {
      return axios.post("http://localhost:18080/v1/note", post);
    },
  },
  updateNote: {
    put(postId, post) {
      return axios.put(`http://localhost:18080/v1/note/${postId}`, post);
    },
  },
  deleteNote: {
    delete(postId) {
      return axios.delete(`http://localhost:18080/v1/note/${postId}`);
    },
  },
};

export default apiNote;
