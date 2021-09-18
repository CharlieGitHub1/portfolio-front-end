import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Hero } from '../Hero';
import { Header } from '../Header';
import { Project } from '../Project';
import { Footer } from '../Footer';
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
            <Header
                {...data.header}
                socialNav={data.social_links}
            />
            <Hero
                title={data.hero.title}
                sub_title={data.hero.sub_title}
            />
            {data.projects.map((project) => {
                return <Project {...project} />
            })}
            <Footer
                {...data.footer}
                socialNav={data.social_links}
            />
        </div>
    );
}

export { Container }
