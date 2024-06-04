import './index.css';
import { Menu } from '../../componentes/Menu/';
import { SearchBar } from '../../componentes/SearchBar';
import { ListCard } from '../../componentes/ListCard';
import { Card } from '../../componentes/Card';

function Home() {
    return (
        <>
            <h1>Home works!</h1>
            <Menu />
            <SearchBar />
            <ListCard />
            <Card />
        </>
    )
}

export { Home };