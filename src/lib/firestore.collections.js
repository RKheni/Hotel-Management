import {collection} from 'firebase/firestore'
import {db} from './init-firebase'

export const registerCollectionRef = collection(db, 'signup');