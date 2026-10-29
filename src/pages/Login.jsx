import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);
            setMessage("");
            setError("");


            const loginData = await loginUser(formData);
            console.log("Login successful:", loginData);

            localStorage.setItem("token", loginData.token);
            localStorage.setItem("user", JSON.stringify(loginData.user));

            setMessage("Login successful.");
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message);

        } finally {
            console.log("Login process completed.");
            setLoading(false);
        }
    }

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {message && <p>{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </section>
    );
}

export default Login;