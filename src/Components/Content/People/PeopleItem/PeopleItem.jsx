const PeopleItem = ({
  name,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}) => {
  return (
    <div className="content-cards-item">
      <h2>{name}</h2>
      <h3> Gender: {gender}</h3>
      <ul>
        <li>mass: {mass}</li>
        <li>hair_color: {hair_color}</li>
        <li>skin_color: {skin_color}</li>
        <li>eye_color: {eye_color}</li>
        <li>birth_year: {birth_year}</li>
      </ul>
    </div>
  );
};

export default PeopleItem;
