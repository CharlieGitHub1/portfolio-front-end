const axios = require('axios');
const fs = require('fs');

const local = 'http://localhost:1337/portfolio';
const heroku = 'http://10.0.0.114:1337/portfolio';

async function loadData() {
    const response = await axios.get(
        process.env.NODE_ENV === 'production' ? heroku : local
    )

    // portfolio JSON
    const portfolio = JSON.stringify(response.data);

    fs.writeFile('src/data.json', portfolio, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
}
loadData();