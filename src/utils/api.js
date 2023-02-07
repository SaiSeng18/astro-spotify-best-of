export const API_URL = "https://api.spotify.com/v1";
export const TOKEN_URL = "https://accounts.spotify.com/api/token";

const CLIENT_ID =
	import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET =
	import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET ||
	process.env.SPOTIFY_CLIENT_SECRET;

const tokenRes = await fetch(TOKEN_URL, {
	method: "POST",
	body: "grant_type=client_credentials",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		Authorization:
			"Basic " +
			btoa(
				import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID +
					":" +
					import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET
			),
	},
});

export const tokenData = await tokenRes.json();
