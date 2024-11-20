import { clsx } from 'clsx'
import { Subheading } from './text'
import { FadeIn, FadeInStagger } from './FadeIn'
import Image from 'next/image'
import logoBrightPath from '../../public/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '../../public/clients/family-fund/logo-dark.svg'
import logoGreenLife from '../../public/clients/green-life/logo-dark.svg'
import logoHomeWork from '../../public/clients/home-work/logo-dark.svg'
import logoMailSmirk from '../../public/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '../../public/clients/north-adventures/logo-dark.svg'
import logoPhobiaDark from '../../public/clients/phobia/logo-dark.svg'
import logoUnseal from '../../public/clients/unseal/logo-dark.svg'

const clients = [
  ['Phobia', logoPhobiaDark],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]


export function LogoCloud({ className }) {



  return (
    <section className=' px-4 lg:px-2'>
      <div className="rounded-4xl px-32 pt-16">
        <FadeIn className=" flex items-center gap-x-8">
          <h2 className="text-center font-display text-xl font-bold text-black sm:text-left">
            Our Technology Partners
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </section>
  )







  // return (
  //   <div className='text-center'>
  //     <Subheading>Our Technology Partners</Subheading>
  //     <div
  //       className={clsx(
  //         className,
  //         'flex mt-6 justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
  //       )}
  //     >

  //       <img
  //         alt="SavvyCal"
  //         src="/logo-cloud/savvycal.svg"
  //         className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
  //       />
  //       <img
  //         alt="Laravel"
  //         src="/logo-cloud/laravel.svg"
  //         className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
  //       />
  //       <img
  //         alt="Tuple"
  //         src="/logo-cloud/tuple.svg"
  //         className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
  //       />
  //       <img
  //         alt="Transistor"
  //         src="/logo-cloud/transistor.svg"
  //         className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
  //       />
  //       <img
  //         alt="Statamic"
  //         src="/logo-cloud/statamic.svg"
  //         className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
  //       />
  //     </div>
  //   </div>
  // )
}
