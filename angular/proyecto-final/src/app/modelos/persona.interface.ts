import {Ciudad_interface} from '../modelos/ciudad.interface'
import {Td_interface} from '../modelos/td.interface'

export interface persona_interface{
    id:number;
    name:string;
    lastName:string;
    document:string;
    phone:string;
    user:string;
    password:string;
    email:string;
    birthDate: Date;
    documentType:Td_interface;
    city:Ciudad_interface;
}