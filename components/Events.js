import { Container, Grid, Typography } from '@mui/material'
import SingleEvent from './SingleEvent'


const Events = ({ data }) => {
    console.log(data)

    return (
        <Container sx={{ my: 16 }}>
            <Grid container rowSpacing={5} columnSpacing={3} justifyContent="center" >
                {data?.map((item) => {
                    return (
                        <Grid item>
                            <SingleEvent
                                key={item?.attributes?.id}
                                title={item?.attributes?.title}
                                image={item?.attributes?.image}
                                subtitle={item?.attributes?.subtitle}
                                deadline={item?.attributes?.deadline}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    )
}

export default Events
