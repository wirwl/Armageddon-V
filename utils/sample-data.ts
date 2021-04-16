import { User } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const sampleNASAData: any = {
  links: {
    next:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2021-04-17&end_date=2021-04-17&detailed=false&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
    prev:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2021-04-15&end_date=2021-04-15&detailed=false&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
    self:
      "http://www.neowsapp.com/rest/v1/feed?start_date=2021-04-16&end_date=2021-04-16&detailed=false&api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
  },
  element_count: 11,
  near_earth_objects: {
    "2021-04-16": [
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/2468910?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "2468910",
        neo_reference_id: "2468910",
        name: "468910 (2014 KQ76)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2468910",
        absolute_magnitude_h: 21.66,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1237527837,
            estimated_diameter_max: 0.2767196367,
          },
          meters: {
            estimated_diameter_min: 123.7527836584,
            estimated_diameter_max: 276.719636665,
          },
          miles: {
            estimated_diameter_min: 0.0768963909,
            estimated_diameter_max: 0.1719455574,
          },
          feet: {
            estimated_diameter_min: 406.0130827378,
            estimated_diameter_max: 907.872852756,
          },
        },
        is_potentially_hazardous_asteroid: true,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 05:57",
            epoch_date_close_approach: 1618552620000,
            relative_velocity: {
              kilometers_per_second: "12.1721815575",
              kilometers_per_hour: "43819.8536070263",
              miles_per_hour: "27227.9529259881",
            },
            miss_distance: {
              astronomical: "0.0825954427",
              lunar: "32.1296272103",
              kilometers: "12356102.299627049",
              miles: "7677725.9481053162",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/2522684?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "2522684",
        neo_reference_id: "2522684",
        name: "522684 (2016 JP)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2522684",
        absolute_magnitude_h: 21.13,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1579628558,
            estimated_diameter_max: 0.3532156834,
          },
          meters: {
            estimated_diameter_min: 157.96285576,
            estimated_diameter_max: 353.2156833994,
          },
          miles: {
            estimated_diameter_min: 0.0981535376,
            estimated_diameter_max: 0.2194779824,
          },
          feet: {
            estimated_diameter_min: 518.2508556917,
            estimated_diameter_max: 1158.8441427241,
          },
        },
        is_potentially_hazardous_asteroid: true,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 18:22",
            epoch_date_close_approach: 1618597320000,
            relative_velocity: {
              kilometers_per_second: "9.0288675093",
              kilometers_per_hour: "32503.9230336083",
              miles_per_hour: "20196.6737316329",
            },
            miss_distance: {
              astronomical: "0.1448175217",
              lunar: "56.3340159413",
              kilometers: "21664392.784998779",
              miles: "13461629.4525459902",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/3005871?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "3005871",
        neo_reference_id: "3005871",
        name: "(1993 HC)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3005871",
        absolute_magnitude_h: 20.74,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1890405519,
            estimated_diameter_max: 0.4227075246,
          },
          meters: {
            estimated_diameter_min: 189.0405519291,
            estimated_diameter_max: 422.7075246174,
          },
          miles: {
            estimated_diameter_min: 0.1174643168,
            estimated_diameter_max: 0.2626581973,
          },
          feet: {
            estimated_diameter_min: 620.2118043909,
            estimated_diameter_max: 1386.8357550659,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 09:28",
            epoch_date_close_approach: 1618565280000,
            relative_velocity: {
              kilometers_per_second: "18.4084938836",
              kilometers_per_hour: "66270.5779809733",
              miles_per_hour: "41177.9599682331",
            },
            miss_distance: {
              astronomical: "0.3253278468",
              lunar: "126.5525324052",
              kilometers: "48668352.932966316",
              miles: "30241112.2135385208",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/3404088?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "3404088",
        neo_reference_id: "3404088",
        name: "(2008 BC22)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404088",
        absolute_magnitude_h: 19.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.3051792326,
            estimated_diameter_max: 0.6824015094,
          },
          meters: {
            estimated_diameter_min: 305.1792325939,
            estimated_diameter_max: 682.4015094011,
          },
          miles: {
            estimated_diameter_min: 0.1896295249,
            estimated_diameter_max: 0.4240245083,
          },
          feet: {
            estimated_diameter_min: 1001.2442334633,
            estimated_diameter_max: 2238.8501681036,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 06:21",
            epoch_date_close_approach: 1618554060000,
            relative_velocity: {
              kilometers_per_second: "3.4718789551",
              kilometers_per_hour: "12498.7642382053",
              miles_per_hour: "7766.2460345671",
            },
            miss_distance: {
              astronomical: "0.2434232782",
              lunar: "94.6916552198",
              kilometers: "36415603.927137434",
              miles: "22627607.0242432292",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/3774114?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "3774114",
        neo_reference_id: "3774114",
        name: "(2017 HG4)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3774114",
        absolute_magnitude_h: 27.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0076657557,
            estimated_diameter_max: 0.0171411509,
          },
          meters: {
            estimated_diameter_min: 7.6657557353,
            estimated_diameter_max: 17.1411509231,
          },
          miles: {
            estimated_diameter_min: 0.0047632783,
            estimated_diameter_max: 0.0106510141,
          },
          feet: {
            estimated_diameter_min: 25.1501180466,
            estimated_diameter_max: 56.2373735944,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 17:16",
            epoch_date_close_approach: 1618593360000,
            relative_velocity: {
              kilometers_per_second: "4.1224831227",
              kilometers_per_hour: "14840.9392416312",
              miles_per_hour: "9221.5824971124",
            },
            miss_distance: {
              astronomical: "0.0194570251",
              lunar: "7.5687827639",
              kilometers: "2910729.511496537",
              miles: "1808643.4505327306",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/3837903?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "3837903",
        neo_reference_id: "3837903",
        name: "(2019 AF13)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837903",
        absolute_magnitude_h: 23.8,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.046190746,
            estimated_diameter_max: 0.1032856481,
          },
          meters: {
            estimated_diameter_min: 46.1907460282,
            estimated_diameter_max: 103.2856480504,
          },
          miles: {
            estimated_diameter_min: 0.0287015901,
            estimated_diameter_max: 0.0641787064,
          },
          feet: {
            estimated_diameter_min: 151.544447199,
            estimated_diameter_max: 338.8636855496,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 07:49",
            epoch_date_close_approach: 1618559340000,
            relative_velocity: {
              kilometers_per_second: "17.5515988756",
              kilometers_per_hour: "63185.7559522806",
              miles_per_hour: "39261.1715249046",
            },
            miss_distance: {
              astronomical: "0.2605532317",
              lunar: "101.3552071313",
              kilometers: "38978208.483936479",
              miles: "24219935.6585782502",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/54016667?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "54016667",
        neo_reference_id: "54016667",
        name: "(2020 HM3)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016667",
        absolute_magnitude_h: 24.8,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0291443905,
            estimated_diameter_max: 0.0651688382,
          },
          meters: {
            estimated_diameter_min: 29.1443904535,
            estimated_diameter_max: 65.1688382168,
          },
          miles: {
            estimated_diameter_min: 0.018109479,
            estimated_diameter_max: 0.0404940262,
          },
          feet: {
            estimated_diameter_min: 95.6180819754,
            estimated_diameter_max: 213.8085311752,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 18:19",
            epoch_date_close_approach: 1618597140000,
            relative_velocity: {
              kilometers_per_second: "14.6379758433",
              kilometers_per_hour: "52696.7130359534",
              miles_per_hour: "32743.6881639234",
            },
            miss_distance: {
              astronomical: "0.3569204048",
              lunar: "138.8420374672",
              kilometers: "53394532.317617776",
              miles: "33177823.9060302688",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/54134946?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "54134946",
        neo_reference_id: "54134946",
        name: "(2021 GG2)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54134946",
        absolute_magnitude_h: 25.955,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0171220191,
            estimated_diameter_max: 0.0382859986,
          },
          meters: {
            estimated_diameter_min: 17.1220190774,
            estimated_diameter_max: 38.2859985691,
          },
          miles: {
            estimated_diameter_min: 0.0106391261,
            estimated_diameter_max: 0.0237898092,
          },
          feet: {
            estimated_diameter_min: 56.1746050699,
            estimated_diameter_max: 125.6102355454,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 17:18",
            epoch_date_close_approach: 1618593480000,
            relative_velocity: {
              kilometers_per_second: "7.1442990682",
              kilometers_per_hour: "25719.4766456484",
              miles_per_hour: "15981.0825857364",
            },
            miss_distance: {
              astronomical: "0.0246508038",
              lunar: "9.5891626782",
              kilometers: "3687707.742267906",
              miles: "2291435.3357768628",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/54135139?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "54135139",
        neo_reference_id: "54135139",
        name: "(2021 GW2)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54135139",
        absolute_magnitude_h: 24.74,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0299609084,
            estimated_diameter_max: 0.0669946278,
          },
          meters: {
            estimated_diameter_min: 29.9609083851,
            estimated_diameter_max: 66.9946278168,
          },
          miles: {
            estimated_diameter_min: 0.0186168396,
            estimated_diameter_max: 0.0416285189,
          },
          feet: {
            estimated_diameter_min: 98.2969466663,
            estimated_diameter_max: 219.7986547266,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 00:13",
            epoch_date_close_approach: 1618531980000,
            relative_velocity: {
              kilometers_per_second: "18.171349906",
              kilometers_per_hour: "65416.8596614477",
              miles_per_hour: "40647.4926046368",
            },
            miss_distance: {
              astronomical: "0.0533220889",
              lunar: "20.7422925821",
              kilometers: "7976870.923390643",
              miles: "4956597.7513031534",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/54135427?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "54135427",
        neo_reference_id: "54135427",
        name: "(2021 GP3)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54135427",
        absolute_magnitude_h: 24.161,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0391160486,
            estimated_diameter_max: 0.0874661436,
          },
          meters: {
            estimated_diameter_min: 39.1160485602,
            estimated_diameter_max: 87.4661435917,
          },
          miles: {
            estimated_diameter_min: 0.0243055782,
            estimated_diameter_max: 0.0543489251,
          },
          feet: {
            estimated_diameter_min: 128.3334967582,
            estimated_diameter_max: 286.9624225415,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 19:23",
            epoch_date_close_approach: 1618600980000,
            relative_velocity: {
              kilometers_per_second: "6.3710110572",
              kilometers_per_hour: "22935.6398058575",
              miles_per_hour: "14251.3146338118",
            },
            miss_distance: {
              astronomical: "0.0846409729",
              lunar: "32.9253384581",
              kilometers: "12662109.260567723",
              miles: "7867869.8565436574",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            "http://www.neowsapp.com/rest/v1/neo/54136476?api_key=X64maaOGLjj7OiejYOWiKKjRHyC59He9NsJBukvR",
        },
        id: "54136476",
        neo_reference_id: "54136476",
        name: "(2021 GA7)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54136476",
        absolute_magnitude_h: 23.089,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0640847916,
            estimated_diameter_max: 0.1432979504,
          },
          meters: {
            estimated_diameter_min: 64.0847916373,
            estimated_diameter_max: 143.2979504249,
          },
          miles: {
            estimated_diameter_min: 0.0398204311,
            estimated_diameter_max: 0.0890411908,
          },
          feet: {
            estimated_diameter_min: 210.2519477953,
            estimated_diameter_max: 470.137647672,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2021-04-16",
            close_approach_date_full: "2021-Apr-16 15:44",
            epoch_date_close_approach: 1618587840000,
            relative_velocity: {
              kilometers_per_second: "4.2105344951",
              kilometers_per_hour: "15157.9241822706",
              miles_per_hour: "9418.5446120336",
            },
            miss_distance: {
              astronomical: "0.2405199198",
              lunar: "93.5622488022",
              kilometers: "35981267.694650826",
              miles: "22357723.0040643588",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};
