"use client";

import React, { Fragment } from "react";

const CourseInquireModal = () => {

  

  return (
    <Fragment>
      <div
        className="modal fade show"
        id="inquiryModal"
        tabIndex={-1}
        aria-labelledby="inquiryModalLabel"
        aria-modal="true"
        role="dialog"
        style={{ display: "block", paddingLeft: "0px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h5>Get in Touch with us</h5>
              <div className="form-wrap">
                <form id="myForm">
                  <div className="con-form-row">
                    <div className="con-form-col">
                      <label htmlFor="">First Name *</label>
                      <input type="text" name="first-name" id="first-name" />
                    </div>
                    <div className="con-form-col">
                      <label htmlFor="">Last Name *</label>
                      <input type="text" name="last-name" id="last-name" />
                    </div>
                  </div>
                  <div className="con-form-row">
                    <div className="con-form-col">
                      <label htmlFor="">Phone *</label>
                      <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="con-form-col">
                      <label htmlFor="">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="con-form-row">
                    <div className="con-form-col w-100">
                      <label htmlFor="">Nationality *</label>
                      <select
                        name="nationality"
                        id="nationality"
                        className="nationality"
                      >
                        <option value="">Select Nationality</option>
                        <option value="AF">Afghan</option>
                        <option
                          value="Albanian"
                          data-select2-id="select2-data-1214-q2xo"
                        >
                          Albanian
                        </option>
                        <option value="Algerian">Algerian</option>
                        <option value="American">American</option>
                        <option value="American Samoan">American Samoan</option>
                        <option value="Andorran">Andorran</option>
                        <option value="Angolan">Angolan</option>
                        <option value="Anguillan">Anguillan</option>
                        <option value="Antarctican">Antarctican</option>
                        <option value="Antigua and Barbuda national">
                          Antigua and Barbuda national
                        </option>
                        <option value="Antillean">Antillean</option>
                        <option value="Argentinian">Argentinian</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Aruban">Aruban</option>
                        <option value="Australian">Australian</option>
                        <option value="Austrian">Austrian</option>
                        <option value="Azerbaijani">Azerbaijani</option>
                        <option value="Bahamian">Bahamian</option>
                        <option value="Bahraini">Bahraini</option>
                        <option value="Bangladeshi">Bangladeshi</option>
                        <option value="Barbadian">Barbadian</option>
                        <option value="Basotho">Basotho</option>
                        <option value="Belarusian">Belarusian</option>
                        <option value="Belgian">Belgian</option>
                        <option value="Belizean">Belizean</option>
                        <option value="Beninese">Beninese</option>
                        <option value="Bermudian">Bermudian</option>
                        <option value="Bhutanese">Bhutanese</option>
                        <option value="Bolivian">Bolivian</option>
                        <option value="Bosnia and Herzegovina national">
                          Bosnia and Herzegovina national
                        </option>
                        <option value="Botswanan">Botswanan</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazilian">Brazilian</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="British Virgin Islander">
                          British Virgin Islander
                        </option>
                        <option value="Briton">Briton</option>
                        <option value="Bruneian">Bruneian</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Burkinabe">Burkinabe</option>
                        <option value="Burmese">Burmese</option>
                        <option value="Burundian">Burundian</option>
                        <option value="Cambodian">Cambodian</option>
                        <option value="Cameroonian">Cameroonian</option>
                        <option value="Canadian">Canadian</option>
                        <option value="Cape Verdean">Cape Verdean</option>
                        <option value="Caymanian">Caymanian</option>
                        <option value="Central African">Central African</option>
                        <option value="Chadian">Chadian</option>
                        <option value="Chilean">Chilean</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Christmas Islander">
                          Christmas Islander
                        </option>
                        <option value="Cocos Islander">Cocos Islander</option>
                        <option value="Colombian">Colombian</option>
                        <option value="Comorian">Comorian</option>
                        <option value="Congolese">Congolese</option>
                        <option value="Congolese">Congolese</option>
                        <option value="Cook Islander">Cook Islander</option>
                        <option value="Costa Rican">Costa Rican</option>
                        <option value="Croat">Croat</option>
                        <option value="Cuban">Cuban</option>
                        <option value="Cypriot">Cypriot</option>
                        <option value="Czech">Czech</option>
                        <option value="Dane">Dane</option>
                        <option value="Djiboutian">Djiboutian</option>
                        <option value="Dominican">Dominican</option>
                        <option value="Dominican">Dominican</option>
                        <option value="East Timorese">East Timorese</option>
                        <option value="Ecuadorian">Ecuadorian</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="Emirian">Emirian</option>
                        <option value="Equatorial Guinean">
                          Equatorial Guinean
                        </option>
                        <option value="Eritrean">Eritrean</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Ethiopian">Ethiopian</option>
                        <option value="Faeroese">Faeroese</option>
                        <option value="Falkland Islander">
                          Falkland Islander
                        </option>
                        <option value="Fiji Islander">Fiji Islander</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Finn">Finn</option>
                        <option value="French">French</option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabonese">Gabonese</option>
                        <option value="Gambian">Gambian</option>
                        <option value="Georgian">Georgian</option>
                        <option value="German">German</option>
                        <option value="Ghanaian">Ghanaian</option>
                        <option value="Gibraltarian">Gibraltarian</option>
                        <option value="Greek">Greek</option>
                        <option value="Greenlander">Greenlander</option>
                        <option value="Grenadian">Grenadian</option>
                        <option value="Guadeloupean">Guadeloupean</option>
                        <option value="Guamanian">Guamanian</option>
                        <option value="Guatemalan">Guatemalan</option>
                        <option value="Guianese">Guianese</option>
                        <option value="Guinea-Bissau national">
                          Guinea-Bissau national
                        </option>
                        <option value="Guinean">Guinean</option>
                        <option value="Guyanese">Guyanese</option>
                        <option value="Haitian">Haitian</option>
                        <option value="Heard Island and McDonald Islands">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="Honduran">Honduran</option>
                        <option value="Hong Kong Chinese">
                          Hong Kong Chinese
                        </option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Icelander">Icelander</option>
                        <option value="Indian">Indian</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Iranian">Iranian</option>
                        <option value="Iraqi">Iraqi</option>
                        <option value="Irish">Irish</option>
                        <option value="Israeli">Israeli</option>
                        <option value="Italian">Italian</option>
                        <option value="Ivorian">Ivorian</option>
                        <option value="Jamaican">Jamaican</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Jordanian">Jordanian</option>
                        <option value="Kazakh">Kazakh</option>
                        <option value="Kenyan">Kenyan</option>
                        <option value="Kiribatian">Kiribatian</option>
                        <option value="Kuwaiti">Kuwaiti</option>
                        <option value="Kyrgyz">Kyrgyz</option>
                        <option value="Lao">Lao</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lebanese">Lebanese</option>
                        <option value="Liberian">Liberian</option>
                        <option value="Libyan">Libyan</option>
                        <option value="Liechtensteiner">Liechtensteiner</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Luxembourger">Luxembourger</option>
                        <option value="Macanese">Macanese</option>
                        <option value="Macedonian">Macedonian</option>
                        <option value="Mahorais">Mahorais</option>
                        <option value="Malagasy">Malagasy</option>
                        <option value="Malawian">Malawian</option>
                        <option value="Malaysian">Malaysian</option>
                        <option value="Maldivian">Maldivian</option>
                        <option value="Malian">Malian</option>
                        <option value="Maltese">Maltese</option>
                        <option value="Marshallese">Marshallese</option>
                        <option value="Martinican">Martinican</option>
                        <option value="Mauritanian">Mauritanian</option>
                        <option value="Mauritian">Mauritian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Micronesian">Micronesian</option>
                        <option value="Moldovan">Moldovan</option>
                        <option value="Monegasque">Monegasque</option>
                        <option value="Mongolian">Mongolian</option>
                        <option value="Montenegrian">Montenegrian</option>
                        <option value="Montserratian">Montserratian</option>
                        <option value="Moroccan">Moroccan</option>
                        <option value="Mozambican">Mozambican</option>
                        <option value="Namibian">Namibian</option>
                        <option value="Nauruan">Nauruan</option>
                        <option value="Nepalese">Nepalese</option>
                        <option value="Netherlander">Netherlander</option>
                        <option value="New Caledonian">New Caledonian</option>
                        <option value="New Zealander">New Zealander</option>
                        <option value="Nicaraguan">Nicaraguan</option>
                        <option value="Nigerian">Nigerian</option>
                        <option value="Nigerien">Nigerien</option>
                        <option value="Niuean">Niuean</option>
                        <option value="Norfolk Islander">
                          Norfolk Islander
                        </option>
                        <option value="North Korean">North Korean</option>
                        <option value="Northern Mariana Islander">
                          Northern Mariana Islander
                        </option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Omani">Omani</option>
                        <option value="Pakistani">Pakistani</option>
                        <option value="Palauan">Palauan</option>
                        <option value="Panamanian">Panamanian</option>
                        <option value="Papua New Guinean">
                          Papua New Guinean
                        </option>
                        <option value="Paraguayan">Paraguayan</option>
                        <option value="Peruvian">Peruvian</option>
                        <option value="Pitcairner">Pitcairner</option>
                        <option value="Pole">Pole</option>
                        <option value="Polynesian">Polynesian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Puerto Rican">Puerto Rican</option>
                        <option value="Qatari">Qatari</option>
                        <option value="Reunionese">Reunionese</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Rwandan">Rwandan</option>
                        <option value="Sahrawi">Sahrawi</option>
                        <option value="Saint Helenian">Saint Helenian</option>
                        <option value="Saint Kitts and Nevis national">
                          Saint Kitts and Nevis national
                        </option>
                        <option value="Saint Lucian">Saint Lucian</option>
                        <option value="Saint Pierre and Miquelon national">
                          Saint Pierre and Miquelon national
                        </option>
                        <option value="Salvadorian">Salvadorian</option>
                        <option value="Samoan">Samoan</option>
                        <option value="San Marinese">San Marinese</option>
                        <option value="São Toméan">São Toméan</option>
                        <option value="Saudi Arabian">Saudi Arabian</option>
                        <option value="Senegalese">Senegalese</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Seychellois">Seychellois</option>
                        <option value="Sierra Leonean">Sierra Leonean</option>
                        <option value="Singaporean">Singaporean</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovene">Slovene</option>
                        <option value="Solomon Islander">
                          Solomon Islander
                        </option>
                        <option value="Somali">Somali</option>
                        <option value="South African">South African</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Korean">South Korean</option>
                        <option value="Spaniard">Spaniard</option>
                        <option value="Sri Lankan">Sri Lankan</option>
                        <option value="Sudanese">Sudanese</option>
                        <option value="Surinamer">Surinamer</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swazi">Swazi</option>
                        <option value="Swede">Swede</option>
                        <option value="Swiss">Swiss</option>
                        <option value="Syrian">Syrian</option>
                        <option value="Taiwanese">Taiwanese</option>
                        <option value="Tajik">Tajik</option>
                        <option value="Tanzanian">Tanzanian</option>
                        <option value="Thai">Thai</option>
                        <option value="Togolese">Togolese</option>
                        <option value="Tokelauan">Tokelauan</option>
                        <option value="Tongan">Tongan</option>
                        <option value="Trinidad and Tobago national">
                          Trinidad and Tobago national
                        </option>
                        <option value="Tunisian">Tunisian</option>
                        <option value="Turk">Turk</option>
                        <option value="Turkmen">Turkmen</option>
                        <option value="Turks and Caicos Islander">
                          Turks and Caicos Islander
                        </option>
                        <option value="Tuvaluan">Tuvaluan</option>
                        <option value="Ugandan">Ugandan</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguayan">Uruguayan</option>
                        <option value="US Virgin Islander">
                          US Virgin Islander
                        </option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Vanuatuan">Vanuatuan</option>
                        <option value="Vatican">Vatican</option>
                        <option value="Venezuelan">Venezuelan</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Vincentian">Vincentian</option>
                        <option value="Wallis and Futuna Islander">
                          Wallis and Futuna Islander
                        </option>
                        <option value="Yemeni">Yemeni</option>
                        <option value="Zambian">Zambian</option>
                        <option value="Zimbabwean">Zimbabwean</option>
                        <option value="Åland Islander">Åland Islander</option>
                      </select>
                    </div>
                  </div>
                  <div className="con-form-row">
                    <div className="con-form-col w-100">
                      <label htmlFor="">NIC/Passport</label>
                      <input type="text" name="nic" id="nic" />
                    </div>
                  </div>
                  {/* <div class="con-form-row">
                     <div class="con-form-col w-100">
                     <label for="">Branch</label>
                       <select name="branch" id="branch" class="branch">
                         <option value="" >Select Branch</option>
                                                    <option value="Online">ESOFT Online</option>
                                                      <option value="OGF Premier">Campus One <span> &#8211; One Galle Face Business Tower </span></option>
                                                      <option value="Jaffna">ESOFT Metro Campus &#8211; Jaffna</option>
                                                      <option value="Wennappuwa">ESOFT Metro College – Wennappuwa</option>
                                                      <option value="Wattala">ESOFT Metro College – Wattala</option>
                                                      <option value="Trincomalee">ESOFT Metro College – Trincomalee</option>
                                                      <option value="Tangalle">ESOFT Metro College – Tangalle</option>
                                                      <option value="Rathnapura">ESOFT Metro College – Rathnapura</option>
                                                      <option value="Polonnaruwa">ESOFT Metro College – Polonnaruwa</option>
                                                      <option value="Piliyandala">ESOFT Metro College – Piliyandala</option>
                                                      <option value="Panadura">ESOFT Metro College – Panadura</option>
                                                      <option value="Nittambuwa">ESOFT Metro College – Nittambuwa</option>
                                                      <option value="Narammala">ESOFT Metro College – Narammala</option>
                                                      <option value="Monaragala">ESOFT Metro College – Monaragala</option>
                                                      <option value="Matara">ESOFT Metro Campus &#8211; Matara</option>
                                                      <option value="Matale">ESOFT Metro College – Matale</option>
                                                      <option value="Kuliyapitiya">ESOFT Metro College – Kuliyapitiya</option>
                                                      <option value="Kiribathgoda">ESOFT Metro College – Kiribathgoda</option>
                                                      <option value="Kegalle">ESOFT Metro College – Kegalle</option>
                                                      <option value="Katubedda">ESOFT College of Engineering and Technology &#8211; Katubedda</option>
                                                      <option value="Kalutara">ESOFT Metro College &#8211; Kalutara</option>
                                                      <option value="Ja-Ela">ESOFT Metro College &#8211; Ja Ela</option>
                                                      <option value="Hatton">ESOFT Metro College &#8211; Hatton</option>
                                                      <option value="Galle">ESOFT Metro Campus &#8211; Galle</option>
                                                      <option value="Ampara">ESOFT Metro College &#8211; Ampara</option>
                                                      <option value="Anuradapura">ESOFT Metro College &#8211; Anuradapura</option>
                                                      <option value="Embilipitiya">ESOFT Metro College &#8211; Embilipitiya</option>
                                                      <option value="Dambulla">ESOFT Metro College &#8211; Dambulla</option>
                                                      <option value="Chilaw">ESOFT Metro College &#8211; Chilaw</option>
                                                      <option value="Batticaloa">ESOFT Metro Campus &#8211; Batticaloa</option>
                                                      <option value="Bandarawela">ESOFT Metro College &#8211; Bandarawela</option>
                                                      <option value="Badulla">ESOFT Metro College &#8211; Badulla</option>
                                                      <option value="Avissawella">ESOFT Metro College &#8211; Avissawella</option>
                                                      <option value="Negombo">ESOFT Metro Campus &#8211; Negombo</option>
                                                      <option value="Nugegoda">ESOFT Metro Campus &#8211; Nugegoda</option>
                                                      <option value="Kurunegala">ESOFT Metro Campus &#8211; Kurunegala</option>
                                                      <option value="Kandy">ESOFT Metro Campus &#8211; Kandy</option>
                                                      <option value="Gampaha">ESOFT Metro Campus &#8211; Gampaha</option>
                                                      <option value="Colombo">ESOFT Metro Campus &#8211; Bambalapitiya (Head Office)</option>
                                                  </select>
                     </div>
                     </div> */}
                  <div className="con-form-row">
                    <div className="con-form-col w-100">
                      <label htmlFor="branch">Branch</label>
                      {/* </?php var_dump($branch_list);?> */}
                      <select
                        name="branch"
                        id="branch"
                        className="branch-select"
                      >
                        <option value="">Select Branch</option>
                        {/* Branch Select Dropdown */}
                        {/* Output branch name and id as option */}
                        <option value="Colombo">Colombo</option>
                        {/* Output branch name and id as option */}
                        <option value="Kandy">Kandy</option>
                        {/* Output branch name and id as option */}
                        <option value="Online">Online</option>
                      </select>
                    </div>
                  </div>
                  <div className="con-form-row">
                    <div className="con-form-col w-100">
                      <label htmlFor="">Academic Programme *</label>
                      <p className="paragraph paragraph--blue">
                        BSc (Hons) in Data Science (TOP UP) – London Met
                        University (UK)
                      </p>
                      <select
                        name="course-list"
                        id="course-list"
                        className="course-list
                           visible-hiddeb-select                           "
                      >
                        <option value="">Select Course</option>
                        <option value="DIAE">
                          Assured Diploma in Academic English
                        </option>
                        <option value="DIBE">
                          Assured Diploma in Business English
                        </option>
                        <option value="LMU-T-BBA">
                          BA (Hons) in Business Administration (TOP UP) – London
                          Met University (UK)
                        </option>
                        <option value="LMU-T-BAF">
                          BA (Hons) in Fashion (TOP UP) – London Metropolitan
                          University (UK)
                        </option>
                        <option value="LMU-T-BHM">
                          BA (Hons) in Hospitality Management (TOP UP) – London
                          Met University
                        </option>
                        <option value="LMU-T-BAM">
                          BA (Hons) in Marketing (TOP UP) – London Metropolitan
                          University (UK)
                        </option>
                        <option value="LMU-T-BTTM">
                          BA (Hons) in Travel &amp; Tourism Management (TOP UP)
                          – London Met University
                        </option>
                        <option value="ESOFT-BBM">
                          Bachelor of Business Management (BBM Hons Degree) –
                          ESOFT Metro Campus
                        </option>
                        <option value="UCSC-BIT-PRJ">
                          Bachelor of Information Technology (BIT External
                          Degree) – University Of Colombo (UCSC) – Profession
                        </option>
                        <option value="UCSC-BIT-SEM-1">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 1
                        </option>
                        <option value="UCSC-BIT-SEM-2">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 2
                        </option>
                        <option value="UCSC-BIT-SEM-3">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 3
                        </option>
                        <option value="UCSC-BIT-SEM-4">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 4
                        </option>
                        <option value="UCSC-BIT-SEM-5">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 5
                        </option>
                        <option value="UCSC-BIT-SEM-6">
                          Bachelor of Information Technology (BIT External
                          Degree) – University of Colombo (UCSC) – Semester 6
                        </option>
                        <option value="ESOFT-BIT">
                          Bachelor of Information Technology Honours Degree (
                          BIT Hons Degree ) – ESOFT Metro Campus
                        </option>
                        <option value="LMU-T-BENG-CNCS">
                          BEng (Hons) Computer Networking and Cloud Security
                          (TOP UP) – London Met University (UK)
                        </option>
                        <option value="LMU-T-BENG-CSER">
                          BEng (Hons) Computer Systems Engineering and Robotics
                          (TOP UP) – London Met University (UK)
                        </option>
                        <option value="LMU-T-BENG-BME">
                          BEng (Hons) in Biomedical Engineering (TOP UP) –
                          London Metropolitan University (UK)
                        </option>
                        <option value="KU-T-BENG-CE/25">
                          BEng (Hons) in Civil Engineering (TOP UP) – 2025 –
                          Kingston University (UK)
                        </option>
                        <option value="LMU-T-BENG-CN">
                          BEng (Hons) in Computer Networking (Top UP) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="KU-T-BENG-EEE">
                          BEng (Hons) in Electrical &amp; Electronic Engineering
                          (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="KU-T-BENG-ECE">
                          BEng (Hons) in Electronic &amp; Communication
                          Engineering (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="KU-T-BENG-ME/25">
                          BEng (Hons) in Mechanical Engineering (TOP UP) – 2025
                          – Kingston University (UK)
                        </option>
                        <option value="LMU-T-BENG-SE">
                          BEng (Hons) in Software Engineering (TOP UP) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="HND-BME/UK-T">
                          British Biomedical Degree
                        </option>
                        <option value="HND-BUS/UK-T">
                          British Business Degree (3 Specializations)
                        </option>
                        <option value="HND-FT/UK-T">
                          British Fashion Degree
                        </option>
                        <option value="HND-HM/UK-T">
                          British Hospitality Management Degree
                        </option>
                        <option value="HND-IT/UK-T">
                          British IT Degree (10 Specializations)
                        </option>
                        <option value="HND-PSY/UK-T">
                          British Psychology Degree
                        </option>
                        <option value="HND-TTM/UK-T">
                          British Travel &amp; Tourism Management Degree
                        </option>
                        <option value="LMU-T-BSC-BCS">
                          BSc (Hons) Business Computer Systems (TOP UP) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="KU-T-BSC-NNS">
                          BSc (Hons) Computing Science in Network &amp; Network
                          Security (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="KU-T-BSC-SE">
                          BSc (Hons) Computing Science in Software Engineering
                          (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="KU-T-BSC-WMAD">
                          BSc (Hons) Computing Science in Web &amp; Mobile App
                          Development (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="LMU-T-BSC-BF">
                          BSc (Hons) in Banking and Finance (TOP UP) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="LMU-T-BSC-COM">
                          BSc (Hons) in Computing (TOP UP) – London Metropolitan
                          University (UK)
                        </option>
                        <option value="KU-T-CSDF">
                          BSc (Hons) in Cyber Security &amp; Digital Forensics
                          (TOP UP) – Kingston University (UK)
                        </option>
                        <option value="LMU-T-BSC-DS">
                          BSc (Hons) in Data Science (TOP UP) – London Met
                          University (UK)
                        </option>
                        <option value="KU-T-MT">
                          BSc (Hons) in Multimedia Technology (TOP UP) –
                          Kingston University
                        </option>
                        <option value="LMU-T-BSC-NUR">
                          BSc (Hons) in Nursing (TOP UP) – London Metropolitan
                          University (UK)
                        </option>
                        <option value="LMU-3-BSC-PSY">
                          BSc (Hons) in Psychology – London Metropolitan
                          University (UK)
                        </option>
                        <option value="LMU-4-BSC-PSY">
                          BSc (Hons) in Psychology (Including Foundation Year) –
                          London Metropolitan University (UK)
                        </option>
                        <option value="LMU-T-BSC-PSY">
                          BSc (Hons) in Psychology (TOP UP) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="KU-T-BSC-QS/25">
                          BSc (Hons) in Quantity Surveying (TOP UP) – 2025 –
                          Kingston University (UK)
                        </option>
                        <option value="HND-BME">
                          BTEC Higher National diploma in Biomedical Engineering
                        </option>
                        <option value="CEQ-KET">
                          Cambridge English Qualifications (Essential English) –
                          KET
                        </option>
                        <option value="CEQ-PET">
                          Cambridge English Qualifications (Practical English) –
                          PET
                        </option>
                        <option value="CIE">Certificate in English</option>
                        <option value="DIE">Diploma in English</option>
                        <option value="MGU-DBA">
                          Doctor of Business Administration – Manipal GlobalNXT
                          University
                        </option>
                        <option value="KU-PHD">
                          Doctor of Philosophy (PhD) – Kingston University (UK)
                        </option>
                        <option value="IIC-PHD-IT">
                          Doctor of Philosophy in Information Technology – IIC
                          University of Technology (Cambodia)
                        </option>
                        <option value="IIC-PHD-MGT">
                          Doctor of Philosophy in Management – IIC University of
                          Technology (Cambodia)
                        </option>
                        <option value="UCSC-BIT-FIT">
                          Foundation of Information Technology (FIT)
                        </option>
                        <option value="KU-FND-ENG">
                          Foundation Year in Engineering – Kingston University
                          (UK)
                        </option>
                        <option value="KU-FND-IT">
                          Foundation Year in IT – Kingston University (UK)
                        </option>
                        <option value="L3-DIIT-DIE">
                          L3 Diploma in IT and Diploma in English Bundle Offer
                        </option>
                        <option value="L3-CIIT-CIE">
                          L3-Certificate in IT and Certificate in English Bundle
                          Offer
                        </option>
                        <option value="L3-DIM-DIE">
                          L3-Diploma in Management and Diploma in English Bundle
                          Offer
                        </option>
                        <option value="L3-CIIT">
                          Level 3 Certificate in Information Technology
                        </option>
                        <option value="L3-DIAS">
                          Level 3 Diploma in Applied Sciences
                        </option>
                        <option value="L3-DIENG">
                          Level 3 Diploma in Engineering
                        </option>
                        <option value="L3-DIIT">
                          Level 3 Diploma in Information Technology
                        </option>
                        <option value="L3-DIM">
                          Level 3 Diploma in Management
                        </option>
                        <option value="L4-DIQS">
                          Level 4 Diploma in Quantity Surveying
                        </option>
                        <option value="L4-DISE">
                          Level 4 Diploma in Software Engineering
                        </option>
                        <option value="L5-DIQS">
                          Level 5 Diploma in Quantity Surveying
                        </option>
                        <option value="HND-BM-AF">
                          Level 5 Pearson BTEC HND in Business (Accounting and
                          Finance)
                        </option>
                        <option value="HND-BM-ESBM">
                          Level 5 Pearson BTEC HND in Business (Entrepreneurship
                          and Small Business Mgt.)
                        </option>
                        <option value="HND-BM-HRM">
                          Level 5 Pearson BTEC HND in Business (Human Resource
                          Management)
                        </option>
                        <option value="HND-BM-LAW">
                          Level 5 Pearson BTEC HND in Business (Law)
                        </option>
                        <option value="HND-BM-MGT">
                          Level 5 Pearson BTEC HND in Business (Management)
                        </option>
                        <option value="HND-BM-MKT">
                          Level 5 Pearson BTEC HND in Business (Marketing)
                        </option>
                        <option value="HND-BM-PSM">
                          Level 5 Pearson BTEC HND in Business (Procurement and
                          Supply Management)
                        </option>
                        <option value="HND-CE/24">
                          Level 5 Pearson BTEC HND in Civil Engineering
                        </option>
                        <option value="HND-COM/22-ADT">
                          Level 5 Pearson BTEC HND in Computing (Application
                          Development and Testing)
                        </option>
                        <option value="HND-COM/22-CS">
                          Level 5 Pearson BTEC HND in Computing (Cyber Security)
                        </option>
                        <option value="HND-COM/22-DA">
                          Level 5 Pearson BTEC HND in Computing (Data Analytics)
                        </option>
                        <option value="HND-COM/22-GEN">
                          Level 5 Pearson BTEC HND in Computing (General)
                        </option>
                        <option value="HND-COM/22-NE">
                          Level 5 Pearson BTEC HND in Computing (Network
                          Engineering)
                        </option>
                        <option value="HND-COM/22-SE">
                          Level 5 Pearson BTEC HND in Computing (Software
                          Engineering)
                        </option>
                        <option value="HND-EE">
                          Level 5 Pearson BTEC HND in Electrical &amp;
                          Electronic Engineering
                        </option>
                        <option value="HND-ME">
                          Level 5 Pearson BTEC HND in Mechanical Engineering
                        </option>
                        <option value="HND-QS/24">
                          Level 5 Pearson BTEC HND in Quantity Surveying
                        </option>
                        <option value="L7-DIP">
                          Level 7 Pearson BTEC Diploma in Strategic Management
                          and Leadership
                        </option>
                        <option value="LMU-3-LLB">
                          LLB (Hons) Law – London Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA-FN">
                          Master of Business Administration (Finance) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA-FT">
                          Master of Business Administration (Fintech) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA">
                          Master of Business Administration (General) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA-HM">
                          Master of Business Administration (Hospitality
                          Management)
                        </option>
                        <option value="LMU-MBA-HRM">
                          Master of Business Administration (Human Resources) –
                          London Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA-MKT">
                          Master of Business Administration (Marketing) – London
                          Metropolitan University (UK)
                        </option>
                        <option value="LMU-MBA-TTM">
                          Master of Business Administration (Travel&amp;Tourism
                          Management) – London Metropolitan University (UK)
                        </option>
                        <option value="KU-MSC-BSEEM">
                          Master of Science in Building Services Engineering and
                          Energy Management – Kingston University (UK)
                        </option>
                        <option value="KU-MSC-DS">
                          Master of Science in Data Science – Kingston
                          University (UK)
                        </option>
                        <option value="KU-MSC-FM">
                          Master of Science in Facilities Management – Kingston
                          University (UK)
                        </option>
                        <option value="KU-MSC-ITSI">
                          Master of Science in IT &amp; Strategic Innovation –
                          Kingston University
                        </option>
                        <option value="KU-MSC-MS">
                          Master of Science in Mechatronic Systems – Kingston
                          University (UK)
                        </option>
                        <option value="KU-MSC-NIS">
                          Master of Science in Network &amp; Information
                          Security – Kingston University
                        </option>
                        <option value="KU-MSC-REE">
                          Master of Science in Renewable Energy Engineering –
                          Kingston University (UK)
                        </option>
                        <option value="KU-MSC-SE">
                          Master of Science in Software Engineering – Kingston
                          University
                        </option>
                        <option value="KU-MSC-SDCM">
                          Master of Science in Structural Design &amp;
                          Construction Management – Kingston University (UK)
                        </option>
                        <option value="KU-MSC-MIC">
                          Master of Science Management in Construction –
                          Kingston University (UK)
                        </option>
                        <option value="NCUK-IFY">
                          NCUK – International Foundation Year
                        </option>
                        <option value="CO-HNC-PSY">
                          Pearson BTEC Higher National Certificate in Psychology
                        </option>
                        <option value="HND-HM">
                          Pearson BTEC Higher National Diploma (HND) in
                          Hospitality Management
                        </option>
                        <option value="HND-TTM">
                          Pearson BTEC Higher National Diploma (HND) in Travel
                          &amp; Tourism Management
                        </option>
                        <option value="HND-BT-AS">
                          Pearson BTEC Higher National Diploma in Applied
                          Sciences (Biotechnology)
                        </option>
                        <option value="CO-FND-FT">
                          Pearson BTEC International Level 3 Diploma in Art
                          &amp; Design (Foundation Level)
                        </option>
                        <option value="CO-HND-FT">
                          Pearson BTEC Level 5 Higher National Diploma in Art
                          and Design (Fashion)
                        </option>
                        <option value="CO-HND-PSY-CB">
                          Pearson BTEC Level 5 HND in Counselling and Applied
                          Psychology (Cognitive Behavioural)
                        </option>
                        <option value="T/P-UK-BA">
                          Bachelor of Business Administration – 2 + 1 UK
                          Transfer
                        </option>
                        <option value="T/P-AUS-BM">
                          Bachelor of Business Management – 2 + 2 Australian
                          Transfer
                        </option>
                        <option value="T/P-UK-IT">
                          Bachelor of IT / Computer Science – 2 + 1 UK Transfer
                        </option>
                        <option value="T/P-AUS-IT">
                          Bachelor of IT / Computer Science – 2 + 2 Australian
                          Transfer
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="con-form-row">
                    <div className="con-form-col w-100">
                      <label htmlFor="">Message *</label>
                      <input type="text" name="message" id="message" />
                    </div>
                  </div>
                  <div className="con-form-row file-wrap-row form-group">
                    <div className="lable-div">
                      Documents (Can upload Multiple Files)
                    </div>
                    <div className="file-wrap">
                      <label className="sr-only" htmlFor="file">
                        Choose Files
                      </label>
                      <div className="input-file">
                        <span className="btn">Choose Files</span>
                        <span className="file-selected" />
                        <input
                          className="hidden-input-file"
                          type="file"
                          name="files[]"
                          id="files"
                          multiple
                        />
                      </div>
                    </div>
                  </div>
                  <div className="con-form-row">
                    <input type="submit" />
                  </div>
                  <div className="con-form-row" id="success"></div>
                  <div className="con-form-row" id="error"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseInquireModal;
