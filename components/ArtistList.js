import React from 'react';
import Artist from './Artist';

export default class ArtistList extends React.Component {
    state = {
        artists: this.props.artists,
    }

    handleUpVote = (id) => {
        const nextArtists = this.state.artists.map(artist => {
            if(id === artist.id){
                return Object.assign({}, artist, {
                    votes: artist.votes + 1,
                })
            } else {
                return artist
            }
        })
        this.setState({artists: nextArtists})
    }

    handleDownVote = (id) => {
        const nextArtists = this.state.artists.map(artist => {
            if(id === artist.id){
                return Object.assign({}, artist, {
                    votes: artist.votes - 1
                })
            } else {
                return artist
            }
        })
        this.setState({artists: nextArtists})
    }
    
    render(){
    const ArtistComponent = this.state.artists.sort((a,b) => b.votes - a.votes).map(({name, dob, death, image,votes, id}) => <Artist key={name} name={name} dob={dob} death={death} image={image} votes={votes} id={id} upVote={this.handleUpVote} downVote={this.handleDownVote} /> )
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
               {ArtistComponent}
            </div>
        )
    }
}