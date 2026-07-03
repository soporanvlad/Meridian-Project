import api from "../api/api";

export async function createEmployee(data) {
    const response = await api.post("/admin/employees", data);
    return response.data;
}

export async function createResource(data) {
    const response = await api.post("/admin/resources", data);
    return response.data;
}

export async function createFAQ(data) {
    const response = await api.post("/admin/faq", data);
    return response.data;
}

export async function createTask(data) {
    const response = await api.post("/admin/tasks", data);
    return response.data;
}