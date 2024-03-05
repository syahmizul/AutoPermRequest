"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        try {
            cordova.exec(this.OnNativeSuccessResponse, this.OnNativeErrorResponse, "AutoPermRequest", "ForceRequestAllPermissions");
        }
        catch (error) {
            let CastedError = error;
            let FormattedLog = `[${this.LOG_TAG}] Exception occurred : ${CastedError.message}`;
            console.log(FormattedLog);
        }
    }
}
exports.default = AutoPermRequest;
;
//# sourceMappingURL=AutoPermRequest.js.map