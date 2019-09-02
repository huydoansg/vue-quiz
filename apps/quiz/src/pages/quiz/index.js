import Quiz from './pages/Index.vue';
import InvalidPath from './pages/InvalidPath.vue';

const childRoutes = [{
  path: '/',
  alias: '/welcome',
  name: 'welcome',
  component: () => import( /* webpackChunkName: "quiz-test" */
    './pages/Welcome.vue')
}, {
  path: ':quizId/questions',
  name: 'questions',
  props: true,
  component: () => import( /* webpackChunkName: "quiz-test" */
    './pages/Questions.vue')
}, {
  path: ':quizId/question/:questionId',
  name: 'question',
  props: true,
  component: () => import( /* webpackChunkName: "quiz-test" */
    './pages/Question.vue')
}, {
  path: ':quizId/review',
  name: 'review',
  props: true,
  component: () => import( /* webpackChunkName: "quiz-test" */
    './pages/Review.vue')
}, {
  path: ':quizId/result',
  name: 'result',
  props: true,
  component: () => import( /* webpackChunkName: "quiz-test" */
    './pages/Result.vue')
}, {
  path: '*',
  name: 'invalid-path',
  component: InvalidPath
}];

export const configure = ({
  basePath = '/quiz'
}) => {
  return {
    path: basePath,
    component: Quiz,
    props: {
      basePath
    },
    children: childRoutes
  };
}
