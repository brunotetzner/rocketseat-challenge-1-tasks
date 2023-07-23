export async function json(req, res) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  try {
    // eslint-disable-next-line no-undef
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (err) {
    req.body = null;
  }
  res.setHeader('Content-type', 'application/json');
}
