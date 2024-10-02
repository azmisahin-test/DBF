// SPDX-License-Identifier: MIT
const SimpleNotes = artifacts.require("SimpleNotes");

module.exports = function (deployer) {
    deployer.deploy(SimpleNotes);
};
