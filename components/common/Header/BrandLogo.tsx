type BrandLogoProps = {
  className?: string
}

const BrandLogo = ({ className = "" }: BrandLogoProps) => {
  return (
    <a
      href="#home"
      aria-label="Kamal Hosny, Frontend Engineer"
      className={`inline-flex flex-col leading-none ${className}`}
    >
      <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
        Kamal Hosny.
      </span>
      <span className="mt-1 text-[0.5rem] font-medium tracking-[0.16em] text-white/75">
        FRONTEND ENGINEER
      </span>
    </a>
  )
}

export default BrandLogo