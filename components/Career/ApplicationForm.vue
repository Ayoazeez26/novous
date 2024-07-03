<script lang="ts" setup>
import { useDataStore } from "~/stores/data";

const route = useRoute();
const dataStore = useDataStore();
const lgas = ref<string[] | undefined>([]);
const form = reactive<any>({
  fullName: "",
  phoneNumber: "",
  gender: "",
  address: "",
  stateOfResidence: "",
  email: "",
  altPhoneNumber: "",
  maritalStatus: "",
  nationality: "",
  lga: "",
  educationLevel: "",
  fieldOfStudy: "",
  yearOfGraduation: "",
  nameOfInstitution: "",
  degreeObtained: "",
  currentPreviousEmployer: "",
  employmentDurationStart: "",
  currentlyWorkingHere: false,
  responsibilitiesAndAchievements: "",
  jobTitle: "",
  dob: "",
  employmentDurationEnd: "",
  relevantSkills: "",
  proffessionalCertName: "",
  experience: [
    {
      jobTitle: "",
      name: "",
      employmentStartDate: "",
      employmentEndDate: "",
      responsibilitiesAndAchievements: "",
      currentlyWorkingHere: false,
    },
  ],
  refereeOne: {
    name: "",
    relationship: "",
    phone: "",
    email: "",
  },
  refereeTwo: {
    name: "",
    relationship: "",
    phone: "",
    email: "",
  },
  refereeThree: {
    name: "",
    relationship: "",
    phone: "",
    email: "",
  },
  coverLetterFile: null,
  resumeFile: null,
  certificationFile: null,
  relevantDocument: null,
  // @ts-ignore
  jobId: dataStore.singleJob?.id,
});

onMounted(() => {
  getLastSegment(route.fullPath);
});

watch(
  () => form.stateOfResidence,
  (newVal, oldVal) => {
    if (newVal) {
      computeLGAs();
    }
  }
);

const computeLGAs = () => {
  const state = states.value.find(
    (item) => item.state === form.stateOfResidence
  );
  console.log(state);
  lgas.value = state?.lgas;
};
const states = ref([
  {
    state: "Abia",
    lgas: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikawuno",
      "Ikwuano",
      "Isiala-Ngwa North",
      "Isiala-Ngwa South",
      "Isuikwuato",
      "Umu Nneochi",
      "Obi Ngwa",
      "Obioma Ngwa",
      "Ohafia",
      "Ohaozara",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa West",
      "Ukwa East",
      "Umuahia North",
      "Umuahia South",
    ],
  },
  {
    state: "Adamawa",
    lgas: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi-North",
      "Mubi-South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South",
    ],
  },
  {
    state: "Akwa Ibom",
    lgas: [
      "Abak",
      "Eastern-Obolo",
      "Eket",
      "Esit-Eket",
      "Essien-Udim",
      "Etim-Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo-Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot-Abasi",
      "Ikot-Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot-Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanafun",
      "Urue-Offong/Oruko",
      "Uruan",
      "Uyo",
    ],
  },
  {
    state: "Anambra",
    lgas: [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili-North",
      "Idemili-South",
      "Ihiala",
      "Njikoka",
      "Nnewi-North",
      "Nnewi-South",
      "Ogbaru",
      "Onitsha-North",
      "Onitsha-South",
      "Orumba-North",
      "Orumba-South",
    ],
  },
  {
    state: "Bauchi",
    lgas: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas\/Gadau",
      "Jama'Are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa-Balewa",
      "Toro",
      "Warji",
      "Zaki",
    ],
  },
  {
    state: "Benue",
    lgas: [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer-East",
      "Gwer-West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Otukpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya",
    ],
  },
  {
    state: "Borno",
    lgas: [
      "Abadam",
      "Askira-Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala\/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya-Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani",
    ],
  },
  {
    state: "Bayelsa",
    lgas: [
      "Brass",
      "Ekeremor",
      "Kolokuma\/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern-Ijaw",
      "Yenagoa",
    ],
  },
  {
    state: "Cross River",
    lgas: [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar-Municipal",
      "Calabar-South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakurr",
      "Yala",
    ],
  },
  {
    state: "Delta",
    lgas: [
      "Aniocha North",
      "Aniocha-North",
      "Aniocha-South",
      "Bomadi",
      "Burutu",
      "Ethiope-East",
      "Ethiope-West",
      "Ika-North-East",
      "Ika-South",
      "Isoko-North",
      "Isoko-South",
      "Ndokwa-East",
      "Ndokwa-West",
      "Okpe",
      "Oshimili-North",
      "Oshimili-South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli-North",
      "Ughelli-South",
      "Ukwuani",
      "Uvwie",
      "Warri South-West",
      "Warri North",
      "Warri South",
    ],
  },
  {
    state: "Ebonyi",
    lgas: [
      "Abakaliki",
      "Afikpo-North",
      "Afikpo South (Edda)",
      "Ebonyi",
      "Ezza-North",
      "Ezza-South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Ohaukwu",
      "Onicha",
    ],
  },
  {
    state: "Edo",
    lgas: [
      "Akoko Edo",
      "Egor",
      "Esan-Central",
      "Esan-North-East",
      "Esan-South-East",
      "Esan-West",
      "Etsako-Central",
      "Etsako-East",
      "Etsako-West",
      "Igueben",
      "Ikpoba-Okha",
      "Oredo",
      "Orhionmwon",
      "Ovia-North-East",
      "Ovia-South-West",
      "Owan East",
      "Owan-West",
      "Uhunmwonde",
    ],
  },
  {
    state: "Ekiti",
    lgas: [
      "Ado-Ekiti",
      "Efon",
      "Ekiti-East",
      "Ekiti-South-West",
      "Ekiti-West",
      "Emure",
      "Gbonyin",
      "Ido-Osi",
      "Ijero",
      "Ikere",
      "Ikole",
      "Ilejemeje",
      "Irepodun\/Ifelodun",
      "Ise-Orun",
      "Moba",
      "Oye",
    ],
  },
  {
    state: "Enugu",
    lgas: [
      "Aninri",
      "Awgu",
      "Enugu-East",
      "Enugu-North",
      "Enugu-South",
      "Ezeagu",
      "Igbo-Etiti",
      "Igbo-Eze-North",
      "Igbo-Eze-South",
      "Isi-Uzo",
      "Nkanu-East",
      "Nkanu-West",
      "Nsukka",
      "Oji-River",
      "Udenu",
      "Udi",
      "Uzo-Uwani",
    ],
  },
  {
    state: "Federal Capital Territory",
    lgas: ["Abuja", "Kwali", "Kuje", "Gwagwalada", "Bwari", "Abaji"],
  },
  {
    state: "Gombe",
    lgas: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu\/Deba",
    ],
  },
  {
    state: "Imo",
    lgas: [
      "Aboh-Mbaise",
      "Ahiazu-Mbaise",
      "Ehime-Mbano",
      "Ezinihitte",
      "Ideato-North",
      "Ideato-South",
      "Ihitte\/Uboma",
      "Ikeduru",
      "Isiala-Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor-Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji-Egbema",
      "Okigwe",
      "Onuimo",
      "Orlu",
      "Orsu",
      "Oru-East",
      "Oru-West",
      "Owerri-Municipal",
      "Owerri-North",
      "Owerri-West",
    ],
  },
  {
    state: "Jigawa",
    lgas: [
      "Auyo",
      "Babura",
      "Biriniwa",
      "Birnin-Kudu",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin-Hausa",
      "Kaugama",
      "Kazaure",
      "Kiri kasama",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Ringim",
      "Roni",
      "Sule-Tankarkar",
      "Taura",
      "Yankwashi",
    ],
  },
  {
    state: "Kebbi",
    lgas: [
      "Aleiro",
      "Arewa-Dandi",
      "Argungu",
      "Augie",
      "Bagudo",
      "Birnin-Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko-Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu/Danko",
      "Yauri",
      "Zuru",
    ],
  },
  {
    state: "Kaduna",
    lgas: [
      "Birnin-Gwari",
      "Chikun",
      "Giwa",
      "Igabi",
      "Ikara",
      "Jaba",
      "Jema'A",
      "Kachia",
      "Kaduna-North",
      "Kaduna-South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon-Gari",
      "Sanga",
      "Soba",
      "Zangon-Kataf",
      "Zaria",
    ],
  },
  {
    state: "Kano",
    lgas: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin-Kudu",
      "Dawakin-Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun-Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano-Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin-Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takai",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun-Wada",
      "Ungogo",
      "Warawa",
      "Wudil",
    ],
  },
  {
    state: "Kogi",
    lgas: [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela-Odolu",
      "Ijumu",
      "Kabba\/Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro",
      "Ofu",
      "Ogori\/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Oyi",
      "Yagba-East",
      "Yagba-West",
    ],
  },
  {
    state: "Katsina",
    lgas: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dan-Musa",
      "Dandume",
      "Danja",
      "Daura",
      "Dutsi",
      "Dutsin-Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai-Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango",
    ],
  },
  {
    state: "Kwara",
    lgas: [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti (Araromi/Opin)",
      "Ilorin-East",
      "Ilorin-South",
      "Ilorin-West",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke-Ero",
      "Oyun",
      "Pategi",
    ],
  },
  {
    state: "Lagos",
    lgas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos-Island",
      "Lagos-Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere",
      "Yewa-South",
    ],
  },
  {
    state: "Nasarawa",
    lgas: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Kokona",
      "Lafia",
      "Nasarawa",
      "Nasarawa-Eggon",
      "Obi",
      "Wamba",
      "Toto",
    ],
  },
  {
    state: "Niger",
    lgas: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Magama",
      "Mariga",
      "Mashegu",
      "Mokwa",
      "Moya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi",
    ],
  },
  {
    state: "Ogun",
    lgas: [
      "Abeokuta-North",
      "Abeokuta-South",
      "Ado-Odo\/Ota",
      "Ewekoro",
      "Ifo",
      "Ijebu-East",
      "Ijebu-North",
      "Ijebu-North-East",
      "Ijebu-Ode",
      "Ikenne",
      "Imeko-Afon",
      "Ipokia",
      "Obafemi-Owode",
      "Odeda",
      "Odogbolu",
      "Ogun-Waterside",
      "Remo-North",
      "Shagamu",
      "Yewa North",
    ],
  },
  {
    state: "Ondo",
    lgas: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-West",
      "Akoko South-East",
      "Akure-North",
      "Akure-South",
      "Ese-Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Ile-Oluji-Okeigbo",
      "Irele",
      "Odigbo",
      "Okitipupa",
      "Ondo West",
      "Ondo-East",
      "Ose",
      "Owo",
    ],
  },
  {
    state: "Osun",
    lgas: [
      "Atakumosa West",
      "Atakumosa East",
      "Ayedaade",
      "Ayedire",
      "Boluwaduro",
      "Boripe",
      "Ede South",
      "Ede North",
      "Egbedore",
      "Ejigbo",
      "Ife North",
      "Ife South",
      "Ife-Central",
      "Ife-East",
      "Ifelodun",
      "Ila",
      "Ilesa-East",
      "Ilesa-West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo-Otin",
      "Ola Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo",
    ],
  },
  {
    state: "Oyo",
    lgas: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibadan South-West",
      "Ibarapa-Central",
      "Ibarapa-East",
      "Ibarapa-North",
      "Ido",
      "Ifedayo",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Ogo-Oluwa",
      "Ogbomosho-North",
      "Ogbomosho-South",
      "Olorunsogo",
      "Oluyole",
      "Ona-Ara",
      "Orelope",
      "Ori-Ire",
      "Oyo-West",
      "Oyo-East",
      "Saki-East",
      "Saki-West",
      "Surulere",
    ],
  },
  {
    state: "Plateau",
    lgas: [
      "Barkin-Ladi",
      "Bassa",
      "Bokkos",
      "Jos-East",
      "Jos-North",
      "Jos-South",
      "Kanam",
      "Kanke",
      "Langtang-North",
      "Langtang-South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase",
    ],
  },
  {
    state: "Rivers",
    lgas: [
      "Abua\/Odual",
      "Ahoada-East",
      "Ahoada-West",
      "Akuku Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Eleme",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obio\/Akpor",
      "Ogba-Egbema-Ndoni",
      "Ogba\/Egbema\/Ndoni",
      "Ogu\/Bolo",
      "Okrika",
      "Omuma",
      "Opobo\/Nkoro",
      "Oyigbo",
      "Port-Harcourt",
      "Tai",
    ],
  },
  {
    state: "Sokoto",
    lgas: [
      "Binji",
      "Bodinga",
      "Dange-Shuni",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto-North",
      "Sokoto-South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
    ],
  },
  {
    state: "Taraba",
    lgas: [
      "Ardo-Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim-Lamido",
      "Kurmi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing",
    ],
  },
  {
    state: "Yobe",
    lgas: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari",
    ],
  },
  {
    state: "Zamfara",
    lgas: [
      "Anka",
      "Bakura",
      "Birnin Magaji/Kiyaw",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Isa",
      "Kaura-Namoda",
      "Kiyawa",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata-Mafara",
      "Tsafe",
      "Zurmi",
    ],
  },
]);

const addExperience = () => {
  form.experience.push({
    jobTitle: "",
    name: "",
    employmentStartDate: "",
    employmentEndDate: "",
    responsibilitiesAndAchievements: "",
    currentlyWorkingHere: false,
  });
};

const removeExperience = (index: number) => {
  form.experience.splice(index, 1);
};

const handleFileChange = (event: any, field: string) => {
  console.log(event.target.files, field);
  form[field] = event.target.files[0];
};

const handleFileDrop = (event: any, field: string) => {
  event.preventDefault();

  form[field] = event.dataTransfer.files[0];
};

const isEmptyObject = (obj: any) => {
  return Object.values(obj).every((value) => !value);
};

const onSubmit = async (e: any) => {
  e.preventDefault();
  const formData = new FormData();
  const data: any = {};

  // Add all fields to formData
  Object.keys(form).forEach((key) => {
    if (
      key === "coverLetterFile" ||
      key === "resumeFile" ||
      key === "certificationFile" ||
      key === "relevantDocument"
    ) {
      // Append file fields
      if (form[key]) {
        formData.append(`files.${key}`, form[key]);
      }
    } else if (
      key === "refereeOne" ||
      key === "refereeTwo" ||
      key === "refereeThree"
    ) {
      // Skip individual referees for now
    } else {
      // Append non-file fields to the data object
      data[key] = form[key];
    }
  });

  // Convert referees into an array and assign to data, excluding empty objects
  const referees = [form.refereeOne, form.refereeTwo, form.refereeThree].filter(
    (referee) => !isEmptyObject(referee)
  );
  if (referees.length > 0) {
    data.referee = referees;
  }
  // Append the data object as a JSON string to formData
  formData.append("data", JSON.stringify(data));

  await dataStore.submitJobApplication(formData as any);
};

const getLastSegment = async (url: string) => {
  const segments = url.split("/");
  const id = segments[segments.length - 1];
  const singleJob = await dataStore.getSingleJob(id);
};
</script>

<template>
  <div class="md:py-20 py-10 w-full">
    <div class="mx-auto xl:px-0 px-4 max-w-[1240px]">
      <div class="md:text-left text-center space-y-6 mb-10">
        <h2 class="text-3xl font-bold">About the Bank</h2>
        <p class="text-gray-600">
          At Novus MFB, we are committed to providing innovative financial
          solutions tailored to meet the diverse needs of our customers. With a
          focus on empowering individuals and businesses, we strive to foster
          financial inclusion and drive economic growth within our communities.
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="space-y-10">
        <div>
          <h2 class="text-2xl font-bold mb-4">Personal Information</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="full-name"> Full Name </label>
              <input
                v-model="form.fullName"
                class="form-input"
                id="full-name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div class="">
              <label class="form-label" for="email-address">
                Email Address
              </label>
              <input
                v-model="form.email"
                class="form-input"
                id="email-address"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div class="">
              <label class="form-label" for="phone-no"> Phone No </label>
              <input
                v-model="form.phoneNumber"
                class="form-input"
                id="phone-no"
                type="tel"
                placeholder="Phone No"
              />
            </div>
            <div class="">
              <label class="form-label" for="alt-phone-no">
                Alt Phone No
              </label>
              <input
                v-model="form.altPhoneNumber"
                class="form-input"
                id="alt-phone-no"
                type="tel"
                placeholder="Alt Phone No"
              />
            </div>
            <div class="">
              <label class="form-label" for="gender"> Gender </label>
              <select v-model="form.gender" class="form-input" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="marital-status">
                Marital Status
              </label>
              <select
                v-model="form.maritalStatus"
                class="form-input"
                id="marital-status"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="home-address">
                Home Address
              </label>
              <input
                v-model="form.address"
                class="form-input"
                id="home-address"
                type="text"
                placeholder="Home Address"
              />
            </div>
            <div class="">
              <label class="form-label" for="nationality"> Nationality </label>
              <select
                v-model="form.nationality"
                class="form-input"
                id="nationality"
              >
                <option value="nigerian">Nigerian</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="state-of-residence">
                State of Residence
              </label>
              <select
                v-model="form.stateOfResidence"
                class="form-input"
                id="state-of-residence"
              >
                <option
                  v-for="(state, index) in states"
                  :key="index"
                  :value="state.state"
                >
                  {{ state.state }}
                </option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="lga"> LGA </label>
              <select v-model="form.lga" class="form-input" id="lga">
                <template v-if="lgas && lgas.length">
                  <option
                    v-for="(lga, index) in lgas"
                    :key="index"
                    :value="lga"
                  >
                    {{ lga }}
                  </option>
                </template>
              </select>
            </div>
            <div>
              <label for="deadline" class="form-label">Date Of Birth</label>
              <input
                v-model="form.dob"
                type="text"
                name="deadline"
                id="deadline"
                placeholder="Pick a date"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                class="form-input"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Educational Background</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="highest-level-of-education">
                Highest level of Education attained
              </label>
              <select
                v-model="form.educationLevel"
                class="form-input"
                id="highest-level-of-education"
              >
                <option value="">Highest level of Education attained</option>
                <option value="secondary">Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="name-of-institution">
                Name of Institution
              </label>
              <input
                v-model="form.nameOfInstitution"
                class="form-input"
                id="name-of-institution"
                type="text"
                placeholder="Name of Institution"
              />
            </div>
            <div class="">
              <label class="form-label" for="field-of-study">
                Field of Study/Major
              </label>
              <select
                v-model="form.fieldOfStudy"
                class="form-input"
                id="field-of-study"
              >
                <option value="">Field of Study/Major</option>
                <option value="secondary">Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="degree-certificate">
                Degree/Certificate Obtained
              </label>
              <input
                v-model="form.degreeObtained"
                class="form-input"
                id="degree-certificate"
                type="text"
                placeholder="Degree/Certificate Obtained"
              />
            </div>
            <div class="">
              <label class="form-label" for="year-of-graduation">
                Year of Graduation
              </label>
              <select
                v-model="form.yearOfGraduation"
                class="form-input"
                id="year-of-graduation"
              >
                <option value="">Year of Graduation</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
            <button
              type="button"
              @click="addExperience"
              class="bg-secondary flex items-center gap-3 px-4 py-3 text-white"
            >
              <Icon name="mdi:plus" />
              <p>Add Experience</p>
            </button>
          </div>
          <div
            v-for="(experience, index) in form.experience"
            :key="index"
            class="grid md:grid-cols-2 gap-6"
          >
            <div class="">
              <label class="form-label" for="current-previous-employer">
                Current/Previous Employer
              </label>
              <input
                v-model="experience.name"
                class="form-input"
                id="current-previous-employer"
                type="text"
                placeholder="Current/Previous Employer"
              />
            </div>
            <div class="">
              <label class="form-label" for="job-title"> Job Title </label>
              <input
                v-model="experience.jobTitle"
                class="form-input"
                id="job-title"
                type="text"
                placeholder="Job Title"
              />
            </div>
            <div class="">
              <label class="form-label" for="employment-duration-start">
                Employment duration (Start Date)
              </label>
              <input
                v-model="experience.employmentStartDate"
                class="form-input"
                id="employment-duration-start"
                type="date"
                placeholder="Employment duration (Start Date)"
              />
            </div>
            <div class="">
              <label class="form-label" for="employment-duration-end">
                Employment duration (End Date)
              </label>
              <input
                v-model="experience.employmentEndDate"
                class="form-input"
                id="employment-duration-end"
                type="date"
                placeholder="Employment duration (End Date)"
                :disabled="experience.currentlyWorkingHere"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                v-model="experience.currentlyWorkingHere"
                class=""
                id="currently-working-here"
                type="checkbox"
              />
              <label class="" for="currently-working-here">
                Currently working here
              </label>
            </div>
            <div class="flex justify-end">
              <Icon
                class=""
                @click="removeExperience(index)"
                name="mdi:minus-circle-outline"
                size="20"
              />
            </div>
            <div class="md:col-span-2">
              <label class="form-label" for="responsibilities-and-achievements">
                Responsibilities and Achievements
              </label>
              <textarea
                v-model="experience.responsibilitiesAndAchievements"
                rows="5"
                class="form-input"
                id="responsibilities-and-achievements"
                placeholder="Responsibilities and Achievements"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Skills and Qualifications</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="relevant-skills">
                Relevant Skills (e.g., Technical, Soft Skills)
              </label>
              <input
                v-model="form.relevantSkills"
                class="form-input"
                id="relevant-skills"
                type="text"
                placeholder="Relevant Skills (e.g., Technical, Soft Skills)"
              />
            </div>
            <div class="">
              <label class="form-label" for="professional-certifications">
                Professional Certifications
              </label>
              <input
                v-model="form.proffessionalCertName"
                class="form-input"
                id="professional-certifications"
                type="text"
                placeholder="Professional Certifications"
              />
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4">References</h2>
        <p class="text-gray-600 mb-4">
          Please note that these referees stand in as your guarantors and may be
          contacted when necessary.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee One (1)</h3>
            <div class="space-y-5">
              <input
                v-model="form.refereeOne.name"
                class="form-input"
                id="referee-one-name"
                type="text"
                placeholder="Name of Referee"
              />
              <input
                v-model="form.refereeOne.relationship"
                class="form-input"
                id="referee-one-position"
                type="text"
                placeholder="Position/Relationship to Applicant"
              />
              <input
                v-model="form.refereeOne.phoneNo"
                class="form-input"
                id="referee-one-phone"
                type="tel"
                placeholder="Phone No"
              />
              <input
                v-model="form.refereeOne.email"
                class="form-input"
                id="referee-one-email"
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee Two (2)</h3>
            <div class="space-y-5">
              <input
                v-model="form.refereeTwo.name"
                class="form-input"
                id="referee-two-name"
                type="text"
                placeholder="Name of Referee"
              />
              <input
                v-model="form.refereeTwo.position"
                class="form-input"
                id="referee-two-position"
                type="text"
                placeholder="Position/Relationship to Applicant"
              />
              <input
                v-model="form.refereeTwo.phone"
                class="form-input"
                id="referee-two-phone"
                type="tel"
                placeholder="Phone No"
              />
              <input
                v-model="form.refereeTwo.email"
                class="form-input"
                id="referee-two-email"
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee Three (3)</h3>
            <div class="space-y-5">
              <input
                v-model="form.refereeThree.name"
                class="form-input"
                id="referee-three-name"
                type="text"
                placeholder="Name of Referee"
              />
              <input
                v-model="form.refereeThree.position"
                class="form-input"
                id="referee-three-position"
                type="text"
                placeholder="Position/Relationship to Applicant"
              />
              <input
                v-model="form.refereeThree.phone"
                class="form-input"
                id="referee-three-phone"
                type="tel"
                placeholder="Phone No"
              />
              <input
                v-model="form.refereeThree.email"
                class="form-input"
                id="referee-three-email"
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <!-- <div
            class="border-2 border-dashed flex items-center justify-center md:py-0 py-5 cursor-pointer hover:bg-[#F7F8F9] transition-all duration-300 ease-in-out">
            <div class="flex md:flex-col flex-row items-center md:space-x-0 space-x-3 md:space-y-3">
              <span class="md:text-3xl md:border md:h-10 md:w-10 md:rounded-full md:flex items-center justify-center">
                <Icon name="material-symbols:add" />
              </span>
              <span>
                Add Referee
              </span>
            </div>
          </div> -->
        </div>
        <h2 class="text-2xl font-bold mb-4">Attachments</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="">
            <label
              class="form-label block text-sm font-medium text-gray-700"
              for="cover-letter"
              >Cover Letter</label
            >
            <div
              @dragover.prevent
              @dragenter.prevent
              @drop.prevent="handleFileDrop($event, 'coverLetterFile')"
              class="mt-1 flex justify-center px-6 border border-gray-300 border-dashed rounded-md cursor-pointer py-20"
            >
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label
                    for="cover-letter-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Drag and drop or <u>Upload</u></span>
                    <input
                      id="cover-letter-upload"
                      name="cover-letter-upload"
                      type="file"
                      class="sr-only"
                      @change="handleFileChange($event, 'coverLetterFile')"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label
              class="form-label block text-sm font-medium text-gray-700"
              for="resume-cv"
              >Resume/CV</label
            >
            <div
              @dragover.prevent
              @dragenter.prevent
              @drop.prevent="handleFileDrop($event, 'resumeFile')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20"
            >
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label
                    for="resume-cv-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Drag and drop or <u>Upload</u></span>
                    <input
                      id="resume-cv-upload"
                      name="resume-cv-upload"
                      type="file"
                      class="sr-only"
                      @change="handleFileChange($event, 'resumeFile')"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label
              class="form-label block text-sm font-medium text-gray-700"
              for="professional-certification"
              >Professional Certification (if applicable)</label
            >
            <div
              @dragover.prevent
              @dragenter.prevent
              @drop.prevent="handleFileDrop($event, 'certificationFile')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20"
            >
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label
                    for="professional-certification-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Drag and drop or <u>Upload</u></span>
                    <input
                      id="professional-certification-upload"
                      name="professional-certification-upload"
                      type="file"
                      class="sr-only"
                      @change="handleFileChange($event, 'certificationFile')"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label
              class="form-label block text-sm font-medium text-gray-700"
              for="other-relevant-documents"
              >Any Other Relevant Documents</label
            >
            <div
              @dragover.prevent
              @dragenter.prevent
              @drop.prevent="handleFileDrop($event, 'relevantDocument')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20"
            >
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label
                    for="other-relevant-documents-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Drag and drop or <u>Upload</u></span>
                    <input
                      id="other-relevant-documents-upload"
                      name="other-relevant-documents-upload"
                      type="file"
                      class="sr-only"
                      @change="handleFileChange($event, 'relevantDocument')"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex md:flex-row flex-col gap-10 md:items-center justify-between bg-[#ECF4F9] md:px-16 px-5 py-6 mt-6"
        >
          <div class="flex items-center space-x-2">
            <img
              src="/img/applicationFormImg.jpeg"
              class="md:w-20 md:h-20 border-4 border-white md:rounded-lg w-14 h-14 rounded-full"
            />
            <div>
              <h3 class="font-bold">Application Form</h3>
              <div
                class="flex items-center md:space-x-3 space-x-1 text-sm text-gray-600"
              >
                <p class="">Makurdi Benue State</p>
                <span class="w-2 h-2 rounded-full bg-gray-200"></span>
                <p class="">Grade Band: <span class="text-black">MT</span></p>
                <span class="w-2 h-2 rounded-full bg-gray-200"></span>
                <p class="">
                  Age Limit: <span class="text-black">Thirty (30)</span>
                </p>
              </div>
            </div>
          </div>

          <button
            class="bg-secondary text-white rounded md:py-6 py-4 px-12 hover:bg-white hover:text-secondary transition-all duration-300 ease-in-out whitespace-nowrap md:w-auto w-full"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
