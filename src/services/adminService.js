import{db} from'../firebase.js';
import{collection,addDoc,serverTimestamp, orderBy}from'firebase/firestore';

export const fetchSurveyData = async () => {
  try {
    const surveryRef = collection(db, "surveyResponses");
    const query = query(surveryRef, orderBy("submittedAt", "desc"));
    const querySnapshot = await getDocs(surveryRef);

    return querySnapshot.docs.map(doc => ({ 
      id: doc.id,
       ...doc.data() 
      }));
    }
    catch(error){
      console.error("Error fetching survey data:", error);
      throw error;
    }
};