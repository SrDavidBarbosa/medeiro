import { index } from '../../utils/indexer';

export default async function handler(req, res) {
    try {
        const result = await index();
        res.status(200).send({ result });
    } catch (err) {
        console.error('Error during reindexing:', err.stack);
        res.status(500).send({ error: `Failed to fetch data: ${err.message}` });
    }
}
