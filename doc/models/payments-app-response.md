
# Payments App Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsAppResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentsApps` | [`PaymentsAppDto[]`](../../doc/models/payments-app-dto.md) | Required | List of Payments Apps. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentsAppResponse } from 'adyen';

const paymentsAppResponse: PaymentsAppResponse = {
  paymentsApps: [
    {
      installationId: 'installationId8',
      merchantAccountCode: 'merchantAccountCode4',
      status: 'status4',
      merchantStoreCode: 'merchantStoreCode4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

