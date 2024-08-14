import { useState } from 'react';

function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleRegister = () => {
        localStorage.setItem('user', JSON.stringify(user));
        alert('User registered successfully!');
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
