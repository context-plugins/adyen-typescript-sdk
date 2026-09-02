import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataSepa = {
  sepadirectdebitDateOfSignature?: string;
  sepadirectdebitMandateId?: string;
  sepadirectdebitSepadirectdebitDueDate?: string;
  sepadirectdebitSequenceType?: string;
};

export const responseAdditionalDataSepaSchema: Schema<ResponseAdditionalDataSepa> =
  s.object<ResponseAdditionalDataSepa>({
    sepadirectdebitDateOfSignature: s.optional(s.string()),
    sepadirectdebitMandateId: s.optional(s.string()),
    sepadirectdebitSepadirectdebitDueDate: s.optional(s.string()),
    sepadirectdebitSequenceType: s.optional(s.string()),
    _keysMap: {
      sepadirectdebitDateOfSignature: "sepadirectdebit.dateOfSignature",
      sepadirectdebitMandateId: "sepadirectdebit.mandateId",
      sepadirectdebitSepadirectdebitDueDate: "sepadirectdebit.sepadirectdebit.dueDate",
      sepadirectdebitSequenceType: "sepadirectdebit.sequenceType",
    },
  });
