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
function User({
  propName,
  propSurname,
  propAge,
  isLoggedIn,
  friends,
  address,
}) {
  //Eğer giriş yapılmadıysa aşağıdaki gibi early return yaparak bilgileri göstermeyiz.
  if (!isLoggedIn) {
    return <h1>You must login!</h1>;
  }
  return (
    <>
      {/* Birden fazla etiket için fragment etiketine almalıyız.*/}
      <h1>{`${propName} ${propSurname} (${propAge})`}</h1>
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
      <br></br>
      {/* SHAPE: Address attribute kısmı "shape" tanımını kullanamak için obje verilirmiştir. */}
      {address.title} {address.zip}
    </>
  );
}
//Bu şekilde prop tiplerini belirtebiliriz.
//Eğer zorunlu alanları belirtmek istersek "isRequired" tanımını kullanırız.
//Bir propertYde birden fazla veri tipinin gönderilmesi için de "oneOfType" tanımını kullanırız.
//Mesela age attribute kısmını hem string hem de number kabul etmek için aşağıdaki gibi düzeleyebiliriz.

User.propTypes = {
  propName: PropTypes.string.isRequired,
  propSurname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  propAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

//Eğer verilen prop kısmına herhangi bir değer set edilmemişse default olarak değer verilmesi için kullanırız.
//Örneğin: isLoggedIn gönderilmemişse bu prop kısmına varsayılan "false" şeklinde default değer set edebiliriz.
User.defaultProps = {
  isLoggedIn: false,
};
export default User;
