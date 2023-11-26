"use client"
/*
This example requires some changes to your config:

```
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Signup() {
const [agreed, setAgreed] = useState(false)

return (
  <div className="box mt-10 max-w-4xl mx-auto">
    
    <div className="mx-auto max-w-xl text-center">
      <h2 className="heading_h5">Sign up!</h2>
      <p className="">
        Aute magna irure deserunt veniam aliqua magna enim voluptate.
      </p>
    </div>
    <form action="#" method="POST" className="mx-auto mt-6 max-w-xl sm:mt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="font-semibold">
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="inputbox"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="font-semibold">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="inputbox"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="font-semibold">
            Company
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="inputbox inputbox-success"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="inputbox inputbox-error"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="font-semibold">
            Phone number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="inputbox"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="inputbox"
              defaultValue={''}
            />
          </div>
        </div>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="">
            By selecting this, you agree to our{' '}
            <a href="#" className="link">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full button button-primary"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
)
}


//bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:border-green-500
//bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500