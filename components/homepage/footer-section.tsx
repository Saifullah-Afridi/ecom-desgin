import Image from 'next/image';
import { Separator } from '../ui/separator';
import TwitterIcon from '../icons/social/twitter.svg';
import FacebookIcon from '../icons/social/facebook.svg';
import InstagramIcon from '../icons/social/instagram.svg';
import GithubIcon from '../icons/social/github.svg';

export default function FooterSection() {
  return (
    <footer className="bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <h3 className="heading-integral text-[28px] md:text-[33.45px]">SHOP.CO</h3>
            <p className="text-satoshi text-[14px] leading-[22px] text-gray-60">
              We have clothes that suits your style and which you&apos;re proud to wear. From
              women to men.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white">
                <TwitterIcon className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-black">
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white">
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white">
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-satoshi text-[16px] font-medium uppercase tracking-[3px]">
              COMPANY
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                About
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Features
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Works
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Career
              </a>
            </div>
          </div>

          {/* Help Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-satoshi text-[16px] font-medium uppercase tracking-[3px]">
              HELP
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Customer Support
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Delivery Details
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Terms & Conditions
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-satoshi text-[16px] font-medium uppercase tracking-[3px]">
              FAQ
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Account
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Manage Deliveries
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Orders
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Payments
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-satoshi text-[16px] font-medium uppercase tracking-[3px]">
              RESOURCES
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Free eBooks
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Development Tutorial
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                How to - Blog
              </a>
              <a href="#" className="text-satoshi text-[16px] text-gray-60 hover:text-black">
                Youtube Playlist
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-black/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-satoshi text-[14px] text-gray-60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="relative h-[30px] w-[281px]">
            <Image
              src="/images/payment-methods.svg"
              alt="Payment methods"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
