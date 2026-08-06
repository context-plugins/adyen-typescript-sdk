
# Valuelink Info

*This model accepts additional fields of type unknown.*

## Structure

`ValuelinkInfo`

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
import { PinSupport, ValuelinkInfo } from 'adyen';

const valuelinkInfo: ValuelinkInfo = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupport.Pin,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

