
# Store Creation Request

## Structure

`StoreCreationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`StoreLocation1`](../../doc/models/store-location-1.md) | Required | The address of the store. |
| `businessLineIds` | `string[] \| undefined` | Optional | The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/legalentity/latest/post/businessLines#responses-200-id) that the store is associated with.<br>If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account. |
| `description` | `string` | Required | Your description of the store. |
| `externalReferenceId` | `string \| undefined` | Optional | The unique identifier of the store, used by certain payment methods and tax authorities.<br><br>Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.<br><br>Optional for SIRET in France, up to 14 digits.<br><br>Optional for Zip in Australia, up to 50 digits. |
| `localizedInformation` | [`LocalizedInformation2 \| undefined`](../../doc/models/localized-information-2.md) | Optional | Localized information about the store. |
| `phoneNumber` | `string` | Required | The phone number of the store, including '+' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. |
| `reference` | `string \| undefined` | Optional | Your reference to recognize the store by. Also known as the store code.<br>Allowed characters: lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).<br><br>If you do not provide a reference in your POST request, it is populated with the Adyen-generated [id](https://docs.adyen.com/api-explorer/Management/latest/post/stores#responses-200-id). |
| `shopperStatement` | `string` | Required | The store name to be shown on the shopper's bank or credit card statement and on the shopper receipt.<br>Maximum length: 22 characters; can't be all numbers. |
| `splitConfiguration` | [`StoreSplitConfiguration1 \| undefined`](../../doc/models/store-split-configuration-1.md) | Optional | Rules for Adyen for Platforms merchants to split the transaction amount and fees. |
| `subMerchantData` | [`SubMerchantData1 \| undefined`](../../doc/models/sub-merchant-data-1.md) | Optional | The sub-merchant data relevant for registered payment facilitators transacting on standalone terminals. |

## Example

```ts
import { StoreCreationRequest } from 'adyen';

const storeCreationRequest: StoreCreationRequest = {
  address: {
    country: 'country0',
    city: 'city6',
    line1: 'line18',
    line2: 'line20',
    line3: 'line38',
    postalCode: 'postalCode8',
  },
  description: 'description4',
  phoneNumber: 'phoneNumber4',
  shopperStatement: 'shopperStatement0',
  businessLineIds: [
    'businessLineIds0',
    'businessLineIds1',
    'businessLineIds2'
  ],
  externalReferenceId: 'externalReferenceId4',
  localizedInformation: {
    localShopperStatement: [
      {
        script: 'script4',
        value: 'value6',
      },
      {
        script: 'script4',
        value: 'value6',
      },
      {
        script: 'script4',
        value: 'value6',
      }
    ],
  },
  reference: 'reference8',
  splitConfiguration: {
    balanceAccountId: 'balanceAccountId8',
    splitConfigurationId: 'splitConfigurationId4',
  },
};
```

