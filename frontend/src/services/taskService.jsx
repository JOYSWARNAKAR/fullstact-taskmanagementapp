import { apiService } from './api';
class TaskService {
  async getTasks() {
    return await apiService.get('/api/tasks');
  }
  async createTask(taskData) {
    return await apiService.post('/api/tasks', taskData);
  }
  async updateTask(taskId, taskData) {
    return await apiService.put(`/api/tasks/${taskId}`, taskData);
  }
  async deleteTask(taskId) {
    return await apiService.delete(`/api/tasks/${taskId}`);
  }
  async toggleTaskComplete(taskId) {
    return await apiService.put(`/api/tasks/${taskId}/toggle`);
  }
}

export const taskService = new TaskService();