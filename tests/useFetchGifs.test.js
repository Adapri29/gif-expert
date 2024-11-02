import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../src/hooks/useFetchGifs"


describe('Tests useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => {

        const {result} = renderHook(() => useFetchGifs("Vegeta"))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBe(true)

     })

     test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {

        const {result} = renderHook(() => useFetchGifs("Vegeta"))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBe(false)
        
     })
 })