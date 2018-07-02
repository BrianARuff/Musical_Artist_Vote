import React from "react";
import Artist from "./Artist";

export default class ArtistList extends React.Component {
  state = {
    artists: this.props.artists
  };

  handleUpVote = id => {
    const nextArtists = this.state.artists.map(artist => {
      if (id === artist.id) {
        return Object.assign({}, artist, {
          votes: artist.votes + 1
        })
      } else {
        return artist;
      }
    });
    this.setState({ artists: nextArtists });
  };

  handleDownVote = id => {
    const nextArtists = this.state.artists.map(artist => {
      if (id === artist.id && artist.votes >= 0) {
        return Object.assign({}, artist, {
          votes: artist.votes - 1
        });
      } else if (artist.votes < 0) {
        return Object.assign({}, artist, {
          votes: artist.votes + 1
        });
      } else {
        return artist;
      }
    });
    this.setState({ artists: nextArtists });
  };

  render() {
    const ArtistComponent = this.state.artists.sort((a,b) => b.name < a.name)
      .sort((a, b) => (b.votes - a.votes))
      .map(({ name, dob, death, image, votes, id }) => (
        <Artist
          key={name}
          name={name}
          dob={dob}
          death={death}
          image={image}
          votes={votes}
          id={id}
          handleUpVote={this.handleUpVote}
          handleDownVote={this.handleDownVote}
        />
      ));
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#333", fontSize: "54px" }}>
          Rockstars
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
            flex: "1"
          }}
        >
          {ArtistComponent}
        </div>
      </div>
    );
  }
}
