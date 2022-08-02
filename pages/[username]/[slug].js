import styles from '@styles/Post.module.css'
import PostContent from '@components/PostContent';
import { firestore, getUserWithUsername, postToJSON } from '@lib/firebase';
import HeartButton from '../../components/HeartButton';
import AuthCheck from '../../components/AuthCheck';
import Link from 'next/link';


import { useDocumentData } from 'react-firebase-hooks/firestore';

export default function Post(props) {
  const postRef = firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  return (
    <main className={styles.container}>

      <section>
        <PostContent post={post} />
      </section>

      <aside className="card">
        <p>
          <strong>{post.heartCount || 0} �</strong>
        </p>

        <AuthCheck
          fallback={
            <Link href="/enter">
              <button>� Sign Up</button>
            </Link>
          }
        >
          <HeartButton postRef={postRef} />
        </AuthCheck>

        {currentUser?.uid === post.uid && (
          <Link href={`/admin/${post.slug}`}>
            <button className="btn-blue">Edit Post</button>
          </Link>
        )}

      </aside>
    </main>
  );
}
