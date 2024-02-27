"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordova = require("cordova");
class AutoPermRequest {
    constructor() {
        this.LOG_TAG = "AutoPermRequest";
    }
    OnNativeSuccessResponse(data) {
        let FormattedLog = `[${this.LOG_TAG}] Received success response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }
    OnNativeErrorResponse(data) {
        let FormattedLog = `[${this.LOG_TAG}] Received error response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }
    ForceRequestAllPermissions() {
        cordova.exec(this.OnNativeSuccessResponse, this.OnNativeErrorResponse, "AutoPermRequest", "ForceRequestAllPermissions");
    }
}
exports.default = AutoPermRequest;
//# sourceMappingURL=AutoPermRequest.js.map