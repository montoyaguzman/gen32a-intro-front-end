import './index.css';
import deafultImage from '../../assets/img/default-photo.jpeg';

function Card({ name, image, region, rank, team }) {

    const imgStyles = {
        width: '100%',
        height: '100%'
    };

    // const name = nameStudent || '';

    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src={image || deafultImage} alt="imagen del entrenador" style={imgStyles} />
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

                            {
                                team.length > 0
                                    ? team.map((element, index) => {
                                        return (
                                            <div className="pokemon-tag" key={index}>
                                                <p className="pokemon-tag--name">{element.pokemon}</p>
                                                <p className="pokemon-tag--level">Nivel: {element.level}</p>
                                            </div>
                                        );
                                    })
                                    : <div>no members team</div>
                            }

                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );
}

export { Card };