import { expect, test } from "vitest";
import { validateForm } from "../utils/movieValidations";

test("Debe fallar si el título está vacío", () => {
  const datosVacios = { title: "" };
  const { errors } = validateForm(datosVacios, []);
  expect(errors.title).toBe("El título es obligatorio");
});

test("Debe fallar si el título ya existe en la lista", () => {
  const lista = [{ title: "Batman" }];
  const datosRepetidos = {
    title: "BATMAN",
    director: "Nolan",
  };
  const { errors } = validateForm(datosRepetidos, lista);
  expect(errors.title).toBe("La película ingresada ya está registrada");
});