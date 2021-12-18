import { useState, useEffect } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import initializeFirebase from "../components/Shared/Login/Login/Firebase/firebase.init";

// initialize firebase app----------------------------- step(1)--------------------------------------
initializeFirebase();
const useFirebase = () => {
	const [user, setUser] = useState({});
	// Loading dekhanor jonno use kora-------------------- step(6)-------------------
	const [isLoading, setIsLoading] = useState(true);
	//  UI te Login form er niche error dekhanor jonno-------step(7)------------------
	const [authError, setAuthError] = useState("");
	const auth = getAuth();

	// when create user name and password user ------------------step(2)-----------------------------
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// name and email ke rakhar bangla system------
				const newUser = { email, displayName: name };
				setUser(newUser);
				// save use to database ---step(11)--------------call function
				saveUser(email, name, "POST");
				// send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {
						setAuthError(error.message);
					});

				// account create success holei sorarosi home a redirect hobe----------------
				history.replace("/");
				setAuthError("");
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	//  Sign in with user system ---------------------------------- step(3)---------- private route step(8)--------------
	const loginUser = (email, password, location, history) => {
		//  privateRoute line number:1......location and history pass
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || "/"; //  privateRoute line number:2
				history.replace(destination); //  privateRoute line number:3
				setAuthError("");
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// log out / SignOut er jonno use korte hobe---------------- step(4)------------------------
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setIsLoading(false));
	};

	// main part of authentication when any user login logout other tab open then observe this useEffect ----step(5)-----------

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

	// google sign in er jonno--------------------------------Step(8)-------------
	const googleProvider = new GoogleAuthProvider();
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				// saveUser(user.email, user.displayName, "PUT");
				saveUser(user.email, user.displayName, "PUT");
				const destination = location?.state?.from || "/"; //  privateRoute line number:2
				history.replace(destination); //  privateRoute line number:3
				setAuthError("");
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// create user er jonno function--------------------step(9)------
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch("https://limitless-cliffs-19356.herokuapp.com/addUserInfo", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};

	// jeigola diye amra return kore dibe and onno component use korbo------------ step(0++)--------------------------
	return {
		user,
		registerUser,
		loginUser,
		logOut,
		isLoading,
		authError,
		signInWithGoogle,
	};
};

export default useFirebase;
