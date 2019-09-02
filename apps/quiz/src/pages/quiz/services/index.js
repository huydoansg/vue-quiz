import datasource from "@data";
import * as cacheServices from "../services/cache";
import {
  QuizPages,
  GroupType,
  QuestionPerQuiz,
  APP_STORAGE_KEYS
} from "@constants";

export const getRandomNumber = max => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const listGroup = () => {
  return datasource.groups || [];
}

export const getQuizByGroup = (groupId, type, questionsPerQuiz = QuestionPerQuiz) => {
  if (!groupId) {
    return datasource;
  }
  const group = datasource.groups.find(g => g.id == groupId);
  let listQuestion = [];
  if (type === GroupType.RANDOM) {
    const questions = datasource.questions;
    listQuestion = [];
    let idx = 0,
      totalQuestions = questions.length;
    while (idx < questionsPerQuiz) {
      const randomQuestion = questions[getRandomNumber(totalQuestions)];
      const isExist = listQuestion.findIndex(i => i.id == randomQuestion.id) > -1;
      if (!isExist) {
        listQuestion.push(randomQuestion);
      }

      idx++;
    }
  } else {
    listQuestion = datasource.questions.filter(q => q.group == groupId);
  }
  return {
    ...group,
    questions: listQuestion.map((item, idx) => {
      return {
        ...item,
        no: idx + 1
      };
    })
  }
}

export const findQuestion = (source = [], id) => {
  return source.find(i => i.path == id) || {};
}

export const getFirstQuestion = (source = []) => {
  return source[0];
}

export const isLast = (source = [], current) => {
  return source[source.length - 1].path == current.path;
}

export const getNextQuestion = (source = [], current) => {
  const currentIdx = source.findIndex(i => i.path == current.path);
  return source[currentIdx + 1] || {};
}

export const getQuizResult = quizId => {
  // fetch from cache, calculate result
  const quiz = getUserQuiz(quizId);
  let correct = 0;
  let wrong = 0;
  let missed = 0;
  const total = quiz.questions.length;
  quiz.questions.forEach(q => {
    if (typeof q.isMatch === 'undefined') {
      missed++;
    } else {
      if (q.isMatch) {
        correct++;
      } else {
        wrong++;
      }
    }
  });
  return {
    correct,
    wrong,
    missed,
    total
  };
}


export const isMatch = (answers = [], result = []) => {
  if ((answers.length === 0 || result.length === 0) || answers.length !== result.length)
    return false;
  return answers.every(i => result.indexOf(i) > -1);
};


// Quiz storage
export const listSourceQuiz = () => {
  return cacheServices.retrieve(APP_STORAGE_KEYS.SOURCE_QUIZ) || [];
}
export const saveQuizAsSource = (listQuiz) => {
  cacheServices.reset(APP_STORAGE_KEYS.SOURCE_QUIZ);
  cacheServices.store(APP_STORAGE_KEYS.SOURCE_QUIZ, listQuiz);
}

export const getQuizFromSource = id => {
  return listSourceQuiz().find(i => i.id == id);
}

export const getQuestionFromSource = (quizId, questionId) => {
  const userQuiz = getQuizFromSource(quizId);
  return userQuiz.questions.find(q => q.id == questionId);
}

export const saveUserQuiz = quiz => {
  const allQuiz = listAllUserQuiz();
  const isExist = allQuiz.findIndex(i => i.id == quiz.id) > -1;
  if (!isExist) {
    allQuiz.push(quiz);
  } else {
    allQuiz.forEach(item => {
      if (item.id === quiz.id) {
        item = quiz;
      }
    });
  }
  cacheServices.store(APP_STORAGE_KEYS.USER_QUIZ, allQuiz);
}

export const listAllUserQuiz = () => {
  return cacheServices.retrieve(APP_STORAGE_KEYS.USER_QUIZ) || [];
}

export const getUserQuiz = id => {
  const list = listAllUserQuiz();
  return list.find(quiz => quiz.id == id)
}

export const getUserQuestion = (quizId, questionId) => {
  const userQuiz = getUserQuiz(quizId);
  return userQuiz.questions.find(q => q.id == questionId);
}

export const activeQuiz = quizId => {
  cacheServices.store(APP_STORAGE_KEYS.ACTIVED_QUIZ, quizId);
}

export const saveAnswer = (quizId, questionId, answers) => {
  const allQuiz = listAllUserQuiz();
  const userQuiz = allQuiz.find(i => i.id == quizId);
  if (!userQuiz) {
    // return or throw error
    return;
  }
  const question = userQuiz.questions.find(q => q.id == questionId);
  question.answers = answers;
  question.isMatch = isMatch(answers, question.result);
  cacheServices.store(APP_STORAGE_KEYS.USER_QUIZ, allQuiz);
}

export const loadAnswers = quizId => {
  const userQuiz = getUserQuiz(quizId);
  return userQuiz.questions;
}

export const getQuiz = quizId => {
  const userActivedQuiz = getUserQuiz(quizId);
  if (userActivedQuiz) return userActivedQuiz;
  return getQuizFromSource(quizId);
}

export const getQuestion = (quizId, questionId) => {
  const existQuestion = getUserQuestion(quizId, questionId);
  if (existQuestion) {
    return existQuestion;
  }
  return getQuestionFromSource(quizId, questionId);
}

export const navLinks = basePath => {
  const listPage = [];
  for (let key in QuizPages) {
    const p = QuizPages[key];
    if (p && p.showNav) {
      listPage.push({
        ...p,
        fullPath: `${basePath}${p.path}`
      });
    }
  }
  return listPage;
}
