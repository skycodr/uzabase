import { format } from "../utils";

export const MISSING_OR_INVALID_OPTIONS = format(
  "Missing or invalid options",
  "error"
);

export const UNDEFINED_FACTORY_METHOD = format(
  "Undefined factory method",
  "warning"
);

export const RESOURCE_DOES_NOT_EXIST = format("Resource doesn't exist", "warning");

export const FAILED_TO_LOAD_RESOURCE = format(
  "Failed to load resource",
  "warning"
);
