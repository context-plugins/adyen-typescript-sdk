
# Three DS 2 Card Range Detail

## Structure

`ThreeDS2CardRangeDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsInfoInd` | `string[] \| undefined` | Optional | Provides additional information to the 3DS Server.<br>Possible values:<br><br>- 01 (Authentication is available at ACS)<br>- 02 (Attempts supported by ACS or DS)<br>- 03 (Decoupled authentication supported)<br>- 04 (Whitelisting supported) |
| `brandCode` | `string \| undefined` | Optional | Card brand. |
| `endRange` | `string \| undefined` | Optional | BIN end range. |
| `startRange` | `string \| undefined` | Optional | BIN start range. |
| `threeDS2Versions` | `string[] \| undefined` | Optional | Supported 3D Secure protocol versions |
| `threeDSMethodURL` | `string \| undefined` | Optional | In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to. |

## Example

```ts
import { ThreeDS2CardRangeDetail } from 'adyen';

const threeDS2CardRangeDetail: ThreeDS2CardRangeDetail = {
  acsInfoInd: [
    'acsInfoInd5',
    'acsInfoInd6'
  ],
  brandCode: 'brandCode2',
  endRange: 'endRange4',
  startRange: 'startRange6',
  threeDS2Versions: [
    'threeDS2Versions3'
  ],
};
```

