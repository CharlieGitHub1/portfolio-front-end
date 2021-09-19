const axios = require('axios');
const fs = require('fs');

async function loadData() {
    const response = await axios.get("http://localhost:1337/portfolio")

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