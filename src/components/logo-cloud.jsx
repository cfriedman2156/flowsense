import { clsx } from 'clsx'
import { Subheading } from './text'
import { FadeIn, FadeInStagger } from './FadeIn'

export function LogoCloud({ className }) {
  return (
    <div className='text-center'>
      <Subheading>Our Technology Partners</Subheading>
      <div
        className={clsx(
          className,
          'flex mt-6 justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
        )}
      >

        <img
          alt="SavvyCal"
          src="/logo-cloud/savvycal.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
        <img
          alt="Laravel"
          src="/logo-cloud/laravel.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
        <img
          alt="Tuple"
          src="/logo-cloud/tuple.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
        <img
          alt="Transistor"
          src="/logo-cloud/transistor.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
        <img
          alt="Statamic"
          src="/logo-cloud/statamic.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
      </div>
    </div>
  )
}
