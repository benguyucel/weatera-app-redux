import React from 'react'
import { Card, CardContainer, Container, Hr, Tempeture, Title } from '../cardcss'

const Europe = () => {
    return (
        <>
            Daily EUROPE
            <Hr />
            <CardContainer>
                <Card>
                    <Title>Rome</Title>
                    <img src='http://openweathermap.org/img/wn/10d@2x.png' />
                    <Tempeture>
                        28 <span>&#8451;</span>
                    </Tempeture>

                    <Container>
                    <img src='/animated/sunrise.svg' />
                    
                    </Container>
                </Card>
                <Card>
                    <Title>Atina</Title>
                </Card>
                <Card>
                    <Title>madrid</Title>
                </Card>
                <Card>
                    <Title>paris</Title>
                </Card>
                <Card>
                    <Title>çorum</Title>
                </Card>
            </CardContainer>
        </>
    )
}

export default Europe