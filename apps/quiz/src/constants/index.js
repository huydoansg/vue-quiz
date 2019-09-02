export * from './quiz-pages';

export const UnitTime = {
  Default: 'MINUTE',
  MINUTE: 'MINUTE',
  HOUR: 'HOUR'
};

export const APP_STORAGE_KEYS = {
  SOURCE_QUIZ: 'po-quiz',
  USER_QUIZ: 'user-quiz',
  ACTIVED_QUIZ: 'actived-quiz'
};

export const DefaultPath = '/quiz';

export const SnackBarTimeOut = 2000;

export const DialogType = {
  Alert: 'alert',
  Confirmation: 'confirm'
};

export const QuestionPerQuiz = 30;

export const GroupType = {
  DEFAULT: 'NORMAL',
  NORMAL: 'NORMAL',
  RANDOM: 'RANDOM'
};

export const QuestionType = {
  DEFAULT: 'SINGLE',
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE',
  FREE_TEXT: 'FREE_TEXT'
};
