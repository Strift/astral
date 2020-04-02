import firebase from 'firebase/app'
import 'firebase/firestore'

let database

if (firebase.apps.length === 0) {
  database = firebase
    .initializeApp({ projectId: 'astral-6e63b' })
    .firestore()
} else {
  database = firebase
    .app()
    .firestore()
}

export default database
