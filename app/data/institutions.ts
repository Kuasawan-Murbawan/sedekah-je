import { Institution } from "../types/institutions";

export const institutions: Institution[] = [
  {
    id: 1,
    name: "Masjid Negara",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-negara.png",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001295465204939953034585802MY5913MASJID NEGARA6002MY627303251704936237869008996045430052017072988178750084448071617049359619050076304FD9C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 2,
    name: "Masjid Al Ghufran",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-al-ghufran.png",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN162217666262104305204866153034585802MY5915MASJIDALGHUFRAN6011KUALALUMPUR6304AC7A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 3,
    name: "Masjid Al Muhtadin",
    category: "mosque",
    location: "Selangor",
    image: "/masjid/masjid-al-muhtadin.png",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR124979103100000000000520400005303458540500.005802MY5918MASJID AL MUHTADIN6008SELANGOR630414E7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 4,
    name: "Masjid Ar Rahman",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-ar-rahman.png",
    qrContent: "https://qr.tngdigital.com.my/m/281011056697947085062292043",
    supportedPayment: ["tng"],
  },
  {
    id: 5,
    name: "Masjid Lama Kampung Sura",
    category: "mosque",
    location: "Terengganu",
    image: "/masjid/masjid-lama-kampung-sura-mlks.png",
    // QR not clear
  },
  {
    id: 6,
    name: "Surau As Salam Seksyen 4",
    category: "surau",
    location: "Selangor",
    image: "/surau/surau-as-salam-seksyen-4.png",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2119996031000000000005204729953034585802MY5925SURAU AS SALAM SEKSYEN 4 6008SELANGOR6304B9C3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 7,
    name: "Masjid Sri Sendayan",
    category: "mosque",
    location: "Negeri Sembilan",
    image: "/masjid/masjid-sri-sendayan.png",
    qrContent:
      "00020201021126580014A000000615000101065641600226125510400006590RHBQR0028055204739953034585802MY5919MASJID SRI SENDAYAN6002MY61057195062240309ROA0030360707mss20198264037ECE3BEE396FD9E7293AE400C6B61FF31B756E8D308F44D79C9CA7FA859E8763047E35",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 8,
    name: "Masjid Putra Heights",
    category: "mosque",
    location: "Selangor",
    image: "/masjid/masjid-putra-heights.png",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR117311803100000000000520400005303458540500.005802MY5920MASJID PUTRA HEIGHTS6008SELANGOR6304C677",
    supportedPayment: ["duitnow"],
  },
  {
    id: 9,
    name: "Masjid Azzubair Ibnul Awwam",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-azzubair-ibnul-awwam.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000952735204866153034585802MY5925MASJID AZZUBAIR IBNUL AWW6002MY6273032516766078843470026415087370520167767757301000106090716167660762452600963040358",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 10,
    name: "Masjid Lestari Putra",
    category: "mosque",
    location: "Selangor",
    image: "/masjid/masjid-lestari-putra.jpeg",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR125821103100000000000520400005303458540500.005802MY5920MASJID LESTARI PUTRA6008SELANGOR630496E4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 11,
    name: "Masjid Bandar Saujana Putra",
    category: "mosque",
    location: "Selangor",
    image: "/masjid/masjid-bandar-saujana-putra.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001297425204866153034585802MY5925MASJID BANDAR SAUJANA PUT6002MY6273032517055541622240053677717220520170555416742900110190716170555380608800463040DF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 12,
    name: "Masjid Al Ansar",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-al-ansar.jpeg",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2010245031000000000005204000053034585802MY5915MASJID AL ANSAR6015WP KUALA LUMPUR6304F6A0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 13,
    name: "Masjid Tuminah Hamidi",
    category: "mosque",
    location: "Perak",
    image: "/masjid/masjid-tuminah-hamidi.jpeg",
    qrContent:
      "00020201021126900014A0000006150001010642070902240824441100029031J97442000315BSN Merchant QR0411011255099085204000053034585802MY5921MASJID TUMINAH HAMIDI6011BAGAN DATOH6105361006304E5D7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 14,
    name: "Rumah Bakti Nur Ain",
    category: "others",
    location: "Selangor",
    image: "/lain/rumah-bakti-nur-ain.jpeg",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1959819031000000000005204000053034585802MY5919RUMAH BAKTI NUR AIN6008SELANGOR630416E7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 15,
    name: "Masjid Jamek Al Manar",
    category: "mosque",
    location: "Johor",
    image: "/masjid/masjid-jamek-al-manar.jpeg",
    // QR not clear
  },
  {
    id: 16,
    name: "Masjid Tengku Ampuan Afzan",
    category: "mosque",
    location: "Pahang",
    image: "/masjid/masjid-tengku-ampuan-afzan.jpeg",
    // QR not clear
  },
  {
    id: 17,
    name: "Masjid UTM KL",
    category: "mosque",
    location: "Kuala Lumpur",
    image: "/masjid/masjid-utmkl.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000721595204866153034585802MY5912MASJID UTMKL6002MY62730325165579551440400458665376805201655795602599001013207161655794994299008630426C5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 18,
    name: "Surau Al Ikhlasiah",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000225031001921366955204866153034585802MY5918SURAU AL-IKHLASIAH6006AMPANG6105680006304ADB9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 19,
    name: "Masjid Al Mustaqim",
    category: "mosque",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003890311011100924415204866153034585802MY5925MASJID AL MUSTAQIM AMPANG6006AMPANG6105680006304F9D2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 20,
    name: "Surau Al Umm",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000036031001393260725204866153034585802MY5912SURAU AL-UMM6006KAJANG6105430006304CDE7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 21,
    name: "Masjid As Syakirin",
    category: "mosque",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000140031001265703345204866153034585802MY5918MASJID AS SYAKIRIN6007DENGKIL61054380063041627",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 22,
    name: "Surau Damai",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000015103090123369895204866153034585802MY5911SURAU DAMAI6005BANGI610543650630409F3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 23,
    name: "Surau Al Kauthar",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000197031001328608795204866153034585802MY5916SURAU AL-KAUTHAR6015BANDAR BARU BAN6105436506304DDB5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 24,
    name: "Surau Ar Raudhah",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000220031001933151515204866153034585802MY5916SURAU AR-RAUDHAH6006KAJANG6105430006304980F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 25,
    name: "Surau As Sobah",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000292031001739679955204866153034585802MY5914SURAU AL-SOBAH6015BANDAR BARU BAN6105436506304CDF0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 26,
    name: "Masjid Al Azhar Kolej Universiti Islam Selangor",
    category: "mosque",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000277031001337175795204866153034585802MY5915MASJID AL AZHAR6006KAJANG61054300063045B9C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 27,
    name: "Masjid Al Hasanah",
    category: "mosque",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000320031001964433995204866153034585802MY5925MASJID AL-HASANAH BBBANGI6015BANDAR BARU BAN61054365063047E34",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 28,
    name: "Yayasan Darussyifa Bangi",
    category: "others",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000335031001390507915204866153034585802MY5924YAYASAN DARUSSYIFA BANGI6005BANGI61054365063042858",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 29,
    name: "Surau Al Mujahidin",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000378031001292084515204866153034585802MY5918SURAU AL MUJAHIDIN6005BANGI61054365063041927",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 30,
    name: "Tabung Sekolah Rendah Sri Al Amin Bangi",
    category: "others",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000482031001922555695204533153034585802MY5915TABUNG SEK SAAB6006KAJANG6105430006304A92B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 31,
    name: "Surau Al Madani",
    category: "surau",
    location: "Selangor",
    image: "/placeholder.png",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000901031001935048475204866153034585802MY5915SURAU AL MADANI6015BANDAR BARU BAN6105436506304EDA6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 32,
    name: "MASJID JAMEK BANDARAYA KL",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000002031001633145685204866153034585802MY5925MASJID JAMEK BANDARAYA KL6012KUALA LUMPUR6105500506304B927",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 33,
    name: "SURAU KHAIRIAH KG TENGAH",
    image: "",
    category: "surau",
    location: "SELANGOR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003022031001938169345204866153034585802MY5924SURAU KHAIRIAH KG TENGAH6008SELANGOR61055310063048223",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 34,
    name: "MADRASAH CHERAS PERDANA",
    image: "",
    category: "mosque",
    location: "CHERAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000710031001334739915204866153034585802MY5923MADRASAH CHERAS PERDANA6006CHERAS610543200630477B7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 35,
    name: "SR AL HIJRAH PPR PEKAN BT",
    image: "",
    category: "mosque",
    location: "JINJANG UTARA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000187031001934644905204866153034585802MY5925SR AL HIJRAH PPR PEKAN BT6013JINJANG UTARA61055200063042A74",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 36,
    name: "SUMBANGAN IHYA RAMADHAN",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000949031001724397055204866153034585802MY5923SUMBANGAN IHYA RAMADHAN6012KUALA LUMPUR6105506046304C09F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 37,
    name: "MASJID AL-MUQARRABIN BTS",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000094031001966815035204866153034585802MY5924MASJID AL-MUQARRABIN BTS6012KUALA LUMPUR61055700063044569",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 38,
    name: "MASJID AL MUHSININ",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000248031001969154145204866153034585802MY5918MASJID AL MUHSININ6012KUALA LUMPUR610558100630475BB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 39,
    name: "SEKOLAH AGAMA AL FATEH",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000859031001360657415204829953034585802MY5922SEKOLAH AGAMA AL FATEH6012KUALA LUMPUR61055700063041F6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 40,
    name: "MASJID AL-HIDAYAH TM",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000040031001938121605204866153034585802MY5920MASJID AL-HIDAYAH TM6012KUALA LUMPUR6105531006304AB74",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 41,
    name: "MASJID AL-ANSAR T.KERAMAT",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000331031001938554835204866153034585802MY5925MASJID AL-ANSAR T.KERAMAT6012KUALA LUMPUR61055420063045371",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 42,
    name: "M.TAHFIZ AL-MADRASATUL",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000352031001234333335204866153034585802MY5922M.TAHFIZ AL-MADRASATUL6012KUALA LUMPUR6105533006304ECAE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 43,
    name: "MUSOLLA SRI BAIDURI",
    image: "",
    category: "mosque",
    location: "AMPANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000477031001935065925204866153034585802MY5919MUSOLLA SRI BAIDURI6006AMPANG6105680006304F1D1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 44,
    name: "MADRASAH ADDINNIAH",
    image: "",
    category: "mosque",
    location: "AMPANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003426031001739478275204866153034585802MY5918MADRASAH ADDINNIAH6006AMPANG610568000630417D7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 45,
    name: "MASJID AL MUSTAQIM AMPANG",
    image: "",
    category: "mosque",
    location: "AMPANG",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003890311011100924415204866153034585802MY5925MASJID AL MUSTAQIM AMPANG6006AMPANG6105680006304F9D2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 46,
    name: "SURAU AL-KAUTHAR",
    image: "",
    category: "surau",
    location: "BANDAR BARU BAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000197031001328608795204866153034585802MY5916SURAU AL-KAUTHAR6015BANDAR BARU BAN6105436506304DDB5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 47,
    name: "MASJID AL AZHAR",
    image: "",
    category: "mosque",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000277031001337175795204866153034585802MY5915MASJID AL AZHAR6006KAJANG61054300063045B9C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 48,
    name: "MASJID AL-HASANAH BBBANGI",
    image: "",
    category: "mosque",
    location: "BANDAR BARU BAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000320031001964433995204866153034585802MY5925MASJID AL-HASANAH BBBANGI6015BANDAR BARU BAN61054365063047E34",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 49,
    name: "SURAU AL MADANI",
    image: "",
    category: "surau",
    location: "BANDAR BARU BAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000901031001935048475204866153034585802MY5915SURAU AL MADANI6015BANDAR BARU BAN6105436506304EDA6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 50,
    name: "MASJID SUNGAI RAMAL LUAR",
    image: "",
    category: "mosque",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003043031001926627135204866153034585802MY5924MASJID SUNGAI RAMAL LUAR6006KAJANG61054300063041B03",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 51,
    name: "MASJID JAMEK KG NAKHODA",
    image: "",
    category: "mosque",
    location: "BATU CAVES",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000202031001928656985204866153034585802MY5923MASJID JAMEK KG NAKHODA6010BATU CAVES6105681006304EFB3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 52,
    name: "TBG PMBNGUNN M.JAMIATUS",
    image: "",
    category: "mosque",
    location: "BATU CAVES",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000369031001965018735204866153034585802MY5923TBG PMBNGUNN M.JAMIATUS6010BATU CAVES610568100630465F6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 53,
    name: "SURAU AL KHAIRIYAH",
    image: "",
    category: "surau",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004223031001634135315204866153034585802MY5918SURAU AL KHAIRIYAH6012KUALA LUMPUR61055200063045986",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 54,
    name: "SURAU AL-EHSAN BT CAVES",
    image: "",
    category: "surau",
    location: "BATU CAVES",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004360031001926888395204866153034585802MY5923SURAU AL-EHSAN BT CAVES6010BATU CAVES610568100630475C5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 55,
    name: "KHAIRAT KEMATIAN KEMSAH",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004490031001352013965204866153034585802MY5923KHAIRAT KEMATIAN KEMSAH6012KUALA LUMPUR61055110063047457",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 56,
    name: "SURAU AL-BUKHARY LMN GLEN",
    image: "",
    category: "surau",
    location: "SHAH ALAM",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000934031001929362865204866153034585802MY5925SURAU AL-BUKHARY LMN GLEN6009SHAH ALAM6105401506304D00F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 57,
    name: "SURAU AT-TAQWA",
    image: "",
    category: "surau",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000317031001362224245204866153034585802MY5914SURAU AT-TAQWA6006KAJANG61054300063044565",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 58,
    name: "SURAU DESA SRI JENARIS",
    image: "",
    category: "surau",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000481031001697534675204866153034585802MY5922SURAU DESA SRI JENARIS6006KAJANG6105430006304ADC4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 59,
    name: "MASJID AL AMIN SG TEKALI",
    image: "",
    category: "mosque",
    location: "HULU LANGAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000783031001339420445204866153034585802MY5924MASJID AL AMIN SG TEKALI6011HULU LANGAT61054310063049DE7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 60,
    name: "MASJID AL-EHSAN SMAPK",
    image: "",
    category: "mosque",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004026031001390537045204866153034585802MY5921MASJID AL-EHSAN SMAPK6006KAJANG610543000630499A7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 61,
    name: "PEMBINAAN MASJID SG SERAI",
    image: "",
    category: "mosque",
    location: "HULU LANGAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004493031001938642125204866153034585802MY5925PEMBINAAN MASJID SG SERAI6011HULU LANGAT6105431006304D3D1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 62,
    name: "SURAU AL ITTIHADIYYAH",
    image: "",
    category: "surau",
    location: "SHAH ALAM",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000283031001238746885204866153034585802MY5921SURAU AL ITTIHADIYYAH6009SHAH ALAM6105400006304D360",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 63,
    name: "MASJID AL-IKHLAS SEK. 13",
    image: "",
    category: "mosque",
    location: "SHAH ALAM",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000003031001930793065204866153034585802MY5924MASJID AL-IKHLAS SEK. 136009SHAH ALAM6105400006304B186",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 64,
    name: "MASJID KOTA DAMANSARA",
    image: "",
    category: "mosque",
    location: "PETALING JAYA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003090031001381165705204866153034585802MY5921MASJID KOTA DAMANSARA6013PETALING JAYA61054781063042F93",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 65,
    name: "SURAU AT TAQWA BBSA",
    image: "",
    category: "surau",
    location: "SHAH ALAM",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004296031001238871265204866153034585802MY5919SURAU AT TAQWA BBSA6009SHAH ALAM6105401706304951C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 66,
    name: "SURAU ALEHSANIAH AHMADIAH",
    image: "",
    category: "surau",
    location: "PETALING JAYA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000242031001938100885204866153034585802MY5925SURAU ALEHSANIAH AHMADIAH6013PETALING JAYA6105473016304495B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 67,
    name: "SURAU AL-AZHAR SAMSML",
    image: "",
    category: "surau",
    location: "KAJANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000353031001239414765204866153034585802MY5921SURAU AL-AZHAR SAMSML6006KAJANG610543000630480DC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 68,
    name: "SURAU AL MUTTAQIN",
    image: "",
    category: "surau",
    location: "PUTRAJAYA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000510031001663457785204866153034585802MY5917SURAU AL MUTTAQIN6009PUTRAJAYA61056220063046803",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 69,
    name: "SURAU SK SULTAN ALAM SHAH",
    image: "",
    category: "surau",
    location: "PUTRAJAYA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000838031001922427865204866153034585802MY5925SURAU SK SULTAN ALAM SHAH6009PUTRAJAYA6105625206304B2F8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 70,
    name: "SURAU AL-HIDAYAH",
    image: "",
    category: "surau",
    location: "RAWANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000456031001734000255204866153034585802MY5916SURAU AL-HIDAYAH6006RAWANG6105480006304D169",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 71,
    name: "MASJID JUMHURIAH",
    image: "",
    category: "mosque",
    location: "PUCHONG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000170031001334155805204866153034585802MY5916MASJID JUMHURIAH6007PUCHONG6105460006304355D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 72,
    name: "IIUM GOMBAK MOSQUE",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000362031001320062355204866153034585802MY5918IIUM GOMBAK MOSQUE6012KUALA LUMPUR6105531006304051C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 73,
    name: "JK PBN MASJID AT-TAQWA",
    image: "",
    category: "mosque",
    location: "GUA MUSANG KEL",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000086031001298321775204866153034585802MY5922JK PBN MASJID AT-TAQWA6014GUA MUSANG KEL61051830063045A99",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 74,
    name: "MJD SULTAN AHMAD PALOH 02",
    image: "",
    category: "mosque",
    location: "GUA MUSANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000098031001970076815204866153034585802MY5925MJD SULTAN AHMAD PALOH 026010GUA MUSANG6105183006304CB72",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 75,
    name: "MJD MUKIM LIMAU KASTURI",
    image: "",
    category: "mosque",
    location: "GUA MUSANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000101031001481951575204866153034585802MY5923MJD MUKIM LIMAU KASTURI6010GUA MUSANG61051830063042CE8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 76,
    name: "MJD MUKIM LUBOK BONGOR",
    image: "",
    category: "mosque",
    location: "KUALA BALAH",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002800311011199774245204866153034585802MY5922MJD MUKIM LUBOK BONGOR6011KUALA BALAH61051761063043597",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 77,
    name: "MASJID LEGEH",
    image: "",
    category: "mosque",
    location: "JELI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000355031001397376305204866153034585802MY5912MASJID LEGEH6004JELI6105177006304C65D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 78,
    name: "MJD AL ABRAR AYER LANAS",
    image: "",
    category: "mosque",
    location: "JELI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000358031001796305805204866153034585802MY5923MJD AL ABRAR AYER LANAS6004JELI61051770063045BBF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 79,
    name: "MASJID MUKIM LAKOTA",
    image: "",
    category: "mosque",
    location: "JELI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000910031001393254865204866153034585802MY5919MASJID MUKIM LAKOTA6004JELI61051760063047660",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 80,
    name: "MASJID MUKIM SENAK",
    image: "",
    category: "mosque",
    location: "BACHOK KELANTAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000080031001994460255204866153034585802MY5918MASJID MUKIM SENAK6015BACHOK KELANTAN6105163206304DD5F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 81,
    name: "MASJID TAMAN DESA ORKID",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000330031001995944775204866153034585802MY5923MASJID TAMAN DESA ORKID6010KOTA BHARU61051610063042EAE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 82,
    name: "MASJID PUSAT ISLAM USM",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000666031001991263075204866153034585802MY5922MASJID PUSAT ISLAM USM6010KOTA BHARU61051615063047F24",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 83,
    name: "TABUNG MJD MUKIM TUNJUNG",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000803031001926323365204866153034585802MY5924TABUNG MJD MUKIM TUNJUNG6010KOTA BHARU61051601063042678",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 84,
    name: "MASJID AL-HIDAYAH TM",
    image: "",
    category: "mosque",
    location: "KUALA LUMPUR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000040031001938121605204866153034585802MY5920MASJID AL-HIDAYAH TM6012KUALA LUMPUR6105531006304AB74",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 85,
    name: "MASJID KARIAH GAJAH MATI",
    image: "",
    category: "mosque",
    location: "MENTAKAB",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000634031001991903055204866153034585802MY5924MASJID KARIAH GAJAH MATI6008MENTAKAB610528400630486D2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 86,
    name: "TB NAIKTARAF MJD IBRAHIMI",
    image: "",
    category: "mosque",
    location: "PASIR PUTEH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000046031001033013605204866153034585802MY5925TB NAIKTARAF MJD IBRAHIMI6011PASIR PUTEH610516800630430C9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 87,
    name: "MASJID AT TAQWA MCHONDONG",
    image: "",
    category: "mosque",
    location: "PULAI CHONDONG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000228031001482637455204866153034585802MY5925MASJID AT TAQWA MCHONDONG6014PULAI CHONDONG6105166006304F459",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 88,
    name: "MASJID MUKIM BUKIT MERBAU",
    image: "",
    category: "mosque",
    location: "SELISING",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002640311011255427655204866153034585802MY5925MASJID MUKIM BUKIT MERBAU6008SELISING61051681063042118",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 89,
    name: "MASJID TOK KERAWAT",
    image: "",
    category: "mosque",
    location: "PULAI CHONDONG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000315031001296498405204866153034585802MY5918MASJID TOK KERAWAT6014PULAI CHONDONG6105166006304B359",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 90,
    name: "MJD AL-RAHMAN KG.GALANG",
    image: "",
    category: "mosque",
    location: "PULAI CHONDONG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000349031001482817325204866153034585802MY5923MJD AL-RAHMAN KG.GALANG6014PULAI CHONDONG6105166006304A97F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 91,
    name: "MASJID DARUL NAIM",
    image: "",
    category: "mosque",
    location: "RANTAU PANJANG",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001980311011105116595204866153034585802MY5917MASJID DARUL NAIM6014RANTAU PANJANG6105172006304CA22",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 92,
    name: "MASJID AR RAUDHAH LUNDANG",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000230031001990652355204866153034585802MY5925MASJID AR RAUDHAH LUNDANG6010KOTA BHARU61051520063048494",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 93,
    name: "JK MJD MUKIM PINTU GANG",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000274031001949407855204866153034585802MY5923JK MJD MUKIM PINTU GANG6010KOTA BHARU61051510063041EA2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 94,
    name: "MASJID MUKIM PANJI",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000329031001298514615204866153034585802MY5918MASJID MUKIM PANJI6010KOTA BHARU6105161006304C28B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 95,
    name: "MD MASYARAKAT ROHINGYA",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003590311011107796715204866153034585802MY5923MD MASYARAKAT ROHINGYA 6010KOTA BHARU6105150006304C460",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 96,
    name: "SEDEKAH@UMK",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000381031001926140665204866153034585802MY5911SEDEKAH@UMK6010KOTA BHARU6105161006304FCB4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 97,
    name: "TABUNG MASJID AL FATTAH",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000444031001295202005204866153034585802MY5923TABUNG MASJID AL FATTAH6010KOTA BHARU61051510063048653",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 98,
    name: "KHAIRAT KEMATIAN ISLAM",
    image: "",
    category: "mosque",
    location: "KOTA BHARU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000660031001797108895204533153034585802MY5922KHAIRAT KEMATIAN ISLAM6010KOTA BHARU61051510063041334",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 99,
    name: "MJD MUKIM PANGKAL MELERET",
    image: "",
    category: "mosque",
    location: "MACHANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000849031001959904835204866153034585802MY5925MJD MUKIM PANGKAL MELERET6007MACHANG61051850063045B32",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 100,
    name: "MASJID MUKIM TEPI SUNGAI",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000069031001392146725204866153034585802MY5924MASJID MUKIM TEPI SUNGAI6011TANAH MERAH61051750063044CA1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 101,
    name: "MASJID MUKIM BECHAH LAUT",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000226031001923564295204866153034585802MY5924MASJID MUKIM BECHAH LAUT6011TANAH MERAH6105175006304519E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 102,
    name: "MASJID MUKIM PASIR SAT",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003600311011121752315204866153034585802MY5922MASJID MUKIM PASIR SAT6011TANAH MERAH6105175006304F868",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 103,
    name: "JKS PEMBANGUNAN MJD IPTM",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000740031001398601345204866153034585802MY5924JKS PEMBANGUNAN MJD IPTM6011TANAH MERAH6105175006304667B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 104,
    name: "PUSAT KHIDMAT KHAIRIYAH",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000939031001346720125204866153034585802MY5923PUSAT KHIDMAT KHAIRIYAH6011TANAH MERAH6105175006304A30E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 105,
    name: "SRU(A) DARUL ULUM DINIAH",
    image: "",
    category: "mosque",
    location: "PADANG SIAM",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001114031001999034425204829953034585802MY5924SRU(A) DARUL ULUM DINIAH6011PADANG SIAM6105175006304A137",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 106,
    name: "MASJID MUKIM KUALA KEPOK",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001168031001935862015204866153034585802MY5924MASJID MUKIM KUALA KEPOK6011TANAH MERAH61051750063041CF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 107,
    name: "MJD MUKIM LALANG PEPUYU",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001432031001992737465204866153034585802MY5923MJD MUKIM LALANG PEPUYU6011TANAH MERAH6105175006304B636",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 108,
    name: "MADRASAH HAJI DERAMAN",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000015410311011293352455204866153034585802MY5921MADRASAH HAJI DERAMAN6011TANAH MERAH6105175006304083D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 109,
    name: "TAB KEBAJIKAN HALAQAT",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002105031001993194505204866153034585802MY5921TAB KEBAJIKAN HALAQAT6011TANAH MERAH61051750063048CF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 110,
    name: "INFAQ MJD ISMAIL PETRA",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002391031001398601345204866153034585802MY5922INFAQ MJD ISMAIL PETRA6011TANAH MERAH61051750063041C74",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 111,
    name: "MASJID MUKIM KELEWEK",
    image: "",
    category: "mosque",
    location: "TANAH MERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003599031001936464645204866153034585802MY5920MASJID MUKIM KELEWEK6011TANAH MERAH61051750063043D59",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 112,
    name: "MASJID TAMAN BALOK MAKMUR",
    image: "",
    category: "mosque",
    location: "BESERAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000218031001290982275204866153034585802MY5925MASJID TAMAN BALOK MAKMUR6007BESERAH61052610063042FFF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 113,
    name: "MJD SULTAN HJ AHMAD SHAH",
    image: "",
    category: "mosque",
    location: "KUANTAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000258031001299889905204866153034585802MY5924MJD SULTAN HJ AHMAD SHAH6007KUANTAN610525200630476F7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 114,
    name: "SURAU WARISAN",
    image: "",
    category: "surau",
    location: "KUANTAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000743031001398324155204866153034585802MY5913SURAU WARISAN6007KUANTAN6105251006304A2A9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 115,
    name: "MASJID TMN BUKIT BENDERA",
    image: "",
    category: "mosque",
    location: "MENTAKAB",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000043031001393608095204866153034585802MY5924MASJID TMN BUKIT BENDERA6008MENTAKAB61052840063047D09",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 116,
    name: "MASJID KG BONGSU",
    image: "",
    category: "mosque",
    location: "LANCHANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000077031001398191485204866153034585802MY5916MASJID KG BONGSU6008LANCHANG61052850063042F11",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 117,
    name: "MASJID KARIAH GAJAH MATI",
    image: "",
    category: "mosque",
    location: "MENTAKAB",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000634031001991903055204866153034585802MY5924MASJID KARIAH GAJAH MATI6008MENTAKAB610528400630486D2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 118,
    name: "MASJID KG TANJUNG MEDANG",
    image: "",
    category: "mosque",
    location: "PEKAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000207031001396453595204866153034585802MY5924MASJID KG TANJUNG MEDANG6005PEKAN610526600630424E8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 119,
    name: "MASJID PALOH HINAI",
    image: "",
    category: "mosque",
    location: "PEKAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000246031001997783135204866153034585802MY5918MASJID PALOH HINAI6005PEKAN61052660063043658",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 120,
    name: "P PENG FARDHU AIN AL AZID",
    image: "",
    category: "mosque",
    location: "KUANTAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000865031001298886795204866153034585802MY5925P PENG FARDHU AIN AL AZID6007KUANTAN6105260806304D252",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 121,
    name: "MASJID TMN TEMERLOH JAYA",
    image: "",
    category: "mosque",
    location: "TEMERLOH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000012031001998816105204866153034585802MY5924MASJID TMN TEMERLOH JAYA6008TEMERLOH61052800063041FA5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 122,
    name: "MAAHAD TAHFIZ AL-FURQAN",
    image: "",
    category: "mosque",
    location: "TEMERLOH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001138031001344420245204866153034585802MY5923MAAHAD TAHFIZ AL-FURQAN6008TEMERLOH61052800063049750",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 123,
    name: "MJD DARUL IMAN KG LAHAR",
    image: "",
    category: "mosque",
    location: "BESUT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000024031001393774335204866153034585802MY5923MJD DARUL IMAN KG LAHAR6005BESUT6105222006304E2EE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 124,
    name: "MASJID PAK DA MALIK",
    image: "",
    category: "mosque",
    location: "BESUT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000027031001392445415204866153034585802MY5919MASJID PAK DA MALIK6005BESUT61052220063041A1B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 125,
    name: "MASJID KAMPUNG PAYA RAWA",
    image: "",
    category: "mosque",
    location: "KAMPUNG RAJA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000056031001298134335204866153034585802MY5924MASJID KAMPUNG PAYA RAWA6012KAMPUNG RAJA6105222006304C3A6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 126,
    name: "SURAU AL-IKHLAS S/MEDANG",
    image: "",
    category: "surau",
    location: "KG RAJA",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000024140311011206052675204866153034585802MY5924SURAU AL-IKHLAS S/MEDANG6007KG RAJA6105222006304457E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 127,
    name: "MASJID TAMAN ILMU",
    image: "",
    category: "mosque",
    location: "KG RAJA",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000045380311011194238355204866153034585802MY5917MASJID TAMAN ILMU6007KG RAJA61052220063047D6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 128,
    name: "MJD AL EHSAN KG SG LABU",
    image: "",
    category: "mosque",
    location: "LABUAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000186031001282966775204866153034585802MY5923MJD AL EHSAN KG SG LABU6006LABUAN6105870006304FA80",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 129,
    name: "MJD AL-MUNAWWAR (KHAIRAT)",
    image: "",
    category: "mosque",
    location: "LABUAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000323031001681738065204866153034585802MY5925MJD AL-MUNAWWAR (KHAIRAT)6006LABUAN61058702263042F7B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 130,
    name: "MASJID SULTAN MUHAMMAD V",
    image: "",
    category: "mosque",
    location: "LABUAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000350031001993196165204866153034585802MY5924MASJID SULTAN MUHAMMAD V6006LABUAN610587029630414A5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 131,
    name: "SR NURHIDAYAH TMN KERAMAT",
    image: "",
    category: "mosque",
    location: "KOTA KINABALU",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001640311011209046405204866153034585802MY5925SR NURHIDAYAH TMN KERAMAT6013KOTA KINABALU6105881006304020D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 132,
    name: "MASJID BANDARAYA KK",
    image: "",
    category: "mosque",
    location: "KOTA KINABALU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000210031001789903465204866153034585802MY5919MASJID BANDARAYA KK6013KOTA KINABALU6105880006304417D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 133,
    name: "MADRASAH 2 MJD BNDRAYA KK",
    image: "",
    category: "mosque",
    location: "KOTA KINABALU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000211031001789903465204866153034585802MY5925MADRASAH 2 MJD BNDRAYA KK6013KOTA KINABALU610588000630479A8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 134,
    name: "MASJID TUN AHMAD SHAH",
    image: "",
    category: "mosque",
    location: "KOTA KINABALU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003117031001987192485204866153034585802MY5921MASJID TUN AHMAD SHAH6013KOTA KINABALU61058840063049608",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 135,
    name: "SURAU AL-AMIN KBG",
    image: "",
    category: "surau",
    location: "TAWAU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000293031001981357625204866153034585802MY5917SURAU AL-AMIN KBG6005TAWAU6105910226304A47A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 136,
    name: "SURAU AL IMAN TMN MGH JYA",
    image: "",
    category: "surau",
    location: "TAWAU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000766031001388044355204866153034585802MY5925SURAU AL IMAN TMN MGH JYA6005TAWAU6105910006304852A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 137,
    name: "SUR AL-FIRDAUS AL-HIKMAH",
    image: "",
    category: "mosque",
    location: "TAWAU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001019031001380424235204866153034585802MY5924SUR AL-FIRDAUS AL-HIKMAH6005TAWAU61059100063047934",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 138,
    name: "SUR AT TAQWA APAS PERMAI",
    image: "",
    category: "mosque",
    location: "TAWAU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001119031001985378865204866153034585802MY5924SUR AT TAQWA APAS PERMAI6005TAWAU6105910006304A74B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 139,
    name: "MASJID AR RAHMAH",
    image: "",
    category: "mosque",
    location: "KOK LANAS",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002630311011263868865204866153034585802MY5916MASJID AR RAHMAH6009KOK LANAS6105164506304A622",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 140,
    name: "MASJID AL MUHAJIRIN",
    image: "",
    category: "mosque",
    location: "TAWAU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004228031001988082975204866153034585802MY5919MASJID AL MUHAJIRIN6005TAWAU6105910306304DEB5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 141,
    name: "MASJID AN-NAIM LUTONG",
    image: "",
    category: "mosque",
    location: "LUTONG SARAWAK",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000185031001687281895204866153034585802MY5921MASJID AN-NAIM LUTONG6014LUTONG SARAWAK6105981006304537A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 142,
    name: "SURAU NURUL JAMILUN SUBHI",
    image: "",
    category: "surau",
    location: "MIRI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000502031001289047455204866153034585802MY5925SURAU NURUL JAMILUN SUBHI6004MIRI61059800063043EF6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 143,
    name: "SURAU AL-HIDAYAH T SEJOLI",
    image: "",
    category: "surau",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000062031001981868005204866153034585802MY5925SURAU AL-HIDAYAH T SEJOLI6007KUCHING61059305063044007",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 144,
    name: "SURAU DARUL ILMI PPKS",
    image: "",
    category: "surau",
    location: "TABUAN JAYA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000073031001981868005204866153034585802MY5921SURAU DARUL ILMI PPKS6012TABUAN JAYA 6105933506304791E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 145,
    name: "MJ DRUL MUTTAQIN KGBUNTAL",
    image: "",
    category: "mosque",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000143031001981740165204866153034585802MY5925MJ DRUL MUTTAQIN KGBUNTAL6007KUCHING61059305063041495",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 146,
    name: "MASJID DARUS SAKINAH",
    image: "",
    category: "mosque",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000162031001988956005204866153034585802MY5920MASJID DARUS SAKINAH6007KUCHING61059325063043B38",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 147,
    name: "MDRASAH TAHFIZ AL-FAAIZUN",
    image: "",
    category: "mosque",
    location: "KUCHING",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002690311011105199225204866153034585802MY5925MDRASAH TAHFIZ AL-FAAIZUN6007KUCHING6105930506304DF8E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 148,
    name: "AJK SURAU DARUL ISTIQAMAH",
    image: "",
    category: "surau",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000778031001981873455204866153034585802MY5925AJK SURAU DARUL ISTIQAMAH6007KUCHING610593050630405AF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 149,
    name: "SURAU AL FITRAH",
    image: "",
    category: "surau",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001060031001066841195204866153034585802MY5915SURAU AL FITRAH6007KUCHING61059305063048A86",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 150,
    name: "MASJID DARUL ISTIQLAAL",
    image: "",
    category: "mosque",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003631031001686287845204866153034585802MY5922MASJID DARUL ISTIQLAAL6007KUCHING61059315063042040",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 151,
    name: "SURAU JABAL NUR",
    image: "",
    category: "surau",
    location: "KUCHING",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004329031001658946945204866153034585802MY5915SURAU JABAL NUR6007KUCHING610593050630497EA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 152,
    name: "JK PBN MJD BARU K KETIL",
    image: "",
    category: "mosque",
    location: "KUALA KETIL KDH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000091031001947793585204866153034585802MY5923JK PBN MJD BARU K KETIL6015KUALA KETIL KDH61050930063044A77",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 153,
    name: "MASJID AN-NUR TOK KELING",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000134031001644256835204866153034585802MY5924MASJID AN-NUR TOK KELING6010ALOR SETAR610505400630406BC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 154,
    name: "MASJID KAMPONG BERJAYA",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000135031001348845215204866153034585802MY5922MASJID KAMPONG BERJAYA6010ALOR SETAR610505150630458B8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 155,
    name: "MJD KARIAH PENGHULU HIM",
    image: "",
    category: "mosque",
    location: "SUNGAI PETANI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000161031001948033385204866153034585802MY5923MJD KARIAH PENGHULU HIM6013SUNGAI PETANI6105080006304C8F6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 156,
    name: "MASJID AR-RAHMAN KERPAN",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000201031001946466435204866153034585802MY5923MASJID AR-RAHMAN KERPAN6010ALOR SETAR610506150630420BC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 157,
    name: "MJD M.ISKANDAR W.TEMPAWAN",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000334031001343537305204866153034585802MY5925MJD M.ISKANDAR W.TEMPAWAN6010ALOR SETAR6105053006304A773",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 158,
    name: "MASJID TUNKU PUAN HABSAH",
    image: "",
    category: "mosque",
    location: "SUNGAI PETANI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000656031001944457365204866153034585802MY5924MASJID TUNKU PUAN HABSAH6013SUNGAI PETANI61050800063048975",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 159,
    name: "MASJID AN-NUR TOK KELING",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000134031001644256835204866153034585802MY5924MASJID AN-NUR TOK KELING6010ALOR SETAR610505400630406BC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 160,
    name: "MASJID TANJUNG BENDAHARA",
    image: "",
    category: "mosque",
    location: "ALOR SETAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000815031001944898665204866153034585802MY5924MASJID TANJUNG BENDAHARA6010ALOR SETAR6105053006304B3DB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 161,
    name: "PMBINAAN SURAU SEK TAWAR",
    image: "",
    category: "surau",
    location: "KUALA KETIL",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001703031001342446675204866153034585802MY5924PMBINAAN SURAU SEK TAWAR6011KUALA KETIL610509310630420C2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 162,
    name: "MASJID AL-HUSSAIN KPERLIS",
    image: "",
    category: "mosque",
    location: "KUALA PERLIS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000203031001255802135204866153034585802MY5925MASJID AL-HUSSAIN KPERLIS6012KUALA PERLIS6105020006304037D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 163,
    name: "MJD UMAR IBNU AL KHATTAB",
    image: "",
    category: "mosque",
    location: "BAYAN LEPAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000052031001941597945204866153034585802MY5924MJD UMAR IBNU AL KHATTAB6011BAYAN LEPAS610511950630431CF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 164,
    name: "QARYAH MJD HASHIM YAHAYA",
    image: "",
    category: "mosque",
    location: "GEORGETOWN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000065031001748682795204866153034585802MY5924QARYAH MJD HASHIM YAHAYA6010GEORGETOWN6105101506304C4E6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 165,
    name: "MASJID JAMI' AL MUNAWWAR",
    image: "",
    category: "mosque",
    location: "PULAU PINANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000131031001249319885204866153034585802MY5924MASJID JAMI' AL MUNAWWAR6012PULAU PINANG6105102506304486A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 166,
    name: "MJD ALHIDAYAH BAYAN LEPAS",
    image: "",
    category: "mosque",
    location: "BAYAN LEPAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000252031001348100085204866153034585802MY5925MJD ALHIDAYAH BAYAN LEPAS6011BAYAN LEPAS610511900630471F2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 167,
    name: "MADRASAH DARUL MUHAJIRIN",
    image: "",
    category: "mosque",
    location: "TASEK GELUGOR",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000004900311011109455815204866153034585802MY5924MADRASAH DARUL MUHAJIRIN6013TASEK GELUGOR610513310630477DA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 168,
    name: "QARYAH MASJID PADANG IBU",
    image: "",
    category: "mosque",
    location: "KUBANG SEMANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000920031001257747715204866153034585802MY5924QARYAH MASJID PADANG IBU6013KUBANG SEMANG61051440063049CBF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 169,
    name: "SURAU AT-TAQWA SK MUT PER",
    image: "",
    category: "surau",
    location: "BAYAN LEPAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001403031001350440405204866153034585802MY5925SURAU AT-TAQWA SK MUT PER6011BAYAN LEPAS6105119206304AB56",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 170,
    name: "TABUNG MJD BAYAN LEPAS",
    image: "",
    category: "mosque",
    location: "BAYAN LEPAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001444031001945703555204866153034585802MY5922TABUNG MJD BAYAN LEPAS6011BAYAN LEPAS610511900630406F2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 171,
    name: "TAHFIZ MANAHILIL IRFAN",
    image: "",
    category: "mosque",
    location: "BAYAN LEPAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003546031001251479815204866153034585802MY5922TAHFIZ MANAHILIL IRFAN6011BAYAN LEPAS6105119606304B73D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 172,
    name: "MASJID BDR PUTRA SEGAMAT",
    image: "",
    category: "mosque",
    location: "SEGAMAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000006031001276981245204866153034585802MY5924MASJID BDR PUTRA SEGAMAT6007SEGAMAT6105850006304E974",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 173,
    name: "MASJID AL HIKMAH KFAT5",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000015031001778693685204866153034585802MY5922MASJID AL HIKMAH KFAT56011KOTA TINGGI61058190063043B17",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 174,
    name: "MASJID FELDA SEMENCHU",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000016031001376433725204866153034585802MY5921MASJID FELDA SEMENCHU6011KOTA TINGGI61058190063047585",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 175,
    name: "TBG MASJID BT 1 KT TINGGI",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000055031001374790945204866153034585802MY5925TBG MASJID BT 1 KT TINGGI6011KOTA TINGGI61058190063046909",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 176,
    name: "JK PBN SURAU DARUL ATHIAH",
    image: "",
    category: "surau",
    location: "BATU PAHAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000060031001786662025204866153034585802MY5925JK PBN SURAU DARUL ATHIAH6010BATU PAHAT61058300063044870",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 177,
    name: "MJ ASSYAKIRIN APING BARAT",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001090311011191402405204866153034585802MY5925MJ ASSYAKIRIN APING BARAT6011KOTA TINGGI6105819006304BCC4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 178,
    name: "MASJID AN-NUR KG TG BUAI",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000110031001127676595204866153034585802MY5924MASJID AN-NUR KG TG BUAI6011KOTA TINGGI61058190063049729",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 179,
    name: "SR ALRAYYAN T PUTERI JAYA",
    image: "",
    category: "mosque",
    location: "BATU PAHAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000119031001378721725204866153034585802MY5925SR ALRAYYAN T PUTERI JAYA6010BATU PAHAT61058300063047C0A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 180,
    name: "MJ JAMEK PEKAN PRT SULONG",
    image: "",
    category: "mosque",
    location: "PARIT SULONG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000127031001270942455204866153034585802MY5925MJ JAMEK PEKAN PRT SULONG6012PARIT SULONG610583500630455E6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 181,
    name: "MJD AN-NUR LARKIN SENTRAL",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000015403090721951215204866153034585802MY5925MJD AN-NUR LARKIN SENTRAL6011JOHOR BAHRU610580000630485A2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 182,
    name: "TP MJD TMN SRI SAUJANA",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000179031001979785735204866153034585802MY5922TP MJD TMN SRI SAUJANA6011KOTA TINGGI6105819006304D5CF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 183,
    name: "MASJID JAMEK KG SIMPANG",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000181031001274195165204866153034585802MY5923MASJID JAMEK KG SIMPANG6011KOTA TINGGI61058190063045CEE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 184,
    name: "MASJID JAMEK AL MUBARAK",
    image: "",
    category: "mosque",
    location: "KULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000213031001970047375204866153034585802MY5923MASJID JAMEK AL MUBARAK6005KULAI6105810006304554F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 185,
    name: "MASJID JAMEK AL EHSAN",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000234031001975921205204866153034585802MY5921MASJID JAMEK AL EHSAN6011KOTA TINGGI610581900630474FC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 186,
    name: "PASTI KAW JOHOR BAHRU",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000237031001778096795204866153034585802MY5921PASTI KAW JOHOR BAHRU6011JOHOR BAHRU61058035063046979",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 187,
    name: "MASJID BARU FELDA AT4",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000243031001671652005204866153034585802MY5921MASJID BARU FELDA AT46011KOTA TINGGI6105819006304279D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 188,
    name: "SR AL TAQWA PULAI BISTARI",
    image: "",
    category: "mosque",
    location: "KANGKAR PULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000261031001374535355204866153034585802MY5925SR AL TAQWA PULAI BISTARI6013KANGKAR PULAI610581110630474F5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 189,
    name: "MASJID TUN HUSSEIN ONN",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000275031001977795515204866153034585802MY5922MASJID TUN HUSSEIN ONN6011JOHOR BAHRU6105803506304E577",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 190,
    name: "SURAU AL JAUHAR T.SENTOSA",
    image: "",
    category: "surau",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000286031001977956655204866153034585802MY5925SURAU AL JAUHAR T.SENTOSA6011JOHOR BAHRU61058015063040C15",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 191,
    name: "MASJID JAMEK SEGAMAT BARU",
    image: "",
    category: "mosque",
    location: "SEGAMAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000288031001772544695204866153034585802MY5925MASJID JAMEK SEGAMAT BARU6007SEGAMAT6105850006304B9D5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 192,
    name: "MJD TMN DATO'ONN LARKIN",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000312031001972619645204866153034585802MY5923MJD TMN DATO'ONN LARKIN6011JOHOR BAHRU61058035063047394",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 193,
    name: "MASJID CHAAH",
    image: "",
    category: "mosque",
    location: "CHAAH",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000341031001973443005204866153034585802MY5912MASJID CHAAH6005CHAAH6105854006304A34C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 194,
    name: "SURAU AT-TAQWA KULAI",
    image: "",
    category: "surau",
    location: "KULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000344031001271484165204866153034585802MY5920SURAU AT-TAQWA KULAI6005KULAI6105810006304385D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 195,
    name: "PRTBHN KHAIRAT KMTIAN E.H",
    image: "",
    category: "mosque",
    location: "BATU PAHAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000385031001335750525204866153034585802MY5925PRTBHN KHAIRAT KMTIAN E.H6010BATU PAHAT6105830006304B99A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 196,
    name: "JK PMBINAAN SURAU ALPINIA",
    image: "",
    category: "surau",
    location: "KULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000548031001277816935204866153034585802MY5925JK PMBINAAN SURAU ALPINIA6005KULAI6105810006304DB50",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 197,
    name: "ANWARUL MAHABBAH",
    image: "",
    category: "mosque",
    location: "KLUANG",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000706031001772005455204533153034585802MY5916ANWARUL MAHABBAH6006KLUANG6105860006304DE42",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 198,
    name: "YAYASAN PNDIDIKAN HIDAYAH",
    image: "",
    category: "mosque",
    location: "SKUDAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000717031001977849795204839853034585802MY5925YAYASAN PNDIDIKAN HIDAYAH6006SKUDAI610581300630438E5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 199,
    name: "MASJID SUNGAI ABONG",
    image: "",
    category: "mosque",
    location: "MUAR",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000775031001265197815204866153034585802MY5919MASJID SUNGAI ABONG6004MUAR6105840006304E6C6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 200,
    name: "MASJID TUNKU LAKSAMANA",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000830031001956609235204866153034585802MY5922MASJID TUNKU LAKSAMANA6011JOHOR BAHRU610580990630490E4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 201,
    name: "SURAU KURNIAWATI",
    image: "",
    category: "surau",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000909031001972881115204866153034585802MY5917SURAU KURNIAWATI 6011JOHOR BAHRU6105802506304771D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 202,
    name: "MASJID SULTAN IBRAHIM",
    image: "",
    category: "mosque",
    location: "BATU PAHAT",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001151031001375298155204866153034585802MY5922MASJID SULTAN IBRAHIM 6010BATU PAHAT61058300063043E7E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 203,
    name: "J.K MJD BNDAR K.TINGGI",
    image: "",
    category: "mosque",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002261031001978652145204866153034585802MY5922J.K MJD BNDAR K.TINGGI6011KOTA TINGGI6105819006304D504",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 204,
    name: "SURAU TAMAN PASAK INDAH",
    image: "",
    category: "surau",
    location: "KOTA TINGGI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002273031001374184385204866153034585802MY5923SURAU TAMAN PASAK INDAH6011KOTA TINGGI6105819006304F706",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 205,
    name: "SURAU AL AMIN DESA RHU 2",
    image: "",
    category: "surau",
    location: "SEREMBAN",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000024220311011169202115204866153034585802MY5924SURAU AL AMIN DESA RHU 26008SEREMBAN610570400630435D3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 206,
    name: "TBG KHAIRAT PMBINAAN MJD",
    image: "",
    category: "mosque",
    location: "KULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004184031001975381815204866153034585802MY5924TBG KHAIRAT PMBINAAN MJD6005KULAI6105810006304DB15",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 207,
    name: "TABUNG URUSAN KUBUR JOHOR",
    image: "",
    category: "mosque",
    location: "JOHOR BAHRU",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004809031001975757655204866153034585802MY5925TABUNG URUSAN KUBUR JOHOR6011JOHOR BAHRU61058099063046A78",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 208,
    name: "SURAU UMAR ABDUL AZIZ",
    image: "",
    category: "surau",
    location: "KULAI",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004931031001979675575204866153034585802MY5921SURAU UMAR ABDUL AZIZ6005KULAI6105810006304C6D0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 209,
    name: "MASJID SEREMBAN JAYA",
    image: "",
    category: "mosque",
    location: "SEREMBAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000031031001361663255204866153034585802MY5920MASJID SEREMBAN JAYA6008SEREMBAN6105701006304A64F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 210,
    name: "MASJID HUSSAIN SEREMBAN 2",
    image: "",
    category: "mosque",
    location: "SEREMBAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000034031001361663255204866153034585802MY5925MASJID HUSSAIN SEREMBAN 26008SEREMBAN61057010063044099",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 211,
    name: "MJD ASSYAKIRIN GEMENCHEH",
    image: "",
    category: "mosque",
    location: "GEMENCHEH NS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000113031001937171925204866153034585802MY5924MJD ASSYAKIRIN GEMENCHEH6012GEMENCHEH NS610573200630455D9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 212,
    name: "M ATTAQWA KARIAH KG PAROI",
    image: "",
    category: "mosque",
    location: "SEREMBAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000247031001931348705204866153034585802MY5925M ATTAQWA KARIAH KG PAROI6008SEREMBAN6105704006304C873",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 213,
    name: "TABUNG SURAU SMKTAR",
    image: "",
    category: "surau",
    location: "GEMAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000240031001979581465204866153034585802MY5919TABUNG SURAU SMKTAR6005GEMAS610573400630440A5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 214,
    name: "MJD WRISAN TELOK KEMANG",
    image: "",
    category: "mosque",
    location: "PORT DICKSON",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000530031001756163305204866153034585802MY5923MJD WRISAN TELOK KEMANG6012PORT DICKSON61057105063042F96",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 215,
    name: "SR SHEIKH PAIZ AL-LINGGI",
    image: "",
    category: "mosque",
    location: "PORT DICKSON",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000006630311011187067385204533153034585802MY5924SR SHEIKH PAIZ AL-LINGGI6012PORT DICKSON6105711506304CE6B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 216,
    name: "MJD KARIAH (F) PALONG 3",
    image: "",
    category: "mosque",
    location: "GEMAS",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001126031001330580385204866153034585802MY5923MJD KARIAH (F) PALONG 36005GEMAS61057364063049828",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 217,
    name: "TBG ANAK YATIM MJD P.JAYA",
    image: "",
    category: "mosque",
    location: "SEREMBAN",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001377031001265787235204866153034585802MY5925TBG ANAK YATIM MJD P.JAYA6008SEREMBAN6105704006304294B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 218,
    name: "MASJID SRI SENDAYAN",
    image: "",
    category: "mosque",
    location: "BANDAR SRI SEND",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004326031001969698715204866153034585802MY5919MASJID SRI SENDAYAN6015BANDAR SRI SEND610571950630462C3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 219,
    name: "MJD AL-FALIHIN KG ALAI",
    image: "",
    category: "mosque",
    location: "ALAI  MELAKA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000106031001767100515204866153034585802MY5922MJD AL-FALIHIN KG ALAI6012ALAI  MELAKA61057546063046098",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 220,
    name: "SURAU AN NUR PIBG SMKPTM",
    image: "",
    category: "surau",
    location: "MELAKA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001688031001761293945204866153034585802MY5924SURAU AN NUR PIBG SMKPTM6006MELAKA6105754606304F8CD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 221,
    name: "UKHUWAH",
    image: "",
    category: "mosque",
    location: "MELAKA",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000005035031001967078795204839853034585802MY5907UKHUWAH6006MELAKA6105764506304ACF2",
    supportedPayment: ["duitnow", "tng"],
  },
];
