const randomuser = () => {
    const restEndpoint = 'https://randomuser.me/api';
    const callRestApi = async () => {
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    };

    callRestApi();
}