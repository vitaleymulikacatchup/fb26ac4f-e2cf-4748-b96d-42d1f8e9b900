"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: 'hero-image', url: 'https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere.' },
  { id: 'menu-image-1', url: 'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two gourmet pizzas with unique toppings: salmon with zucchini and classic margherita.' },
  { id: 'menu-image-2', url: 'https://images.pexels.com/photos/34314531/pexels-photo-34314531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Delicious fresh salad with smoked salmon, mozzarella, and cherry tomatoes on a wooden table.' },
  { id: 'menu-image-3', url: 'https://images.pexels.com/photos/587738/pexels-photo-587738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Golden topped cans at a lively poolside gathering, perfect for summer celebrations.' },
  { id: 'about-image', url: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two men enjoying a relaxed conversation with laptops in a cozy Brazilian café.' },
  { id: 'contact-image', url: 'https://images.pexels.com/photos/6205479/pexels-photo-6205479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two baristas setting up an outdoor coffee shop with a focus on teamwork.' }
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
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pizzeria Delight"
            description="Experience the authentic taste of Italy!"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Reserve a Table", href: "contact" }
            ]}
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Crafting the finest pizzas with heritage and love for tradition."
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Menu"
            products={[
              { id: "1", name: "Margherita Pizza", price: "$10", imageSrc: assetMap.find(a => a.id === 'menu-image-1')?.url, imageAlt: "Margherita Pizza" },
              { id: "2", name: "Caesar Salad", price: "$8", imageSrc: assetMap.find(a => a.id === 'menu-image-2')?.url, imageAlt: "Caesar Salad" },
              { id: "3", name: "Fresh Lemonade", price: "$3", imageSrc: assetMap.find(a => a.id === 'menu-image-3')?.url, imageAlt: "Fresh Lemonade" }
            ]}
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofTwo
            logos={[
              "/logos/company1.svg",
              "/logos/company2.svg",
              "/logos/company3.svg"
            ]}
            title="Trusted by Renowned Brands"
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Reservations"
            title="Contact Us Today!"
            description="We’re here to make your visit delightful. Reserve a table or inquire about catering!"
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url}
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [{ label: "Pizza", href: "menu" }, { label: "Salads", href: "menu" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Pizzeria Delight"
            className="bg-yellow-100 text-red-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
