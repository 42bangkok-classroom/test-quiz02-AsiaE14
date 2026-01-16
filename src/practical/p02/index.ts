import axios from "axios";
type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export async function addUser(newUser: newUser | null) {
  try{
    const a = await axios.get("https://jsonplaceholder.typicode.com/users");
    const  b = a.data;


    if(newUser){
       const lastId = b.length > 0 ? b[b.length - 1].id : 0;
      const newId = lastId + 1;

      const add ={
        id:newId,
        ...newUser,
      };

      b.push(add);


       return b.map((user: any) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: user.address || null,
    }));



    }
  }catch(e){
    return [];
  }
}
