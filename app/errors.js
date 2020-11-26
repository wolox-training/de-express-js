const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.SERVICE_UNAVAILABLE = 'service_unavailable';
exports.serviceUnavailable = message => internalError(message, exports.SERVICE_UNAVAILABLE);

exports.SERVICE_ERROR = 'service_error';
exports.serviceError = message => internalError(message, exports.SERVICE_ERROR);

exports.SCHEMA_ERROR = 'schema_error';
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);

exports.DUPLICATED_REGISTER_ERROR = 'duplicted_register_error';
exports.duplicatedRegsiterError = message => internalError(message, exports.DUPLICATED_REGISTER_ERROR);

exports.UNAUTHENTICATED_USER_ERROR = 'unauthenticated_user_error';
exports.unauthenticatedUserError = message => internalError(message, exports.UNAUTHENTICATED_USER_ERROR);

exports.typeError = (key, type) => `${key} most be ${type}`;
exports.requiredFieldError = key => `${key} is required`;
exports.lengthFieldError = (key, long) => `${key} must be at least ${long} characters`;
exports.mailDomainError = key => `${key}: domain not allowed`;
