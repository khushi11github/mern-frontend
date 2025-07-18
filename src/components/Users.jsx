import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const frmRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [page, setPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(2);
  const [editId, setEditId] = useState();
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchUsers = async () => {
    try {
      setError("Loading...");
      const url = `${API_URL}/api/users/?page=${page}&limit=${limit}&search=${searchVal}`;
      const result = await axios.get(url);
      setUsers(result.data.users);
      setTotalPages(result.data.total);
      setError();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const url = `${API_URL}/api/users/${id}`;
      await axios.delete(url);
      setError("User Deleted Successfully");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const frm = frmRef.current;
    if (!frm.checkValidity()) {
      frm.reportValidity();
      return;
    }
    try {
      const url = `${API_URL}/api/users`;
      await axios.post(url, form);
      setError("User added successfully");
      fetchUsers();
      resetForm();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const frm = frmRef.current;
    if (!frm.checkValidity()) {
      frm.reportValidity();
      return;
    }
    try {
      const url = `${API_URL}/api/users/${editId}`;
      await axios.patch(url, form);
      fetchUsers();
      setEditId();
      resetForm();
      setError("User information updated successfully");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleCancel = () => {
    setEditId();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="user-container">
      <h2>User Management</h2>
      {error && <p style={{ textAlign: "center", color: "#c0392b" }}>{error}</p>}

      <form ref={frmRef}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            name="email"
            value={form.email}
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="New Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={form.role}
            required
            onChange={handleChange}
          >
            <option value="">--Select Role--</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-button-group">
          {editId ? (
            <>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button onClick={handleAdd}>Add</button>
          )}
        </div>
      </form>

      <div className="search-bar" style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search by name or email..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={() => fetchUsers()}>Search</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value) => (
              <tr key={value._id}>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.role}</td>
                <td>
                  <button onClick={() => handleEdit(value)}>Edit</button>
                  <button onClick={() => handleDelete(value._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
