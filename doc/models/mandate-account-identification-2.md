
# Mandate Account Identification 2

Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.

## Structure

`MandateAccountIdentification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |

## Example

```ts
import { MandateAccountIdentification2 } from 'adyen';

const mandateAccountIdentification2: MandateAccountIdentification2 = {
  type: 'MandateAccountIdentification2',
};
```

