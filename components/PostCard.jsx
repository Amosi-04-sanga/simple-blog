import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/PostCard.module.css'

const PostCard = ({ post }) => {

  return (
    <div className={styles.card} >
      <h3 className={styles.title} > {post.title} </h3>
      <p className={styles.content} > {post.content} </p>
      <small className={styles.date} > {new Date(post.createdAt).toLocaleDateString()} </small>
      <div className={styles.buttons}>
        <button type="button" >
          {"UPDATE"} {" "}
        </button>
        <button type="button" >
          {"DELETE"}
        </button>
      </div>

    </div>
  )
}

export default PostCard