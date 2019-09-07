
export const validateDebt = (fields, refs) => {



    if (fields != null && Array.isArray(fields) && fields.length > 0 ) {
        let wrongfields = [];
        fields.forEach(field => {
            if (field.required && (field.value == null || field.value === "")) {
                wrongfields.push({
                    field: field.name,
                    error: "Necessary value",
                });
            }
            if (field.required) {
                wrongfields.push({
                    field: field.name,
                    error: "Wrong format",
                });
            }
        });

        return ({
            wrongfields,
            isValid: false,
        });
    }
    return null;
}