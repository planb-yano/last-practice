import axios from "axios";

const apiProject = {
  home: {
    get() {
      return axios.get("http://localhost:18080/v1/note");
    },
  },
  itemGet: {
    get(postId) {
      return axios.get(`http://localhost:18080/v1/note/${postId}`);
    },
  },
  itemPost: {
    post(post) {
      return axios.post("http://localhost:18080/v1/note", post);
    },
  },
  itemPut: {
    put(postId, post) {
      return axios.put(`http://localhost:18080/v1/note/${postId}`, post);
    },
  },
  itemDelete: {
    delete(postId) {
      return axios.delete(`http://localhost:18080/v1/note/${postId}`);
    },
  },
};

export default apiProject;
