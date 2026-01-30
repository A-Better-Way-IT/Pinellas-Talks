import {db} from '../firebase.js';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';

export const submitServey = async(ageGroup, responses) =>{
  try{
    const payload = {
      county: "Pinellas",
      ageGroup: ageGroup,
      responses: responses,
      submittedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db,"surveyResponses"), payload);
    return docRef.id;
  }
  catch(error){
    console.error("Database submission error: ", error);
    throw new Error("Failed to submit survey data.");
  }
};