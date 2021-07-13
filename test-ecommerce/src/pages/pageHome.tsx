import React, { ReactElement } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from "../components/navbar";
import MediaCard from "../components/productCard";
import "./pageHome.css"

  const HomePage=():ReactElement => {
      return(
    <div>
       
        <div className="buttonGrp">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Search by Category</Button>
        <Button>Search by departement</Button>
        
      </ButtonGroup>
        </div>

        <div className="listProducts">
            <Grid container spacing={3}>
                    <Grid item lg={3} xs={12}>
                    <MediaCard/>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                    <MediaCard/>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                    <MediaCard/>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                    <MediaCard/>
                    </Grid>
                    
                </Grid>
        </div>
    </div>)

}
export default HomePage;