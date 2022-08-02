import UserProfile from '../../components/UserPofile'
import PostFeed from '../../components/PostFeed'
import { postToJSON } from '../../lib/firebase'


export async function getServerSideProps( { query }) {
    const { username } = query
    const userDoc = await getUserWithUsername(username)
    // Json serializable
    let user = null
    let posts = null

    // if user doc set user to userdoc data 
    //frame query to user.ref limit to 5 posts
    if (userDoc) {
        user = userDoc.data()
        const postQuery = userDoc.ref
            .collection('posts')
            .where('published', '==', true)
            .orderBy('createAt','desc')
            .limit(5);
        // convert to json data
            posts = (await postQuery.get()).docs.maps(postToJSON)
    

    }


    return {
        props:{ user, posts }, // passing to page as props
    }
}

export default function UserProfilePage({user, posts}) {
    return (
        <main>
            <UserProfile user={user}/>
            <PostFeed posts={posts}/>

        </main>
    )
}
