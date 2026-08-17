
# Recurring Details Request

## Structure

`RecurringDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the (transaction) request with. |
| `recurring` | [`Recurring \| undefined`](../../doc/models/recurring.md) | Optional | A container for the type of a recurring contract to be retrieved.<br><br>The contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.<br>However, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase. |
| `shopperReference` | `string` | Required | The reference you use to uniquely identify the shopper (e.g. user ID or account ID). |

## Example

```ts
import {
  ContractEnum,
  RecurringDetailsRequest,
  TokenServiceEnum,
} from 'adyen';

const recurringDetailsRequest: RecurringDetailsRequest = {
  merchantAccount: 'merchantAccount6',
  shopperReference: 'shopperReference2',
  recurring: {
    contract: ContractEnum.EnumONECLICKRECURRING,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenServiceEnum.VISATOKENSERVICE,
  },
};
```

