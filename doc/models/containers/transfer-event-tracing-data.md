
# Transfer Event Tracing Data

## Class Name

`TransferEventTracingData`

## Cases

| Type |
|  --- |
| [`UkFpsTracingData`](../../../doc/models/uk-fps-tracing-data.md) |
| [`UsAchTracingData`](../../../doc/models/us-ach-tracing-data.md) |

## UkFpsTracingData

### Initialization Code

#### Example

```ts
const value: TransferEventTracingData = {
  fpid: 'fpid0',
  type: Type88.UkFps,
};
```

## UsAchTracingData

### Initialization Code

#### Example

```ts
const value: TransferEventTracingData = {
  traceNumber: 'traceNumber8',
  type: Type89.UsAch,
};
```

