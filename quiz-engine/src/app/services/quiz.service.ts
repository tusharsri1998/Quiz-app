import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizIndex;
  
  constructor(private firestore: AngularFirestore) { }

  //To get list of all quizzes
  getquizlist() { 
   
    return this.firestore.collection("quiz").valueChanges({idField:'id'});
  }
  //to add user email, date and marks once quiz is submitted
  addUser(user,original){
    this.firestore.collection('quiz').doc(original.id).update({Users:firestore.FieldValue.arrayUnion(user)})
  }

}
