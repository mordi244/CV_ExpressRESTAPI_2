import joi from 'joi';
export const nameMinNumOfChars = 3;


export const productPostSchema = joi.object().keys({
  name: joi.string().min(nameMinNumOfChars).required()
});
