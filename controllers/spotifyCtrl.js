const SpotifyWebApi = require('spotify-web-api-node');
const { search } = require('../routes');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));

exports.getFeed = async (req, res) => {
    try {
        const data = await spotifyApi.getNewReleases({ limit : 10, offset: 0, country: 'mx' });
        // console.log(data.body.albums.items[9].artists);
        return res.render('index', { novedades: data.body.albums.items});
    } catch (error) {
        console.log("Something went wrong!", error);
    }
    
}

exports.getAlbum = async (req, res) => {
    const {albumID} = req.params
    try {
        const getOneAlbum = await spotifyApi.getAlbum(albumID);
        console.log(getOneAlbum.body);
        return res.render('music/album', { album: getOneAlbum.body});
    } catch (error) {
        console.log("Something went wrong!", error);
    }
}
exports.getArtist = async (req, res) => {
    const {artistID} = req.params
    try {
        const getOneArtist = await spotifyApi.getArtist(artistID);
        console.log(getOneArtist.body);
        return res.render('music/artist', { artist: getOneArtist.body});
    } catch (error) {
        console.log("Something went wrong!", error);
    }
}
exports.searchTracks = async (req, res) => {
    const query = req.query.q
    try {
        const search = await spotifyApi.searchTracks(query);
        // console.log(search.body.tracks.items);
        return res.render('synapsearch', { search: search.body.tracks.items , query: query });
    } catch (error) {
        console.log(error);
    }
}
