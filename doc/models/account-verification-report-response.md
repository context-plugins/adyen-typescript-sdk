
# Account Verification Report Response

## Structure

`AccountVerificationReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`VerifiedAccount[]`](../../doc/models/verified-account.md) | Required | A list of bank accounts with their respective information. |
| `country` | [`AccountVerificationCountry1Enum`](../../doc/models/account-verification-country-1-enum.md) | Required | The location where the third-party individual's bank account is registered. |
| `id` | `string` | Required | The unique identifier for the specific report. |

## Example

```ts
import {
  AccountType11Enum,
  AccountVerificationCountry1Enum,
  AccountVerificationReportResponse,
  PartyRole2Enum,
} from 'adyen';

const accountVerificationReportResponse: AccountVerificationReportResponse = {
  accounts: [
    {
      accountId: 'accountId0',
      accountName: 'accountName4',
      accountNumber: 'accountNumber8',
      accountType: AccountType11Enum.CURRENT,
      currency: 'currency0',
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
    }
  ],
  country: AccountVerificationCountry1Enum.LT,
  id: 'id0',
};
```

