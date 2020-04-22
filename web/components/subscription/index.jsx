import React from "react";
import * as Styled from "./style";

const Subscription = (props) => {
    return (
        <Styled.Form>
            <Styled.Label for='subscription'>
                PRETPLATI SE NA NEWSLETTER <br />
                SUBSCRIBE FOR NEWSLETTER 
            </Styled.Label>
            <Styled.Input type='text' id='subscription' width={"150px"} placeholder='Ime' />
            <Styled.Input type='text' id='email' width={"400px"} placeholder='E-mail adresa' />
            <Styled.InputButton type='submit' inputButton value='Subscribe' /> 
        </Styled.Form>
    )
}

export default Subscription;