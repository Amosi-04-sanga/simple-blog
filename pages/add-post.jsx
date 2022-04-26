import React from 'react'
import styles from '../styles/AddPost.module.css'
import { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'


const AddPost = () => {
  const contentType = 'application/json'
  const [error, setError] = useState("")
  const [isfocus, setIsfocus] = useState(false)
  const [data, setData] = useState({
      title: "",
      content: "",
  })
  
  const submitHandle = async (e) => {
    e.preventDefault()
    const {title,content} = data
    console.log(data)


    if(title || content) {
      
         await axios.post( "/api/blogPosts", data )
       
          setData({
            title: "",
            content: ""
          })
          Router.push("/")

    } 
    else {
      setError("all field required!")
    }


  }

  const focusHandle = () => {
    setIsfocus(!isfocus)
  }
  const blurHandle = () => {
    setIsfocus(!isfocus)
  }

  return (


    <div>
        <Head>
          <title>✍️ add post </title>
        </Head>

        <div className={styles.container}>
           <form onSubmit={submitHandle} className={styles.form} >
              
              {
                error ?
                <div className={styles.error}>
                  <h3> {error} </h3>
                </div> : 
                null
              }

              <div className={styles.row}>
                <label className={styles.inputs} htmlFor='title' >Title</label>
                <input 
                  type="text"
                  placeholder='Enter title'
                  id='title'
                  name='title'
                  onFocus={focusHandle}
                  onBlur={blurHandle}
                  onChange={ e => setData({...data, title: e.target.value}) } 
                  value={data.title}
                  className={`${styles.inputs} ${styles.title}`}
                  />
                  <div className={ `${styles.hideunderline} ${isfocus ? styles.showunderline : null }` }></div>
              </div>

              <div className={styles.row}>
                <label className={styles.inputs} htmlFor='content' >Content</label>
                <textarea 
                  type="text"
                  placeholder='Enter content'
                  name='content'
                  id='content'
                  value={data.content}
                  className={`${styles.inputs} ${styles.content}`}
                  onChange={ e => setData({...data, content: e.target.value}) } 
                  />
              </div>

               <div className={styles.row}>
                 <button className={styles.btn} type='submit' >add post</button>
               </div>

           </form>
        </div>

    </div>
  )
}

export default AddPost


