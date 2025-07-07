import React, { useEffect, useState } from "react";
import { getAppointmentsByUser, deleteAppointment, updateAppointmentDate } from "./services/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [newDate, setNewDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        try {
            const data = await getAppointmentsByUser();
            setAppointments(data);
        } catch (err) {
            toast.error("Failed to load appointments");
        }
    };

    const handleDelete = async (appointmentId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
        if (!confirmDelete) return;
        try {
            await deleteAppointment(appointmentId);
            toast.success("Appointment deleted");
            setAppointments(appointments.filter(app => app.appointmentId !== appointmentId));
        } catch (err) {
            toast.error("Failed to delete appointment");
        }
    };

    const handleEdit = (appointmentId, currentDate) => {
        setEditingId(appointmentId);
        setNewDate(currentDate);
    };

    const handleUpdate = async (appointmentId) => {
        try {
            await updateAppointmentDate(appointmentId, newDate);
            toast.success("Appointment updated");
            setEditingId(null);
            loadAppointments(); // refresh list
        } catch (err) {
            toast.error("Failed to update");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">My Appointments</h2>
            <div className="table-responsive">
                <table
                    className="table table-bordered table-hover shadow"
                    style={{
                        background: "#f7f7f7",
                        borderRadius: 12,
                        overflow: "hidden",
                        boxShadow: "0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)"
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: "#505050", color: "#fff" }}>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>ID</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Vehicle Type</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Service Type</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Date</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Remarks</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">No appointments found.</td>
                            </tr>
                        ) : (
                            appointments.map((app) => (
                                <tr key={app.appointmentId} style={{ background: "#fff" }}>
                                    <td>{app.appointmentId}</td>
                                    <td>{app.vehicleType}</td>
                                    <td>{app.serviceType}</td>
                                    <td>
                                        {editingId === app.appointmentId ? (
                                            <input
                                                type="date"
                                                value={newDate}
                                                onChange={(e) => setNewDate(e.target.value)}
                                                className="form-control"
                                                style={{ minWidth: 120 }}
                                            />
                                        ) : (
                                            app.appointmentDate
                                        )}
                                    </td>
                                    <td>{app.remarks}</td>
                                    <td>
                                        {editingId === app.appointmentId ? (
                                            <>
                                                <button onClick={() => handleUpdate(app.appointmentId)} className="btn btn-sm btn-success me-2">Save</button>
                                                <button onClick={() => setEditingId(null)} className="btn btn-sm btn-secondary">Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => handleEdit(app.appointmentId, app.appointmentDate)} className="btn btn-sm btn-warning me-2">Edit</button>
                                                <button onClick={() => handleDelete(app.appointmentId)} className="btn btn-sm btn-danger">Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;