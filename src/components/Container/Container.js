import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Hero } from '../Hero';
import { Header } from '../Header';
/**
 * Container component that handles initial data rendering
 */
const Container = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const response = await axios.get("http://localhost:1337/portfolio")
            setData(response.data)
            setLoading(false)
        }
        loadData();
    }, [])

    if (loading) {
        return <p>Just wait it's loading</p>
    }

    return (
        <div id="app">
            <Header {...data.header} />
            <Hero
                title={data.hero.title}
                sub_title={data.hero.sub_title}
            />
        </div>
    );
}

export { Container }
