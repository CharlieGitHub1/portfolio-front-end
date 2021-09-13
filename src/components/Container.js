import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Hero } from './Hero';
import { NavBar } from './Navbar';
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
        return <p>Loading!!!</p>
    }

    return (
        <div id="app">
            <NavBar />
            <Hero
                title={data.hero.title}
                sub_title={data.hero.sub_title}
            />
        </div>
    );
}

export { Container }
