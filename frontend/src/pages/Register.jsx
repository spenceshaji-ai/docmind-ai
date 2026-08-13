import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setError("Name is required.");
            return;
        }

        if (!email) {
            setError("Email is required.");
            return;
        }

        if (!password) {
            setError("Password is required.");
            return;
        }

        if (!confirmPassword) {
            setError("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        setLoading(true);

        console.log("Registration form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>

                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>

            <p className="mt-3">
                Name: {name}
            </p>

            <p>
                Email: {email}
            </p>

            <p>
                Password: {password}
            </p>

            <p>
                Confirm Password: {confirmPassword}
            </p>
        </div>
    );
}

export default Register;