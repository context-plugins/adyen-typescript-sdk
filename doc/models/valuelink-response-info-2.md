
# Valuelink Response Info 2

**valuelink** details

## Structure

`ValuelinkResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | Authorisation Mid |
| `pinSupport` | [`PinSupportEnum \| undefined`](../../doc/models/pin-support-enum.md) | Optional | PIN Support. For ecommerce, PIN is required. |
| `submitterId` | `string \| undefined` | Optional | Submitter ID |
| `terminalId` | `string \| undefined` | Optional | Terminal ID |

## Example

```ts
import { PinSupportEnum, ValuelinkResponseInfo2 } from 'adyen';

const valuelinkResponseInfo2: ValuelinkResponseInfo2 = {
  authorisationMid: 'authorisationMid6',
  pinSupport: PinSupportEnum.PIN,
  submitterId: 'submitterId2',
  terminalId: 'terminalId8',
};
```

