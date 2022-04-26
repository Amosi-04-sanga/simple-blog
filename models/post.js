import mongoose, {Schema} from 'mongoose'

const postSchema = new Schema({
   title: {
       type: String,
       required: [true, "please provide a title of this blog" ],
       maxlength: [100, "title must be less than 100 characters" ]
   },
   content: {
       type: String,
       required: [true,"please provide a content of this blog"]
   }
},{timestamps: true})

export default mongoose.models.posts || mongoose.model('posts', postSchema);

