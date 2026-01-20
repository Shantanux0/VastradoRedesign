import { useRef } from 'react';
import { Hero } from '../components/sections/Hero';
import { BrandStory } from '../components/sections/BrandStory';
import { FabricTexture } from '../components/sections/FabricTexture';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { Categories } from '../components/sections/Categories';
import { EverydayLife } from '../components/sections/EverydayLife';

export const Home = () => {
    return (
        <main>
            <Hero />
            <BrandStory />
            <Categories />
            <FabricTexture />
            <FeaturedProducts />
            <EverydayLife />
        </main>
    );
};
