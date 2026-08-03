
# Account Verification Report Response

*This model accepts additional fields of type unknown.*

## Structure

`AccountVerificationReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`VerifiedAccount[]`](../../doc/models/verified-account.md) | Required | A list of bank accounts with their respective information. |
| `country` | [`AccountVerificationCountry1`](../../doc/models/account-verification-country-1.md) | Required | - |
| `id` | `string` | Required | The unique identifier for the specific report. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountType12,
  AccountVerificationCountry1,
  AccountVerificationReportResponse,
  PartyRole2,
} from 'adyenlib';

const accountVerificationReportResponse: AccountVerificationReportResponse = {
  accounts: [
    {
      accountId: 'accountId0',
      accountName: 'accountName4',
      accountNumber: 'accountNumber8',
      accountType: AccountType12.Current,
      currency: 'currency0',
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
    }
  ],
  country: AccountVerificationCountry1.Lt,
  id: 'id0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

