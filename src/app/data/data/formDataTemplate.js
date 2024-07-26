const formDataTemplate = {
    "normalFields":
        [{ "id": "firstname", "type": "text", "label": "First Name" },
        { "id": "lastname", "type": "text", "label": "Last Name" },
        { "id": "email", "type": "text", "label": "Email" },
        { "id": "phonumber", "type": "text", "label": "Phonenumber" },
        { "id": "address", "type": "text", "label": "Address" },
        { "id": "city", "type": "text", "label": "City" },
        { "id": "postcode", "type": "text", "label": "Postalcode" },
        { "id": "company name", "type": "text", "label": "Company Name" },
        { "id": "job title", "type": "text", "label": "Job Title" },
        {
            "id": "country", "type": "select", "label": "Country", 
            "options":[
                {
                  "value": "Afghanistan",
                  "label": "Afghanistan"
                },
                {
                  "value": "Albania",
                  "label": "Albania"
                },
                {
                  "value": "Algeria",
                  "label": "Algeria"
                },
                {
                  "value": "American Samoa",
                  "label": "American Samoa"
                },
                {
                  "value": "Andorra",
                  "label": "Andorra"
                },
                {
                  "value": "Angola",
                  "label": "Angola"
                },
                {
                  "value": "Anguilla",
                  "label": "Anguilla"
                },
                {
                  "value": "Antarctica",
                  "label": "Antarctica"
                },
                {
                  "value": "Antigua and Barbuda",
                  "label": "Antigua and Barbuda"
                },
                {
                  "value": "Argentina",
                  "label": "Argentina"
                },
                {
                  "value": "Armenia",
                  "label": "Armenia"
                },
                {
                  "value": "Arctic Ocean",
                  "label": "Arctic Ocean"
                },
                {
                  "value": "Aruba",
                  "label": "Aruba"
                },
                {
                  "value": "Ashmore and Cartier Islands",
                  "label": "Ashmore and Cartier\n                                                        Islands"
                },
                {
                  "value": "Atlantic Ocean",
                  "label": "Atlantic Ocean"
                },
                {
                  "value": "Australia",
                  "label": "Australia"
                },
                {
                  "value": "Austria",
                  "label": "Austria"
                },
                {
                  "value": "Azerbaijan",
                  "label": "Azerbaijan"
                },
                {
                  "value": "Bahamas",
                  "label": "Bahamas"
                },
                {
                  "value": "Bahrain",
                  "label": "Bahrain"
                },
                {
                  "value": "Baker Island",
                  "label": "Baker Island"
                },
                {
                  "value": "Bangladesh",
                  "label": "Bangladesh"
                },
                {
                  "value": "Barbados",
                  "label": "Barbados"
                },
                {
                  "value": "Bassas da India",
                  "label": "Bassas da India"
                },
                {
                  "value": "Belarus",
                  "label": "Belarus"
                },
                {
                  "value": "Belgium",
                  "label": "Belgium"
                },
                {
                  "value": "Belize",
                  "label": "Belize"
                },
                {
                  "value": "Benin",
                  "label": "Benin"
                },
                {
                  "value": "Bermuda",
                  "label": "Bermuda"
                },
                {
                  "value": "Bhutan",
                  "label": "Bhutan"
                },
                {
                  "value": "Bolivia",
                  "label": "Bolivia"
                },
                {
                  "value": "Bosnia and Herzegovina",
                  "label": "Bosnia and Herzegovina"
                },
                {
                  "value": "Botswana",
                  "label": "Botswana"
                },
                {
                  "value": "Bouvet Island",
                  "label": "Bouvet Island"
                },
                {
                  "value": "Brazil",
                  "label": "Brazil"
                },
                {
                  "value": "British Virgin Islands",
                  "label": "British Virgin Islands"
                },
                {
                  "value": "Brunei",
                  "label": "Brunei"
                },
                {
                  "value": "Bulgaria",
                  "label": "Bulgaria"
                },
                {
                  "value": "Burkina Faso",
                  "label": "Burkina Faso"
                },
                {
                  "value": "Burundi",
                  "label": "Burundi"
                },
                {
                  "value": "Cambodia",
                  "label": "Cambodia"
                },
                {
                  "value": "Cameroon",
                  "label": "Cameroon"
                },
                {
                  "value": "Canada",
                  "label": "Canada"
                },
                {
                  "value": "Cape Verde",
                  "label": "Cape Verde"
                },
                {
                  "value": "Cayman Islands",
                  "label": "Cayman Islands"
                },
                {
                  "value": "Central African Republic",
                  "label": "Central African Republic"
                },
                {
                  "value": "Chad",
                  "label": "Chad"
                },
                {
                  "value": "Chile",
                  "label": "Chile"
                },
                {
                  "value": "China",
                  "label": "China"
                },
                {
                  "value": "Christmas Island",
                  "label": "Christmas Island"
                },
                {
                  "value": "Clipperton Island",
                  "label": "Clipperton Island"
                },
                {
                  "value": "Cocos Islands",
                  "label": "Cocos Islands"
                },
                {
                  "value": "Colombia",
                  "label": "Colombia"
                },
                {
                  "value": "Comoros",
                  "label": "Comoros"
                },
                {
                  "value": "Cook Islands",
                  "label": "Cook Islands"
                },
                {
                  "value": "Coral Sea Islands",
                  "label": "Coral Sea Islands"
                },
                {
                  "value": "Costa Rica",
                  "label": "Costa Rica"
                },
                {
                  "value": "Cote d'Ivoire",
                  "label": "Cote d'Ivoire"
                },
                {
                  "value": "Croatia",
                  "label": "Croatia"
                },
                {
                  "value": "Cuba",
                  "label": "Cuba"
                },
                {
                  "value": "Cyprus",
                  "label": "Cyprus"
                },
                {
                  "value": "Czech Republic",
                  "label": "Czech Republic"
                },
                {
                  "value": "Denmark",
                  "label": "Denmark"
                },
                {
                  "value": "Democratic Republic of the Congo",
                  "label": "Democratic Republic\n                                                        of\n                                                        the\n                                                        Congo"
                },
                {
                  "value": "Djibouti",
                  "label": "Djibouti"
                },
                {
                  "value": "Dominica",
                  "label": "Dominica"
                },
                {
                  "value": "Dominican Republic",
                  "label": "Dominican Republic"
                },
                {
                  "value": "East Timor",
                  "label": "East Timor"
                },
                {
                  "value": "Ecuador",
                  "label": "Ecuador"
                },
                {
                  "value": "Egypt",
                  "label": "Egypt"
                },
                {
                  "value": "El Salvador",
                  "label": "El Salvador"
                },
                {
                  "value": "Equatorial Guinea",
                  "label": "Equatorial Guinea"
                },
                {
                  "value": "Eritrea",
                  "label": "Eritrea"
                },
                {
                  "value": "Estonia",
                  "label": "Estonia"
                },
                {
                  "value": "Ethiopia",
                  "label": "Ethiopia"
                },
                {
                  "value": "Europa Island",
                  "label": "Europa Island"
                },
                {
                  "value": "Falkland Islands (Islas Malvinas)",
                  "label": "Falkland Islands\n                                                        (Islas\n                                                        Malvinas)"
                },
                {
                  "value": "Faroe Islands",
                  "label": "Faroe Islands"
                },
                {
                  "value": "Fiji",
                  "label": "Fiji"
                },
                {
                  "value": "Finland",
                  "label": "Finland"
                },
                {
                  "value": "France",
                  "label": "France"
                },
                {
                  "value": "French Guiana",
                  "label": "French Guiana"
                },
                {
                  "value": "French Polynesia",
                  "label": "French Polynesia"
                },
                {
                  "value": "French Southern and Antarctic Lands",
                  "label": "French Southern\n                                                        and\n                                                        Antarctic\n                                                        Lands"
                },
                {
                  "value": "Gabon",
                  "label": "Gabon"
                },
                {
                  "value": "Gambia",
                  "label": "Gambia"
                },
                {
                  "value": "Gaza Strip",
                  "label": "Gaza Strip"
                },
                {
                  "value": "Georgia",
                  "label": "Georgia"
                },
                {
                  "value": "Germany",
                  "label": "Germany"
                },
                {
                  "value": "Ghana",
                  "label": "Ghana"
                },
                {
                  "value": "Gibraltar",
                  "label": "Gibraltar"
                },
                {
                  "value": "Glorioso Islands",
                  "label": "Glorioso Islands"
                },
                {
                  "value": "Greece",
                  "label": "Greece"
                },
                {
                  "value": "Greenland",
                  "label": "Greenland"
                },
                {
                  "value": "Grenada",
                  "label": "Grenada"
                },
                {
                  "value": "Guadeloupe",
                  "label": "Guadeloupe"
                },
                {
                  "value": "Guam",
                  "label": "Guam"
                },
                {
                  "value": "Guatemala",
                  "label": "Guatemala"
                },
                {
                  "value": "Guernsey",
                  "label": "Guernsey"
                },
                {
                  "value": "Guinea",
                  "label": "Guinea"
                },
                {
                  "value": "Guinea-Bissau",
                  "label": "Guinea-Bissau"
                },
                {
                  "value": "Guyana",
                  "label": "Guyana"
                },
                {
                  "value": "Haiti",
                  "label": "Haiti"
                },
                {
                  "value": "Heard Island and McDonald Islands",
                  "label": "Heard Island and\n                                                        McDonald\n                                                        Islands"
                },
                {
                  "value": "Honduras",
                  "label": "Honduras"
                },
                {
                  "value": "Hong Kong",
                  "label": "Hong Kong"
                },
                {
                  "value": "Howland Island",
                  "label": "Howland Island"
                },
                {
                  "value": "Hungary",
                  "label": "Hungary"
                },
                {
                  "value": "Iceland",
                  "label": "Iceland"
                },
                {
                  "value": "India",
                  "label": "India"
                },
                {
                  "value": "Indian Ocean",
                  "label": "Indian Ocean"
                },
                {
                  "value": "Indonesia",
                  "label": "Indonesia"
                },
                {
                  "value": "Iran",
                  "label": "Iran"
                },
                {
                  "value": "Iraq",
                  "label": "Iraq"
                },
                {
                  "value": "Ireland",
                  "label": "Ireland"
                },
                {
                  "value": "Isle of Man",
                  "label": "Isle of Man"
                },
                {
                  "value": "Israel",
                  "label": "Israel"
                },
                {
                  "value": "Italy",
                  "label": "Italy"
                },
                {
                  "value": "Jamaica",
                  "label": "Jamaica"
                },
                {
                  "value": "Jan Mayen",
                  "label": "Jan Mayen"
                },
                {
                  "value": "Japan",
                  "label": "Japan"
                },
                {
                  "value": "Jarvis Island",
                  "label": "Jarvis Island"
                },
                {
                  "value": "Jersey",
                  "label": "Jersey"
                },
                {
                  "value": "Johnston Atoll",
                  "label": "Johnston Atoll"
                },
                {
                  "value": "Jordan",
                  "label": "Jordan"
                },
                {
                  "value": "Juan de Nova Island",
                  "label": "Juan de Nova Island"
                },
                {
                  "value": "Kazakhstan",
                  "label": "Kazakhstan"
                },
                {
                  "value": "Kenya",
                  "label": "Kenya"
                },
                {
                  "value": "Kingman Reef",
                  "label": "Kingman Reef"
                },
                {
                  "value": "Kiribati",
                  "label": "Kiribati"
                },
                {
                  "value": "Kerguelen Archipelago",
                  "label": "Kerguelen Archipelago"
                },
                {
                  "value": "Kosovo",
                  "label": "Kosovo"
                },
                {
                  "value": "Kuwait",
                  "label": "Kuwait"
                },
                {
                  "value": "Kyrgyzstan",
                  "label": "Kyrgyzstan"
                },
                {
                  "value": "Laos",
                  "label": "Laos"
                },
                {
                  "value": "Latvia",
                  "label": "Latvia"
                },
                {
                  "value": "Lebanon",
                  "label": "Lebanon"
                },
                {
                  "value": "Lesotho",
                  "label": "Lesotho"
                },
                {
                  "value": "Liberia",
                  "label": "Liberia"
                },
                {
                  "value": "Libya",
                  "label": "Libya"
                },
                {
                  "value": "Liechtenstein",
                  "label": "Liechtenstein"
                },
                {
                  "value": "Lithuania",
                  "label": "Lithuania"
                },
                {
                  "value": "Luxembourg",
                  "label": "Luxembourg"
                },
                {
                  "value": "Macau",
                  "label": "Macau"
                },
                {
                  "value": "Macedonia",
                  "label": "Macedonia"
                },
                {
                  "value": "Madagascar",
                  "label": "Madagascar"
                },
                {
                  "value": "Malawi",
                  "label": "Malawi"
                },
                {
                  "value": "Malaysia",
                  "label": "Malaysia"
                },
                {
                  "value": "Maldives",
                  "label": "Maldives"
                },
                {
                  "value": "Mali",
                  "label": "Mali"
                },
                {
                  "value": "Malta",
                  "label": "Malta"
                },
                {
                  "value": "Marshall Islands",
                  "label": "Marshall Islands"
                },
                {
                  "value": "Martinique",
                  "label": "Martinique"
                },
                {
                  "value": "Mauritania",
                  "label": "Mauritania"
                },
                {
                  "value": "Mauritius",
                  "label": "Mauritius"
                },
                {
                  "value": "Mayotte",
                  "label": "Mayotte"
                },
                {
                  "value": "Mexico",
                  "label": "Mexico"
                },
                {
                  "value": "Micronesia",
                  "label": "Micronesia"
                },
                {
                  "value": "Midway Islands",
                  "label": "Midway Islands"
                },
                {
                  "value": "Moldova",
                  "label": "Moldova"
                },
                {
                  "value": "Monaco",
                  "label": "Monaco"
                },
                {
                  "value": "Mongolia",
                  "label": "Mongolia"
                },
                {
                  "value": "Montenegro",
                  "label": "Montenegro"
                },
                {
                  "value": "Montserrat",
                  "label": "Montserrat"
                },
                {
                  "value": "Morocco",
                  "label": "Morocco"
                },
                {
                  "value": "Mozambique",
                  "label": "Mozambique"
                },
                {
                  "value": "Myanmar",
                  "label": "Myanmar"
                },
                {
                  "value": "Namibia",
                  "label": "Namibia"
                },
                {
                  "value": "Nauru",
                  "label": "Nauru"
                },
                {
                  "value": "Navassa Island",
                  "label": "Navassa Island"
                },
                {
                  "value": "Nepal",
                  "label": "Nepal"
                },
                {
                  "value": "Netherlands",
                  "label": "Netherlands"
                },
                {
                  "value": "Netherlands Antilles",
                  "label": "Netherlands Antilles"
                },
                {
                  "value": "New Caledonia",
                  "label": "New Caledonia"
                },
                {
                  "value": "New Zealand",
                  "label": "New Zealand"
                },
                {
                  "value": "Nicaragua",
                  "label": "Nicaragua"
                },
                {
                  "value": "Niger",
                  "label": "Niger"
                },
                {
                  "value": "Nigeria",
                  "label": "Nigeria"
                },
                {
                  "value": "Niue",
                  "label": "Niue"
                },
                {
                  "value": "Norfolk Island",
                  "label": "Norfolk Island"
                },
                {
                  "value": "North Korea",
                  "label": "North Korea"
                },
                {
                  "value": "North Sea",
                  "label": "North Sea"
                },
                {
                  "value": "Northern Mariana Islands",
                  "label": "Northern Mariana Islands"
                },
                {
                  "value": "Norway",
                  "label": "Norway"
                },
                {
                  "value": "Oman",
                  "label": "Oman"
                },
                {
                  "value": "Pacific Ocean",
                  "label": "Pacific Ocean"
                },
                {
                  "value": "Pakistan",
                  "label": "Pakistan"
                },
                {
                  "value": "Palau",
                  "label": "Palau"
                },
                {
                  "value": "Palmyra Atoll",
                  "label": "Palmyra Atoll"
                },
                {
                  "value": "Panama",
                  "label": "Panama"
                },
                {
                  "value": "Papua New Guinea",
                  "label": "Papua New Guinea"
                },
                {
                  "value": "Paracel Islands",
                  "label": "Paracel Islands"
                },
                {
                  "value": "Paraguay",
                  "label": "Paraguay"
                },
                {
                  "value": "Peru",
                  "label": "Peru"
                },
                {
                  "value": "Philippines",
                  "label": "Philippines"
                },
                {
                  "value": "Pitcairn Islands",
                  "label": "Pitcairn Islands"
                },
                {
                  "value": "Poland",
                  "label": "Poland"
                },
                {
                  "value": "Portugal",
                  "label": "Portugal"
                },
                {
                  "value": "Puerto Rico",
                  "label": "Puerto Rico"
                },
                {
                  "value": "Qatar",
                  "label": "Qatar"
                },
                {
                  "value": "Reunion",
                  "label": "Reunion"
                },
                {
                  "value": "Republic of the Congo",
                  "label": "Republic of the Congo"
                },
                {
                  "value": "Romania",
                  "label": "Romania"
                },
                {
                  "value": "Russia",
                  "label": "Russia"
                },
                {
                  "value": "Rwanda",
                  "label": "Rwanda"
                },
                {
                  "value": "Saint Helena",
                  "label": "Saint Helena"
                },
                {
                  "value": "Saint Kitts and Nevis",
                  "label": "Saint Kitts and Nevis"
                },
                {
                  "value": "Saint Lucia",
                  "label": "Saint Lucia"
                },
                {
                  "value": "Saint Pierre and Miquelon",
                  "label": "Saint Pierre and Miquelon"
                },
                {
                  "value": "Saint Vincent and the Grenadines",
                  "label": "Saint Vincent and\n                                                        the\n                                                        Grenadines"
                },
                {
                  "value": "Samoa",
                  "label": "Samoa"
                },
                {
                  "value": "San Marino",
                  "label": "San Marino"
                },
                {
                  "value": "Sao Tome and Principe",
                  "label": "Sao Tome and Principe"
                },
                {
                  "value": "Saudi Arabia",
                  "label": "Saudi Arabia"
                },
                {
                  "value": "Senegal",
                  "label": "Senegal"
                },
                {
                  "value": "Serbia",
                  "label": "Serbia"
                },
                {
                  "value": "Seychelles",
                  "label": "Seychelles"
                },
                {
                  "value": "Sierra Leone",
                  "label": "Sierra Leone"
                },
                {
                  "value": "Singapore",
                  "label": "Singapore"
                },
                {
                  "value": "Slovakia",
                  "label": "Slovakia"
                },
                {
                  "value": "Slovenia",
                  "label": "Slovenia"
                },
                {
                  "value": "Solomon Islands",
                  "label": "Solomon Islands"
                },
                {
                  "value": "Somalia",
                  "label": "Somalia"
                },
                {
                  "value": "South Africa",
                  "label": "South Africa"
                },
                {
                  "value": "South Georgia and the South Sandwich Islands",
                  "label": "South\n                                                        Georgia and\n                                                        the\n                                                        South Sandwich Islands"
                },
                {
                  "value": "South Korea",
                  "label": "South Korea"
                },
                {
                  "value": "Spain",
                  "label": "Spain"
                },
                {
                  "value": "Spratly Islands",
                  "label": "Spratly Islands"
                },
                {
                  "value": "Sri Lanka",
                  "label": "Sri Lanka"
                },
                {
                  "value": "Sudan",
                  "label": "Sudan"
                },
                {
                  "value": "Suriname",
                  "label": "Suriname"
                },
                {
                  "value": "Svalbard",
                  "label": "Svalbard"
                },
                {
                  "value": "Swaziland",
                  "label": "Swaziland"
                },
                {
                  "value": "Sweden",
                  "label": "Sweden"
                },
                {
                  "value": "Switzerland",
                  "label": "Switzerland"
                },
                {
                  "value": "Syria",
                  "label": "Syria"
                },
                {
                  "value": "Taiwan",
                  "label": "Taiwan"
                },
                {
                  "value": "Tajikistan",
                  "label": "Tajikistan"
                },
                {
                  "value": "Tanzania",
                  "label": "Tanzania"
                },
                {
                  "value": "Thailand",
                  "label": "Thailand"
                },
                {
                  "value": "Togo",
                  "label": "Togo"
                },
                {
                  "value": "Tokelau",
                  "label": "Tokelau"
                },
                {
                  "value": "Tonga",
                  "label": "Tonga"
                },
                {
                  "value": "Trinidad and Tobago",
                  "label": "Trinidad and Tobago"
                },
                {
                  "value": "Tromelin Island",
                  "label": "Tromelin Island"
                },
                {
                  "value": "Tunisia",
                  "label": "Tunisia"
                },
                {
                  "value": "Turkey",
                  "label": "Turkey"
                },
                {
                  "value": "Turkmenistan",
                  "label": "Turkmenistan"
                },
                {
                  "value": "Turks and Caicos Islands",
                  "label": "Turks and Caicos Islands"
                },
                {
                  "value": "Tuvalu",
                  "label": "Tuvalu"
                },
                {
                  "value": "Uganda",
                  "label": "Uganda"
                },
                {
                  "value": "Ukraine",
                  "label": "Ukraine"
                },
                {
                  "value": "United Arab Emirates",
                  "label": "United Arab Emirates"
                },
                {
                  "value": "United Kingdom",
                  "label": "United Kingdom"
                },
                {
                  "value": "USA",
                  "label": "USA"
                },
                {
                  "value": "Uruguay",
                  "label": "Uruguay"
                },
                {
                  "value": "Uzbekistan",
                  "label": "Uzbekistan"
                },
                {
                  "value": "Vanuatu",
                  "label": "Vanuatu"
                },
                {
                  "value": "Venezuela",
                  "label": "Venezuela"
                },
                {
                  "value": "Viet Nam",
                  "label": "Viet Nam"
                },
                {
                  "value": "Virgin Islands",
                  "label": "Virgin Islands"
                },
                {
                  "value": "Wake Island",
                  "label": "Wake Island"
                },
                {
                  "value": "Wallis and Futuna",
                  "label": "Wallis and Futuna"
                },
                {
                  "value": "West Bank",
                  "label": "West Bank"
                },
                {
                  "value": "Western Sahara",
                  "label": "Western Sahara"
                },
                {
                  "value": "Yemen",
                  "label": "Yemen"
                },
                {
                  "value": "Yugoslavia",
                  "label": "Yugoslavia"
                },
                {
                  "value": "Zambia",
                  "label": "Zambia"
                },
                {
                  "value": "Zimbabwe",
                  "label": "Zimbabwe"
                }
              ]
        },
        { "id": "industry", "type": "select", "label": "Industry", "options": [{ "value": "finance", "label": "Banking, Accounting, and Financial" }, { "value": "healthcare", "label": "Healthcare Services" }, { "value": "insurance", "label": "Insurance" }] },
        { "id": "subscribe", "type": "checkbox", "label": "Subscribe to newsletter" },
        { "id": "question", "type": "select", "label": "Pick any three", "options": [{ "value": "1", "label": "1" }, { "value": "2", "label": "2" }, { "value": "3", "label": "3" }] }],
    "specialFields":
        [{ "id": "question2", "type": "select", "label": "Pick any two", "options": [{ "value": "1", "label": "1" }, { "value": "2", "label": "2" }] }],
    "privacy": {
        "link": "",
        "companyName": ""
    }
}

export const formDataTemplateString = JSON.stringify(formDataTemplate, null, 4);