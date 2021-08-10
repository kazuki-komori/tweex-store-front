import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export const provider = new firebase.auth.TwitterAuthProvider()

export const auth = firebase.auth()

export const firestore = firebase.firestore()
