import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => this.setState({ albums: data }));
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />) }
            </ScrollView>);
    }
}
