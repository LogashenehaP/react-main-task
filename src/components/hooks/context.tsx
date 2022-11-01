import { createContext, useState } from 'react';
import { PersonModel } from '../../model/PersonModel';
export const CartContext=createContext<any>('');

export const Context=({children}:any)=>{
    const [text,setText]=useState<string>('');
    const [persons, setPersons] = useState<PersonModel[] | null>(null);
    return(
      <CartContext.Provider value={{text,setText,persons,setPersons}}>{children}</CartContext.Provider>
    )
}