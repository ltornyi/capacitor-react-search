import Axios from "axios";
import { Org } from "./models/Org";

const url = 'http://localhost:4000/organizations?q=';

export const searchOrgs = async (searchExpression: string) => {
    if (searchExpression) {
        const {data} = await Axios.get(url + searchExpression);
        return data as Org[];
    }
    return [];
}

