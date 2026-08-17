
# Valuelink Response Info

## Structure

`ValuelinkResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | Authorisation Mid |
| `pinSupport` | [`PinSupportEnum \| undefined`](../../doc/models/pin-support-enum.md) | Optional | PIN Support. For ecommerce, PIN is required. |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |

## Example

```ts
import { PinSupportEnum, ValuelinkResponseInfo } from 'adyen';

const valuelinkResponseInfo: ValuelinkResponseInfo = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupportEnum.PIN,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
};
```

