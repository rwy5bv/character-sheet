import React, { useState } from "react";
import "./Header.css";
export function Header({ classAndLevel, background, playerName, race, alignment, experiencePoints }) {
  return (
    <div className="header">
      <table>
        <tr>
          <th>Class & Level</th>
          <th>Background</th>
          <th>Player Name</th>
        </tr>
        <tr>
          <td>
            <input type="text"  />
            <input type="text"  />
          </td>
          <td><input type="text" value={background} width = "50%" /></td>
          <td><input type="text" value={playerName} width = "50%"/></td>
        </tr>
        <tr>
          <th>Race</th>
          <th>Alignment</th>
          <th>Experience Points</th>
        </tr>
        <tr>
          <td><input type="text" value={race} /></td>
          <td><input type="text" value={alignment} /></td>
          <td><input type="text" value={experiencePoints} /></td>
        </tr>
      </table>
    </div>
  );

}
