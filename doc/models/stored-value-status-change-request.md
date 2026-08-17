
# Stored Value Status Change Request

## Structure

`StoredValueStatusChangeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The amount information for the transaction. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `paymentMethod` | `Record<string, string>` | Required | The collection that contains the type of the payment method and its specific information if available |
| `recurringDetailReference` | `string \| undefined` | Optional | - |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `shopperInteraction` | [`ShopperInteractionEnum \| undefined`](../../doc/models/shopper-interaction-enum.md) | Optional | Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br><br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal. |
| `shopperReference` | `string \| undefined` | Optional | - |
| `status` | [`Status6Enum`](../../doc/models/status-6-enum.md) | Required | The status you want to change to |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |

## Example

```ts
import {
  ShopperInteractionEnum,
  Status6Enum,
  StoredValueStatusChangeRequest,
} from 'adyen';

const storedValueStatusChangeRequest: StoredValueStatusChangeRequest = {
  merchantAccount: 'merchantAccount8',
  paymentMethod: {
    'key0': 'paymentMethod4'
  },
  reference: 'reference4',
  status: Status6Enum.Active,
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  recurringDetailReference: 'recurringDetailReference0',
  shopperInteraction: ShopperInteractionEnum.Ecommerce,
  shopperReference: 'shopperReference8',
  store: 'store0',
};
```

