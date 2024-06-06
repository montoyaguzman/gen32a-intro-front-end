import './index.css';
import { SearchBar } from '../../componentes/SearchBar';
import { ListCard } from '../../componentes/ListCard';
import { Card } from '../../componentes/Card';

function Home() {
    return (
        <>
            <SearchBar />
            <ListCard />
            <Card />
        </>
    )
}

export { Home };