import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './firebase'

function App() {
  const [sliderValue, setSliderValue] = useState(5); //set the slider to a default value of 5

  const handleSubmit = async (e) => {
    try{

      const payload = {
        rating: Number(sliderValue),
        timestamp: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "ratings"), payload);
      console.log("Document written with ID: ", docRef.id);
      alert("Thank you for for rating!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting your rating. Please try again.");
    }
  };
}

//Add button to submit the rating and to display the current slider value

export default App
