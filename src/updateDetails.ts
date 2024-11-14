import {client} from './utilis' ;

async function setTodoDone(done : boolean ,  user_id : number ,  id : number) {

    const q = `UPDATE todos SET done =$1 WHERE user_id=$2 AND id=$3 ;`
    const vals = [done , user_id ,  id] ;
    await client.query(q,vals) ;
    console.log("Updated Todo");
}

setTodoDone(true , 3 , 1) ; // of user with id =3 and todo id = 1;
