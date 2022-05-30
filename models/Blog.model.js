const { Schema, model } = require('mongoose'); 
const BlogSchema = new Schema({
   title: {
       type: String, 
   }, 
   subtitle: {
       type: String, 
   }, 
   images: [
       {                        
           type: String, 
       }
   ],  
   categories: [{
        type: String, 
        default: ["Confección a Medida", "Producción de colecciones", "Arreglos", "Transformaciones" ]
   }],
   firstsection: {
       type: String
   }, 
   secondsection: {
       type: String,
   }, 
   thirdsection: {
       type: String
   }, 
   fourthsection: {
       type: String
   }, 
   fifthsection: {
       type: String
   }, 
   sexthsection: {
       type: String
   }, 
   authorname: {
       type: String
   }, 
   createdAt: {
       type: Date, 
       default: Date.now
   }                 
}, { timestamps: true })

const Blog = model("Blog", BlogSchema);
module.exports = Blog; 
 




