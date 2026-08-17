
# Payments App Response

## Structure

`PaymentsAppResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentsApps` | [`PaymentsAppDto[]`](../../doc/models/payments-app-dto.md) | Required | List of Payments Apps. |

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
    }
  ],
};
```

