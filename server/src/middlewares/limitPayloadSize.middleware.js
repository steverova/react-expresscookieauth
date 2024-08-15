const limitPayloadSize = (req, res, next) => {
    const MAX_PAYLOAD_SIZE = 1024 * 1024; // 1MB
    if (req.headers['content-length'] && Number.parseInt(req.headers['content-length']) > MAX_PAYLOAD_SIZE) {
      return res.status(413).json({ error: 'Payload size exceeds the limit' });
    }
    next();
  }

export default limitPayloadSize;