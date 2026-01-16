import axios from "axios";


interface G{
    lat:string;
    lng:string;
}
interface A{
    street:string;
    sutie:string;
    city:string;
    zipcode:string;
    geo:G|null;
    
}
interface User{
    id:number;  
    name:string;
    username:string;
    email: string;
    adress:A|null;
   

}

interface real{
     id:number;
    name:string;
    phone:string;
    address: A| null;

}
   
export async  function getPostalAddress() {
    try{
        const a = await axios.get<real[]>("https://jsonplaceholder.typicode.com/users");
        const data = a.data;
        if(!data ||data.length === 0){
            return [];

        }
        return data.map((r) =>({
            id:r.id,
            name:r.name,
            phone:r.phone,
            address:r.address
        }));


    }catch(e){
        return [];
    }





}
