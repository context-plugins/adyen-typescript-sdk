
# Permit

## Structure

`Permit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string \| undefined` | Optional | Partner ID (when using the permit-per-partner token sharing model). |
| `profileReference` | `string \| undefined` | Optional | The profile to apply to this permit (when using the shared permits model). |
| `restriction` | [`PermitRestriction2 \| undefined`](../../doc/models/permit-restriction-2.md) | Optional | Permit level restriction overrides. |
| `resultKey` | `string \| undefined` | Optional | The key to link permit requests to permit results. |
| `validTillDate` | `string \| undefined` | Optional | The expiry date for this permit. |

## Example

```ts
import { Permit } from 'adyen';

const permit: Permit = {
  partnerId: 'partnerId4',
  profileReference: 'profileReference6',
  restriction: {
    maxAmount: {
      currency: 'currency4',
      value: BigInt(160),
    },
    singleTransactionLimit: {
      currency: 'currency8',
      value: BigInt(122),
    },
    singleUse: false,
  },
  resultKey: 'resultKey0',
  validTillDate: '2016-03-13T12:52:32.123Z',
};
```

