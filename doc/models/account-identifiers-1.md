
# Account Identifiers 1

Contains various codes and details used to uniquely identify the bank account across different regions.

## Structure

`AccountIdentifiers1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ach` | [`ACHAccountIdentifier1 \| undefined`](../../doc/models/ach-account-identifier-1.md) | Optional | Identifiers relevant for Automated Clearing House (ACH) payments, primarily used in the United States. |
| `bacs` | [`BACSAccountIdentifier2 \| undefined`](../../doc/models/bacs-account-identifier-2.md) | Optional | Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used in the United Kingdom. |
| `bsb` | [`BSBAccountIdentifier2 \| undefined`](../../doc/models/bsb-account-identifier-2.md) | Optional | Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers. |
| `eft` | [`EFTAccountIdentifier2 \| undefined`](../../doc/models/eft-account-identifier-2.md) | Optional | Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada. |
| `iban` | [`IBANAccountIdentifier2 \| undefined`](../../doc/models/iban-account-identifier-2.md) | Optional | The international bank account number as defined in the ISO-13616 standard. |
| `rix` | [`RIXAccountIdentifier2 \| undefined`](../../doc/models/rix-account-identifier-2.md) | Optional | Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank payments within Russia. |

## Example

```ts
import { AccountIdentifiers1 } from 'adyen';

const accountIdentifiers1: AccountIdentifiers1 = {
  ach: {
    accountNumber: 'accountNumber4',
    routingNumber: 'routingNumber8',
    accountLastDigits: 'accountLastDigits2',
    isTokenized: false,
  },
  bacs: {
    accountNumber: 'accountNumber2',
    sortCode: 'sortCode8',
  },
  bsb: {
    accountNumber: 'accountNumber2',
    bsbCode: 'bsbCode0',
  },
  eft: {
    accountNumber: 'accountNumber0',
    branch: 'branch8',
    institution: 'institution2',
  },
  iban: {
    bban: 'bban8',
    bic: 'bic6',
    iban: 'iban8',
  },
};
```

