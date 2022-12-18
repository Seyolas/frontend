
import Events from '../components/Events';
import Layout from '../components/Layout';


export async function getServerSideProps(context) {

    const data = await fetch("http://localhost:1337/api/events?filters[eventType][$eq]=İş")
    const response = await data.json();

    return {
        props: { response }, // will be passed to the page component as props
    }
}


const is = ({ response }) => {
    const noEventSlug = "İş İlanı"
    return (
        <Layout>
            <Events notFoundText={noEventSlug} data={response?.data} />
        </Layout>
    )
}

export default is
