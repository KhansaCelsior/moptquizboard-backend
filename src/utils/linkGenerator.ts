import urlgenerator from 'urlgenerator';


function generateQuizLink(quizId: number, userid: number) {
  const createURLwithParameters = urlgenerator.createURLwithParameters;
  const parameters = {
    quizid: quizId,
    userid: userid,
  };
  const baseURL = 'http://localhost:4200';
  const finalURL = createURLwithParameters(baseURL, parameters);
  return finalURL;
  console.log('final URL is ', finalURL);
}

export default generateQuizLink;
