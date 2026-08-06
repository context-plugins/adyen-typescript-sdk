
# Work Phone

*This model accepts additional fields of type unknown.*

## Structure

`WorkPhone`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cc` | `string \| undefined` | Optional | Country code. Length: 1–3 digits.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `subscriber` | `string \| undefined` | Optional | Subscriber number. Length: 4-15  digits.<br><br>**Constraints**: *Maximum Length*: `15` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WorkPhone } from 'adyen';

const workPhone: WorkPhone = {
  cc: 'cc2',
  subscriber: 'subscriber4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

