
# Verified Account

*This model accepts additional fields of type unknown.*

## Structure

`VerifiedAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Required | The unique identifier for the bank account. |
| `accountName` | `string` | Required | The name of the bank account. This name is assigned by the banking institution, and it describes the type of bank account. |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `accountType` | [`AccountType12`](../../doc/models/account-type-12.md) | Required | - |
| `bankName` | `string \| undefined` | Optional | The name of the banking institution where the bank account is held. |
| `currency` | `string` | Required | The currency of the funds in the bank account. |
| `identifiers` | [`AccountIdentifiers`](../../doc/models/account-identifiers.md) | Required | - |
| `parties` | [`AccountParty[]`](../../doc/models/account-party.md) | Required | Contains details of all parties associated with the report. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountType12, PartyRole2, VerifiedAccount } from 'adyen';

const verifiedAccount: VerifiedAccount = {
  accountId: 'accountId8',
  accountName: 'accountName2',
  accountNumber: 'accountNumber4',
  accountType: AccountType12.Current,
  currency: 'currency8',
  identifiers: {
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
  },
  parties: [
    {
      identity: {
        fullLegalName: 'fullLegalName2',
        name: 'name4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      role: PartyRole2.Holder,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  bankName: 'bankName6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

