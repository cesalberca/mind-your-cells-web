import { Breadcrumb } from '@/components/breadcrumb'
import { Link } from '@/components/link'

// Scutoid shape path from cutout-2.svg
const SCUTOID_PATH =
  'M355.564 127.199C344.711 114.495 322.084 99.4271 306.228 94.3082L16.4553 1.33437C14.0581 0.523066 11.5512 0.0815054 9.02087 0.0248839C7.79346 -0.064876 6.5604 0.0887414 5.39257 0.476907C4.22474 0.865072 3.14516 1.48013 2.2159 2.28673C-0.352985 4.93973 -0.727259 10.0927 1.29722 16.453L201.142 645.689C205.804 660.382 222.816 671.521 238.059 669.94L489.725 644.566C505.325 642.985 521.657 628.801 525.366 613.564L572.813 418.875C576.641 403.161 570.993 379.522 560.496 367.226L355.564 127.199Z'

const SHAPE_COLORS = {
  plans: { top: '#682e2c', bottom: '#f5f0eb' },
  about: { top: '#9c9690', bottom: '#f5f0eb' },
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  variant: 'plans' | 'about'
  breadcrumb: BreadcrumbItem[]
  heading: string
  headingAccent?: string
  subheading: string
  ctaLabel: string
  ctaHref: string
}

export function SubpageHero({ variant, breadcrumb, heading, headingAccent, subheading, ctaLabel, ctaHref }: Props) {
  const { top, bottom } = SHAPE_COLORS[variant]

  return (
    <section className="pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={breadcrumb} className="mb-12" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            <h1 className="text-4xl xl:text-5xl leading-[1.05] text-stone">
              <span className="block">{heading}</span>
              {headingAccent && <span className="block">{headingAccent}</span>}
            </h1>
            <p className="text-stone/55 text-sm leading-relaxed max-w-sm font-sans font-light">{subheading}</p>
            <div>
              <Link href={ctaHref} className="text-soft-terracotta text-xs tracking-widest uppercase">
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* Right: stacked scutoid shapes */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[320px]">
              {/* Bottom shape */}
              <div className="absolute inset-0 animate-float-bottom">
                <svg width="280" height="327" viewBox="0 0 575 671" aria-hidden="true">
                  <path d={SCUTOID_PATH} fill={bottom} />
                </svg>
              </div>
              {/* Top shape */}
              <div className="absolute inset-0 animate-float-top">
                <svg width="280" height="327" viewBox="0 0 575 671" aria-hidden="true">
                  <path d={SCUTOID_PATH} fill={top} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
