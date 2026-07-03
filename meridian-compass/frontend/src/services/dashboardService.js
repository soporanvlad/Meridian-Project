import api from "../api/api";
import endpoints from "../api/endpoints";

export async function getDashboardSummary() {
    const response = await api.get(endpoints.dashboard);
    return response.data;
}