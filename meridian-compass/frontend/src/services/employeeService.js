import api from "../api/api";
import endpoints from "../api/endpoints";

export async function getEmployees(params = {}) {
    const response = await api.get(endpoints.employees, { params });
    return response.data;
}