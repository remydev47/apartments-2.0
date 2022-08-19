import axios from 'axios';

import { endpoints } from '../constants';
import { Location } from '../types/locationIQ';
//this will rpresnt the location user is lokking for

export const getSuggestedLocations = async (text: string, limit?: number ) => { 
    try {
        let finalLimit = 8;
        if (limit) finalLimit = limit;

        const url = `${endpoints.autoCompleteEndpoint}?location=${text}&limit${finalLimit}`  
         
    } catch (error){

    }
    
}