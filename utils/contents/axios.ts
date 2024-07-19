import { BackendURL } from "../../config/constants/constants";
import axios from "axios";

export const instanceGlobal = axios.create({
    baseURL: BackendURL,
});