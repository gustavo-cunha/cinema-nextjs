import { apiKey, apiBase } from '../../../lib/tmdb';

export default async (req, res) => {
    const q = req.query.q;
    const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&query=${q}`);
    const json = await result.json();

    res.status(200).json({
        list: json.results
    });
}