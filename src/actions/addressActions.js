import { UPDATE_ADDRESS } from "./types";

export function updateAddress(newAddress) {
    return {
        type: UPDATE_ADDRESS,
        newAddress
    }
}


