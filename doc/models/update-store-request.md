
# Update Store Request

## Structure

`UpdateStoreRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`UpdatableAddress1 \| undefined`](../../doc/models/updatable-address-1.md) | Optional | The address of the store. It is not possible to update the country of the store. |
| `businessLineIds` | `string[] \| undefined` | Optional | The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__resParam_id) that the store is associated with. |
| `description` | `string \| undefined` | Optional | The description of the store. |
| `externalReferenceId` | `string \| undefined` | Optional | The unique identifier of the store, used by certain payment methods and tax authorities.<br><br>Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.<br><br>Optional for SIRET in France, up to 14 digits.<br><br>Optional for Zip in Australia, up to 50 digits. |
| `phoneNumber` | `string \| undefined` | Optional | The phone number of the store, including '+' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. |
| `splitConfiguration` | [`StoreSplitConfiguration1 \| undefined`](../../doc/models/store-split-configuration-1.md) | Optional | Rules for Adyen for Platforms merchants to split the transaction amount and fees. |
| `status` | [`Status41Enum \| undefined`](../../doc/models/status-41-enum.md) | Optional | The status of the store. Possible values are:<br><br>- **active**: This value is assigned automatically when a store is created.<br>- **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible.<br>- **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't process payments.<br><br>You can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**.<br>Once **closed**, a store can't be reopened. |
| `subMerchantData` | [`SubMerchantData1 \| undefined`](../../doc/models/sub-merchant-data-1.md) | Optional | The sub-merchant data relevant for registered payment facilitators transacting on standalone terminals. |

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
  },
  businessLineIds: [
    'businessLineIds2',
    'businessLineIds3'
  ],
  description: 'description8',
  externalReferenceId: 'externalReferenceId6',
  phoneNumber: 'phoneNumber8',
};
```

