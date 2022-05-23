import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const CalculatorZakat = () => {
  const [initValue, setInitValue] = useState({ inputValue: 0 });
  const [zm, setZm] = useState({ value: 0 });
  const [ir, setIr] = useState({ value: 0 });
  const [is, setIs] = useState({ value: 0 });
  const [total, setTotal] = useState({value: 0})

  const inputValue = initValue?.inputValue;
  const zmValue = zm?.value;
  const irValue = ir.value;
  const isValue = is.value;

  useEffect(() => {
    const getZM = z => {
      const zakat = (parseInt(z) / 100) * 2.5
      setZm({
        ...zm,
        value: zakat,
      });
    };
    getZM(initValue.inputValue);
  }, [inputValue]);

  useEffect(() => {
    const getIr = (value, zmValue) => {
      try {
        const infaq = ((parseInt(value) - parseInt(zmValue)) / 100) * 2.5
        setIr({
          ...ir,
          value: infaq,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getIr(initValue.inputValue, zm.value);
  }, [zmValue]);

  useEffect(() => {
    const getIs = (initValue, zmValue, irValue) => {
      try {
        const infaq = ((parseInt(initValue) - (parseInt(zmValue) + parseInt(irValue))) /
        100) * 2.5
        setIs({
          ...is,
          value: infaq,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getIs(initValue.inputValue, zm.value, ir.value);
  }, [irValue]);

  useEffect(() => {
    const getTotal = (a, b, c) => {
      setTotal({...total, value: a + b + c})
    };
    getTotal(zm.value, ir.value, is.value);
  }, [isValue])

  return (
    <>
      <header className="container">
        <nav className="navbar">
          <Link to='/' className="navbar-brand">
            <img src="/assets/navbar-brand.svg" alt="navbar-brand" className="logo-z" />
          </Link>
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
                <NumberFormat
                  placeholder='Masukkan Nominal'
                  onValueChange={ (values) => {
                    const { value } = values
                    setInitValue({...initValue, inputValue: value})
                  }}
                  className="w-100 p-2 text-end mb-3"
                  thousandSeparator= {true}
                />
                <div className="card card-details">
                  <h3 className="mt-2">Detail Zakat</h3>
                  <hr />
                  <table className="zakat-information">
                    <tbody>
                      <tr>
                        <th width="70%">
                          <font className="heading">Zakat Mal</font>
                        </th>
                        <td width="30%" className="text-end">
                          <NumberFormat 
                            value={isNaN(zm?.value) ? 0 : Math.round(zm?.value)}
                            thousandSeparator={true}
                            displayType='text'
                          />
                        </td>
                      </tr>
                      <tr>
                        <th width="70%">Infaq</th>
                        <td width="30%" className="text-end">
                          <NumberFormat 
                            value= {isNaN(ir?.value) ? 0 : Math.round(ir?.value)}
                            thousandSeparator= {true}
                            displayType='text'
                          />
                        </td>
                      </tr>
                      <tr>
                        <th width="70%">Infaq Sabilillah</th>
                        <td width="30%" className="text-end">
                          <NumberFormat 
                            value= {isNaN(is?.value) ? 0 : Math.round(is?.value)}
                            thousandSeparator= {true}
                            displayType='text'
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <div className="d-flex">
                    <div className="h3">Total :</div>
                    <div className="h3 ms-auto">
                      <NumberFormat 
                        value= {isNaN(total.value) ? 0 : Math.round(total.value)}
                        thousandSeparator= {true}
                        prefix= {'Rp. '}
                        displayType='text'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-5">
        <section className="row section-footer mt-auto">
          <img src="/assets/wave.svg" alt="wave" className="wave wave-zakat" />
        </section>
      </footer>
    </>
  );
};

export default CalculatorZakat