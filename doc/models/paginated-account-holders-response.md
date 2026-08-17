
# Paginated Account Holders Response

## Structure

`PaginatedAccountHoldersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolders` | [`AccountHolder[]`](../../doc/models/account-holder.md) | Required | List of account holders. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |

## Example

```ts
import {
  FundingSourceEnum,
  IntervalEnum,
  PaginatedAccountHoldersResponse,
  Type410Enum,
} from 'adyen';

const paginatedAccountHoldersResponse: PaginatedAccountHoldersResponse = {
  accountHolders: [
    {
      id: '',
      legalEntityId: 'legalEntityId8',
      balancePlatform: 'balancePlatform4',
      capabilities: {
        'key0': {
          allowedSettings: {
            amountPerIndustry: {
              'key0': {
                currency: 'currency8',
                value: BigInt(56),
              },
              'key1': {
                currency: 'currency8',
                value: BigInt(56),
              }
            },
            authorizedCardUsers: false,
            fundingSource: [
              FundingSourceEnum.Credit,
              FundingSourceEnum.Debit,
              FundingSourceEnum.Prepaid
            ],
            interval: IntervalEnum.Daily,
            maxAmount: {
              currency: 'currency4',
              value: BigInt(160),
            },
          },
          enabled: false,
        },
        'key1': {
          allowedSettings: {
            amountPerIndustry: {
              'key0': {
                currency: 'currency8',
                value: BigInt(56),
              },
              'key1': {
                currency: 'currency8',
                value: BigInt(56),
              }
            },
            authorizedCardUsers: false,
            fundingSource: [
              FundingSourceEnum.Credit,
              FundingSourceEnum.Debit,
              FundingSourceEnum.Prepaid
            ],
            interval: IntervalEnum.Daily,
            maxAmount: {
              currency: 'currency4',
              value: BigInt(160),
            },
          },
          enabled: false,
        }
      },
      contactDetails: {
        address: {
          city: 'city6',
          country: 'country0',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          street: 'street6',
          stateOrProvince: 'stateOrProvince4',
        },
        email: 'email6',
        phone: {
          number: 'number8',
          type: Type410Enum.Landline,
        },
        webAddress: 'webAddress0',
      },
      description: 'description2',
      metadata: {
        'key0': 'metadata9',
        'key1': 'metadata8'
      },
    }
  ],
  hasNext: false,
  hasPrevious: false,
};
```

