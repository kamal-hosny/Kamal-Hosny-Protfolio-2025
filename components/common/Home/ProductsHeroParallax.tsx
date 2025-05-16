import { HeroParallax } from '@/components/ui/hero-parallax';

const products = [
    {
      title: "Modern Portfolio Design",
      link: "#",
      thumbnail: "https://ventry-code-portfolio.vercel.app/projects/Portfolio-Graphic-Design.png"
    },
    {
      title: "E-commerce Platform",
      link: "#",
      thumbnail: "https://ventry-code-portfolio.vercel.app/projects/first1step.png"
    },
    {
      title: "Mobile App UI/UX",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/9f/fd/6d/9ffd6dd46d0d2d5c61f4eeda7653ee94.jpg"
    },
    {
      title: "Web Dashboard",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/00/6f/97/006f9770d701e508334fe420f8e53a31.jpg"
    },
    {
      title: "Brand Identity",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/5f/49/03/5f4903bdeecdcd332cc478f3785da4ad.jpg"
    },
    {
      title: "Social Media Design",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/7d/5a/ff/7d5aff2cf94fe6db1564ae4d6ec07f5b.jpg"
    },
    {
      title: "Product Packaging",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/f0/df/e6/f0dfe605299075051e984ce15aa544c2.jpg"
    },
    {
      title: "Print Design",
      link: "#",
      thumbnail: "https://i.pinimg.com/736x/23/d5/fe/23d5fede4165fc68d5d720ee675cea01.jpg"
    },
];

const ProductsHeroParallax = () => {
  return (
    <div className="bg-black">
      <HeroParallax 
        products={products}
        headerTitle="Crafting Digital Excellence"
        headerDescription="Transforming ideas into exceptional digital experiences. Specializing in modern web development, UI/UX design, and creative solutions that elevate your digital presence."
      />
    </div>
  )
}

export default ProductsHeroParallax