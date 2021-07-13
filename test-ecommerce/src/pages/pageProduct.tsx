import { Button, Container } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import React, { ReactElement } from "react";
import AlignItemsList from "../components/reviews";

const pageProduct=():ReactElement=>{

    return(
        <Container>
            <div>
                <div>
                <img src=""/>
                <h4>Name</h4>
                <h4>price</h4>
                </div>

                <div>
                    <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates odit assumenda illum porro aspernatur doloremque impedit vel optio eaque natus, magnam pariatur laborum, amet nihil exercitationem unde sint reiciendis.</p>
                </div>
            </div>
            <Button>add to cart</Button>
            <AlignItemsList/>

        </Container>
    )
}