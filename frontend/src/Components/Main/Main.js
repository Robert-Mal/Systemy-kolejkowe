import React from 'react';

import './Main.scss'
import Input from '../Input/Input';
import Output from '../Output/Output';

const Main = () => {
    return (
        <main className="main">
            <div className="main__content">
                <h2 className="main__heading">Dane wejściowe</h2>
                <Input name="lambda">Liczba zgłoszeń napływających w jednostce czasu <span>(λ)</span></Input>
                <Input name="mu">Liczba zgłoszeń obsługiwanych w jednostce czasu <span>(μ)</span></Input>
                <Input name="m">Liczba dostępnych kanałów obsługi <span>(m)</span></Input>
                <Input name="c1">Nie wiadomo <span>(C<sub>1</sub>)</span></Input>
                <Input name="c2">Nie wiadomo <span>(C<sub>2</sub>)</span></Input>
                <button className="main__button">Oblicz</button>
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