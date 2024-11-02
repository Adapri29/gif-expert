import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Tests GifExpertApp', () => {
    test('Debe de retornar un vector de imagenes vacias en el estado inicial', async () => { 

        const {container} = render(<GifExpertApp />)
        
        expect(container).toMatchSnapshot()
    
    
    })

    test('Debe de añadirse una nueva categoria al completar el formulario', async () => { 

        const input_value = "Vegeta"
        const input_value2 = "Goku"

        render(<GifExpertApp />)
    
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        fireEvent.input(input, {target: {value:input_value}})
        fireEvent.submit(form)

        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2)
        expect(screen.getByText(input_value)).toBeTruthy()

        fireEvent.input(input, {target: {value:input_value2}})
        fireEvent.submit(form)

        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(3)
        expect(screen.getByText(input_value)).toBeTruthy()
        expect(screen.getByText(input_value2)).toBeTruthy()

    
    })

    test('No debe poderse añadir una categoria duplicada', async () => { 

        const input_value = "Vegeta"

        render(<GifExpertApp />)
    
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        fireEvent.input(input, {target: {value:input_value}})
        fireEvent.submit(form)

        fireEvent.input(input, {target: {value:input_value}})
        fireEvent.submit(form)

        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2)
        expect(screen.getByText(input_value)).toBeTruthy()
    
    })

 })