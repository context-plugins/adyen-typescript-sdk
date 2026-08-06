
# Notify Shopper Result

*This model accepts additional fields of type unknown.*

## Structure

`NotifyShopperResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayedReference` | `string \| undefined` | Optional | Reference of Pre-debit notification that is displayed to the shopper |
| `message` | `string \| undefined` | Optional | A simple description of the `resultCode`. |
| `pspReference` | `string \| undefined` | Optional | The unique reference that is associated with the request. |
| `reference` | `string \| undefined` | Optional | Reference of Pre-debit notification sent in my the merchant |
| `resultCode` | `string \| undefined` | Optional | The code indicating the status of notification. |
| `shopperNotificationReference` | `string \| undefined` | Optional | The unique reference for the request sent downstream. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the recurringDetailReference returned in the response when token was created |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotifyShopperResult } from 'adyen';

const notifyShopperResult: NotifyShopperResult = {
  displayedReference: 'displayedReference8',
  message: 'message0',
  pspReference: 'pspReference2',
  reference: 'reference6',
  resultCode: 'resultCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

