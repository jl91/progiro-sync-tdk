package progiro.sync.plugins;

    import org.json.JSONArray;
import org.json.JSONException;
import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

public class Sync extends CordovaPlugin {

    public static final String FIND_BY_MESSAGE = "findByMessage";

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        try {
            String name = args.getString(0);

            if (name.equals("null")) {
                throw new Exception();
            }
            
            return new PluginResult(PluginResult.Status.OK, "Hello, " + name);
            
        } catch (Exception e) {
            return new PluginResult(PluginResult.Status.INVALID_ACTION, "hello missing parameter!");
        }

    }

}
