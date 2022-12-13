import Events from '../components/Events';


export async function getServerSideProps(context) {

    const data = await fetch("http://localhost:1337/api/events?filters[eventType][$eq]=Staj")
    const response = await data.json();

    return {
        props: { response }, // will be passed to the page component as props
    }
}


const staj = ({ response }) => {
    return (
        <>
            <Events data={response?.data} />
        </>

    )
}

export default staj
