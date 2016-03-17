/**
 * Author: Niels A.D.
 * Project: cordova-wifiscanner (https://github.com/nielsAD/cordova-wifiscanner)
 * License: Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 *
 * AccessPoint class
 */

var AccessPoint = function(BSSID, SSID, level, capabilities) {
    this.BSSID = BSSID;
    this.SSID  = SSID;
    this.level = level;
    this.capabilities = capabilities;
};

module.exports = AccessPoint;
