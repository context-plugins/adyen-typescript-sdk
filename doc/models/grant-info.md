
# Grant Info

*This model accepts additional fields of type unknown.*

## Structure

`GrantInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterparty` | [`Counterparty12 \| undefined`](../../doc/models/counterparty-12.md) | Optional | - |
| `grantAccountId` | `string` | Required | The unique identifier of the grant account that tracks this grant. |
| `grantOfferId` | `string` | Required | The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantInfo } from 'adyen';

const grantInfo: GrantInfo = {
  grantAccountId: 'grantAccountId0',
  grantOfferId: 'grantOfferId2',
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

