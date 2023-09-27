import { readFileSync } from 'fs';
import { join } from 'path';

const dbFilePath = join(__dirname, '..', 'src','server', 'db.json');

export default (req, res) => {
  try {
    const data = readFileSync(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);
    console.log("my data",jsonData);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'my erroooooooooor' });
  }
};
