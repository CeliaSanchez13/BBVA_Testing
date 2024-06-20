import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@mui/material';

describe('Test buttonMui', () => {

    //Se ejecuta una sola vez antes del primer test
    beforeAll (() => {

    });

  // Se ejecuta antes de cada test
    beforeEach(() => {
      //Hacemos una escucha de los console log antes de cada test
      vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    // Se ejecuta después de cada test
    afterEach(() => {
      //Paramos la escucha de los console log después de cada test
      console.log.mockRestore();
    });

    //Se ejecuta una sola vez después del último test
    afterAll (() => {
    });


    test('render button Mui correct text', () => {
        //renderizamos un boton que tiene que estar creado
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', {name: /click me/i }) //Para no sacar key sensitive, ponemos la i
        expect(button).toBeInTheDocument() 
    })

    test('when button is clicked prop onClick should be called', () => {
    
        const handleClick = vi.fn(console.log("click"))

        render(<Button onClick={handleClick}>Click me</Button>)
        const button = screen.getByRole('button',{ name: /Click me/i})
        expect(button).toBeInTheDocument() //Si existe en el documento..
        expect(handleClick).toHaveBeenCalledTimes(0) //Contador de clicks
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1) //Contador de clicks
        fireEvent.click(button) //ACCION de hacer click
        expect(handleClick).toHaveBeenCalledTimes(2) //Contador de clicks
    })

    test('renders MuiButton with correct styles', () => {
        //Renderizamos un boton de MUI
        render(<Button fullWidth style={{ backgroundColor: 'red' }}>Styled Button</Button>);
        const button = screen.getByRole('button', { name: /styled button/i }); //el styled button es el LABEL, obtener el elemento
        expect(button).toBeInTheDocument();
        expect(button.style.backgroundColor).toBe('red');
        //Comprobamos que es de color rojo
        expect(button).toHaveStyle('background-color: rgb(255, 0, 0)'); //Espero que el contenido sea ROJO, en este caso.. que el rojo este declarado en varios formas. ACCEDEMOS A LA PROPIEDAD Y POR ESO ESTA INCLUIDO EL BACKGROUND-COLOR etcs
        expect(button).toHaveStyle('background-color: #ff0000');
        expect(button).toHaveStyle('width: 100%');

      })

    test('renders MuiButton with correct styles', () => {
        //Renderizamos un boton de MUI
        render(<Button fullWidth style={{ backgroundColor: 'red' }}>Styled Button</Button>);
        const button = screen.getByRole('button', { name: /styled button/i }); //el styled button es el LABEL, obtener el elemento
        expect(button).toBeInTheDocument();
        expect(button.style.backgroundColor).toBe('red');
        //Comprobamos que es de color rojo
        expect(button).toHaveStyle('background-color: rgb(255, 0, 0)'); //Espero que el contenido sea ROJO, en este caso.. que el rojo este declarado en varios formas. ACCEDEMOS A LA PROPIEDAD Y POR ESO ESTA INCLUIDO EL BACKGROUND-COLOR etcs
        expect(button).toHaveStyle('background-color: #ff0000');
        expect(button).toHaveStyle('width: 100%');

      })

      test('does not call onClick prop when MuiButton is disabled', () => {
        const handleClick = vi.fn( () => console.log('click') );
        render(<Button onClick={handleClick} disabled>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(0); //Contador de cuantas veces se ha ejecutado la funcion del handleClick al pulsar el boton
        //en este caso.. tiene que ser 0 porque el boton esta DISABLED
      });


})