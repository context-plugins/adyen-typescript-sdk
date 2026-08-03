
# Valuelink Response Info 2

**valuelink** details

*This model accepts additional fields of type unknown.*

## Structure

`ValuelinkResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | Authorisation Mid |
| `pinSupport` | [`PinSupport \| undefined`](../../doc/models/pin-support.md) | Optional | - |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PinSupport, ValuelinkResponseInfo2 } from 'adyenlib';

const valuelinkResponseInfo2: ValuelinkResponseInfo2 = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupport.Pin,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

