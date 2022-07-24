import Link from 'next/link'

export default function PostFeed({ posts, admin }) {
    if (posts) {
        return posts.map((post) => <PostItem post={post} key={post.slug} admin={admin}/>)
    }
    else { return null}
       
     
      
    
    
    
}