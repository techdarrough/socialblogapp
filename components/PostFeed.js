import Link from 'next/link'

export default function PostFeed({ posts, admin }) {
    if (posts) {
        return posts.map((post) => <PostItem post={post} key={post.slug} admin={admin}/>)
    }
    else { return null}

function PostItem({ post, admin = false })   {
//refactor to include a less naive method for calc word count and time read
    const wordCount = post?.content.trim().split(/\s+/g).length
    const readTime =(wordCount / 100 + 1).toFixed(0)
    return (
    
    <div>
        <Link href={`/{post.username}`}>
            <a>
                <strong>By {post.username}</strong>
            </a>
        </Link>
        <Link href={`/${post.username}/${post.slug}`}>
            <h2>
                <a>{post.title}</a>
            </h2>
        </Link>

        <footer>
            <span>
                {wordCount} words. {readTime} min read
            </span>
            <span className='push-left'>💗 {post.heartCount || 0} Hearts</span>
        </footer>

        {/* Admin view trigger */}
        {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )}
        </div>
    )

} 
       
     
      
    
    
    
}