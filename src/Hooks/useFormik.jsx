import React, { useState } from "react";

const useFormik = (intValues) => {
  const [values, setValues] = useState(intValues);

  const resetForm = () => {
    setValues(intValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstname) errors.firstname = "First Name cannot be empty";
    else if (!/^[a-zA-Z]+$/.test(values.firstname)) {
      errors.firstname = "First Name must contain only letters!";
    }

    if (!values.lastname) errors.lastname = "Last Name cannot be empty";
    else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
      errors.lastname = "Last Name must contain only letters!";
    }

    if (!values.password) errors.password = "Password cannot be empty";
    // პირველი ასო უნდა იყოს დიდი, რიცხვს უნდა შეიცავდეს და სიმბოლოს
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password = "invalid password format!";
    }

    if (!values.email) errors.email = "Looks like this is not an email";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Please enter a valid email address!";
    }

    return errors;
  };
  return {
    values,
    resetForm,
    validate,
    handleChange,
  };
};

export default useFormik;
