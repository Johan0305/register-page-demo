import React from "react";
import { useState } from "react";
import { Button } from "@mantine/core";
import ContainerModal from "./Modal/ContainerModal";

const Main = () => {
  const [opened, setOpened] = useState(false);
  const [typeForm, setTypeForm] = useState("");
  return (
    <>
      <ContainerModal
        setOpened={setOpened}
        opened={opened}
        typeForm={typeForm}
      />
      <div className="global-container-main">
        <div className="container-text-main-landing">
          <h2>Escoje tu tipo de Rol</h2>
        </div>
        <div className="container-buttons-main-landing">
          <div className="button-user">
            <Button
              variant="outline"
              color="orange"
              radius="md"
              size="xl"
              onClick={() => {
                setTypeForm("user");
                setOpened(true);
              }}
            >
              Usuario
            </Button>
          </div>
          <div className="button-admin">
            <Button
              variant="outline"
              color="orange"
              radius="md"
              size="xl"
              onClick={() => {
                setTypeForm("admin");
                setOpened(true);
              }}
            >
              Administrador
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
