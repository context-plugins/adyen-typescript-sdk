
# Valuelink Info

## Structure

`ValuelinkInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | Authorisation Mid |
| `pinSupport` | [`PinSupportEnum`](../../doc/models/pin-support-enum.md) | Required | PIN Support. For ecommerce, PIN is required. |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |

## Example

```ts
import { PinSupportEnum, ValuelinkInfo } from 'adyen';

const valuelinkInfo: ValuelinkInfo = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupportEnum.PIN,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
};
```

