import React from 'react'
import { Card, CardContainer, Container, Hr, Title } from '../cardcss'

const Europe=() => {
    return (
        <>
            Daily EUROPE
            <Hr />
            <CardContainer>

                <Card>
                    <Title>Rome</Title>
                    <img src='http://openweathermap.org/img/wn/10d@2x.png' />
                    <Container>

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