import {
  QuestionType,
  UnitTime,
  GroupType
} from '@constants';

const groups = [
  // {   id: 1,   order: 1,   type: GroupType.NORMAL,   time: 60,   unit:
  // UnitTime.DEFAULT,   path: 'base',   name: 'Base group',   description: 'Base
  // group description' }, {   id: 2,   order: 2,   type: GroupType.NORMAL, time:
  // 60,   unit: UnitTime.DEFAULT,   path: 'other',   name: 'Other group',
  // description: 'Other group description' },
  {
    id: 4,
    order: 4,
    type: GroupType.NORMAL,
    time: 60,
    unit: UnitTime.DEFAULT,
    path: 'nodejs',
    name: 'NodeJs',
    description: 'NodeJS Quiz'
  }, {
    id: 3,
    order: 3,
    type: GroupType.RANDOM,
    time: 60,
    unit: UnitTime.DEFAULT,
    path: 'random',
    name: 'Random',
    totalQuestion: 30,
    description: 'Random group description'
  }
];
const nodeJSQuestions = [{
  group: 4,
  id: 1,
  order: 1,
  path: '1',
  type: QuestionType.SINGLE,
  question: ' Why code written in Node.JS is pretty fast although being written in JavaScript' +
    '?',
  result: ['A'],
  answers: [],
  opts: [{
    id: 'A',
    text: 'Node.JS internally converts JavaScript code to Java based code and then execute ' +
      'the same.'
  }, {
    id: 'B',
    text: 'Node.JS internally converts JavaScript code to C based code and then execute the' +
      ' same.'
  }, {
    id: 'C',
    text: "Being built on Google Chrome's V8 JavaScript Engine."
  }, {
    id: 'D',
    text: 'None of the above.'
  }]
}, {
  group: 4,
  id: 2,
  path: '4',
  order: 2,
  type: QuestionType.SINGLE,
  question: 'By default, npm installs any dependency in the global mode.',
  result: ['A'],
  answers: [],
  opts: [{
    id: 'A',
    text: 'true'
  }, {
    id: 'B',
    text: 'false'
  }]
}, {
  id: 3,
  group: 4,
  order: 3,
  type: QuestionType.SINGLE,
  question: "Which statement executes the code of sample.js file?",
  result: ['B'],
  opts: [{
    id: "A",
    text: "nodejs sample.js"
  }, {
    id: "B",
    text: "node sample.js"
  }, {
    id: "C",
    text: "sample.js"
  }, {
    id: "D",
    text: " None of the above"
  }]
}, {
  id: 4,
  group: 4,
  order: 4,
  type: QuestionType.SINGLE,
  question: "What are the key features of Node.js?",
  result: ['D'],
  opts: [{
    id: "A",
    text: "Real time Data intensive"
  }, {
    id: "B",
    text: "Highly scalable servers for Web Applications"
  }, {
    id: "C",
    text: "Builds fast and scalable network Applications"
  }, {
    id: "D",
    text: "All of the above"
  }]
}, {
  id: 5,
  group: 4,
  order: 5,
  type: QuestionType.SINGLE,
  question: "Why a Node.JS code is pretty fast although being written in JavaScript?",
  result: ['C'],
  opts: [{
    id: "A",
    text: "Node.JS internally converts JavaScript code to Java based code and then execute " +
      "the same"
  }, {
    id: "B",
    text: "Node.JS internally converts JavaScript code to C based code and then execute the" +
      " same"
  }, {
    id: "C",
    text: "Being built on Google Chrome's V8 JavaScript Engine"
  }, {
    id: "D",
    text: "None of the above"
  }]
}, {
  id: 6,
  group: 4,
  order: 6,
  type: QuestionType.SINGLE,
  question: "Which module is used to serve static resources in Node.js?",
  result: ['A'],
  opts: [{
    id: "A",
    text: "node-static"
  }, {
    id: "B",
    text: "http"
  }, {
    id: "C",
    text: "node-resource"
  }, {
    id: "D",
    text: "static"
  }]
}, {
  id: 7,
  group: 4,
  order: 7,
  type: QuestionType.SINGLE,
  question: "What should you do in your code to improve your application’s performance?",
  result: ['A'],
  opts: [{
    id: "A",
    text: "Use gzip compression"
  }, {
    id: "B",
    text: "Don’t use synchronous functions"
  }, {
    id: "C",
    text: "Do logging correctly"
  }, {
    id: "D",
    text: "Handle exceptions properly"
  }]
}, {
  id: 8,
  group: 4,
  order: 8,
  type: QuestionType.SINGLE,
  question: "Is console a global object?",
  result: ['A'],
  opts: [{
    id: "A",
    text: "null"
  }, {
    id: "B",
    text: "false"
  }, {
    id: "C",
    text: "true"
  }, {
    id: "D",
    text: "None"
  }]
}]

const questions = [{
  group: 1,
  id: 1,
  order: 1,
  path: '1',
  type: QuestionType.SINGLE,
  question: 'How are you, today?',
  result: ['1'],
  answers: [],
  opts: [{
    id: '1',
    text: 'Fine'
  }, {
    id: '2',
    text: 'Good'
  }, {
    id: '3',
    text: 'Bad'
  }, {
    id: '4',
    text: 'Undefined'
  }]
}, {
  group: 2,
  id: 2,
  path: '2',
  order: 2,
  type: QuestionType.MULTIPLE,
  question: 'Which place do you want to visit this summer?',
  result: [
    '1', '2', '4'
  ],
  answers: [],
  opts: [{
    id: '1',
    text: 'Da Nang, Hoi An, Hue'
  }, {
    id: '2',
    text: 'Phu Quoc'
  }, {
    id: '3',
    text: 'Nha Trang'
  }, {
    id: '4',
    text: 'Ha noi, Ninh Binh'
  }, {
    id: '5',
    text: 'At Home'
  }]
},
...nodeJSQuestions
];

const defaultQuiz = {
  name: "Quiz about Coffee",
  description: "Make a description here",
  author: "Google",
  groups,
  questions
};

export {
  defaultQuiz as
    default, questions
};
