import UserProfile from '@components/UserPofile';
import PostFeed from '@components/PostFeed';
import { getUserWithUsername, postToJSON } from '@lib/firebase';
import Metatags from '@components/Metatags';

// used to tell next to wait until data is fetch before render
export async function getServerSideProps({ query }) {
    const { username } = query;
    const userDoc = await getUserWithUsername(username);


    // if not found 404 add try catch here later
   try{ if (!userDoc) {
        return {
            notFound: true
        }
    };} catch(error) {
        console.log(error)
    }

    // Json serializable
    let user = null;
    let posts = null;

    // if user doc set user to userdoc data 
    //frame query to user.ref limit to 5 posts
    try {
        if (userDoc) {
            user = userDoc.data()
            const postQuery = userDoc.ref
                .collection('posts')
                .where('published', '==', true)
                .orderBy('createAt', 'desc')
                .limit(5);
            // convert to json data
            posts = (await postQuery.get()).docs.map(postToJSON);


        };


        return {
            props: { user, posts }, // passing to page as props
        }

    } catch (error) {
        console.log(error)
    }



}

export default function UserProfilePage({ user, posts }) {
    console.log(user, posts)
    try{
    return (
        <main>
            <Metatags title={user.username} description={`${user.username}'s public profile`} />
            <UserProfile user={user} />
            <PostFeed posts={posts} />

        </main>
    )} catch(error) {
        console.log(error)
    }
}
