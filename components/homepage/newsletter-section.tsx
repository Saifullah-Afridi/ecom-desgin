import { Button } from '../ui/button';
import MailIcon from '../icons/mail.svg';

export default function NewsletterSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-20">
      <div className="rounded-[20px] bg-black px-6 py-8 md:px-16 md:py-9">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <h2 className="heading-integral max-w-[550px] text-[32px] leading-[35px] text-white md:text-[40px] md:leading-[45px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex w-full flex-col gap-4 md:w-auto">
            <div className="flex h-12 items-center gap-3 rounded-full bg-white px-4">
              <MailIcon className="h-4 w-5" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="text-satoshi flex-1 bg-transparent text-[16px] text-gray-60 outline-none placeholder:text-gray-60/40"
              />
            </div>

            <Button className="text-satoshi h-12 w-full rounded-full bg-white text-[16px] font-medium text-black hover:bg-white/90 md:w-[349px]">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
