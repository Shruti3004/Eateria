import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAzYJlLKz5aN1SNSNVbRQgUi1fHwT9Fp1Q",
    authDomain: "e-commerce-7aa18.firebaseapp.com",
    databaseURL: "https://e-commerce-7aa18.firebaseio.com",
    projectId: "e-commerce-7aa18",
    storageBucket: "e-commerce-7aa18.appspot.com",
    messagingSenderId: "57383414146",
    appId: "1:57383414146:web:542f14adeaa45b56c5479b"
  };


  class Firebase {
	constructor() {
		App.initializeApp(firebaseConfig);
		this.auth = App.auth();
		this.db = App.firestore();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	async register(name, lastName, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: `${name} ${lastName}`
		})
	}

	logout() {
		return this.auth.signOut();
	}	

	getUser(){
		return this.auth.currentUser;
	}

	authChange(user){
		this.auth.onAuthStateChanged(user);
	}

	resetPassword(email){					  
		return this.auth.sendPasswordResetEmail(email);
	}

	emailVerification(){
		return this.auth.currentUser.sendEmailVerification();            
	}
	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`User/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	// isInitialized() {
	// 	return new Promise(resolve => {
	// 		this.auth.onAuthStateChanged(resolve)
	// 	})
	// }

	// getCurrentUsername() {
	// 	return this.auth.currentUser && this.auth.currentUser.displayName
	// }

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`User/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase();