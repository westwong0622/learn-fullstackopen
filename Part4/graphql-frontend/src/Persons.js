import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

const Persons = ({ persons }) => {
  const [person, setPerson] = useState(null);
  const [getPerson, result] = useLazyQuery(FIND_PERSON);

  const showPerson = (name) => {
    getPerson({ variables: { nameToSearch: name } });
  };

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result.data]);

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>
          {person.address.street} {person.address.city}
        </div>
        <div>{person.phone}</div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Persons</h2>
      {persons.map((p) => (
        <div key={p.name}>
          {p.name} {p.phone}
          <button onClick={() => showPerson(p.name)}>show address</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
