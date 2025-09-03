import { getBanners } from '@/lib/sanity/functions';
import BannersCarousel from './carousels/BannersCarousel';

const Banner = async () => {
  const banners = await getBanners();
  return <BannersCarousel banners={banners} />;
};

export default Banner;
