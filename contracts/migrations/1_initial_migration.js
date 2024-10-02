// SPDX-License-Identifier: MIT
const SimpleNote = artifacts.require("SimpleNote");

module.exports = function (deployer) {
    deployer.deploy(SimpleNote);
};
