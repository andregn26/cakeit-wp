import React from 'react'
import { useQuoteQuery } from '../../hooks/useQuoteQuery'
import QuoteImg from "../../images/quote.svg"
import { Wrapper, Content } from "./Quote.styles"

const Quote = () => {
    const { wpPage } = useQuoteQuery()
    return (
        <Wrapper>
            <Content>
                <img src={QuoteImg} alt='Quote' />
                <h6> {wpPage.ACF_HomePage.citat1Text} </h6>
                <p> {wpPage.ACF_HomePage.citat1Author} </p>
            </Content>
        </Wrapper>
    )
}

export default Quote