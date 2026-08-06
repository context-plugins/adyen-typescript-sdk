
# Migrated Stores

*This model accepts additional fields of type unknown.*

## Structure

`MigratedStores`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the business line associated with the migrated account holder in the balance platform. |
| `storeCode` | `string \| undefined` | Optional | The unique identifier of the store associated with the migrated account holder in the classic integration. |
| `storeId` | `string \| undefined` | Optional | The unique identifier of the store associated with the migrated account holder in the balance platform. |
| `storeReference` | `string \| undefined` | Optional | Your reference for the store in the classic integration. The [Customer Area](https://ca-test.adyen.com/) uses this value for the store description. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MigratedStores } from 'adyen';

const migratedStores: MigratedStores = {
  businessLineId: 'businessLineId2',
  storeCode: 'storeCode0',
  storeId: 'storeId4',
  storeReference: 'storeReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

