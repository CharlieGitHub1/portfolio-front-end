const axios = require('axios');
const fs = require('fs');
const download = require('image-downloader')

// Paths
const local = 'http://localhost:1337/portfolio';
const heroku = 'http://10.0.0.114:1337/portfolio';

async function loadData() {

    // Grap the data
    const response = await axios.get(
        process.env.NODE_ENV === 'production' ? heroku : local
    )

    // portfolio JSON
    const portfolio = JSON.stringify(response.data);

    // Grab images
    let images = response.data.projects.map((proj) => {
        return proj.main_image.url;
    });

    // Loop over and download the images
    images.forEach((img) => {

        const options = {
            url: `http://localhost:1337${img}`,
            dest: `public${img}`
        }

        download.image(options)
            .then(({ filename }) => {
                console.log('Saved to', filename)
            })
            .catch((err) => console.error(err))
    });

    fs.writeFile('src/data.json', portfolio, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
}

loadData();
