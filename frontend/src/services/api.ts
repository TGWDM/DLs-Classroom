// Set the default api url
const API_BASE = "http://localhost:5000/api";

// async function calling get all students endpoint
export const  getStudents = async () =>{
    const res = await fetch(`${API_BASE}/Students`);
    return res.json();
}