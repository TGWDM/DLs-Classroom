import type { Student } from '../types/Student';

// Set the default api url
const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';


export const studentService = {
    getAll: async (): Promise<Student[]> => {
        const res = await fetch(`${API_BASE}/Students`);
        // if res doesn't return ok response throw error
        if (!res.ok) throw new Error('Failed to fetch students from db'); 
        // else return the response.
        return res.json();
    }
}