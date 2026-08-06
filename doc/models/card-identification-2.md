
# Card Identification 2

Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:

- `storedPaymentMethodId` or
- `expiryMonth`, `expiryYear`, and `number`.

*This model accepts additional fields of type unknown.*

## Structure

`CardIdentification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiryMonth` | `string \| undefined` | Optional | The expiry month of the card.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br><br>* 03 = March<br>* 11 = November<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `expiryYear` | `string \| undefined` | Optional | The expiry year of the card.<br><br>Format: four digits. For example: 2020<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `issueNumber` | `string \| undefined` | Optional | The issue number of the card. Applies only to some UK debit cards.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `number` | `string \| undefined` | Optional | The card number without any separators.<br><br>For security, the response only includes the last four digits of the card number.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `startMonth` | `string \| undefined` | Optional | The month when the card was issued. Applies only to some UK debit cards.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br><br>* 03 = March<br>* 11 = November<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `startYear` | `string \| undefined` | Optional | The year when the card was issued. Applies only to some UK debit cards.<br><br>Format: four digits. For example: 2020<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardIdentification2 } from 'adyen';

const cardIdentification2: CardIdentification2 = {
  expiryMonth: 'expiryMonth8',
  expiryYear: 'expiryYear2',
  issueNumber: 'issueNumber4',
  number: 'number8',
  startMonth: 'startMonth4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

