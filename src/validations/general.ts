import joi from 'joi';

  export const IdSchema = joi.object().keys({
    id:joi.string().length(36).required(),
  });