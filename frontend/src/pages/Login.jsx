import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required.");
            return;
        }

        if (!password) {
            setError("Password is required.");
            return;
        }

        setError("");

        console.log("Login form submitted");
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>

            <p className="mt-3">
                Current email: {email}
            </p>

            <p>
                Current password: {password}
            </p>
        </div>
    );
}

export default Login;