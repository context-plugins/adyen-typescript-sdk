
# Valuelink Response Info

*This model accepts additional fields of type unknown.*

## Structure

`ValuelinkResponseInfo`

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
import { PinSupport, ValuelinkResponseInfo } from 'adyen';

const valuelinkResponseInfo: ValuelinkResponseInfo = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupport.Pin,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

