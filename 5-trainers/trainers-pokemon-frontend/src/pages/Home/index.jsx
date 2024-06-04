import './index.css';
import { SearchBar } from '../../componentes/SearchBar';
import { ListCard } from '../../componentes/ListCard';
import { Card } from '../../componentes/Card';

function Home() {
    return (
        <>
            <h1>Home works!</h1>
            <SearchBar />
            <ListCard />
            <Card />
        </>
    )
}

export { Home };