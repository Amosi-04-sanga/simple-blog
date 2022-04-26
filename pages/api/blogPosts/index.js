import CONNECTDB from '../../../middleware/CONNECTDB'
import POST from '../../../models/post'


export default async function handler (req,res) {
   const {method} = req

   CONNECTDB()

   switch (method) {


    case "GET":
        const posts = await POST.find({})
        res.status(200).json(posts)
    
        break;

    case "POST":
        try {
           const newPost = new POST(req.body)
           await newPost.save()
           .then( doc => {
               console.log(doc)
           } )
           res.status(201).json(newPost)

        } catch (error) {
            res.status(404).send({success:false,error})
        }
        break;


    default:
        break;
}

}
