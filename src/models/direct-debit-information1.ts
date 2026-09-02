import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectDebitInformation1 = {
  dateOfSignature?: Date;
  dueDate?: Date;
  mandateId?: string;
  sequenceType?: string;
};

export const directDebitInformation1Schema: Schema<DirectDebitInformation1> =
  s.object<DirectDebitInformation1>({
    dateOfSignature: s.optional(s.dateTime()),
    dueDate: s.optional(s.dateTime()),
    mandateId: s.optional(s.string()),
    sequenceType: s.optional(s.string()),
  });
