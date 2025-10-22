interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark"|"blue";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};

type user1 = {
    name:string;
    age?:Number;
}
const user1 : user1= {
  name: "Matt",
};

user1.age = 24;


const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

console.log(id?.toUpperCase());    //لان هنا النت ما تعرف هل بيرجع استرنق او بيكون فاضي ف تخليها اختياريه



const routingConfig  = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "aboutComponent",  //هنا صار التعديل لان النوع الكوموبنت يستقبل نص فقط ف يا يكون المدخل نص او تضيف في الداله تحت تسمح بادخال ارقام
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);



const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {                          
  console.log((error as Error).message); // هنا ناذكد ان الايرور من ضمن الايرور ف يتعامل معاه طبيعي 
}


const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};
//نحدد المدخلات انه بس يرجع  لك ذي الاشياء فقط
const getPrice = (productName:'Orange'|'Apple'|'Banana') => {
  return productPrices[productName];
};                                 
getPrice('Banana');


//الغلط الي كان هنا ان مافقيه شي مدخل 
class User {
  private username: string;
  constructor(){
    this.username="mohmmed"
  }
}


interface Dog {
  bark: boolean;
  purr:boolean
}
//cat اضفنا  في هنا خاصيه ال 

let cat = { purr: true , bark:true};
//وهنا اضفنا كل الخاصيات عشان تكون كل الاشياء المطلوبه موجوده
let dog = cat as Dog;


const name = "Matt";



import Diff from "diff";
