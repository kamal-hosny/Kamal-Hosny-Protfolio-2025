import { HeroParallax } from '@/components/ui/hero-parallax';
import { projects } from '@/data/data';

const data = [...projects , ...projects]


const ProductsHeroParallax = () => {
  return (
    <div className="bg-black">
      <HeroParallax 
        products={data}
        headerTitle="Crafting Digital Excellence"
        headerDescription="Transforming ideas into exceptional digital experiences. Specializing in modern web development, UI/UX design, and creative solutions that elevate your digital presence."
      />
    </div>
  )
}

export default ProductsHeroParallax