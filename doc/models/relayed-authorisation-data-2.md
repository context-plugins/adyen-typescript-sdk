
# Relayed Authorisation Data 2

If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.

*This model accepts additional fields of type unknown.*

## Structure

`RelayedAuthorisationData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string> \| undefined` | Optional | Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`. |
| `reference` | `string \| undefined` | Optional | Your reference for the relayed authorisation data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RelayedAuthorisationData2 } from 'adyen';

const relayedAuthorisationData2: RelayedAuthorisationData2 = {
  metadata: {
    'key0': 'metadata5',
    'key1': 'metadata4'
  },
  reference: 'reference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

