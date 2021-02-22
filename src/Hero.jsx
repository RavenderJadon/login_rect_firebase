const Hero = ({ handelLogout }) => {
  return (
    <div>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          <button onClick={handelLogout}>Logout</button>
        </nav>
      </section>
    </div>
  );
};

export default Hero;
