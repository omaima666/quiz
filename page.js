// src/app/page.js
"use client";  // Add this line at the top

import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which country is famous for sushi?",
    options: ["China", "Japan", "Korea", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "Which year did World War I start?",
    options: ["1912", "1914", "1918", "1939"],
    correctAnswer: "1914",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: "Avocado",
  },
  {
    question: "What element does 'O' represent on the periodic table?",
    options: ["Oxygen", "Gold", "Osmium", "Opal"],
    correctAnswer: "Oxygen",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Iron", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Luxembourg", "San Marino"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Which gas is most abundant in the Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Tiger", "Leopard"],
    correctAnswer: "Cheetah",
  }
];

  // Add more questions here


  const Container = styled.div`
  background: linear-gradient(135deg, #ffcc70 0%, #ff2e63 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
  padding: 20px;
  
  // Adding floating shapes for design
  &::before, &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: 0;
    top: -50px;
    left: -50px;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    width: 600px;
    height: 600px;
    top: auto;
    bottom: -200px;
    right: -200px;
    animation-duration: 10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;


const Card = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  text-align: center;
  z-index: 1;  // Ensures the card stays above the background shapes
`;


const Button = styled(motion.button)`
  background-color: #ff2e63;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  margin: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffcc70;
  }
`;

const Option = styled(motion.div)`
  background-color: #4caf50;
  color: white;
  margin-bottom: 10px;
  padding: 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }
`;


const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;



const Score = styled.div`
  font-size: 1.5rem;
  color: #333;
  margin-top: 20px;
`;

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container>
      {showScore ? (
        <Card>
          <Score>
            You scored {score} out of {quizQuestions.length}
          </Score>
          <Button whileHover={{ scale: 1.1 }} onClick={() => window.location.reload()}>
            Retry Quiz
          </Button>
        </Card>
      ) : (
        <Card
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Question>{quizQuestions[currentQuestion].question}</Question>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <Option
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </Option>
          ))}
        </Card>
      )}
    </Container>
  );
}
