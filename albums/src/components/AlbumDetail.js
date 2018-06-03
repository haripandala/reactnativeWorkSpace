import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { thumbnailContainerStyle, thumbnailStyle, titleartistStyle, 
        titleTextStyle, imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={titleartistStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
        </Card>
    );
};
export default AlbumDetail;
const styles = {
    titleartistStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
