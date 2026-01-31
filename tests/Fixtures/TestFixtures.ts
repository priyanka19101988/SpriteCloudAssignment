import{test as basetest} from "../Fixtures/LoginlogoutFixture";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import { Checkout_yourInformationPage } from "../Pages/Checkout_yourInformationPage";
import { OverviewPage } from "../Pages/overviewPage";

type applicationPage = {
    homepage  : HomePage ;
    cartpage  : CartPage ;
    Checkout_yourInformationPage : Checkout_yourInformationPage ;
    overviewpage : OverviewPage ;
}

export const test = basetest.extend<applicationPage>({

      homepage : async({page},use) =>{
      const homepage = new HomePage(page);
      await use(homepage);
      await console.log("print homepage");
      },

      cartpage : async({page},use) =>{
      const cartpage = new CartPage(page);
      await use(cartpage);
      await console.log("print cartpage");
      },

      Checkout_yourInformationPage : async({page},use) =>{
      const checkout_yourInformationPage = new Checkout_yourInformationPage(page);
      await use(checkout_yourInformationPage);
      await console.log("print checkout page");
      },

      overviewpage : async({page},use) =>{
      const overviewpage = new OverviewPage(page);
      await use(overviewpage);
      await console.log("print overview page");
      }
      
 })

  


    