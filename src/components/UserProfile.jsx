import { useState, useEffect } from 'react';

function UserProfile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) setUser(storedUser);
    }, []);

    const handleUpdate = () => {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile updated successfully!');
    };

    return (
        <div>
            <h2>User Profile</h2>
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
                type="text"
                placeholder="Fitness Goals"
                value={user.goals || ''}
                onChange={(e) => setUser({ ...user, goals: e.target.value })}
            />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
}

export default UserProfile;
