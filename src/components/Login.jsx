import React, { useState, useEffect } from 'react'
import './../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const themeSwitcher = {
        // Config
        _scheme: "auto",
        menuTarget: "details[role='list']",
        buttonsTarget: "a[data-theme-switcher]",
        buttonAttribute: "data-theme-switcher",
        rootAttribute: "data-theme",
        localStorageKey: "picoPreferredColorScheme",

        // Init
        init() {
            this.scheme = this.schemeFromLocalStorage;
            this.initSwitchers();
        },

        // Get color scheme from local storage
        get schemeFromLocalStorage() {
            if (typeof window.localStorage !== "undefined") {
                if (window.localStorage.getItem(this.localStorageKey) !== null) {
                    return window.localStorage.getItem(this.localStorageKey);
                }
            }
            return this._scheme;
        },

        // Preferred color scheme
        get preferredColorScheme() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        },

        // Init switchers
        initSwitchers() {
            const buttons = document.querySelectorAll(this.buttonsTarget);
            buttons.forEach((button) => {
                button.addEventListener(
                    "click",
                    (event) => {
                        event.preventDefault();
                        // Set scheme
                        this.scheme = button.getAttribute(this.buttonAttribute);
                        // Close dropdown
                        document.querySelector(this.menuTarget).removeAttribute("open");
                    },
                    false
                );
            });
        },

        // Set scheme
        set scheme(scheme) {
            if (scheme == "auto") {
                this.preferredColorScheme == "dark" ? (this._scheme = "dark") : (this._scheme = "light");
            } else if (scheme == "dark" || scheme == "light") {
                this._scheme = scheme;
            }
            this.applyScheme();
            this.schemeToLocalStorage();
        },

        // Get scheme
        get scheme() {
            return this._scheme;
        },

        // Apply scheme
        applyScheme() {
            document.querySelector("html").setAttribute(this.rootAttribute, this.scheme);
        },

        // Store scheme to local storage
        schemeToLocalStorage() {
            if (typeof window.localStorage !== "undefined") {
                window.localStorage.setItem(this.localStorageKey, this.scheme);
            }
        },
    };

    // Init
    themeSwitcher.init();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const storedUsername = localStorage.getItem('rememberedUsername');
        const storedPassword = localStorage.getItem('rememberedPassword');

        if (storedUsername && storedPassword) {
            setUsername(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('src/data/users.json');
            if (!response.ok) {
                throw new Error('Failed to load users data');
            }
            const data = await response.json();

            const usuarioEncontrado = data.users.find(
                (user) => user.username === username && user.password === password
            );

            if (usuarioEncontrado) {

                // axios.post('http://localhost:3030/profesores', { username, password });
                // console.log('¡Inició sesión correctamente!');
                //llevar a la otra pagina
                navigate('/dashboard',
                    {
                        state: {
                            username: username,
                            logged: true,

                        }
                    }
                );

                // // Antes de navegar a la página "/dashboard"
                // localStorage.setItem('userData', JSON.stringify({ username: username, logged: true }));

                // // Navegar a la página "/dashboard"
                // navigate('/dashboard');

                // // En el componente "Dashboard" o en cualquier otra página
                // const userData = JSON.parse(localStorage.getItem('userData'));
                // console.log(userData); // Mostrará { username: 'John', logged: true }

            } else {

                setError('Nombre de usuario o contraseña incorrectos.');

            }
        } catch (error) {
            setError('Error al cargar los datos de usuarios.');
            console.error('Error al cargar los datos de usuarios:', error);
        }
    };

    return (
        <div className='login-login'>
            <div className='container-login'>
                {/* <nav >
                <ul>
                    <li>
                        <details role="list" dir="rtl">
                            <summary aria-haspopup="listbox" role="link" className="secondary">Theme</summary>
                            <ul role="listbox">
                                <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                                <li><a href="#" data-theme-switcher="light">Light</a></li>
                                <li><a href="#" data-theme-switcher="dark">Dark</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
                </nav> */}

                <main className="login-login__login" >
                    <article className="grid login-container">
                        <div>
                            <hgroup>
                                <h1>Inicie Sesión</h1>
                                <h2>Rellene los siguientes campos</h2>
                            </hgroup>
                            <form onSubmit={handleLogin}>
                                <input
                                    type="text"
                                    name="login"
                                    placeholder="Login"
                                    aria-label="Login"
                                    autoComplete="nickname"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <fieldset>
                                    <label htmlFor="remember">
                                        <input
                                            type="checkbox"
                                            role="switch"
                                            id="remember"
                                            name="remember"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        Recuérdame
                                    </label>
                                </fieldset>
                                <button type="submit" className="contrast" onClick={handleLogin}>Acceder</button>
                            </form>
                            {error && <p>{error}</p>}
                        </div>
                        <div className='login-image'>
                            <img src="../public/imag.jpg" alt="" />
                        </div>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Login;

