
export const validateDebt = (fields, refs) => {

    //eslint-disable-next-line
    const emailPatter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fields != null && Array.isArray(fields) && fields.length > 0 ) {
        let wrongfields = [];
        fields.forEach(field => {
            if (field.required && (field.value == null || field.value === "")) {
                wrongfields.push({
                    field: field.name,
                    error: "Necessary value",
                });
            }
            if (field.name ==="email" && emailPatter.test(field.name) ) {
                wrongfields.push({
                    field: field.name,
                    error: "Wrong email format",
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