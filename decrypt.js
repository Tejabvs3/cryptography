import { bbs } from "./BBS.js";
import { crossOver } from "./crossOver.js";
import prompt from 'prompt-sync';
//import { parse } from "path";
const input = prompt({ sigint: true });
import dotenv from 'dotenv';
dotenv.config();

const KEY_1 = parseInt(process.env.KEY_1);
const KEY_2 = parseInt(process.env.KEY_2);
const KEY_3 = parseInt(process.env.KEY_3);
const KEY_4 = parseInt(process.env.KEY_4);
const KEY_5 = parseInt(process.env.KEY_5);
const KEY_6 = parseInt(process.env.KEY_6);
const KEY_7 = parseInt(process.env.KEY_7);
const KEY_8 = parseInt(process.env.KEY_8);
const KEY_9 = parseInt(process.env.KEY_9);

//export const decrypt = (cipherText) => {

//const cipherText = "Ӌ΀ܢ۴ڜ৵KȐȀȁ੾ѭѡհ©ض॥ਭЅ˧࠳ӉΟݲऀۃ৴SɃȝɅ੿ЦѺյÿؿऽਫВ↕˫ࡶӜΐݱइیৢRȅȗɔ੯ѦѵԵëز७੾А࡮ӁΉܠकۄতVȝȔɕਫѺѵԳñز४ਥІQˢ࠼ӚΘܷटێহGȔȇȊ੷ѣѶսóؼ७੭Е♦ʤ࠶Ӓΐݴ॓ۅৼWȄɊɞ੬ѹпեîسह਩Аˤ࠭ӋΕܽऋڍৣSɐȌɔ੢ѵЧճïض२੽Њ˭࠵ӎϜܹघۈ৴Sɑȏɍ੾ѻѡձñؿ२਷ЎJ˪࠸ӊΜݦआۋ঳AȄȅɒੰѿѺհªذ॥੯ЃN˯࠰ӊΚݢईی঳\ȖȖɔ੸ѩѱԴøص१ਸЇ♠ʺ࠵ӏ΋ܶॏۉৢ@ȖȈȐੳлѰյýطऽਡЂ@ˢ࠿ӊΐݥआیৢVȁɔɕ੻ѹ       ѹдբëذॷਮѓ˯࠿ӂϔܷऊۈৰȋȄȒੴѣѧնþاॠ੨ё    ˦ࡩӆΞܷय़ۘ৴Rȕȁɕ਺ѦѵԾùاॽਫД♠ʻ࠹ӏΖܲृۍ঵KȔȄɞ੪Ѱѱղ·ٽॸ਺ІNˤ࠸ӊϟܣईیহDȄɐə੾ѧѷձ¸ؽ३੧З↕˧ࠩӇΔܽउڞস‼ɌȉɅ੿иѰմ¹ضॱਮњˬ࠭ӛ"
//const cipherText = "љͽޝۈڅৡÁʪɱʉ੧іҋցçۨৄથҥj˖࣫ҏΗߜॅٱऐÂʧˊȅਊјӆחT٬ल૏҈¹˶ࢩМξޡ৅ڱॠȏʫ˴બӢюכJۋখ੯ГɌࡆЮ̚ޕৄڑঠDȒʿʗટ҉ҵ֋hڃঔਖ਼Ҝɉ࣫Ӗ΋ݠঈؿ৮Ä˺ȱ˳੔ӉҷՋGڞऴੳѣ¿ɕ࠰ҐΏܽनؒভÂʄɁ˦૟ҍТ׻Vڴ          ڴȁࡸӒ̂߳ঽٯৎ#ˢȒ˲ીҙѭԑj۹क਒ӱ→Ɍࡸӑϯߛ़يৎnȤȍ˒ષЌЯեÂڹে੐ӰHɁ࣫ӒΦ߳े़ٞ(șʞɲૐҰҢ׫Àڔऄਗц-ɩࢿҰϩߒज٧ड़*ȺȖɾ૳ӟЋ֬»ڜউਓѸ↕ˡ࢖Ѐ͠܅৺ۧट¿ȓɊ˚૝пЉֵBڽু੘ӰTɁࢻҳͮޚंٷॿ>ȿɗ˴੊              ੊ӥЙՓjښऐ૮ЯȬࢀҺϑܲ"
const cipherText = "ӯΊܠ໽ہৰ";
//console.log(cipherText.length);

// step 1: charcodes of each character in cipherText
let c = [];

for(let i=0;i<cipherText.length;i++){
    c[i] = cipherText.charCodeAt(i);
}
console.log(c);
/*
for(let i=0;i<c.length;i++){
    if(c[i]<0) c[i] = c[i]*(-1);
}
*/
//step 2 : Mutation 
let flippedString = "";
console.log(KEY_9,c[KEY_9]);
let m = c[KEY_9].toString(2);
console.log(m);
for(let i=1;i<m.length;i++){
    if(m[i]==='0') flippedString+='1';
    else flippedString+='0';
}
console.log(parseInt(flippedString,2));
console.log(c[KEY_9],"flipped bit string");
c[KEY_9] = parseInt(m[0]+flippedString,2);


  
  //step 3 :
  let z = [];
    z = bbs(KEY_7, c.length, KEY_5, KEY_6, KEY_8);
    for(let i=0;i<c.length;i++){
        c[i] = c[i]^(z[i]^(z[i]<<(4)));
    }

    //step 4 :

    let crossOverNums = [];
    crossOverNums =  bbs(KEY_4, c.length-1,KEY_2,KEY_3,3);
    console.log(crossOverNums);
    crossOverNums.reverse();
    c.reverse();
    console.log(c);
    for(let i=0;i<c.length;i++){
        c[i] = c[i].toString(2);
        while(c[i].length<KEY_1){
            c[i] = '0'+c[i];
        }
    }
    console.log(c);
    let b = crossOver(crossOverNums,c,KEY_1);
    b.reverse();
    console.log(b);
    //console.log(b);

    let plainText = "";
    for(let i=0;i<b.length;i++){
        plainText = plainText + String.fromCharCode(parseInt(b[i],2));
    }
    console.log(plainText);
  //  return plainText;

//}















/*
async function addKeyValuePair() {
    try {
      // Read the existing .env file
      const envData = await fs.readFile('.env');
  
      // Convert the .env file content to an object
      const envConfig = parse(envData);
  
      // Add the new key-value pair to the object
      envConfig.KEY_10 = flippedString.length.toString();
  
      // Convert the object back to a string
      const updatedEnvContent = Object.entries(envConfig)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');
  
      // Write the updated content back to the .env file
      await fs.writeFile('.env', updatedEnvContent);
      //console.log(decrypt(cipherText));
  
      console.log('.env file updated successfully!');
    } catch (error) {
      console.error('Error updating .env file:', error);
    }
  }
  
  addKeyValuePair();
  */