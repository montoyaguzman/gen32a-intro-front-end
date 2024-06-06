const URL = 'http://localhost:3000/trainers';

const getTrainers = async (params) => {
    console.log('params:', params)


    let newUrl = URL;
    if (params && (params.trainerName || params.isChampion)) {
        newUrl = `${URL}?name=${params.trainerName}&isChampion=${params.isChampion}`
    }

    const request = await fetch(newUrl);
    const response = await request.json();
    return response;
};

export { getTrainers };