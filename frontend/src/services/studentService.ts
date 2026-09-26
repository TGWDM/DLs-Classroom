import type { Student } from '../types/Student';

// Set the default api url
const API_BASE = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:5212/api';


export const studentService = {
    getAll: async (): Promise<Student[]> => {
        const res = await fetch(`${API_BASE}/Students`);
        
        if (res.status === 204) return []; // No students retunr empty array
        // if res doesn't return ok response throw error
        if (!res.ok) throw new Error('Failed to fetch students from db'); 
        // else return the response.
        return res.json();
    }
}