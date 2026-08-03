
# Three Ds 2 Card Range Detail

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2CardRangeDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsInfoInd` | `string[] \| undefined` | Optional | Provides additional information to the 3DS Server.<br>Possible values:<br><br>- 01 (Authentication is available at ACS)<br>- 02 (Attempts supported by ACS or DS)<br>- 03 (Decoupled authentication supported)<br>- 04 (Whitelisting supported) |
| `brandCode` | `string \| undefined` | Optional | Card brand. |
| `endRange` | `string \| undefined` | Optional | BIN end range. |
| `startRange` | `string \| undefined` | Optional | BIN start range. |
| `threeDs2Versions` | `string[] \| undefined` | Optional | Supported 3D Secure protocol versions |
| `threeDsMethodUrl` | `string \| undefined` | Optional | In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDs2CardRangeDetail } from 'adyenlib';

const threeDs2CardRangeDetail: ThreeDs2CardRangeDetail = {
  acsInfoInd: [
    'acsInfoInd7',
    'acsInfoInd8'
  ],
  brandCode: 'brandCode2',
  endRange: 'endRange0',
  startRange: 'startRange8',
  threeDs2Versions: [
    'threeDS2Versions7',
    'threeDS2Versions8',
    'threeDS2Versions9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

