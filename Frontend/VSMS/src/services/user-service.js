import { myAxios } from "./helper";

export const signUP = (user) => {
  return myAxios.post("/auth/signup", user).then((response) => {
    return response.data; // ✅ return the data
  });
};

export const loginUser = (loginData) => {
  return myAxios.post("/auth/login", loginData).then((res) => res.data);
};

export const bookAppointment = (appointmentData) => {
  return myAxios.post("/appointments/book", appointmentData).then((res) => res.data);
};

export const getAppointmentsByUser = () => {
  return myAxios.get("/appointments/my").then((res) => res.data);
};

export const deleteAppointment = (id) => {
  return myAxios.delete(`/appointments/${id}`);
};

export const updateAppointmentDate = (appointmentId, newDate) => {
  return myAxios.put(`/appointments/${appointmentId}`, newDate, {
  headers: {
    'Content-Type': 'application/json'
  }
});
}

export const submitContactMessage = (formData) => {
  return myAxios.post("/contact-us", formData);
};
