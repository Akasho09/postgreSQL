import akash from "..";

function add(u:string , e:string , p : string) {
    // akash.query(`INSERT INTO users4 (username , email , password ) VALUES ($1,$2,$3)` , [u,e,p] )
    akash.query(`INSERT INTO users4 (username , email , password ) VALUES (${u} , 'ahmadda' , 'amalaiks')` )
}
// add(" 'akaaass5','akaaass67' ,'akaaass78' ) ; 'DROP TABLE user4' ; ", "akaaass908", "akaaaasa");
