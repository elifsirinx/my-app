/*
    App.js kısmında User tagine geçmiş olduğumuz propName parametresini aşağıdaki props olarak ekledik.
    App.js tarafından isLoggedIn parametresi true geldiği zaman App.js tarafından verilen isim ve soyismi dönecek.
    False geldiği zamanda aşağıdaki ifadeyi dönecek.
 */
// function User(props) {
//   console.log(props);
//   return (
//     <h1>
//       {props.isLoggedIn
//         ? `${props.propName} ${props.propSurname}`
//         : "Your couldn't Login!"}
//     </h1>
//   );
// }

//Ayrıca props. ifadesini kullanmak istemezsek {name,surname,isLoggedIn} şekilinde de verebiliriz.

//Prop içine array geçmek. App.js kısmındaki friends array ini burada veriyoruz.

/*
-------PROPS TYPES
Componentlere gönderdiğimiz propertylerin tiplerini belirleyebileceğimiz prop-types aracımız var.
Bunu nasıl kullanacağımızı öğreneceğiz.
Hangi property de hangi tipi kullandığımızı componentte belirtmek için kullanmalıyız.
*/

import PropTypes from "prop-types";
function User({ propName, propSurname, propAge, isLoggedIn, friends }) {
  return (
    <>
      {/* Birden fazla etiket için fragment etiketine almalıyız.*/}
      <h1>
        {isLoggedIn
          ? `${propName} ${propSurname} (${propAge})`
          : "Your couldn't Login!"}
      </h1>

      {/*ERROR: Each child in list should have a unique "key" prop
        {friends.map((friend) => (
        <div>{friend}</div>
        ))}

        SOLUTION: Aşağıdaki gibi benzersiz bir key ifadesi verdik.
    */}
      {friends.map((friend, index) => (
        <div key={friend.id}>{`${index} - ${friend.name}`}</div>
      ))}

      {/* RETURN: Map fonksiyonun içinde farklı işlemler de yapacaksak return kullanmalıyız.*/}
      {friends.map((friend, index) => {
        const x = friend.id + 2;

        return <div key={friend.id}>{`${x} - ${friend.name}`}</div>;
      })}
    </>
  );
}
//Bu şekilde prop tiplerini belirtebiliriz.
User.propTypes = {
  propName: PropTypes.string,
  propSurname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.number,
  friends: PropTypes.array,
};
export default User;
