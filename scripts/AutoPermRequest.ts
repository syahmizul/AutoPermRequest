export default class AutoPermRequest
{
    public LOG_TAG : string = "AutoPermRequest";

    private OnNativeSuccessResponse(data:any) : any
    {
        let FormattedLog : string = `[${this.LOG_TAG}] Received success response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }

    private OnNativeErrorResponse(data:any) : any
    {
        let FormattedLog : string = `[${this.LOG_TAG}] Received error response from native.`;
        console.log(FormattedLog);
        console.dir(data);
    }

    public ForceRequestAllPermissions() : void
    {
        try
        {
          cordova.exec(this.OnNativeSuccessResponse, this.OnNativeErrorResponse, "AutoPermRequest", "ForceRequestAllPermissions");
        }
        catch(error)
        {
            let CastedError : Error = <Error>error;
            let FormattedLog : string = `[${this.LOG_TAG}] Exception occurred : ${CastedError.message}`;
            console.log(FormattedLog);
        }
    }
};
