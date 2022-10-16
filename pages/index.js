import Events from '../components/Events';
import Meta from '../components/Meta'


export async function getServerSideProps(context) {

  const data = await fetch("http://localhost:1337/api/events?populate=%2A")
  const response = await data.json();

  return {
    props: { response }, // will be passed to the page component as props
  }
}

export default function Home({ response }) {
  return (
    <>
      <Meta />
      <Events data={response?.data} />

    </>
  )
}
