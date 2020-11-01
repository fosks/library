import https from "../http-common";

class BookDataService {

    getAll() {
        return https.get("/library_api");
    }

    get(id) {
        return https.get(`/library_api/${id}`);
    }

    create(data) {
        return https.post("/library_api", data);
    }

    update(id, data) {
        return https.put(`/library_api/${id}`, data);
    }

    delete(id) {
        return https.delete(`/library_api/${id}`);
    }

    deleteAll() {
        return https.delete(`/library_api`);
    }

    findByTitle(title) {
        return https.get(`/library_api?title=${title}`);
    }
}

export default new BookDataService();