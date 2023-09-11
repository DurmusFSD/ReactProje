import Header from "./components/Header/Header.jsx";
import "../src/App.css";
import ProfileSide from "./components/ProfileSide/ProfileSide.jsx";

/*

JSX ile html arasıdnaki Farklılık ve Kurallar

--Kodları aynı html etiketine benzer yazıyoruz 
--yazdığımız kodlar js koduna dönüşütürluyor


1-Attribute farklılık
 ---HTML deki class burda className
 ---HTML deki for burda htmlFor
 ---style={{}}


2-JSX içerisinde JS kodu yazabiliyoruz
---JavaScript Kodu yazmak için Süslü Parantez {} açıp arasında yazıyoruz

3-JSX Kuralı
 --return arasında sadece 1 tane parent element

 --eğer parent element olmayacaksa fragment (<> </>) kullanılır


4-Kendi kapanan elementlerinkapanışlarındaki farlılık

--html img <img>   jsx <img/>

*/

/*

Component Oluşturma Kuralları ve Yöntemi

1--JavaScript fonksiyonulardan yada es6 classlarından oluşur(Günümüzda JS Fonksyionları kullanır)
2--Compnentin ilk harfi her zaman büyük olur
3--Her React Componenti bir JSX codu return eder
4--Genelde Sayfanın sonunda export edilir

*/

/*
Oluşturulan Componenti İstediğimiz Sayfada Kullanmak İçin

1-Sayfanın En başına import kodu ile import ederz
2-Kullanmak istediğimiz yerde selfclosing kapatma ile çağırırız



*/

function App() {
  return (
    <div>
      <Header />
      <ProfileSide />
    </div>
  );
}

export default App;
