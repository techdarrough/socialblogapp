import { firestore, auth, increment } from '../lib/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

// Allows user to heart or like a post
export default function Heart({ postRef }) {
    // Listen to heart document for currently logged in user
    const heartRef = postRef.collection('hearts').doc(auth.currentUser.uid);
    const [heartDoc] = useDocument(heartRef);

    // async function to create to docs 
    const addHeart = async () => {
        const uid = auth.currentUser.uid;
        const batch = firestore.batch();

        batch.update(postRef, { heartCount: increment(1) });
        //add likes
        batch.set(heartRef, { uid });
        // attach heart doc to user id
        await batch.commit();
        // commits data to server
    };

    // Removes heart doc by users referenced 
    const removeHeart = async () => {
        const batch = firestore.batch();

        batch.update(postRef, { heartCount: increment(-1) });
        batch.delete(heartRef);

        await batch.commit();
    };

    return heartDoc?.exists ? (
        <button onClick={removeHeart}>💔 Unheart</button>
    ) : (
        <button onClick={addHeart}>💗 Heart</button>
    );
}