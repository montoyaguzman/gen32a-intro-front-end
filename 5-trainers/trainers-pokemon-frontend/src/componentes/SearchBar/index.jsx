import './index.css'

function SearchBar({ handleParams }) {

    const handleForm = (event) => {
        event.preventDefault();

        // console.log(event);
        // console.log(event.target);

        const formElement = event.target;
        const formData = new FormData(formElement);

        const trainerName = formData.get('trainer-name');
        const isChampion = formData.get('isChampion');

        handleParams({ trainerName, isChampion });

    }


    return (
        <>
            <div className='container-form'>
                <form id='search-form' className='form-element' onSubmit={handleForm}>

                    <h2>Nombre del entrenador: </h2>
                    <input type="text" id="trainer-name" name="trainer-name" placeholder='Nombre entrenador...' />
                    <div className='radio-container'>
                        ¿Sólo campeones?:
                        <label htmlFor="true">Si</label>
                        <input type="radio" name="isChampion" id="isChampion" value="true" />

                        <label htmlFor="false">No</label>
                        <input type="radio" name="isChampion" id="isChampion" value="false" />
                    </div>

                    <input type="submit" className="button-default" value="Buscar" />

                </form>
            </div>
        </>
    );


}

export { SearchBar };