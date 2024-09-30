
import { GalleryProps } from "@/types/gallery";

function Scientists({ scientist, size = 50 }: GalleryProps) {

  const countAward = (awards: string) => {
    return awards ? awards.split(',').length : 0;
  }
  const attributes = [
    { label: 'Profession', value: scientist.profession },
    { label: `Awards: ${countAward(scientist.awards)}`, value: scientist.awards },
    { label: 'Discovered', value: scientist.discovery }
  ];

  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        {attributes.map((attr, index) => (
          < li key={index} >
            <b>{attr.label} </b>
            {attr.value}
          </li>
        ))}
      </ul>
    </section >
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientists
        scientist={{ name: 'Maria Skłodowska-Curi', imageId: 'szV5sdGs', profession: 'physicist and chemist', awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', discovery: 'polonium (element)' }}
        size={70} />
      <Scientists
        scientist={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2s', profession: 'geochemist', awards: '(Miyake Prize for geochemistry, Tanaka Prize)', discovery: 'a method for measuring carbon dioxide in seawater' }}
        size={70} />
    </div>

  );
}
