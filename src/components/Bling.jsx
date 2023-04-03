import Link from 'next/link'

import { Icon } from '@/components/Icon'

import none from '@/data/none.json'
import low from '@/data/low.json'
import dflt from '@/data/default.json'
import high from '@/data/high.json'

export function Bling({ level, icon }) {
  var actual;
  switch (level) {
    case "none":
      actual = none;
      break;
    case "low":
      actual = low;
      break;
    case "default":
      actual = dflt;
      break;
    case "high":
      actual = high;
      break;
    default:
      actual = none;
  }

  console.log(actual)
  return (
    <div className="relative border group rounded-xl border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative p-6 overflow-hidden rounded-xl">
        <Icon icon={icon} className="w-8 h-8" />
        <h2 className="mt-4 text-base font-display text-slate-900 dark:text-white">
          {level.toUpperCase()}
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {actual.Description}
        </p>
        <h3 className="mt-4 text-base font-display text-slate-900 dark:text-white">
          Additional Packages Installed:
        </h3>
        <ul role="list" className="divide-y divide-gray-200">
          {actual.Packages.map((pkg) => (
            <div key={pkg} className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{pkg}</h3>
                  <p className="text-sm text-gray-500"></p>
                </div>
                <p className="text-sm text-gray-500">
                  {actual.PackageMap[pkg].Description}{pkg.Description}
                </p>
              </div>
            </div>
          ))}
        </ul>

      </div>
    </div>
  )
}
