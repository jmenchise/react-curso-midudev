import type { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

//* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                         //
//*    Para no tener que estar tipando tanto el useSelector como el useDispatch en cada lugar donde los utilice,            //
//*    ya que redux no puede inferir automáticamente el tipado del state que esté utlizando, lo que se hace es              //
//*    asignar estas funciones a dos nuevas constantes y tiparlas. Así, estas nuevas funciones ya saben lo que              //
//*    reciben y retornan, siendo innecesario todo el tipado en el resto de lugares donde las use.                          //
//*                                                                                                                         //
//*    En resumen, digo que useAppSelector es una función del tipo useSelector y recibe un estado con el tipo RootState     //
//*    y useAppDispatch es otra función que no recibe nada y retorna otra función del tipo AppDispatch.                     //
//*                                                                                                                         //
//* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
