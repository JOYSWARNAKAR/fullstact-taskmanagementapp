// Vite picks the URL automatically:
// - npm run dev  -> .env.development (localhost:5000)
// - npm run build -> .env.production (Render)
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export const TASK_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed'
};

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: {
    minLength: 6,
    requireSpecialChar: false
  },
  taskTitle: {
    minLength: 1,
    maxLength: 100
  }
};