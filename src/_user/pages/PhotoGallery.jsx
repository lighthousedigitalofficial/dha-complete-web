import HeroSectionGallery from '../../components/Events/Carousel'
import ImageCard from '../../components/Events/ImageCard'
import image1 from '../../assets/Images/Gallery/chandraat.jpg';
import image2 from '../../assets/Images/Gallery/dubai.jpg';
import image3 from '../../assets/Images/Gallery/tannis.jpg';
import image4 from '../../assets/Images/Gallery/hajj.jpg';
import image5 from '../../assets/Images/Gallery/innovista.jpg';

import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading';

const imageData = [
  {
    image: image1,
    title: 'Chandratt',
    description: 'Celebrating the Chandratt festival.',
  },
  {
    image: image2,
    title: 'IPS Dubai',
    description: 'Innovative Power Solutions in Dubai.',
  },
  {
    image: image3,
    title: 'Tannes Sport',
    description: 'Exciting Tannes sport events.',
  },
  {
    image: image4,
    title: 'Hajj',
    description: 'Information and updates on Hajj.',
  },
  {
    image: image5,
    title: 'Innovista',
    description: 'Innovista: Innovations and trends.',
  },
];

const PhotoGallery = () => {
  return (
<div>
      {/* <Carousel /> */}
      <HeroSectionWithHeading backgroundImage='https://www.dhai-r.com.pk/storage/app/uploads/public/664/dcb/fff/664dcbfff2255337430287.jpg' heading='Photo Gallery' />
      <div className="flex flex-wrap justify-center items-center p-8 bg-gray-100">
        {imageData.map((item, index) => (
          <ImageCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoGallery
