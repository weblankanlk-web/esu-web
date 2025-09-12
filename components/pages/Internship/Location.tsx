"use client";

import React from "react";

interface LocationProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Location: React.FC<LocationProps> = ({ value, onChange }) => {
  return (
    <select id="location" name="location" value={value} onChange={onChange}>
      <option value="" disabled>
        Location
      </option>
      <option value="colombo">Colombo</option>
      <option value="gampaha">Gampaha</option>
      <option value="negombo">Negombo</option>
      <option value="kalutara">Kalutara</option>
      <option value="moratuwa">Moratuwa</option>
      <option value="kandy">Kandy</option>
      <option value="matale">Matale</option>
      <option value="nuwara_eliya">Nuwara Eliya</option>
      <option value="galle">Galle</option>
      <option value="matara">Matara</option>
      <option value="hambantota">Hambantota</option>
      <option value="jaffna">Jaffna</option>
      <option value="kilinochchi">Kilinochchi</option>
      <option value="mullaitivu">Mullaitivu</option>
      <option value="mannar">Mannar</option>
      <option value="vavuniya">Vavuniya</option>
      <option value="trincomalee">Trincomalee</option>
      <option value="batticaloa">Batticaloa</option>
      <option value="ampara">Ampara</option>
      <option value="kalmunai">Kalmunai</option>
      <option value="anuradhapura">Anuradhapura</option>
      <option value="polonnaruwa">Polonnaruwa</option>
      <option value="kurunegala">Kurunegala</option>
      <option value="puttalam">Puttalam</option>
      <option value="ratnapura">Ratnapura</option>
      <option value="kegalle">Kegalle</option>
      <option value="badulla">Badulla</option>
      <option value="bandarawela">Bandarawela</option>
      <option value="monaragala">Monaragala</option>
      <option value="remote">Remote</option>
    </select>
  );
};

export default Location;
