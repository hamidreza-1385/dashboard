import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'demo' && password === 'demo1234') {
            navigate('/dashboard'); // هدایت به صفحه داشبورد
        } else {
            alert('نام کاربری یا رمز عبور اشتباه است!');
        }
    };

    return (
        <div className="login-container">
            <h2>ورود به حساب کاربری</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="نام کاربری"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"><FontAwesomeIcon icon={faRightFromBracket}/>ورود</button>
                {/* <Link to={'/dashboard'}><button type="submit"><FontAwesomeIcon icon={faRightFromBracket}/>ورود</button></Link> */}
            </form>
        </div>
    );
};

export default Login;
