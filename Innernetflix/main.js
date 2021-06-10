
function myfun() {
  
const maini = document.querySelector('#maining');

var imgs = ['https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVAvHS1g1BYRrXiNaoNWaKo33KOq9vg6227OwxZA54tS2pk5waNeI6w1kh8-JHcofg5SInp6zt5lwL1zOj7BrAHoshHpfjzfEfye49dFChu-BcZ7Y-hdqpf93rPw.jpg?r=cf5', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTI7umY4MK6Myz9aSG98ZAxL6sExyv5bZd12mQiepxSZPTdYpjM9-eOK1uKozrcZSmqBgQDnUeBFT6YYmDeVzUJEOE0.jpg?r=dee', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjNneWs0FW15zkfazr9Vl_rQtlEOSur1f897sgv6sGFZn7iFqamEAqNMX4yUmQB8m0CNWUL9HAwGN_T07Qb1W3zR_0uPbOBHWN0b5IwOZjkgMRDztlm3GYu7IGN.jpg?r=c52' , 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShE3HWMHADqViiKTvJxzs0n4yldoSbzL-Pfk6S0TlwcyaI-JZcHRqW_TaOBlnMNS5gc_6oXamZZwxu47VR-_YQWq8TWUaKVADsD53nwD236Wx6pe8J09T9R2rm2.jpg?r=5ff', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa85v-mk_WBILFHjeSVgOUBr2ExNKLvAX47QdJ-P2NdrxYjTN52co7OEYaJcmzjYOS-I1-TL3kU_rt3i9enYXDDtMjI.jpg?r=5a8', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdIgevNNAL-UcewatQHC7cPfvwm8CuHAXHTBGXxn_-gbJ2D-8mMtoa40SvaosRDVzPHOYh6exb775b2GGv8kcaTUROU.jpg?r=2c1', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaw_PAmwYkF8Lroi-BfwO-C_Kst5qb-p6xLfcbACu3r3DvdY9MUskcq-k4TRl5o54uo0Hi0uB1VOTgzor9sRlFs3-DESf7g614zFdOCUkdkqbRB7kws0I3UzNW8U.jpg?r=0e4', 'https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfZtrc4MWcZ4_I81rYPNEnldGHmGpZzRnEd_GQJ97yOS9CpHr8Ce8Au4nQlslvhqgJwQZrY9OYMn7Z11LZda0uC8AqhHnZsdpQ_PpDXoQzfabPTxT2ihglBZOWqr.jpg?r=66b'];

let random = Math.floor(Math.random() * 8);

const img = imgs[random];
  
maini.src = img;

}

setInterval(myfun, 3000);




function openmovie(a, b, c) {
  
const tabimg = document.querySelector('.tab-img');
const tabmoviename = document.querySelector('.tab-moviename');
const tabtri = document.querySelector('.tab-trailer');

var img = a;
var imgname = b;
var tri = c;
//console.log(tri);

tabimg.src = a;
tabmoviename.textContent = b;
tabtri.href = c;

const top = document.querySelector('.top');
const main = document.querySelector('.main');
const newtab = document.querySelector('.newtab');

setTimeout(function() {
top.classList.add('displaynone');
main.classList.add('displaynone');
newtab.classList.add('displayblock');
}, 400);
  
}


const backbtn = document.querySelector('.backbtn');
const newtab = document.querySelector('.newtab');
const ttop = document.querySelector('.top');
const mmain = document.querySelector('.main');

backbtn.addEventListener('click', ()=> {
 
newtab.classList.remove('displayblock');
ttop.classList.remove('displaynone');
mmain.classList.remove('displaynone');
  
});
