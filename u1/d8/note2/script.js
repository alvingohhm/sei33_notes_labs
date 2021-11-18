"use strict";

const contacts = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" },
];

function buildTable() {
  const infoTable = document.createElement("table");
  infoTable.addClass = "info-table";
  infoTable.innerHTML = `<thead><tr><th>Name</th><th>Location</th></tr><thead>`;

  document.querySelector("body").append(infoTable);

  for (const element of contacts) {
    addData(element.name, element.address, true);
    // const infoRow = document.createElement("tr");
    // const nameCell = document.createElement("td");
    // nameCell.addClass = "name";
    // nameCell.innerText = element.name;

    // const addressCell = document.createElement("td");
    // addressCell.addClass = "address";
    // addressCell.innerText = element.address;

    // infoRow.append(nameCell, addressCell);
    // infoTable.append(infoRow);
  }
}

function addData(name, address, fromTable = false) {
  if (fromTable === false) {
    contacts.push({ name, address });
  }
  const infoTable = document.querySelector("table");
  const infoRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.addClass = "name";
  nameCell.innerText = name;

  const addressCell = document.createElement("td");
  addressCell.addClass = "address";
  addressCell.innerText = address;

  infoRow.append(nameCell, addressCell);
  infoTable.append(infoRow);

  // document.querySelector("body").innerHTML = "";
  // const infoTable = document.querySelector("table")
  // infoTable = "";
  // buildTable();
}

buildTable();
addData("Lily", "The Moon");
