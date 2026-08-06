
# Update Store Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateStoreRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`UpdatableAddress \| undefined`](../../doc/models/updatable-address.md) | Optional | - |
| `businessLineIds` | `string[] \| undefined` | Optional | The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__resParam_id) that the store is associated with. |
| `description` | `string \| undefined` | Optional | The description of the store. |
| `externalReferenceId` | `string \| undefined` | Optional | The unique identifier of the store, used by certain payment methods and tax authorities.<br><br>Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.<br><br>Optional for SIRET in France, up to 14 digits.<br><br>Optional for Zip in Australia, up to 50 digits. |
| `phoneNumber` | `string \| undefined` | Optional | The phone number of the store, including '+' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. |
| `splitConfiguration` | [`StoreSplitConfiguration \| undefined`](../../doc/models/store-split-configuration.md) | Optional | - |
| `status` | [`Status43 \| undefined`](../../doc/models/status-43.md) | Optional | - |
| `subMerchantData` | [`SubMerchantData \| undefined`](../../doc/models/sub-merchant-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateStoreRequest } from 'adyen';

const updateStoreRequest: UpdateStoreRequest = {
  address: {
    city: 'city6',
    line1: 'line18',
    line2: 'line20',
    line3: 'line38',
    postalCode: 'postalCode8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  businessLineIds: [
    'businessLineIds2',
    'businessLineIds3'
  ],
  description: 'description8',
  externalReferenceId: 'externalReferenceId6',
  phoneNumber: 'phoneNumber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

