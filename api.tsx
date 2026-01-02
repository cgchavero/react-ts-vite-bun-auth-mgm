import axios from "axios"
import type { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[]
}

export const searchCompanies = async(query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
             
        )
        return data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log('Axios error message: ', error.message)
            return error.message
        } else {
            console.log('Axios unexpected error: ', error)
            return 'An unexpected Axios error has occured.'
        }
    }
}
