
# Additional Settings Response 1

Additional shopper and transaction information to be included in your [standard webhooks](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalSettingsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `excludeEventCodes` | `string[] \| undefined` | Optional | Object containing list of event codes for which the notification will not be sent. |
| `includeEventCodes` | `string[] \| undefined` | Optional | Object containing list of event codes for which the notification will be sent. |
| `properties` | `Record<string, boolean> \| undefined` | Optional | Object containing boolean key-value pairs. The key can be any [standard webhook additional setting](https://docs.adyen.com/development-resources/webhooks/additional-settings), and the value indicates if the setting is enabled.<br>For example, `includeCaptureDelayHours`: **true** means the standard notifications you get will contain the number of hours remaining until the payment will be captured. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalSettingsResponse1 } from 'adyenlib';

const additionalSettingsResponse1: AdditionalSettingsResponse1 = {
  excludeEventCodes: [
    'excludeEventCodes8',
    'excludeEventCodes7',
    'excludeEventCodes6'
  ],
  includeEventCodes: [
    'includeEventCodes0',
    'includeEventCodes1'
  ],
  properties: {
    'key0': false,
    'key1': true,
    'key2': false
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

