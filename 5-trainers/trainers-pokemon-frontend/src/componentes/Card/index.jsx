import './index.css';

function Card({ name, region, rank }) {
    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src="" alt="imagen del entrenador" />
                </div>
                <div className="card-content">
                    <div className="stats">
                        <p className="region-tag">{region}</p>
                        <div className="rank">
                            <p className="rank-label">rango</p>
                            <p className="rank-tag">{rank}</p>
                        </div>
                    </div>
                    <h2 className="title">{name}</h2>

                    <div className="team">
                        <h3 className="team-label">Equipo</h3>
                        <div className="team-members">


                            <div className="pokemon-tag">
                                <p className="pokemon-tag--name">pikachu</p>
                                <p className="pokemon-tag--level">Nivel: 30</p>
                            </div>


                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );
}

export { Card };