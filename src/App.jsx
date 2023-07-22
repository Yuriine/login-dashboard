import "./styles/login.css";
import "./App.css";

function App() {
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
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
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
        this.preferredColorScheme == "dark"
          ? (this._scheme = "dark")
          : (this._scheme = "light");
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
      document
        .querySelector("html")
        .setAttribute(this.rootAttribute, this.scheme);
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
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <a href="./" className="contrast">
              <strong>Brand</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary
                aria-haspopup="listbox"
                role="link"
                className="secondary"
              >
                Theme
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#" data-theme-switcher="auto">
                    Auto
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="light">
                    Light
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="dark">
                    Dark
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      <main className="container">
        <article className="grid">
          <div>
            <hgroup>
              <h1>Sign in</h1>
              <h2>A minimalist layout for Login pages</h2>
            </hgroup>
            <form>
              <input
                type="text"
                name="login"
                placeholder="Login"
                aria-label="Login"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                required
              />
              <fieldset>
                <label htmlFor="remember">
                  <input
                    type="checkbox"
                    role="switch"
                    id="remember"
                    name="remember"
                  />
                  Remember me
                </label>
              </fieldset>
              <button type="submit" className="contrast">
                Login
              </button>
            </form>
          </div>
          <div></div>
        </article>
      </main>

      <footer className="container-fluid">
        <small>
          Built with{" "}
          <a href="https://picocss.com" className="secondary">
            Pico
          </a>{" "}
          •
          <a
            href="https://github.com/picocss/examples/tree/master/v1-sign-in/"
            className="secondary"
          >
            Source code
          </a>
        </small>
      </footer>
    </>
  );
}

export default App;
