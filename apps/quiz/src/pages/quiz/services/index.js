import datasource from '@data';
import * as cacheServices from './cache';
import {
  QuizPages,
  GroupType,
  QuestionPerQuiz,
  APP_STORAGE_KEYS
} from '@constants';

export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

export const listGroup = () => datasource.groups || [];

export const getQuizByGroup = (groupId, type, questionsPerQuiz = QuestionPerQuiz) => {
  if (!groupId) {
    return datasource;
  }
  const group = datasource.groups.find(g => g.id == groupId);
  let listQuestion = [];
  if (type === GroupType.RANDOM) {
    const { questions } = datasource;
    listQuestion = [];
    let idx = 0;
    const totalQuestions = questions.length;
    while (idx < questionsPerQuiz) {
      const randomQuestion = questions[getRandomNumber(totalQuestions)];
      const isExist = listQuestion.findIndex(i => i.id == randomQuestion.id) > -1;
      if (!isExist) {
        listQuestion.push(randomQuestion);
      }

      idx += 1;
    }
  } else {
    listQuestion = datasource.questions.filter(q => q.group == groupId);
  }
  return {
    ...group,
    questions: listQuestion.map((item, idx) => ({
      ...item,
      no: idx + 1
    }))
  };
};

export const findQuestion = (source = [], id) => source.find(i => i.path == id) || {};

export const getFirstQuestion = (source = []) => source[0];

export const isLast = (source = [], current) => source[source.length - 1].path == current.path;

export const getNextQuestion = (source = [], current) => {
  const currentIdx = source.findIndex(i => i.path == current.path);
  return source[currentIdx + 1] || {};
};

export const isMatch = (answers = [], result = []) => {
  if ((answers.length === 0 || result.length === 0) || answers.length !== result.length) {
    return false;
  }
  return answers.every(i => result.indexOf(i) > -1);
};


// Quiz storage
export const listSourceQuiz = () => cacheServices.retrieve(APP_STORAGE_KEYS.SOURCE_QUIZ) || [];
export const saveQuizAsSource = (listQuiz) => {
  cacheServices.reset(APP_STORAGE_KEYS.SOURCE_QUIZ);
  cacheServices.store(APP_STORAGE_KEYS.SOURCE_QUIZ, listQuiz);
};

export const getQuizFromSource = id => listSourceQuiz().find(i => i.id == id);

export const getQuestionFromSource = (quizId, questionId) => {
  const userQuiz = getQuizFromSource(quizId);
  return userQuiz.questions.find(q => q.id == questionId);
};

export const listAllUserQuiz = () => cacheServices.retrieve(APP_STORAGE_KEYS.USER_QUIZ) || [];

export const saveUserQuiz = (quiz) => {
  const allQuiz = listAllUserQuiz();
  const isExist = allQuiz.findIndex(i => i.id == quiz.id) > -1;
  if (!isExist) {
    allQuiz.push(quiz);
  } else {
    allQuiz.forEach((item) => {
      if (item.id === quiz.id) {
        item = quiz;
      }
    });
  }
  cacheServices.store(APP_STORAGE_KEYS.USER_QUIZ, allQuiz);
};

export const getUserQuiz = (id) => {
  const list = listAllUserQuiz();
  return list.find(quiz => quiz.id == id);
};


export const getQuizResult = (quizId) => {
  // fetch from cache, calculate result
  const quiz = getUserQuiz(quizId);
  let correct = 0;
  let wrong = 0;
  let missed = 0;
  const total = quiz.questions.length;
  quiz.questions.forEach((q) => {
    if (typeof q.isMatch === 'undefined') {
      missed += 1;
    } else if (q.isMatch) {
      correct += 1;
    } else {
      wrong += 1;
    }
  });
  return {
    correct,
    wrong,
    missed,
    total
  };
};

export const getUserQuestion = (quizId, questionId) => {
  const userQuiz = getUserQuiz(quizId);
  return userQuiz.questions.find(q => q.id == questionId);
};

export const activeQuiz = (quizId) => {
  cacheServices.store(APP_STORAGE_KEYS.ACTIVED_QUIZ, quizId);
};

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
};

export const loadAnswers = (quizId) => {
  const userQuiz = getUserQuiz(quizId);
  return userQuiz.questions;
};

export const getQuiz = (quizId) => {
  const userActivedQuiz = getUserQuiz(quizId);
  if (userActivedQuiz) return userActivedQuiz;
  return getQuizFromSource(quizId);
};

export const getQuestion = (quizId, questionId) => {
  const existQuestion = getUserQuestion(quizId, questionId);
  if (existQuestion) {
    return existQuestion;
  }
  return getQuestionFromSource(quizId, questionId);
};

export const navLinks = (basePath) => {
  const listPage = [];
  for (const key in QuizPages) {
    const p = QuizPages[key];
    if (p && p.showNav) {
      listPage.push({
        ...p,
        fullPath: `${basePath}${p.path}`
      });
    }
  }
  return listPage;
};
