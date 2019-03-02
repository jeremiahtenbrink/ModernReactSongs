import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button, Grid } from "semantic-ui-react";
import { selectedSong } from "../actions";

import PropTypes from "prop-types";

class SongList extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = {};
    
    renderList() {
        return this.props.songs.map( ( song ) => {
            return (
                <List.Item key={ song.title }>
                    <Button
                        floated={ "right" }
                        onClick={ () => this.props.selectedSong( song ) }>Select</Button>
                    <p>{ song.title }</p>
                </List.Item>
            );
        } );
    }
    
    render() {
        return (
            <List divided>{ this.renderList() }</List>
        );
    }
}

const mapStateToProps = state => {
    console.log( state );
    return { songs: state.songs };
};

export default connect( mapStateToProps, { selectedSong } )( SongList );
