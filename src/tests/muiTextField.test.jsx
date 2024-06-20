import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextField } from '@mui/material';
import { useState } from "react";


describe("Test TextFieldMui", () => {
  
  // Prueba: renders TextField with correct label
  test('renders TextField with correct label', () => {
    render(<TextField label="Username" />);
    // Busca el TextField por su rol de 'textbox' y por su etiqueta
    const textFieldByRole = screen.getByRole('textbox', { name: /username/i });
    const textFieldByLabel = screen.getByLabelText(/username/i);
    // Verifica que ambos métodos encuentren el TextField en el documento
    expect(textFieldByRole).toBeInTheDocument();
    expect(textFieldByLabel).toBeInTheDocument();
  })
  
})