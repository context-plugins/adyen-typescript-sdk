
# Store Creation Request

*This model accepts additional fields of type unknown.*

## Structure

`StoreCreationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address15`](../../doc/models/address-15.md) | Required | - |
| `businessLineIds` | `string[] \| undefined` | Optional | The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/legalentity/latest/post/businessLines#responses-200-id) that the store is associated with.<br>If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account. |
| `description` | `string` | Required | Your description of the store. |
| `externalReferenceId` | `string \| undefined` | Optional | The unique identifier of the store, used by certain payment methods and tax authorities.<br><br>Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.<br><br>Optional for SIRET in France, up to 14 digits.<br><br>Optional for Zip in Australia, up to 50 digits. |
| `localizedInformation` | [`LocalizedInformation \| undefined`](../../doc/models/localized-information.md) | Optional | - |
| `phoneNumber` | `string` | Required | The phone number of the store, including '+' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. |
| `reference` | `string \| undefined` | Optional | Your reference to recognize the store by. Also known as the store code.<br>Allowed characters: lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).<br><br>If you do not provide a reference in your POST request, it is populated with the Adyen-generated [id](https://docs.adyen.com/api-explorer/Management/latest/post/stores#responses-200-id). |
| `shopperStatement` | `string` | Required | The store name to be shown on the shopper's bank or credit card statement and on the shopper receipt.<br>Maximum length: 22 characters; can't be all numbers. |
| `splitConfiguration` | [`StoreSplitConfiguration \| undefined`](../../doc/models/store-split-configuration.md) | Optional | - |
| `subMerchantData` | [`SubMerchantData \| undefined`](../../doc/models/sub-merchant-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        script: 'script4',
        value: 'value6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        script: 'script4',
        value: 'value6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reference: 'reference8',
  splitConfiguration: {
    balanceAccountId: 'balanceAccountId8',
    splitConfigurationId: 'splitConfigurationId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

