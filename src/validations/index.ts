import joi from 'joi';

export function getOrThrow<T>(value:T,schema:joi.SchemaLike):T {
   const { error,value:v} = joi.validate(value,schema);
   if (error)  {
       throw error;
   }
   return v; 
}
