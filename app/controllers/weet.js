const { createWeetService } = require('../services/weet');

exports.createWeet = (req, res, next) =>
  createWeetService(req.userData.id, req.body.fact)
    .then(({ content, user_id }) => {
      const message = {
        message: 'weet created',
        content,
        user_id
      };
      res.status(200).send(message);
    })
    .catch(error => next(error));
