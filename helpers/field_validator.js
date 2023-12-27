export default {
    fieldsValidation: async (fields = [], body) => {
        if (fields.length) {
            let invalidFields = [];
            let includes = [];
            fields.forEach(x => {
                if (!Object.keys(body).includes(x)){
                    includes.push(x);
                }
                if (includes.length === 0) {
                    Object.keys(body).forEach(function (key) {
                        if (x === key) {
                            if (body[key] === null || body[key] === '') {
                                invalidFields.push(key);
                            }
                        }
                    });
                }
            });
            return includes.length > 0 ? includes : invalidFields;
        }
    },
}
