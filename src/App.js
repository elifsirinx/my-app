import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

//Component isimleri büyük harfle başlamalı.
//Çünkü baş harfi küçük olduğu zaman react HTML ifadelerinin render edilmesi olarak algılanıyor.
//Büyük olanlarsa oluşturduğumuz custom componentlerin render edilmesi olarak algılanıyor.

/*
----------JSX
JSX : HTML kodu yazar gibi js yazabiliyoruz. HTML görünümlü JS.
JSX kullanmasaydık aşağıdaki gibi bir kod yazmamız gerekecekti.
return React.createElement("div",null,Hello);
Yukarıdaki kod parçasını da aşağıdaki gibi her elemente uygulamak istersek,
karmaşık ve zor olacağı için JSX geliştirilmiştir.
JSX : Bir componentin içinde mutlaka kapsayıcı bir etiket olmalı.
Eğer kapsayıcı bir element yoksa o componenti çalıştıramayız.Syntax hatası alırız.
Fragment <> ... </> elementini de <div>...</div> yerine kapsayıcı element olarak kullanılabilir.
JSX yazarken JS için tanımlı bazı özel tanımlı keywordleri (if, class, for..) kullanmamalıyız. 
Mesela : class (JS için özel tanımlı) yerine className,
for (JS için özel tanımlı) yerine htmlFor kullanılıt.
*/

/*
-----COMPONENTLERDE DEGISKEN RENDER ETMEK
Değişken name olarak tanımlandı. 
Aşağıdaki gibi h1 componentinde kullanıldı.
*/
const name = "Elif";
const surname = "Sirin";

/*
------KOŞULLU RENDER
isLoggedIn ifadesini kullanarak aşağıdaki gibi koşulu ekledik.
*/
const isLoggedIn = false;

/* 
-------PROPS
Oluşturulan componentlerle parametre geçerek o parametrenin initial görüntüsünü oluşturmak isteriz.
*/

/* 
-------PROPS ARRAY
Oluşturulan componentlerle array olarak friends parametre geçerek o parametrenin initial görüntüsünü oluşturmak isteriz.
*/

/*
-------PROPS TYPES
Componentlere gönderdiğimiz propertylerin tiplerini belirleyebileceğimiz prop-types aracımız var.
Bunu nasıl kullanacağımızı öğreneceğiz.
*/

/*
-------PROPS TYPES: isRequired 
Eğer zorunlu alanları belirtmek istersek "isRequired" tanımını kullanırız.
*/

/*
-------PROPS TYPES: oneOfType 
Bir property de birden fazla veri tipinin gönderilmesi için de "oneOfType" tanımını kullanırız.
*/

/*
-------PROPS TYPES: shape 
Obje olarak gönderilen property kullanabileceğimiz "shape" adında bir tanım vardır.
Mesela: Aşağıda "Adres" diye bir obje vererek örneklendirdik.
*/

/*
-------default PROPS 
Eğer verilen prop kısmına herhangi bir değer set edilmemişse default olarak değer verilmesi için kullanırız.
*/

const friends = [
  { id: 1, name: "Merve" },
  { id: 2, name: "Can" },
  { id: 3, name: "Aysima" },
];
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header />

      {/* BURADAKİ KISIM KOŞULLU RENDER İÇİN YAZILMIŞTIR.
      <h1>{isLoggedIn && `Benim adım ${name} soyadım ${surname}`}</h1>
      {!isLoggedIn && "Giriş yapmadınız."}
      <p>Veya aşağıdaki gibi yazabiliriz.</p>
      <h1>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız."}
      </h1>
        */}

      <User
        propName="Elif"
        propSurname="Sirin"
        propAge={25}
        //isLoggedIn={true}
        friends={friends}
        address={{
          title: "Ataşehir/Istanbul",
          zip: 34755,
        }}
      />
    </div>
  );
}

export default App;
