import './index.css';
import { SearchBar } from '../../componentes/SearchBar';
import { ListCard } from '../../componentes/ListCard';
import { Card } from '../../componentes/Card';

function Home() {

    const trainers = [
        { name: 'ash ketchum', region: 'kanto', rank: 21 },
        { name: 'leonel', region: 'galar', rank: 40 },
        { name: 'james', region: 'kanto', rank: 40 },
    ];

    return (
        <>
            <SearchBar />

            <ListCard>

                {
                    trainers.map((trainer, index) => {
                        return (
                            <Card
                                key={index}
                                name={trainer.name}
                                region={trainer.region}
                                rank={trainer.rank}
                            />
                        )
                    })
                }

            </ListCard>

        </>
    )
}

export { Home };