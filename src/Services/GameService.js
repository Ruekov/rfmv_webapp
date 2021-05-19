const jsonData = '../Data/ProcesedData.json';

class GameService {


    getGames() {

        fetch(jsonData)
            .then((res) => res.json())
            .then((data) => {
                console.log('data:', data);
                return data;
            })
    }




}
export default new GameService();
