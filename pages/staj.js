import Events from '../components/Events';
import Layout from '../components/Layout';


export async function getServerSideProps(context) {

    const data = await fetch("http://localhost:1337/api/events?filters[eventType][$eq]=Staj")
    const response = await data.json();

    return {
        props: { response }, // will be passed to the page component as props
    }
}


const staj = ({ response }) => {
    const noEventSlug = "Staj İlanı"
    return (
        <Layout>
            <Events notFoundText={noEventSlug} data={response?.data} />
        </Layout>

    )
}

export default staj
