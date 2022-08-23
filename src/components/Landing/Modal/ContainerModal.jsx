import React from "react";
import { Modal, TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

const ContainerModal = ({ typeForm, opened, setOpened }) => {
  const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        regexPassword.test(value) ? null : "Contraseña Invalida",
      confirmPassword: (value) => console.log(form.values.password),
    },
  });
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Llena los campos con la información necesaria"
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Nombre"
          placeholder="Tu nombre"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="email@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Contraseña"
          placeholder="*****"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          withAsterisk
          label="Confirmar Contraseña"
          placeholder="*****"
          {...form.getInputProps("confirmPassword")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default ContainerModal;
