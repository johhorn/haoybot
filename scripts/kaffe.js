'use strict';

module.exports = robot => {
  robot.hear(
    /kaffen er satt på/i,
    response => setTimeout(
      () => response.send('Kaffen er klar!'),
      6*1000*60,
    )
  );
}
