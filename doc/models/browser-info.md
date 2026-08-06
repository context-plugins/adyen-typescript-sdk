
# Browser Info

The shopper's browser information.

> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.

*This model accepts additional fields of type unknown.*

## Structure

`BrowserInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptHeader` | `string` | Required | The accept header value of the shopper's browser. |
| `colorDepth` | `number` | Required | The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48 bit color depth. |
| `javaEnabled` | `boolean` | Required | Boolean value indicating if the shopper's browser is able to execute Java. |
| `javaScriptEnabled` | `boolean \| undefined` | Optional | Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.<br><br>**Default**: `true` |
| `language` | `string` | Required | The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47). |
| `screenHeight` | `number` | Required | The total height of the shopper's device screen in pixels. |
| `screenWidth` | `number` | Required | The total width of the shopper's device screen in pixels. |
| `timeZoneOffset` | `number` | Required | Time difference between UTC time and the shopper's browser local time, in minutes. |
| `userAgent` | `string` | Required | The user agent value of the shopper's browser. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BrowserInfo } from 'adyen';

const browserInfo: BrowserInfo = {
  acceptHeader: 'acceptHeader6',
  colorDepth: 30,
  javaEnabled: false,
  language: 'language0',
  screenHeight: 56,
  screenWidth: 36,
  timeZoneOffset: 88,
  userAgent: 'userAgent4',
  javaScriptEnabled: true,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

