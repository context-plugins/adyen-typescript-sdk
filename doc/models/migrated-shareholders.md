
# Migrated Shareholders

*This model accepts additional fields of type unknown.*

## Structure

`MigratedShareholders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalEntityCode` | `string \| undefined` | Optional | The unique identifier of the legal entity of that shareholder in the balance platform. |
| `shareholderCode` | `string \| undefined` | Optional | The unique identifier of the account of the migrated shareholder in the classic integration. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MigratedShareholders } from 'adyen';

const migratedShareholders: MigratedShareholders = {
  legalEntityCode: 'legalEntityCode0',
  shareholderCode: 'shareholderCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

