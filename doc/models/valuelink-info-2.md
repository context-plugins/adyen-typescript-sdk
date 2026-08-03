
# Valuelink Info 2

Details to provide if `type` is **valuelink**.

*This model accepts additional fields of type unknown.*

## Structure

`ValuelinkInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | Authorisation Mid |
| `pinSupport` | [`PinSupport`](../../doc/models/pin-support.md) | Required | - |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PinSupport, ValuelinkInfo2 } from 'adyenlib';

const valuelinkInfo2: ValuelinkInfo2 = {
  authorisationMid: 'authorisationMid2',
  pinSupport: PinSupport.Pin,
  submitterId: 'submitterId8',
  terminalId: 'terminalId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

