export default () => {
  return (
    <>
      <header className="container">
        <nav className="navbar">
          <a href="#" className="navbar-brand">
            <img src="/assets/navbar-brand.svg" className="logo-z" />
          </a>
        </nav>
      </header>

      <main>
        <section className="section-calculator-head mt-3 mb-5">
          <div className="container text-center">
            <h1>Masukkan nominal di kolom input bawah</h1>
          </div>
        </section>
        <section className="section-calculator-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <input type="text" className="w-100 p-2 text-end mb-3" placeholder="Masukkan Nominal"/>
                <div className="card card-details">
                  <h3 className="mt-2">Detail Zakat</h3>
                  <hr />
                  <table className="zakat-information">
                    <tbody>
                    <tr>
                      <th width="70%"><font className="heading">Zakat Mal</font></th>
                      <td width="30%" className="text-end">120.000</td>
                    </tr>
                    <tr>
                      <th width="70%">Infaq</th>
                      <td width="30%" className="text-end">0</td>
                    </tr>
                    <tr>
                      <th width="70%">Shadaqah Tathowu</th>
                      <td width="30%" className="text-end">0</td>
                    </tr>
                    <tr>
                      <th width="70%">Infaq Sabilillah</th>
                      <td width="30%" className="text-end">0</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="">
      <section className="row section-footer mt-auto">
          <img src="/assets/wave.svg" className="wave wave-zakat" />
        </section>
      </footer>
    </>
  );
};
