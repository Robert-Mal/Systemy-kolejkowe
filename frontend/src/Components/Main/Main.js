import React, { useState } from 'react';

import './Main.scss'
import Input from '../Input/Input';
import Output from '../Output/Output';

const Main = () => {
    const [values,updateValues] = useState({});

    const addValue = (e) => {
        const valCpy = values;
        valCpy[`${e.target.id}`] = e.target.value;
        updateValues(valCpy)
    }

    const calculate = () => {
        let url = '127.0.0.1:8080/api/system/get?';
        for (const value in values) {
            url += `${value}=${values[value]}&`
        }

        fetch(url.slice(0,-1))
        .then(response => {
          if (!response.ok) throw new Error('Couldn\'t fetch data');
          console.log(response);
          console.log(response.text());
        //   return response.json();
        })
        .then(data => {
            // console.log(data);
        //   const countriesCopy = [...state.countries]
        //   countriesCopy.push(data[0]);
        //   updateState({countries:countriesCopy })
        })
        .catch(err => alert(err))
    }

    return (
        <main className="main">
            <div className="main__content">
                <h2 className="main__heading">Dane wejściowe</h2>
                <Input name="lambda" blur={addValue}>Liczba zgłoszeń napływających w jednostce czasu <span>(λ)</span></Input>
                <Input name="mu" blur={addValue}>Liczba zgłoszeń obsługiwanych w jednostce czasu <span>(μ)</span></Input>
                <Input name="m" blur={addValue}>Liczba dostępnych kanałów obsługi <span>(m)</span></Input>
                <Input name="c1" blur={addValue}>Nie wiadomo <span>(C<sub>1</sub>)</span></Input>
                <Input name="c2" blur={addValue}>Nie wiadomo <span>(C<sub>2</sub>)</span></Input>
                <button onClick={calculate} className="main__button">Oblicz</button>
            </div>
            <div className="main__content main__content--results">
                <h2 className="main__heading">Wyniki</h2>
                <div className="main__results">
                    <Output>Prawdopodobieństwo, że system jest pusty <span>(P<sub>0</sub>)</span></Output>
                    <Output>Średnia długość kolejki <span>(<p>v</p>)</span></Output>
                    <Output>Średnia liczba zgłoszeń w systemie <span>(<p>n</p>)</span></Output>
                    <Output>Średnia liczba zgłoszeń w obsłudze <span>(<p>m</p><sub>0</sub>)</span></Output>
                    <Output>Średni czas oczekiwania zgłoszenia w kolejce <span>(<p>t</p><sub>t</sub>)</span></Output>
                    <Output>Średni czas przesycania zgłoszenia w systemie <span>(<p>t</p><sub>s</sub>)</span></Output>
                    <Output>Średnia liczba nie zajętych kanałów obsługi <span>(<p>m</p><sub>nz</sub>)</span></Output>
                    <Output>Wartość funkcji celu <span>(F(m))</span></Output>
                </div>
            </div>
        </main>
    )
}

export default Main;