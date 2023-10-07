import apiUrl from '../apiConfig'
import axios from 'axios'

///READ >index
export const getAllPets = () => {
    return axios (`${apiUrl}/pets`)
}
///READ >show
///CREATE> add pet
///Change> chane pet
///UDATE> add pet

