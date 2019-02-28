const fetch = require("node-fetch");

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

function logicA(a, b) {
    return a + b;
}

async function logicB(a, b) {
    const { magicNumber } = await getData(`https://www.google.com/${a}`);
    console.log('magicNumber', magicNumber)
    return magicNumber * a * b;
}

module.exports = {
    logicA,
    logicB
}