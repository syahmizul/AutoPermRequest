package com.syahmizul.AutoPermRequest;

import android.content.pm.PackageManager;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;


import org.json.JSONArray;
import org.json.JSONException;


public class AutoPermRequest extends CordovaPlugin{

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("ForceRequestAllPermissions")) {
      this.ForceRequestAllPermissions();
      return true;
    }
    return false;
  }

  /**
   * Reads which permission is required by reading the manifest file,and request them.
   */
  private void ForceRequestAllPermissions()
  {
    try{
      String[] permissions = this.cordova.getActivity().getPackageManager().getPackageInfo(this.cordova.getActivity().getPackageName(), PackageManager.GET_PERMISSIONS).requestedPermissions;
      this.cordova.requestPermissions(this, 0, permissions);
    } catch (PackageManager.NameNotFoundException e) {
      e.printStackTrace();
    }
  }
}
