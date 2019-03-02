import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import PropTypes from "prop-types";

const SongDetail = ( { song } ) => {
    return (
        <Card>
            <Card.Header>
                { ( song ? `Title: ${ song.title }` : "Select a song" ) }
            </Card.Header>
            <Card.Description>
                <p>{ song ? `Duration: ${ song.duration }` : "" }</p>
            </Card.Description>
        </Card>
    );
};

SongDetail.propTypes = {};
SongDetail.defaultProps = {};

const mapStateToProps = state => ( {
    song: state.selectedSong,
} );

export default connect( mapStateToProps )( SongDetail );
