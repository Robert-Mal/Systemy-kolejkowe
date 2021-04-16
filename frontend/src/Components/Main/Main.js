import React, { useState } from 'react';

import './Main.scss';
import Input from '../Input/Input';
import Output from '../Output/Output';

const Main = () => {
  const [state, updateState] = useState({ inputVal: {}, outputVal: [] });

  const addValue = e => {
    const valCpy = state.inputVal;
    valCpy[`${e.target.id}`] = e.target.value;
    updateState({
      inputVal: valCpy,
      outputVal: state.outputVal,
    });
  };

  const calculate = () => {
    let url = 'https://systemy-kolejkowe.herokuapp.com/api/system/get?';
    for (const value in state.inputVal) {
      url += `${value}=${state.inputVal[value]}&`;
    }

    fetch(url.slice(0, -1))
      .then(response => {
        if (!response.ok) throw new Error("Couldn't fetch data");
        return response.json();
      })
      .then(data => {
        updateState({
          inputVal: state.inputVal,
          outputVal: Object.values(data),
        });
      })
      .catch(err => alert(err));
  };

  return (
    <main className="main">
      <div className="main__content">
        <h2 className="main__heading">Dane wejściowe</h2>
        <Input name="lambda" blur={addValue}>
          Liczba zgłoszeń napływających w jednostce czasu <span>(λ)</span>
        </Input>
        <Input name="mu" blur={addValue}>
          Liczba zgłoszeń obsługiwanych w jednostce czasu <span>(μ)</span>
        </Input>
        <Input name="m" blur={addValue}>
          Liczba dostępnych kanałów obsługi <span>(m)</span>
        </Input>
        <Input name="c1" blur={addValue}>
          Nie wiadomo{' '}
          <span>
            (C<sub>1</sub>)
          </span>
        </Input>
        <Input name="c2" blur={addValue}>
          Nie wiadomo{' '}
          <span>
            (C<sub>2</sub>)
          </span>
        </Input>
        <button onClick={calculate} className="main__button">
          Oblicz
        </button>
      </div>
      <div className="main__content main__content--results">
        <h2 className="main__heading">Wyniki</h2>
        <div className="main__results">
          <Output val={state.outputVal[0]}>
            Prawdopodobieństwo, że system jest pusty{' '}
            <span>
              (P<sub>0</sub>)
            </span>
          </Output>
          <Output val={state.outputVal[1]}>
            Średnia długość kolejki{' '}
            <span>
              (<span>v</span>)
            </span>
          </Output>
          <Output val={state.outputVal[2]}>
            Średnia liczba zgłoszeń w systemie{' '}
            <span>
              (<span>n</span>)
            </span>
          </Output>
          <Output val={state.outputVal[3]}>
            Średnia liczba zgłoszeń w obsłudze{' '}
            <span>
              (<span>m</span>
              <sub>0</sub>)
            </span>
          </Output>
          <Output val={state.outputVal[4]}>
            Średni czas oczekiwania zgłoszenia w kolejce{' '}
            <span>
              (<span>t</span>
              <sub>t</sub>)
            </span>
          </Output>
          <Output val={state.outputVal[5]}>
            Średni czas przesycania zgłoszenia w systemie{' '}
            <span>
              (<span>t</span>
              <sub>s</sub>)
            </span>
          </Output>
          <Output val={state.outputVal[6]}>
            Średnia liczba nie zajętych kanałów obsługi{' '}
            <span>
              (<span>m</span>
              <sub>nz</sub>)
            </span>
          </Output>
          <Output val={state.outputVal[7]}>
            Wartość funkcji celu <span>(F(m))</span>
          </Output>
        </div>
      </div>
    </main>
  );
};

export default Main;
