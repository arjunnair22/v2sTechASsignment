import {url} from "./constants";

export const createProperty = (property,propertyValue) =>({
    property,
    propertyValue
})

export const createUrlFromDummyServer = server => url(server)

export const urls = {
    employees: (slug)=> (slug)
}

export const isNotBlank = (o) => o!=='';
