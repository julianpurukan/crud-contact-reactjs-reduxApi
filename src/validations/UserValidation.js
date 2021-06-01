const UserValidation = (values) => {
  const errors = {};

  if (!values.firstName || values.firstName === "") {
    errors.firstName = "Nama Depan Tidak Boleh Kosong";
  }

  if (!values.lastName || values.lastName === "") {
    errors.lastName = "Nama Belakang Depan Tidak Boleh Kosong";
  }

  if (!values.age || values.age === "") {
    errors.age = "Umur Tidak Boleh Kosong";
  }

  return errors
};

export default UserValidation;
