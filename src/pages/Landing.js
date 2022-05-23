import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <header className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <img src="/assets/navbar-brand.svg" alt="navbar-brand" className="logo-z" />
          </Link>
        </nav>
      </header>

      <main>
        <section className="section-index-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h1 className="mb-5">
                  Bersihkan Pendapatanmu Dengan{" "}
                  <font className="zakat-percentage">
                    2,5%
                    <span className="under-line"></span>{" "}
                    <span className="second-line"></span>
                  </font>
                </h1>
                <div className="row justify-content-center">
                  <img src="/assets/hero-image.svg" alt="hero" className="image-hero"/>
                </div>
                <p>
                  “Ambillah zakat dari sebagian harta mereka, dengan zakat itu
                  kamu membersihkan dan mensucikan mereka dan mendoalah untuk
                  mereka...” (At Taubah : 103)
                </p>
                <div className="text-center mt-3">
                  <Link to='/calculator-zakat' className="btn btn-kalkulator-zakat py-2 px-5">
                    Kalkulator Zakat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="row section-footer">
          <img src="/assets/wave.svg" alt="wave" className="wave"/>
        </section>
      </footer>
    </>
  );
};

export default Landing