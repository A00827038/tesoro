export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      //make async call to database
      const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err})
      });
    };
  };

export const forgotPass = (email) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();

    firebase.auth().sendPasswordResetEmail(email, {url: 'https://kanguru.mx/signin'
    }).then(() => {
      dispatch({ type: 'EMAIL_SENT'});
      alert("Correo de recuperación enviado.\nRevisa tu correo para reestablecer tu contraseña.")
    }).catch(err => {
      dispatch({ type: 'EMAIL_ERROR', err })
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS'});
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    
    //Crea el usuario en firebase auth y después agrega usuario nuevo a la colección de Usuarios en firestore
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('Merchants').doc(resp.user.uid).set({
        tCreatedAt: new Date()
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}


