"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: 'hero', url: 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers.' },
  { id: 'about', url: 'https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere.' },
  { id: 'product', url: 'https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter.' }
];

export default function Home() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'Menu', id: 'menu' },
            { name: 'About Us', id: 'about' },
            { name: 'Contact', id: 'contact' },
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Authentic Italian Pizza, Just for You"
            imageSrc="https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: 'View Menu', href: 'menu' },
              { text: 'Order Now', href: 'contact' }
            ]}
            className="bg-pink-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: 'Authenticity', description: 'Our pizzas are made with fresh, local ingredients.' },
              { title: 'Tradition', description: 'Passed down recipes from generation to generation.' }
            ]}
            imageSrc="https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-pink-100"
            bulletTitleClassName="text-gray-900"
            bulletDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: '1', name: 'Margherita', price: '$12', imageSrc: 'https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
              { id: '2', name: 'Pepperoni', price: '$14', imageSrc: 'https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
              { id: '3', name: 'Vegetarian', price: '$11', imageSrc: 'https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }
            ]}
            className="bg-pink-100"
            cardNameClassName="text-gray-900"
            cardPriceClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated with Our Latest Offers"
            description="Sign up for our newsletter to receive special deals and promotions."
            className="bg-pink-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Explore', items: [{ label: 'Menu', href: 'menu' }, { label: 'About Us', href: 'about' }] },
              { title: 'Connect', items: [{ label: 'Contact', href: 'contact' }, { label: 'Facebook', href: 'https://facebook.com' }] },
            ]}
            className="bg-pink-100"
            copyrightText="© 2023 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}