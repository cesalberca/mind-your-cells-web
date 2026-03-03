type ScutoidMaskProps = {
  src: string
  alt: string
  variant: 1 | 2
  className?: string
}

const CUTOUTS = {
  1: {
    width: 454,
    height: 800,
    path: 'M1.05102 375.69C-1.80671 390.855 1.37658 415.501 8.01447 429.381L176.476 783.374C179.691 789.767 185.071 794.81 191.656 797.603C198.241 800.397 205.604 800.761 212.432 798.629L428.498 725.92C442.263 721.305 453.82 705.109 453.621 690.596L447.671 77.8126C447.526 63.5892 435.516 49.8182 421.445 47.7552L98.0872 0.271439C96.8291 0.0910452 95.5598 0.000336839 94.2889 0C88.0216 0.0238358 81.9557 2.21793 77.1221 6.20949C72.2885 10.201 68.9852 15.7439 67.7736 21.8961L1.05102 375.69Z',
  },
  2: {
    width: 575,
    height: 671,
    path: 'M355.564 127.199C344.711 114.495 322.084 99.4271 306.228 94.3082L16.4553 1.33437C14.0581 0.523066 11.5512 0.0815054 9.02087 0.0248839C7.79346 -0.064876 6.5604 0.0887414 5.39257 0.476907C4.22474 0.865072 3.14516 1.48013 2.2159 2.28673C-0.352985 4.93973 -0.727259 10.0927 1.29722 16.453L201.142 645.689C205.804 660.382 222.816 671.521 238.059 669.94L489.725 644.566C505.325 642.985 521.657 628.801 525.366 613.564L572.813 418.875C576.641 403.161 570.993 379.522 560.496 367.226L355.564 127.199Z',
  },
} as const

export function ScutoidMask({ src, alt, variant, className }: ScutoidMaskProps) {
  const { width, height, path } = CUTOUTS[variant]
  const id = `scutoid-mask-${variant}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id={id}>
          <path d={path} />
        </clipPath>
      </defs>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: aria-label on svg covers accessibility */}
      <image
        href={src}
        x="0"
        y="0"
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id})`}
      />
    </svg>
  )
}
