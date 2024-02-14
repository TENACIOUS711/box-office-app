import ActorCard from './ActorCard';
import { FlexGrid } from '../flexGrid';
import NotFoundImgSrc from '../Image_not_found.png';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={data.person.image ? data.person.image.medium : NotFoundImgSrc}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
