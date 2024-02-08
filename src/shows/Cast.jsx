const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={
                person.image
                  ? person.image.medium
                  : '/public/Image_not_found.png'
              }
              alt={person.name}
            />
          </div>
          <div>
            {person.name} | {character.name} {voice && '| Voiceover'}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};
export default Cast;
