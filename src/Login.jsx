const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handelSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
        </div>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button>Sign in</button>
              <p>
                Don't have an account ? <span>Sign up</span>{" "}
              </p>
            </>
          ) : (
            <>
              <button>Sign up</button>
              <p>
                Have an account ? <span>Sign in</span>{" "}
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Login;