import { render, screen } from "@testing-library/react"
import { GifGrid } from "../src/components/GifGrid"
import { useFetchGifs } from "../src/hooks/useFetchGifs"

jest.mock("../src/hooks/useFetchGifs")


describe('Tests GifGrid', () => { 
    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        const category = "Dragon Ball"

        render(<GifGrid category={category}/>)
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))

    })

    test('Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id:"abc",
                title:"Vegeta",
                url:"https//vegeta.jpg"
            },
            {
                id:"def",
                title:"Goku",
                url:"https//goku.jpg"
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading:false
        })

        const category = "Dragon Ball"

        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole("img").length).toBe(2)
    

    })
})