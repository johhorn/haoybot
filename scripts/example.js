'use strict';

module.exports = robot => {
  robot.hear(/ost/i, response => response.send('Jeg elsker ostepop'));
}
