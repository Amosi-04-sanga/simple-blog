import Head from 'next/head'
import PostCard from '../components/PostCard'
import connectDB from '../middleware/CONNECTDB'
import POST from '../models/post'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  
  return (
       <>
          <Head>
              <title> home </title>
          </Head>

          <div className={styles.container} >
              {
                posts.length === 0 ? 
                <h2>no added posts</h2> :
                posts.map( (post, index) => (
                  < PostCard post={post} key={index} />
                ))
              }            
          </div>

       </>
  )
}


export async function getServerSideProps(context) {

  await connectDB()

  const result = await POST.find({})
  const posts = result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    post.createdAt = post.createdAt.toString()
    post.updatedAt = post.updatedAt.toString()
    return post
  })

  return {
    props: {posts}, // will be passed to the page component as props
  }

}

