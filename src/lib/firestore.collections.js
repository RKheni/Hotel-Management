import {collection} from 'firebase/firestore'
import {db} from './init-firebase'

export const signupCollectionRef = collection(db, 'signup');
export const bookroomCollectionRef = collection(db, 'bookroom');
