
var h1= document.createElement("H1"); //heading

var textFront = document.createTextNode( "Matstället AB");

h1.append(textFront);

document.body.append(h1);




//får fram vilken dag det är idag!
var Date = new Date();


let veckoDag = []; // array med alla dagar 
veckoDag[0] = "Söndag:";
veckoDag[1] = "Måndag:";
veckoDag[2] = "Tisdag:";
veckoDag[3] = "Onsdag:";
veckoDag[4] = "Torsdag:";
veckoDag[5] = "Fredag:";
veckoDag[6] = "Lördag:";




let nuDay = veckoDag[Date.getDay()];// man kan bara lägga till ett plus valfri siffra så får man ut dagens tex idag tisdag [2] vill du få ut torsdagen [Date.getDay()+2]



//måndag
//tisdag
//onsdag
//torsdag
//fredag



//samma lunch på samma dag

//lördag & söndag stängt (5 dagar de serverar mat)

//switch för att se vilken dag /vilken mat de blir


// Den tar från nuday vilken dag det är
//från array text "dagen" som motsvarar siffran tex 0(start) söndag
//switch matchar den med veckodagen och sedan ger oss korrekt info

switch(nuDay){

    case veckoDag[0]:
        document.write(nuDay +" Då har vi tyvärr stängt!");
    break;
    case veckoDag[1]:
        document.write(nuDay + " Taco!");
    break;

    case veckoDag[2]:
        document.write(nuDay + " Lax och poatis");
        break;

    case veckoDag[3]:
        document.write(nuDay + " Stuvade makaroner med potatis");
     break;
   
    case veckoDag[4]:
        document.write(nuDay + " Kyckling och ris");
    break;

    case veckoDag[5]:
         document.write(nuDay + " Pizza!");
    break;
    case veckoDag[6]:
        document.write(nuDay + " Då har vi tyvärr stängt!");
   break;

    default:
         document.write("Fel");
        break;
}





