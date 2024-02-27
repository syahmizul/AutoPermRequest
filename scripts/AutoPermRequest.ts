import * as cordova from 'cordova';

class AutoPermRequest
{
    public LOG_TAG : string = "AutoPermRequest";

    private OnNativeSuccessResponse(data:any):any
    {
        let FormattedLog = `[${this.LOG_TAG}] Received success response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }

    private OnNativeErrorResponse(data:any):any
    {
        let FormattedLog = `[${this.LOG_TAG}] Received error response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }

    public ForceRequestAllPermissions():void
    {
        cordova.exec(this.OnNativeSuccessResponse, this.OnNativeErrorResponse, "AutoPermRequest", "ForceRequestAllPermissions");
    }
}

export default AutoPermRequest;