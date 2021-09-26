import Axios from "axios";
import { Contact } from "./models/Contact";

const url = 'http://localhost:4000/contacts?q=';

export const searchContacts = async (searchExpression: string) => {
    if (searchExpression) {
        const {data} = await Axios.get(url + searchExpression);
        return data as Contact[];
    }
    return [];
}

