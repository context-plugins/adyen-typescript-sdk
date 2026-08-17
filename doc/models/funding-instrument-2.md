
# Funding Instrument 2

Details of the card or token used to fund the pay-in transaction.

## Structure

`FundingInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardIdentification` | [`CardIdentification2 \| undefined`](../../doc/models/card-identification-2.md) | Optional | Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:<br><br>- `storedPaymentMethodId` or<br>- `expiryMonth`, `expiryYear`, and `number`. |
| `networkPaymentReference` | `string \| undefined` | Optional | The unique reference assigned by the card network for the pay-in transaction. |
| `reference` | `string \| undefined` | Optional | Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**. |
| `sourceOfFunds` | [`SourceOfFundsEnum \| undefined`](../../doc/models/source-of-funds-enum.md) | Optional | Indicates where the funds used for the transfer originated. Possible values are:<br><br>- **DEBIT** for card-to-card transfers.<br>- **DEPOSIT_ACCOUNT** for wallet-to-card transfers. |

## Example

```ts
import { FundingInstrument2, SourceOfFundsEnum } from 'adyen';

const fundingInstrument2: FundingInstrument2 = {
  cardIdentification: {
    expiryMonth: 'expiryMonth2',
    expiryYear: 'expiryYear2',
    issueNumber: 'issueNumber0',
    number: 'number6',
    startMonth: 'startMonth8',
  },
  networkPaymentReference: 'networkPaymentReference8',
  reference: 'reference6',
  sourceOfFunds: SourceOfFundsEnum.DEBIT,
};
```

