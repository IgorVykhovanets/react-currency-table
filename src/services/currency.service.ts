import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {ICurrency} from "../interfaces/currency.interface";

export const currencyService = {
    getAll: () => axiosService.get<ICurrency[]>(urls.nbu),
}