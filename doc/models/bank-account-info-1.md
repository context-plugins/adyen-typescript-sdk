
# Bank Account Info 1

Contains information about the legal entity's bank account.

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccountInfo1AccountIdentification \| undefined`](../../doc/models/containers/bank-account-info-1-account-identification.md) | Optional | This is a container for one-of cases. |
| `accountType` | `string \| undefined` | Optional | The type of bank account. |
| `bankName` | `string \| undefined` | Optional | The name of the banking institution where the bank account is held. |
| `countryCode` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**. |
| `trustedSource` | `boolean \| undefined` | Optional, Read-only | Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccountInfo1, Type413 } from 'adyenlib';

const bankAccountInfo1: BankAccountInfo1 = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: Type413.AuLocal,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accountType: 'accountType4',
  bankName: 'bankName0',
  countryCode: 'countryCode0',
  trustedSource: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

