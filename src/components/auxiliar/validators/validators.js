import { EMAIL_PATTERN } from "../../Constants/constants";

export const validateDebt = (fields) => {

    let wrongFields = [];
    if (fields != null && Array.isArray(fields) && fields.length > 0 ) {
        fields.forEach(field => {
            
            if (field.required && (field.value == null || field.value === "")) {
                wrongFields.push({
                    field: field.name,
                    error: "Necessary value",
                });
            } else if(field.name === "amount" && isNaN(field.value)) {
                wrongFields.push({
                    field: field.name,
                    error: "Value must be a number"
                });
            }
        })};
        return wrongFields;
}
export const validateEmail = (email) => {
    return EMAIL_PATTERN.test(email);
}
