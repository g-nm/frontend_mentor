import React from 'react';
import Image from 'next/image';
import Text from './components/Text';
import backgroundImageMobile from './images/illustration-sign-up-mobile.svg';
import ListItem from './components/ListItem';
import Button from './components/Button';
import SectionTitle from './components/SectionTitle';

export default function Page() {
  return (
    <div>
      <section>
        <Image
          src={backgroundImageMobile}
          alt="Picture of dashboard with a graph and computer windows"
          className="w-full"
        />
      </section>
      <section className="px-3 pt-7">
        <SectionTitle>Stay updated!</SectionTitle>
        <Text className="pb-5">
          Join 60,000+ product managers receiving monthly updates on:
        </Text>
        <ul>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </ul>
        <form className="pt-5">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="text-sm font-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="border border-grey py-3 px-5 rounded-md"
            />
          </div>
          <Button>Subscribe to monthly newsletter</Button>
        </form>
      </section>
    </div>
  );
}
