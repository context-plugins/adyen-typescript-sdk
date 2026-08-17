
# Verified Account

## Structure

`VerifiedAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | The unique identifier for the bank account. |
| `accountName` | `string` | Required | The name of the bank account. This name is assigned by the banking institution, and it describes the type of bank account. |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `accountType` | [`AccountType11Enum`](../../doc/models/account-type-11-enum.md) | Required | The type of the bank account. Possible values are **CURRENT**, **SAVINGS**, **BUSINESS**, **CREDIT_CARD**, **LOAN**, **UNKNOWN**. |
| `bankName` | `string \| undefined` | Optional | The name of the banking institution where the bank account is held. |
| `currency` | `string` | Required | The currency of the funds in the bank account. |
| `identifiers` | [`AccountIdentifiers1`](../../doc/models/account-identifiers-1.md) | Required | Contains various codes and details used to uniquely identify the bank account across different regions. |
| `parties` | [`AccountParty[]`](../../doc/models/account-party.md) | Required | Contains details of all parties associated with the report. |

## Example

```ts
import { AccountType11Enum, PartyRole2Enum, VerifiedAccount } from 'adyen';

const verifiedAccount: VerifiedAccount = {
  accountId: 'accountId8',
  accountName: 'accountName2',
  accountNumber: 'accountNumber4',
  accountType: AccountType11Enum.CURRENT,
  currency: 'currency8',
  identifiers: {
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
  },
  parties: [
    {
      identity: {
        fullLegalName: 'fullLegalName2',
        name: 'name4',
      },
      role: PartyRole2Enum.HOLDER,
    }
  ],
  bankName: 'bankName6',
};
```

