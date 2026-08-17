
# Valuelink Info 2

Details to provide if `type` is **valuelink**.

## Structure

`ValuelinkInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | Authorisation Mid |
| `pinSupport` | [`PinSupportEnum`](../../doc/models/pin-support-enum.md) | Required | PIN Support. For ecommerce, PIN is required. |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |

## Example

```ts
import { PinSupportEnum, ValuelinkInfo2 } from 'adyen';

const valuelinkInfo2: ValuelinkInfo2 = {
  authorisationMid: 'authorisationMid2',
  pinSupport: PinSupportEnum.PIN,
  submitterId: 'submitterId8',
  terminalId: 'terminalId4',
};
```

