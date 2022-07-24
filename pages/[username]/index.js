import UserProfile from '../../components/UserPofile'
import PostFeed from '../../components/PostFeed'


export async function getServerSideProps( { query }) {
    const { username } = query


    return {
        props:{ user, posers }, // passing to page as props
    }
}

export default function UserProfilePage({user, posts}) {
    return (
        <main>
            <UserProfile user={user}/>
            <PostFeed posts={post}/>

        </main>
    )
}