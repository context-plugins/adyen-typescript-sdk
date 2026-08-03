
# Key 1

The key you share with Adyen to secure local communications when using Terminal API.

*This model accepts additional fields of type unknown.*

## Structure

`Key1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string \| undefined` | Optional | The unique identifier of the shared key. |
| `passphrase` | `string \| undefined` | Optional | The secure passphrase to protect the shared key. Must consist of:<br><br>* At least 12 characters.<br><br>* At least 1 uppercase letter: `[A-Z]`.<br><br>* At least 1 lowercase letter: `[a-z]`.<br><br>* At least 1 digit: `[0-9]`.<br><br>* At least 1 special character. Limited to the following: `~`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `+`, `=`, `}`, `{`, `]`, `[`, `;`, `:`, `?`, `.`, `,`, `>`, `<`. |
| `version` | `number \| undefined` | Optional | The version number of the shared key. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Key1 } from 'adyenlib';

const key1: Key1 = {
  identifier: 'identifier4',
  passphrase: 'passphrase8',
  version: 208,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

