
# Additional Settings Response

## Structure

`AdditionalSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `excludeEventCodes` | `string[] \| undefined` | Optional | Object containing list of event codes for which the notification will not be sent. |
| `includeEventCodes` | `string[] \| undefined` | Optional | Object containing list of event codes for which the notification will be sent. |
| `properties` | `Record<string, boolean> \| undefined` | Optional | Object containing boolean key-value pairs. The key can be any [standard webhook additional setting](https://docs.adyen.com/development-resources/webhooks/additional-settings), and the value indicates if the setting is enabled.<br>For example, `includeCaptureDelayHours`: **true** means the standard notifications you get will contain the number of hours remaining until the payment will be captured. |

## Example

```ts
import { AdditionalSettingsResponse } from 'adyen';

const additionalSettingsResponse: AdditionalSettingsResponse = {
  excludeEventCodes: [
    'excludeEventCodes0',
    'excludeEventCodes9'
  ],
  includeEventCodes: [
    'includeEventCodes2',
    'includeEventCodes3',
    'includeEventCodes4'
  ],
  properties: {
    'key0': false
  },
};
```

