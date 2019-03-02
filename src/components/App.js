import React from "react";
import SongList from "./SongList";
import { Container, Grid } from "semantic-ui-react";

import PropTypes from "prop-types";
import SongDetail from "./SongDetail";

const App = ( props ) => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={ 6 }>
                        <SongList />
                    </Grid.Column>
                    <Grid.Column width={ 10 }>
                        <SongDetail />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
