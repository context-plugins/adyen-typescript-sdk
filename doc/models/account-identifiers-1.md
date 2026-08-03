
# Account Identifiers 1

Contains various codes and details used to uniquely identify the bank account across different regions.

*This model accepts additional fields of type unknown.*

## Structure

`AccountIdentifiers1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ach` | [`AchAccountIdentifier \| undefined`](../../doc/models/ach-account-identifier.md) | Optional | - |
| `bacs` | [`BacsAccountIdentifier \| undefined`](../../doc/models/bacs-account-identifier.md) | Optional | - |
| `bsb` | [`BsbAccountIdentifier \| undefined`](../../doc/models/bsb-account-identifier.md) | Optional | - |
| `eft` | [`EftAccountIdentifier \| undefined`](../../doc/models/eft-account-identifier.md) | Optional | - |
| `iban` | [`IbanAccountIdentifier \| undefined`](../../doc/models/iban-account-identifier.md) | Optional | - |
| `rix` | [`RixAccountIdentifier \| undefined`](../../doc/models/rix-account-identifier.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountIdentifiers1 } from 'adyenlib';

const accountIdentifiers1: AccountIdentifiers1 = {
  ach: {
    accountNumber: 'accountNumber4',
    routingNumber: 'routingNumber8',
    accountLastDigits: 'accountLastDigits2',
    isTokenized: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bacs: {
    accountNumber: 'accountNumber2',
    sortCode: 'sortCode8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bsb: {
    accountNumber: 'accountNumber2',
    bsbCode: 'bsbCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  eft: {
    accountNumber: 'accountNumber0',
    branch: 'branch8',
    institution: 'institution2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  iban: {
    bban: 'bban8',
    bic: 'bic6',
    iban: 'iban8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

