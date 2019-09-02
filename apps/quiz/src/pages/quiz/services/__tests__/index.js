import {
  GroupType
} from '@constants';
import {
  isLast,
  getFirstQuestion,
  getNextQuestion,
  findQuestion,
  isMatch,
  getRandomNumber,
  listGroup,
  getQuizByGroup
} from '../index';
import quizQuestions from '@data';

describe('Quiz Service', () => {
  it('load all groups', () => {
    expect(listGroup().length).toBe(3);
  });

  it('Load quiz by conditions', () => {
    const normalGroup = getQuizByGroup(1, GroupType.NORMAL);
    expect(normalGroup.questions.length).toBe(1);
    expect(normalGroup.type).toBe(GroupType.NORMAL);

    const randomGroup = getQuizByGroup(3, GroupType.RANDOM);
    expect(randomGroup.questions.length).toBe(2);
    expect(randomGroup.type).toBe(GroupType.RANDOM);
  });

  it('Find a question correctly by Id', () => {
    expect(findQuestion(quizQuestions.questions, 1)).toBeDefined();
  });

  it('Get first question', () => {
    expect(getFirstQuestion(quizQuestions.questions)).toBeDefined();
    expect(getFirstQuestion(quizQuestions.questions).path).toBe('1');
  });
  it('Is Last Question', () => {
    expect(isLast(quizQuestions.questions, {
      path: '1'
    })).toBeFalsy();
    expect(isLast(quizQuestions.questions, {
      path: '2'
    })).toBeTruthy();
  });

  it('get Next Question', () => {
    expect(getNextQuestion(quizQuestions.questions, {
      path: '1'
    })).toBeDefined();
    expect(getNextQuestion(quizQuestions.questions, {
      path: '1'
    }).path).toBe('2');
    expect(getNextQuestion(quizQuestions.questions, {
      path: '2'
    }).path).toBeUndefined();
  });

  it('Your answer must match with result', () => {
    expect(isMatch(['1'], ['1'])).toBeTruthy();
    expect(isMatch(['1'], [''])).toBeFalsy();
    expect(isMatch([], ['1'])).toBeFalsy();
    expect(isMatch()).toBeFalsy();
    expect(isMatch(['1', 2], ['1', 2])).toBeTruthy();
  });

  it('Get random is less than max', () => {
    expect(getRandomNumber(10)).toBeLessThan(10);
  });
});
