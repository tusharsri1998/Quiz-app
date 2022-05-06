import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _firestore: AngularFirestore) {}
  selectedQuiz: any;
  getQuizzes() {
    return this._firestore.collection('quiz').snapshotChanges();
  }

  addNewQuiz(data) {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('quiz')
        .add(data.value)
        .then(
          (res) => {
            console.log('added ' + res), alert('data added');
          },
          (err) => reject(err)
        );
    });
  }

  addQuestionData(data, id, maxscore) {
    let x = parseInt(maxscore)+1
    let newscore = x.toString()
    this._firestore
      .collection('quiz')
      .doc(id)
      .update({ Questions: firestore.FieldValue.arrayUnion(data) });
      this._firestore.collection('quiz').doc(id).set({MaxScore:newscore},{merge:true})
    alert('done');
  }

  removeQuestion(i, original) {
    let x = parseInt(original.MaxScore)-1
    let newscore = x.toString()
    this._firestore
      .collection('quiz')
      .doc(original.id)
      .update({
        Questions: firestore.FieldValue.arrayRemove({
          question: original.Questions[i].question,
          option1: original.Questions[i].option1,
          option2: original.Questions[i].option2,
          option3: original.Questions[i].option3,
          option4: original.Questions[i].option4,
          correct: original.Questions[i].correct,
        }),
      });
      this._firestore.collection('quiz').doc(original.id).set({MaxScore:newscore},{merge:true})
    alert('data removed');
  }

  updateVideo(link, id) {
    this._firestore
      .collection('quiz')
      .doc(id)
      .set({ CourseVideo: link.CourseVideo }, { merge: true });
  }

  // Function expression
   updateCourseDesc =  function(data, id) {
    this._firestore
      .collection('quiz')
      .doc(id)
      .set({ CourseDescription: data.CourseDescription }, { merge: true });
  }

  routeDataToEdit(data): void {
    this.selectedQuiz = data;
  }
}
