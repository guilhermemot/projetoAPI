const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined){
    return response.status(400).json({ message: 'The field "Title" is undefined'});
  }
  if (body.title === ''){
    return response.status(400).json({ message: 'Title cannot be empty'});
  }

  next();
};

const validateFildStatus = (request, response, next) => {
  const { body } = request;
  
  if (body.status === undefined){
    return response.status(400).json({ message: 'The field "status" is undefined'});
  }
  if (body.status === ''){
    return response.status(400).json({ message: 'status cannot be empty'});
  }
  
  next();
};
module.exports = {
  validateFieldTitle,
  validateFildStatus,
};