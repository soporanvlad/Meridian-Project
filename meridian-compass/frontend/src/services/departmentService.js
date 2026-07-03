import api from "../api/api";
import endpoints from "../api/endpoints";

export async function getDepartments() {
    const response = await api.get(endpoints.departments);
    return response.data;
}