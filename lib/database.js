import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({ projectId: 'astral-6e63b' })
}

const database = firebase.firestore()

export default database
