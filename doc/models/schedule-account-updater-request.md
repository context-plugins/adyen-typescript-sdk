
# Schedule Account Updater Request

## Structure

`ScheduleAccountUpdaterRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request. |
| `card` | [`Card \| undefined`](../../doc/models/card.md) | Optional | Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided. |
| `merchantAccount` | `string` | Required | Account of the merchant. |
| `reference` | `string` | Required | A reference that merchants can apply for the call. |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The selected detail recurring reference.<br><br>Optional if `card` is provided. |
| `shopperReference` | `string \| undefined` | Optional | The reference of the shopper that owns the recurring contract.<br><br>Optional if `card` is provided. |

## Example

```ts
import { ScheduleAccountUpdaterRequest } from 'adyen';

const scheduleAccountUpdaterRequest: ScheduleAccountUpdaterRequest = {
  merchantAccount: 'merchantAccount2',
  reference: 'reference6',
  additionalData: {
    'key0': 'additionalData0'
  },
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
  },
  selectedRecurringDetailReference: 'selectedRecurringDetailReference0',
  shopperReference: 'shopperReference8',
};
```

