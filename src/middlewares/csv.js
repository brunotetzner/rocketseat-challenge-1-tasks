import csvParser from 'csv-parser';

export async function csvJSON(req, res) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    // eslint-disable-next-line no-undef
    const csvData = Buffer.concat(buffers).toString();
    const jsonArray = await new Promise((resolve, reject) => {
      const results = [];
      const stream = csvParser({ mapHeaders: ({ header }) => header.trim() })
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));

      stream.write(csvData);
      stream.end();
    });

    req.body = jsonArray;
  } catch (err) {
    req.body = null;
  }

  res.setHeader('Content-type', 'application/json');
}
