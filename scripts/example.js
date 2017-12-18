
module.exports = robot => {
  'use strict';
  robot.hear(/ost/i, response => response.send('Jeg elsker ostepop'));
}
