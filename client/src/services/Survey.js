const generateYears = () => {
  const range = [];
  for(let i = 1920; i < 2008; i++) {
    range.push(i);
  }
  return range;
};

export const surveyQuestions = [
  {
    question: 'What is your gender?',
    options: [
      'Man', 
      'Woman', 
      'Other']
  },
  {
    question: 'In what year were you born?',
    options: generateYears()
  },
  {
    question: 'What was the setting of your childhood home?',
    options: [
      "Rural area/countryside",
      "Small town",
      "Suburbs",
      "Large city"
    ]
  },
  {
    question: 'Including you, how many children did your mother have?',
    options: [
      'One', 
      'Two', 
      'Three',
      'Four or more',
      "I don't know"
    ]
  },
  {
    question: 'Where were you in the birth order?',
    options: [
      'Firstborn', 
      'Middle child', 
      'Youngest',
      'Only child']
  },
  {
    question: 'What is your marital status?',
    options: [
      'Never married', 
      'Previously married', 
      'Currently married']
  },
  {
    question: 'Have you ever been responsible for raising a child?',
    options: [
      'Yes', 
      'No']
  },
  {
    question: 'What is your level of education?',
    options: [
      'Less than high school', 
      'High school', 
      'University degree',
      'Graduate degree']
  },
  {
    question: 'If you attended college, what type of field did you major in?',
    options: [
      'Medical', 
      'Science', 
      'Engineering',
      'Law', 
      'Social Science', 
      'Liberal arts',
      'Other'
    ]
  },
  {
    question: 'Is English your native language?',
    options: [
      'Yes', 
      'No']
  },
  {
    question: 'Have you given accurate answers and may they be used for research?',
    options: [
      'Yes', 
      'No']
  },
  {
    question: 'Are you currently enebriated or high on illicit drugs?',
    options: [
      'Yes', 
      'No',
      'Hard to tell']
  }
];