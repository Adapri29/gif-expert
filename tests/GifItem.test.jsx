import { render, screen } from "@testing-library/react"
import { GifItem } from "../src/components/GifItem"



describe('GifItem Test', () => {

    const title="Dragon Ball"
    const url= "https://songoku.jpg"


    test('Debe de hacer match con el snapshot', () => {
        
        const {container} = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot()

    })

    test('Debe mostrar la imagen con el url y alt indicado', () => { 

        render(<GifItem title={title} url={url}/>)

        // expect(screen.getByRole("img").src).toBe(url)
        // expect(screen.getByRole("img").alt).toBe(title)
        
        const {src, alt} = screen.getByRole("img")
        expect(src).toContain(url)
        expect(alt).toBe(title)

     })

     test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>)

        expect(screen.getByText(title)).toBeTruthy()
     })
 })