import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <RocketLaunchIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[32px] px-10">Robb Merritt&#39;s Portfolio</p>
    </div>
  );
}
