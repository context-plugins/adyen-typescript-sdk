
# Relayed Authorisation Data

*This model accepts additional fields of type unknown.*

## Structure

`RelayedAuthorisationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string> \| undefined` | Optional | Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`. |
| `reference` | `string \| undefined` | Optional | Your reference for the relayed authorisation data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RelayedAuthorisationData } from 'adyenlib';

const relayedAuthorisationData: RelayedAuthorisationData = {
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8'
  },
  reference: 'reference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

