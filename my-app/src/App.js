import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions:[
        {answerText: 'New York', isCorrect: false},
        {answerText: 'London', isCorrect:false},
        {answerText: 'Paris',isCorrect:true},
        {answerText: 'Dublin', isCorrect:false},
      ],
    },{
      questionText: 'Who is Emperors of Rome ?',
      answerOptions: [
        {answerText: 'Jeff Bezos', isCorrect: false},
        {answerText: 'Elon Musk', isCorrect: false},
        {answerText: 'Marcus Aurelius', isCorrect: true},
        {answerText: 'Tony Stark', isCorrect: false},
      ],
    },{
      questionText: 'The iPhone was created by witch company?',
      answerOptions: [
        {answerText: 'Apple',isCorrect:true},
        {answerText: 'Intel',isCorrect:false},
        {answerText: 'Amazon',isCorrect:false},
        {answerText: 'Microsoft',isCorrect:false},
      ],
    },{
      questionText: 'Where did Javascript start ?',
      answerOptions:[
        {answerText: '1997',isCorrect:false},
        {answerText: '2002',isCorrect:false},
        {answerText: '2000',isCorrect:false},
        {answerText: '1995',isCorrect:true},
      ],
    },
  ]
  const [score,setScore] = useState(0)
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [show,setShow] = useState(false)
  const handleAnswer = (isCorrect) =>{
    if(isCorrect === true){
      setScore(score+1)
    }
    const nextQuestion = currentQuestion+1
    if(nextQuestion< questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShow(true)
    }
  }
  const handleRefresh = () =>{
    setScore(0)
    setCurrentQuestion(0)
    setShow(false)
  }
  return (
    <div className="App">
      {/*HINT: replace "false" wtih logic to display the score when the user has answered all the questions */}
        {show ? (<div className = "App">You scored {score}/{questions.length}
          <button onClick = {() => handleRefresh()}>Try again !!!!</button>
        </div>

        ):(    
          <>
            <div className = "text-app">
              <div className = "Question-header">
                <h3>Question {currentQuestion+1}/4</h3>
                <div className = "question-app">{questions[currentQuestion].questionText}</div>
              </div>
              <div className ="question-text">
                <div className = "answer-section">
                  {questions[currentQuestion].answerOptions.map(answerOption=>(
                    <button onClick = {() =>{handleAnswer(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default App;
