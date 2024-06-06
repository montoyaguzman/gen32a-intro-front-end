import './index.css';
import { SearchBar } from '../../componentes/SearchBar';
import { ListCard } from '../../componentes/ListCard';
import { Card } from '../../componentes/Card';
import { getTrainers } from '../../services/trainers';
import { useState, useEffect } from 'react';

function Home() {

    const [trainers, setTrainers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [params, setParams] = useState({});

    const getData = async (params) => {
        const newTrainers = await getTrainers(params);
        setTrainers(newTrainers);
    };

    const handleNumber = () => {
        setCounter(counter + 1)
    }

    const handleParams = ({ trainerName, isChampion }) => {
        const newParams = { trainerName, isChampion };
        setParams(newParams);
    }

    // 1. El useEffect no tiene condiciones:
    // ===> El callback se ejecuta en cada renderizado (mount, didMount).
    useEffect(() => {
        console.log('Ejecutando el useEffect SIN CONDICIONES');
    });

    // 2. El useEffect tiene como condicion un []
    // ===> El callback se ejecuta solo en el primer render (didMount).
    useEffect(() => {
        console.log('Ejecutando el useEffect cuando hay [] (solo la primera vez)');
        getData();
    }, []);

    useEffect(() => {
        console.log('Ejecutando el useEffect cuando cambia counter');
    }, [counter]);

    useEffect(() => {
        getData(params);
    }, [params]);

    return (
        <>

            <div className="counter-container">
                <button onClick={handleNumber}>Incrementar</button>
                <span>El numero es: {counter}</span>
            </div>

            <SearchBar handleParams={handleParams} />

            <ListCard>

                {
                    trainers.length > 0
                        ? trainers.map((trainer, index) => {
                            return (
                                <Card
                                    key={index}
                                    name={trainer.name}
                                    image={trainer.imgs.card}
                                    region={trainer.region.name}
                                    rank={trainer.rank}
                                    team={trainer.team}
                                />
                            )
                        })
                        : <div>no info...</div>
                }

            </ListCard>

        </>
    )
}

export { Home };