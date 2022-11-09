import { axiosInstance } from "../utils/axiosInstance";

interface todoCreateData {
  title: string;
  text: string;
  status: string;
}

export const getAllTodos = () => {
  return axiosInstance.get("/");
};

export const getTodo = (id: number) => {
  return axiosInstance.get(`/${id}`);
};

export const createTodo = (data: todoCreateData) => {
  return axiosInstance.post("/", data);
};

export const updateTodo = (status: string, id: number) => {
  return axiosInstance.patch(`/${id}`, { status });
};

export const deleteTodo = (id: number) => {
  return axiosInstance.delete(`/${id}`);
};
