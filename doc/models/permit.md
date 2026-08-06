
# Permit

*This model accepts additional fields of type unknown.*

## Structure

`Permit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partnerId` | `string \| undefined` | Optional | Partner ID (when using the permit-per-partner token sharing model). |
| `profileReference` | `string \| undefined` | Optional | The profile to apply to this permit (when using the shared permits model). |
| `restriction` | [`PermitRestriction \| undefined`](../../doc/models/permit-restriction.md) | Optional | - |
| `resultKey` | `string \| undefined` | Optional | The key to link permit requests to permit results. |
| `validTillDate` | `string \| undefined` | Optional | The expiry date for this permit. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    singleTransactionLimit: {
      currency: 'currency8',
      value: BigInt(122),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    singleUse: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  resultKey: 'resultKey0',
  validTillDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

