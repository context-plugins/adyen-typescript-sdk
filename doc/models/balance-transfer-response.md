
# Balance Transfer Response

## Structure

`BalanceTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | The date when the balance transfer was performed. |
| `pspReference` | `string` | Required | Adyen's 16-character string reference associated with the balance transfer. |

## Example

```ts
import { BalanceTransferResponse } from 'adyen';

const balanceTransferResponse: BalanceTransferResponse = {
  createdAt: '2016-03-13T12:52:32.123Z',
  pspReference: 'pspReference6',
};
```

