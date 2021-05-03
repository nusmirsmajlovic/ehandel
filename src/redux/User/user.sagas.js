import {takeLatest, call, all, put} from 'redux-saga/effects';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';
import userTypes from './user.types';
import { signInSuccess} from './user.actions';

export function* getSnapShotFromUserAutuh (user){
    try{ 
         
                const userRef = yield call (handleUserProfile ,{userAuth:user});
                const snapshot = yield userRef.get();
                yield put(
                signInSuccess({
                    id:snapshot.id,
                    ...snapshot.data()
                })
            );
          }catch(err){
        //console.log(err);
    }
}

export function* emailSignIn({payload:{email, password}}) {
    try {

       const {user} = yield auth.signInWithEmailAndPassword(email, password);
       yield getSnapShotFromUserAutuh(user)
       
        
        } catch (err) {
                //console.log
    }
}

export function* onEmailSignInStart (){
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START)
}

export default function* userSagas(){
    yield all([call(onEmailSignInStart)])
}