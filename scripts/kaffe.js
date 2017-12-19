/*
* Tell ned til kaffen er klar på OPF! Estimert tidsbruk er 6 minutter
*/

module.exports = robot => {
  'use strict';

  robot.commands.push('kaffen er satt på - begynn nedtelling til kaffen er klar');
  robot.hear(
    /kaffen er satt på/i,
    response => setTimeout(
      () => response.send('Kaffen er klar!'),
      6
    )
  );
}
