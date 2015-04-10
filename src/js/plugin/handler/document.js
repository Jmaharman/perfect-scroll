/* Copyright (c) 2015 Hyunje Alex Jun and other contributors
 * Licensed under the MIT License
 */

'use strict';

var updateGeometry = require('../update-geometry');

module.exports = function (element) {
  function onScroll() {
    updateGeometry(element);
  }

  window.addEventListener('scroll', onScroll);
};