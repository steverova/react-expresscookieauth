import * as yup from 'yup';

const validate = (schema) => {
    return async (req, res, next) => {
      const { body } = req;
  
      try {
        await schema.validate(body, { abortEarly: false });
        next();
      } catch (error) {
        if (error instanceof yup.ValidationError) {
        
          const errorDetails = error.inner.map(err => ({
            key: err.path,
            message: err.message
          }));
          return res.status(400).json({ errors: errorDetails });
        }
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
  
  export default validate;
