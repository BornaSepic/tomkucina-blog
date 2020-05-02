import React from "react";
import * as Styled from "./style";

const Subscription = (props) => {
    return (
        <section>
            <Styled.Form backgroundImage={props.image.imageUrl}>
                <Styled.Label htmlfor='subscription'>
                    PRETPLATI SE NA NEWSLETTER
                </Styled.Label>
                <Styled.FormContent>
                    <div>
                        <Styled.Input type='text' id='name' width={"150px"} placeholder='Ime' />
                        <Styled.Input type='text' id='email' width={"400px"} placeholder='E-mail adresa' />
                    </div>
                    <Styled.InputButton type='submit'>Subscribe</Styled.InputButton>
                </Styled.FormContent>
            </Styled.Form>
        </section>
    )
}

export default Subscription;