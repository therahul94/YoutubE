import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import { fetchData } from '../../utils/rapidapi';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const [value, setvalue] = useState("New");

    useEffect(() => {
      fetchAllData(value);
    }, [value]);

    const fetchAllData = async (query)=>{
        try{
            setLoading(true);
            const {contents} = await fetchData(`search/?q=${query}`);
            setdata(contents);
            setLoading(false); 
        }catch(error) {
            console.log(error);
            throw error;
        }
    }
    
    return (
        <AuthContext.Provider value={{loading, data, value, setvalue}} >
            {children}
        </AuthContext.Provider>
    )
}