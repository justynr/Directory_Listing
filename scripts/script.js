const public_spreadsheet_url_suites = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNik9F_6vPbPKCGneA6qMgExrkJhyl6MrzJhVj8PrK_T_EqqrFsgFJtPALhGkSw6mnX_nSuhknqZ0z/pub?gid=0&single=true&output=csv';
const public_spreadsheet_url_master = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNik9F_6vPbPKCGneA6qMgExrkJhyl6MrzJhVj8PrK_T_EqqrFsgFJtPALhGkSw6mnX_nSuhknqZ0z/pub?gid=941655149&single=true&output=csv';
const public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNik9F_6vPbPKCGneA6qMgExrkJhyl6MrzJhVj8PrK_T_EqqrFsgFJtPALhGkSw6mnX_nSuhknqZ0z/pubhtml";

const StaticmasterData = [
  {
    "category":"Spa",
    "color":"orange",
    "column": 1
  },
  {
    "category":"Other",
    "color":"greenyellow",
    "column": 2
  },
  {
    "category":"Barber",
    "color":"cyan",
    "column": 2
  },
  {
    "category":"Chiro",
    "color":"crimson",
    "column": 2
  },
  {
    "category":"Salon",
    "color":"fuchsia",
    "column": 3
  }

]

const Staticdata = [
  {
    "suite": 1,
    "ownerFirst": "Stavro",
    "ownerLast": "Piniotes",
    "email": "hairbystavro@gmail.com",
    "phone": "416-897-4813",
    "companyName": "Hair By Stavro",
    "category": "Salon"
  },
  {
    "suite": 2,
    "ownerFirst": "Myrha",
    "ownerLast": "Foutris",
    "email": "hbe416939@gmail.com",
    "phone": "416-939-1423",
    "companyName": "HBE Med Spa",
    "category": "Spa"
  },
  {
    "suite": 4,
    "ownerFirst": "Nikki",
    "ownerLast": "Bailey",
    "email": "dollhousestudio.xo@gmail.com",
    "phone": "647-336-3655",
    "companyName": "Dollhouse",
    "category": "Salon"
  },
  {
    "suite": 4,
    "ownerFirst": "Cree",
    "ownerLast": "Barrocks",
    "email": "info@creebarrocks.com",
    "phone": "647-567-3007",
    "companyName": "Kuhler",
    "category": "Salon, Barber"
  },
  {
    "suite": 5,
    "ownerFirst": "Anastasia",
    "ownerLast": "Chondrogiannis",
    "email": "anastasiachondro2@gmail.com",
    "phone": "416-889-4568",
    "companyName": "Kalon Hair Society",
    "category": "Salon"
  },
  {
    "suite": 6,
    "ownerFirst": "Ania",
    "ownerLast": "Wazny",
    "email": "bookings@aniawaznycreative.com",
    "phone": "416-908-7436",
    "companyName": "Ania Wazny Creative",
    "category": "Salon"
  },
  {
    "suite": 7,
    "ownerFirst": "Krista",
    "ownerLast": "Dolmon",
    "email": "skinstudiotoronto@gmail.com",
    "phone": "n/a",
    "companyName": "Skin Studio",
    "category": "Spa"
  },
  {
    "suite": 8,
    "ownerFirst": "Tatiana",
    "ownerLast": "Gamboa",
    "email": "tatianaprofessionalstylist@gmail.com",
    "phone": "416-919-6005",
    "companyName": "Hair Addictz Studio",
    "category": "Salon"
  },
  {
    "suite": 9,
    "ownerFirst": "Giselle",
    "ownerLast": "Sarmiento",
    "email": "giselleantonio18@gmail.com",
    "phone": "647-210-6101",
    "companyName": "Giselle Joy Studio",
    "category": "Salon"
  },
  {
    "suite": 10,
    "ownerFirst": "Sonia",
    "ownerLast": "Roshi",
    "email": "soilaroshi@yahoo.com",
    "phone": "647-785-8867",
    "companyName": "Hair By Sonia",
    "category": "Salon"
  },
  {
    "suite": 11,
    "ownerFirst": "Christina",
    "ownerLast": "White",
    "email": "christine.stylist@gmail.com",
    "phone": "647-221-7251",
    "companyName": "Chroma Salon",
    "category": "Salon"
  },
  {
    "suite": 12,
    "ownerFirst": "Tre",
    "ownerLast": "Paul",
    "email": "designertrepaul@gmail.com",
    "phone": "416-824-9298",
    "companyName": "Ocean Wavy Barbers",
    "category": "Barber"
  },
  {
    "suite": 13,
    "ownerFirst": "Dixie",
    "ownerLast": "Burke",
    "email": "naturalcurlhaven@gmail.com",
    "phone": "416-892-4022",
    "companyName": "Natural Curly Hair Haven",
    "category": "Salon"
  },
  {
    "suite": 14,
    "ownerFirst": "Christina",
    "ownerLast": "Collini",
    "email": "browblvdinc@gmail.com",
    "phone": "647-524-9988",
    "companyName": "Brow Blvd Inc",
    "category": "Spa"
  },
  {
    "suite": 14,
    "ownerFirst": "Christina",
    "ownerLast": "Vafin",
    "email": "christinavafin@gmail.com",
    "phone": "437-986-1984",
    "companyName": "Effect MedAesthtics Centre",
    "category": "Spa"
  },
  {
    "suite": 15,
    "ownerFirst": "Yvonne",
    "ownerLast": "Pine",
    "email": "info@hairillusions.ca",
    "phone": "416-846-4660",
    "companyName": "Hair Illusions",
    "category": "Salon"
  },
  {
    "suite": 16,
    "ownerFirst": "Paul",
    "ownerLast": "Chan",
    "email": "paulkitchan@hotmail.ca",
    "phone": "416-888-1726",
    "companyName": "Raw Hair Studio",
    "category": "Salon"
  },
  {
    "suite": 18,
    "ownerFirst": "Katina",
    "ownerLast": "Hasselsteiner",
    "email": "big6lashes@gmail.com",
    "phone": "416-788-9161",
    "companyName": "Big 6 Lashes",
    "category": "Other"
  },
  {
    "suite": 19,
    "ownerFirst": "Catherine",
    "ownerLast": "Furness",
    "email": "cfurness@hotmail.ca",
    "phone": "416-795-0937",
    "companyName": "Advanced Skin Care",
    "category": "Spa"
  },
  {
    "suite": 20,
    "ownerFirst": "Amanpreet",
    "ownerLast": "Banwait",
    "email": "aman_banwait@hotmail.ca",
    "phone": "416-904-6653",
    "companyName": "Let Them Notice",
    "category": "Spa"
  },
  {
    "suite": 20,
    "ownerFirst": "Sarah",
    "ownerLast": "Harrison",
    "email": "truebeautylounge@gmail.com",
    "phone": "416-528-9361",
    "companyName": "True Beauty Lounge",
    "category": "Spa"
  },
  {
    "suite": 21,
    "ownerFirst": "Keyla",
    "ownerLast": "Letanno",
    "email": "keylaletanno@gmail.com",
    "phone": "647-207-6338",
    "companyName": "Key To Beauty",
    "category": "Spa"
  },
  {
    "suite": 22,
    "ownerFirst": "Jeongae",
    "ownerLast": "Davidson",
    "email": "jeongae77@rogers.ca",
    "phone": "647-527-4132",
    "companyName": "Eye The Brows",
    "category": "Other"
  },
  {
    "suite": 23,
    "ownerFirst": "Kimberli",
    "ownerLast": "Miou",
    "email": "kimberli@nqwb.ca",
    "phone": "647-704-8857",
    "companyName": "North Queen Wellness & Beauty",
    "category": "Other, Spa"
  },
  {
    "suite": 25,
    "ownerFirst": "Julia",
    "ownerLast": "Michener",
    "email": "juliammichener@gmail.com",
    "phone": "647-222-7293",
    "companyName": "Julia Skin Beauty",
    "category": "Spa, Other"
  },
  {
    "suite": 26,
    "ownerFirst": "Francine",
    "ownerLast": "Francis",
    "email": "francinefrancis_lee@yahoo.ca",
    "phone": "416-725-8710",
    "companyName": "Virtuous Hair",
    "category": "Salon"
  },
  {
    "suite": 27,
    "ownerFirst": "Melissa",
    "ownerLast": "Gagnon",
    "email": "m.gagnon1987@hotmail.ca",
    "phone": "647-987-6145",
    "companyName": "Canadian Beauty Boutique",
    "category": "Spa"
  },
  {
    "suite": 28,
    "ownerFirst": "Emma",
    "ownerLast": "Toste",
    "email": "nailgoddessacademy@gmail.com",
    "phone": "647-570-0763",
    "companyName": "Nail Goddess Academy",
    "category": "Other"
  },
  {
    "suite": 29,
    "ownerFirst": "Taran",
    "ownerLast": "Chohan",
    "email": "tarandip.chohan@mohawkcollege.ca",
    "phone": "647-973-6025",
    "companyName": "Refined By T",
    "category": "Spa"
  },
  {
    "suite": 29,
    "ownerFirst": "Ashley",
    "ownerLast": "Tavares",
    "email": "ashleyjtxo@gmail.com",
    "phone": "437-993-3731",
    "companyName": "Skin From Within",
    "category": "Spa"
  },
  {
    "suite": 30,
    "ownerFirst": "Areta",
    "ownerLast": "Mamaduvoski",
    "email": "aretam_hairlove@outlook.com",
    "phone": "647-500-2157",
    "companyName": "Virtue Hair",
    "category": "Salon"
  },
  {
    "suite": 30,
    "ownerFirst": "Eyeza",
    "ownerLast": "Diana",
    "email": "justsmile.designs@gmail.com",
    "phone": "647-468-2173",
    "companyName": "Just Smile Designs",
    "category": "Salon, Spa"
  },
  {
    "suite": 31,
    "ownerFirst": "Ashley",
    "ownerLast": "Bell",
    "email": "ashleyvbell88@gmail.com",
    "phone": "905-537-0820",
    "companyName": "Ashley Bell Hairstylist",
    "category": "Salon"
  },
  {
    "suite": 33,
    "ownerFirst": "Justine",
    "ownerLast": "Mitchell",
    "email": "info@amethystoasis.ca",
    "phone": "905-866-3621",
    "companyName": "Amethyst Oasis",
    "category": "Spa"
  },
  {
    "suite": 34,
    "ownerFirst": "Barbara",
    "ownerLast": "Brown",
    "email": "all_in_one_beauty@yahoo.com",
    "phone": "647-219-0024",
    "companyName": "All In One Beauty",
    "category": "Salon"
  },
  {
    "suite": 35,
    "ownerFirst": "Lesia",
    "ownerLast": "Mcpherson",
    "email": "lesia.mcpherson@hotmail.com",
    "phone": "647-280-6722",
    "companyName": "Pluss Hair",
    "category": "Salon"
  },
  {
    "suite": 36,
    "ownerFirst": "Lindsay",
    "ownerLast": "Fiander",
    "email": "info@glossstudio.ca",
    "phone": "647-922-8664",
    "companyName": "Gloss Studio",
    "category": "Salon"
  },
  {
    "suite": 38,
    "ownerFirst": "Jennifer",
    "ownerLast": "Bauch",
    "email": "jenniferhairdesign@yahoo.com",
    "phone": "416-725-5366",
    "companyName": "Jennifer Hair Design",
    "category": "Salon"
  },
  {
    "suite": 40,
    "ownerFirst": "Diane",
    "ownerLast": "Carreiro",
    "email": "diane.merakistudio@gmail.com",
    "phone": "416-333-1100",
    "companyName": "Meraki Hair Studio",
    "category": "Salon"
  },
  {
    "suite": 41,
    "ownerFirst": "Lola",
    "ownerLast": "Fakule",
    "email": "lola.elmai@gmail.com",
    "phone": "647-210-2979",
    "companyName": "El'mai Studio",
    "category": "Salon, Other"
  },
  {
    "suite": 41,
    "ownerFirst": "James",
    "ownerLast": "Han",
    "email": "barberjhan@gmail.com",
    "phone": "647-787-2833",
    "companyName": "Evolve",
    "category": "Barber"
  },
  {
    "suite": 43,
    "ownerFirst": "Sandra",
    "ownerLast": "Mackenzie",
    "email": "Ssandrameuiller@gmail.com",
    "phone": "416-617-1624",
    "companyName": "Sandra Mackenzie Design",
    "category": "Salon"
  },
  {
    "suite": 44,
    "ownerFirst": "Gianna",
    "ownerLast": "Soncina",
    "email": "drsoncina@gmail.com",
    "phone": "416-400-2752",
    "companyName": "Gianna Chiropractic",
    "category": "Chiro"
  },
  {
    "suite": 44,
    "ownerFirst": "Sharon",
    "ownerLast": "Jeremih",
    "email": "sharonj.rmt@gmail.com",
    "phone": "647-281-5170",
    "companyName": "Sharon Massage Therapy",
    "category": "Other"
  },
  {
    "suite": 45,
    "ownerFirst": "Angela",
    "ownerLast": "Bianca",
    "email": "angbianca1@hotmail.com",
    "phone": "647-525-8409",
    "companyName": "Angela Superfacial Clinic",
    "category": "Spa, Other"
  },
  {
    "suite": 46,
    "ownerFirst": "Stefanie",
    "ownerLast": "Kaufman",
    "email": "info@stefhairstylist.com",
    "phone": "647-290-4163",
    "companyName": "Stef.hairstylist",
    "category": "Salon, Barber"
  },
  {
    "suite": 47,
    "ownerFirst": "Malina",
    "ownerLast": "Hem",
    "email": "malinahem@yahoo.ca",
    "phone": "416-457-7616",
    "companyName": "Hair By Malina",
    "category": "Salon"
  },
  {
    "suite": 50,
    "ownerFirst": "Joya",
    "ownerLast": "Salvadori",
    "email": "info@hbsbeautyspa.com",
    "phone": "647-328-5324",
    "companyName": "HBS Beauty Spa",
    "category": "Spa, Other"
  },
  {
    "suite": 51,
    "ownerFirst": "Antonietta",
    "ownerLast": "Falcone",
    "email": "antonietta_falcone@hotmail.com",
    "phone": "416-707-0067",
    "companyName": "Lavender Brow & Beauty",
    "category": "Spa, Other"
  }
]

const suites = [
  {
    "suite": 0,
    "count": 0,
    "location": [
      -10,
      -10
    ]
  },
  {
    "suite": 1,
    "count": 0,
    "location": [
      240,
      580
    ],
    "categories": []
  },
  {
    "suite": 2,
    "count": 0,
    "location": [
      270,
      695
    ],
    "categories": []
  },
  {
    "suite": 3,
    "count": 0,
    "location": [
      310,
      580
    ],
    "categories": []
  },
  {
    "suite": 4,
    "count": 0,
    "location": [
      390,
      580
    ],
    "categories": []
  },
  {
    "suite": 5,
    "count": 0,
    "location": [
      350,
      695
    ],
    "categories": []
  },
  {
    "suite": 6,
    "count": 0,
    "location": [
      425,
      695
    ],
    "categories": []
  },
  {
    "suite": 7,
    "count": 0,
    "location": [
      490,
      665
    ],
    "categories": []
  },
  {
    "suite": 8,
    "count": 0,
    "location": [
      525,
      580
    ],
    "categories": []
  },
  {
    "suite": 9,
    "count": 0,
    "location": [
      555,
      510
    ],
    "categories": []
  },
  {
    "suite": 10,
    "count": 0,
    "location": [
      590,
      450
    ],
    "categories": []
  },
  {
    "suite": 11,
    "count": 0,
    "location": [
      620,
      390
    ],
    "categories": []
  },
  {
    "suite": 12,
    "count": 0,
    "location": [
      650,
      310
    ],
    "categories": []
  },
  {
    "suite": 13,
    "count": 0,
    "location": [
      520,
      320
    ],
    "categories": []
  },
  {
    "suite": 14,
    "count": 0,
    "location": [
      535,
      235
    ],
    "categories": []
  },
  {
    "suite": 15,
    "count": 0,
    "location": [
      650,
      250
    ],
    "categories": []
  },
  {
    "suite": 16,
    "count": 0,
    "location": [
      650,
      165
    ],
    "categories": []
  },
  {
    "suite": 17,
    "count": 0,
    "location": [
      535,
      165
    ],
    "categories": []
  },
  {
    "suite": 18,
    "count": 0,
    "location": [
      730,
      165
    ],
    "categories": []
  },
  {
    "suite": 19,
    "count": 0,
    "location": [
      770,
      60
    ],
    "categories": []
  },
  {
    "suite": 20,
    "count": 0,
    "location": [
      705,
      60
    ],
    "categories": []
  },
  {
    "suite": 21,
    "count": 0,
    "location": [
      620,
      60
    ],
    "categories": []
  },
  {
    "suite": 22,
    "count": 0,
    "location": [
      540,
      65
    ],
    "categories": []
  },
  {
    "suite": 23,
    "count": 0,
    "location": [
      460,
      60
    ],
    "categories": []
  },
  {
    "suite": 24,
    "count": 0,
    "location": [
      390,
      60
    ],
    "categories": []
  },
  {
    "suite": 25,
    "count": 0,
    "location": [
      320,
      60
    ],
    "categories": []
  },
  {
    "suite": 26,
    "count": 0,
    "location": [
      235,
      160
    ],
    "categories": []
  },
  {
    "suite": 27,
    "count": 0,
    "location": [
      40,
      60
    ],
    "categories": []
  },
  {
    "suite": 28,
    "count": 0,
    "location": [
      160,
      160
    ],
    "categories": []
  },
  {
    "suite": 29,
    "count": 0,
    "location": [
      40,
      145
    ],
    "categories": []
  },
  {
    "suite": 30,
    "count": 0,
    "location": [
      40,
      240
    ],
    "categories": []
  },
  {
    "suite": 31,
    "count": 0,
    "location": [
      160,
      235
    ],
    "categories": []
  },
  {
    "suite": 32,
    "count": 0,
    "location": [
      40,
      305
    ],
    "categories": []
  },
  {
    "suite": 33,
    "count": 0,
    "location": [
      160,
      315
    ],
    "categories": []
  },
  {
    "suite": 34,
    "count": 0,
    "location": [
      40,
      390
    ],
    "categories": []
  },
  {
    "suite": 35,
    "count": 0,
    "location": [
      40,
      465
    ],
    "categories": []
  },
  {
    "suite": 36,
    "count": 0,
    "location": [
      40,
      535
    ],
    "categories": []
  },
  {
    "suite": 37,
    "count": 0,
    "location": [
      160,
      580
    ],
    "categories": []
  },
  {
    "suite": 38,
    "count": 0,
    "location": [
      40,
      610
    ],
    "categories": []
  },
  {
    "suite": 39,
    "count": 0,
    "location": [
      40,
      690
    ],
    "categories": []
  },
  {
    "suite": 40,
    "count": 0,
    "location": [
      160,
      390
    ],
    "categories": []
  },
  {
    "suite": 41,
    "count": 0,
    "location": [
      160,
      510
    ],
    "categories": []
  },
  {
    "suite": 42,
    "count": 0,
    "location": [
      235,
      510
    ],
    "categories": []
  },
  {
    "suite": 43,
    "count": 0,
    "location": [
      235,
      390
    ],
    "categories": []
  },
  {
    "suite": 44,
    "count": 0,
    "location": [
      345,
      390
    ],
    "categories": []
  },
  {
    "suite": 45,
    "count": 0,
    "location": [
      305,
      510
    ],
    "categories": []
  },
  {
    "suite": 46,
    "count": 0,
    "location": [
      375,
      510
    ],
    "categories": []
  },
  {
    "suite": 47,
    "count": 0,
    "location": [
      445,
      515
    ],
    "categories": []
  },
  {
    "suite": 48,
    "count": 0,
    "location": [
      475,
      390
    ],
    "categories": []
  },
  {
    "suite": 49,
    "count": 0,
    "location": [
      460,
      320
    ],
    "categories": []
  },
  {
    "suite": 50,
    "count": 0,
    "location": [
      460,
      235
    ],
    "categories": []
  },
  {
    "suite": 51,
    "count": 0,
    "location": [
      460,
      165
    ],
    "categories": []
  }
]


const thisVersion = 3;

var data;
var masterData;
async function init() {
  masterData = await parseData(public_spreadsheet_url_master);
  data = await parseData(public_spreadsheet_url_suites);
  //await getMasterData();
  await parse(data);
}

const parseData = (file) => {
  return new Promise((resolve) => {
    Papa.parse(file, {
      download: true,
      header: true,
      complete: (results) => {
        //console.log(results);
        resolve(results.data);
      }
    });
  });
};


var masterCategory = [];



function parse(data) {
  ResizeCanvas();
  for (var i = 0; i < masterData.length; i++) {
    masterCategory.push(masterData[i].mastercategory);
    addCategory(i, masterData);
  };
  for (var i = 0; i < data.length; i++) {
    fillCategory(i);
  };
};

function fillCategory(i) {
  const { category, companyName, suite } = data[i];
  const catList = category.replace(/\s/g,'').split(',');
  for (var j = 0; j < catList.length; j++) {
    if (masterCategory.includes(catList[j]) && suite < 52) {
    //Render Text
      const newDiv = document.createElement("p");
      newDiv.setAttribute('class', 'tenant');
      const text = document.createTextNode(`Suite ${suite} - ${companyName}`);
      newDiv.appendChild(text);
      const element = document.getElementById(`${catList[j]}List`);
      element.appendChild(newDiv);

      //Draw Dots
      const color = GetColor(catList[j]);
      AddressDraw(suite, color, catList[j]);
    }
  }
}

function addCategory(i) {
  const {mastercategory, mastercolor, column} = masterData[i]
 
  const elementTitle = document.getElementById(`column${column}`);
  const listDiv = document.createElement("div");
  const circleDiv = document.createElement("div");
  const titleDiv = document.createElement("div");

  listDiv.setAttribute('class', 'listing');
  circleDiv.setAttribute('class', 'circle');

  titleDiv.setAttribute('class', 'title');
  listDiv.setAttribute('id', `${mastercategory}List`)
  const text = document.createTextNode(mastercategory);
  titleDiv.appendChild(text);
  circleDiv.appendChild(titleDiv);
  listDiv.appendChild(circleDiv);
  elementTitle.appendChild(listDiv);
  circleDiv.style.backgroundColor = mastercolor;
}

function AddressDraw(i, color, category) {
  const existingCategories = suites[i].categories;
  if (!existingCategories.includes(category)) {
    let dotX = suites[i].location[0];
    const dotY = suites[i].location[1];
    const count = suites[i].count
    dotX += (count * 10)
    suites[i].count += 1;
    suites[i].categories.push(category);
    var c = document.getElementById("mapCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(dotX, dotY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function ResizeCanvas() {
  const canvas = document.getElementById("mapCanvas");
  // Lookup the size the browser is displaying the canvas.
  var displayWidth  = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;
 
  // Check if the canvas is not the same size.
  if (canvas.width  != displayWidth ||
      canvas.height != displayHeight) {
 
    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
}

function GetColor(category) {
  const cat = masterData.find(el => el.mastercategory == category);
  const color = cat.mastercolor;
  return(color);
}

// init();
window.addEventListener('DOMContentLoaded', init);
