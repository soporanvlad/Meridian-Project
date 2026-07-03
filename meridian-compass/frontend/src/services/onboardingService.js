import api from "../api/api";
import endpoints from "../api/endpoints";

export async function getTasks() {
    const response = await api.get(endpoints.tasks);
    return response.data;
}

export async function getResources() {
    const response = await api.get(endpoints.resources);
    return response.data;
}

export async function getFAQ(params = {}) {
    const response = await api.get(endpoints.faq, { params });
    return response.data;
}

export async function getSchedule() {
    const response = await api.get(endpoints.schedule);
    return response.data;
}