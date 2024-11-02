import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../src/components/AddCategory"


describe('Tests AddCategory', () => { 

    const input_value = "Vegeta"

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole("textbox")

        fireEvent.input(input, {target: {value:input_value}})
        expect(input.value).toBe(input_value)
    
    })

    test('Debe de llamar onNewCategory si el input tiene algun valor', () => {
        
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        fireEvent.input(input, {target: {value:input_value}})
        fireEvent.submit(form)

        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(input_value)

     })

     test('No debe de llamar el onNewCategory si no hay input', () => {
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
    
        const form = screen.getByRole("form")

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()

      })
})