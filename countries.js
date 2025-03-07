// countries data structure
let countriesAndContinents;

countriesAndContinents = [
  { country: "Afghanistan", continent: "Asia" },
  { country: "Albania", continent: "Europe" },
  { country: "Algeria", continent: "Africa" },
  { country: "Andorra", continent: "Europe" },
  { country: "Angola", continent: "Africa" },
  { country: "Antigua and Barbuda", continent: "North America" },
  { country: "Argentina", continent: "South America" },
  { country: "Armenia", continent: "Asia" },
  { country: "Australia", continent: "Oceania" },
  { country: "Austria", continent: "Europe" },
  { country: "Azerbaijan", continent: "Asia" },
  { country: "Bahamas", continent: "North America" },
  { country: "Bahrain", continent: "Asia" },
  { country: "Bangladesh", continent: "Asia" },
  { country: "Barbados", continent: "North America" },
  { country: "Belarus", continent: "Europe" },
  { country: "Belgium", continent: "Europe" },
  { country: "Belize", continent: "North America" },
  { country: "Benin", continent: "Africa" },
  { country: "Bhutan", continent: "Asia" },
  { country: "Bolivia", continent: "South America" },
  { country: "Bosnia and Herzegovina", continent: "Europe" },
  { country: "Botswana", continent: "Africa" },
  { country: "Brazil", continent: "South America" },
  { country: "Brunei", continent: "Asia" },
  { country: "Bulgaria", continent: "Europe" },
  { country: "Burkina Faso", continent: "Africa" },
  { country: "Burundi", continent: "Africa" },
  { country: ["Cape Verde", "Cabo Verde"], continent: "Africa" },
  { country: "Cambodia", continent: "Asia" },
  { country: "Cameroon", continent: "Africa" },
  { country: "Canada", continent: "North America" },
  { country: ["Central African Republic", "CAR"], continent: "Africa" },
  { country: "Chad", continent: "Africa" },
  { country: "Chile", continent: "South America" },
  { country: "China", continent: "Asia" },
  { country: "Colombia", continent: "South America" },
  { country: "Comoros", continent: "Africa" },
  { country: "Costa Rica", continent: "North America" },
  { country: "Croatia", continent: "Europe" },
  { country: "Cuba", continent: "North America" },
  { country: "Cyprus", continent: "Asia" },
  { country: ["Czechia", "Czech Republic"], continent: "Europe" },
  {
    country: [
      "Democratic Republic of the Congo",
      "Democratic Republic of Congo",
      "DRC",
    ],
    continent: "Africa",
  },
  { country: "Denmark", continent: "Europe" },
  { country: "Djibouti", continent: "Africa" },
  { country: "Dominica", continent: "North America" },
  { country: "Dominican Republic", continent: "North America" },
  { country: "Ecuador", continent: "South America" },
  { country: "Egypt", continent: "Africa" },
  { country: "El Salvador", continent: "North America" },
  { country: "Equatorial Guinea", continent: "Africa" },
  { country: "Eritrea", continent: "Africa" },
  { country: "Estonia", continent: "Europe" },
  { country: "Eswatini", continent: "Africa" },
  { country: "Ethiopia", continent: "Africa" },
  { country: "Fiji", continent: "Oceania" },
  { country: "Finland", continent: "Europe" },
  { country: "France", continent: "Europe" },
  { country: "Gabon", continent: "Africa" },
  { country: "Gambia", continent: "Africa" },
  { country: "Georgia", continent: "Asia" },
  { country: "Germany", continent: "Europe" },
  { country: "Ghana", continent: "Africa" },
  { country: "Greece", continent: "Europe" },
  { country: "Grenada", continent: "North America" },
  { country: "Guatemala", continent: "North America" },
  { country: "Guinea", continent: "Africa" },
  { country: "Guinea-Bissau", continent: "Africa" },
  { country: "Guyana", continent: "South America" },
  { country: "Haiti", continent: "North America" },
  { country: "Honduras", continent: "North America" },
  { country: "Hungary", continent: "Europe" },
  { country: "Iceland", continent: "Europe" },
  { country: "India", continent: "Asia" },
  { country: "Indonesia", continent: "Asia" },
  { country: "Iran", continent: "Asia" },
  { country: "Iraq", continent: "Asia" },
  { country: "Ireland", continent: "Europe" },
  { country: "Israel", continent: "Asia" },
  { country: "Ivory Coast", continent: "Africa" },
  { country: "Italy", continent: "Europe" },
  { country: "Jamaica", continent: "North America" },
  { country: "Japan", continent: "Asia" },
  { country: "Jordan", continent: "Asia" },
  { country: "Kazakhstan", continent: "Asia" },
  { country: "Kenya", continent: "Africa" },
  { country: "Kiribati", continent: "Oceania" },
  { country: "Kosovo", continent: "Europe" },
  { country: "Kuwait", continent: "Asia" },
  { country: "Kyrgyzstan", continent: "Asia" },
  { country: "Laos", continent: "Asia" },
  { country: "Latvia", continent: "Europe" },
  { country: "Lebanon", continent: "Asia" },
  { country: "Lesotho", continent: "Africa" },
  { country: "Liberia", continent: "Africa" },
  { country: "Libya", continent: "Africa" },
  { country: "Liechtenstein", continent: "Europe" },
  { country: "Lithuania", continent: "Europe" },
  { country: "Luxembourg", continent: "Europe" },
  { country: "Madagascar", continent: "Africa" },
  { country: "Malawi", continent: "Africa" },
  { country: "Malaysia", continent: "Asia" },
  { country: "Maldives", continent: "Asia" },
  { country: "Mali", continent: "Africa" },
  { country: "Malta", continent: "Europe" },
  { country: "Marshall Islands", continent: "Oceania" },
  { country: "Mauritania", continent: "Africa" },
  { country: "Mauritius", continent: "Africa" },
  { country: "Mexico", continent: "North America" },
  { country: "Micronesia", continent: "Oceania" },
  { country: "Moldova", continent: "Europe" },
  { country: "Monaco", continent: "Europe" },
  { country: "Mongolia", continent: "Asia" },
  { country: "Montenegro", continent: "Europe" },
  { country: "Morocco", continent: "Africa" },
  { country: "Mozambique", continent: "Africa" },
  { country: "Myanmar", continent: "Asia" },
  { country: "Namibia", continent: "Africa" },
  { country: "Nauru", continent: "Oceania" },
  { country: "Nepal", continent: "Asia" },
  { country: "Netherlands", continent: "Europe" },
  { country: "New Zealand", continent: "Oceania" },
  { country: "Nicaragua", continent: "North America" },
  { country: "Niger", continent: "Africa" },
  { country: "Nigeria", continent: "Africa" },
  { country: "North Macedonia", continent: "Europe" },
  { country: "North Korea", continent: "Asia" },
  { country: "Norway", continent: "Europe" },
  { country: "Oman", continent: "Asia" },
  { country: "Pakistan", continent: "Asia" },
  { country: "Palau", continent: "Oceania" },
  { country: "Palestine", continent: "Asia" },
  { country: "Panama", continent: "North America" },
  { country: "Papua New Guinea", continent: "Oceania" },
  { country: "Paraguay", continent: "South America" },
  { country: "Peru", continent: "South America" },
  { country: "Philippines", continent: "Asia" },
  { country: "Poland", continent: "Europe" },
  { country: "Portugal", continent: "Europe" },
  { country: "Qatar", continent: "Asia" },
  {
    country: ["Republic of the Congo", "Republic of Congo"],
    continent: "Africa",
  },
  { country: "Romania", continent: "Europe" },
  { country: "Russia", continent: "Europe" },
  { country: "Rwanda", continent: "Africa" },
  {
    country: ["Saint Kitts and Nevis", "St Kitts and Nevis"],
    continent: "North America",
  },
  { country: ["Saint Lucia", "St Lucia"], continent: "North America" },
  {
    country: [
      "Saint Vincent and the Grenadines",
      "Saint Vincent and Grenadines",
      "St Vincent and the Grenadines",
      "St Vincent and Grenadines",
    ],
    continent: "North America",
  },
  { country: "Samoa", continent: "Oceania" },
  { country: "San Marino", continent: "Europe" },
  {
    country: ["Sao Tome and Principe", "Sao Tome y Principe"],
    continent: "Africa",
  },
  { country: "Saudi Arabia", continent: "Asia" },
  { country: "Senegal", continent: "Africa" },
  { country: "Serbia", continent: "Europe" },
  { country: "Seychelles", continent: "Africa" },
  { country: "Sierra Leone", continent: "Africa" },
  { country: "Singapore", continent: "Asia" },
  { country: "Slovakia", continent: "Europe" },
  { country: "Slovenia", continent: "Europe" },
  { country: "Solomon Islands", continent: "Oceania" },
  { country: "Somalia", continent: "Africa" },
  { country: "South Africa", continent: "Africa" },
  { country: "South Korea", continent: "Asia" },
  { country: "South Sudan", continent: "Africa" },
  { country: "Spain", continent: "Europe" },
  { country: "Sri Lanka", continent: "Asia" },
  { country: "Sudan", continent: "Africa" },
  { country: "Suriname", continent: "South America" },
  { country: "Sweden", continent: "Europe" },
  { country: "Switzerland", continent: "Europe" },
  { country: "Syria", continent: "Asia" },
  { country: "Taiwan", continent: "Asia" },
  { country: "Tajikistan", continent: "Asia" },
  { country: "Tanzania", continent: "Africa" },
  { country: "Thailand", continent: "Asia" },
  { country: "Timor-Leste", continent: "Asia" },
  { country: "Togo", continent: "Africa" },
  { country: "Tonga", continent: "Oceania" },
  { country: "Trinidad and Tobago", continent: "North America" },
  { country: "Tunisia", continent: "Africa" },
  { country: "Turkey", continent: "Asia" },
  { country: "Turkmenistan", continent: "Asia" },
  { country: "Tuvalu", continent: "Oceania" },
  { country: "Uganda", continent: "Africa" },
  { country: "Ukraine", continent: "Europe" },
  { country: ["United Arab Emirates", "UAE"], continent: "Asia" },
  { country: ["United Kingdom", "UK"], continent: "Europe" },
  {
    country: ["United States of America", "United States", "USA"],
    continent: "North America",
  },
  { country: "Uruguay", continent: "South America" },
  { country: "Uzbekistan", continent: "Asia" },
  { country: "Vanuatu", continent: "Oceania" },
  { country: "Vatican City", continent: "Europe" },
  { country: "Venezuela", continent: "South America" },
  { country: "Vietnam", continent: "Asia" },
  { country: "Yemen", continent: "Asia" },
  { country: "Zambia", continent: "Africa" },
  { country: "Zimbabwe", continent: "Africa" },
];

export default countriesAndContinents;
