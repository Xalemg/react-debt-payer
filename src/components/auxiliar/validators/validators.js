const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateDebt = (fields, debtorIsFriend) => {

    //eslint-disable-next-line


    if (fields != null && Array.isArray(fields) && fields.length > 0 ) {
        let wrongFields = [];
        fields.forEach(field => {

            if (field.required && (field.value == null || field.value === "")) {
                wrongFields.push({
                    field: field.name,
                    error: "Necessary value",
                });
            }
        // Mover al validador de registro
        //   if (field.name ==="email" && emailPatter.test(field.name) ) {
        //       wrongfields.push({
        //           field: field.name,
        //           error: "Wrong email format",
        //       });
        //   }
        });

        return (
            wrongFields
        );
    }
    return null;
}