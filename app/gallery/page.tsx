import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";

export const metadata: Metadata = getPageMetadata(
  "Shop Premium Sneakers & Apparel",
  "Discover the latest collection of premium sneakers, streetwear, and accessories at Staten Island's premier destination",
  "/gallery"
);

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-0 min-h-[90vh] flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Premium
                  <span className="block text-white/60">Sneakers &</span>
                  <span className="block">Streetwear</span>
                </h1>
                <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                  Discover the latest drops from top brands. From exclusive sneakers to 
                  cutting-edge streetwear - find your style at Staten Island&apos;s premier destination.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto"
                >
                  <Link href="/footwear">
                    Shop Sneakers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 h-auto"
                >
                  <Link href="/mens">
                    Browse Apparel
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/60">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-white/60">Top Brands</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <div className="ml-2 text-sm text-white/60">5.0 Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Premium Sneakers Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full font-semibold shadow-lg">
                New Arrivals ✨
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Collection - GODSPEED */}
      <Section className="py-20 bg-neutral-900/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">SHOP FEATURED COLLECTIONS</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Box */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl border border-white/10">
                <Image
                  src="https://www.godspeednewyork.com/cdn/shop/files/28_fa113e9d-5a9a-4892-b565-8918fb784531.jpg"
                  alt="GODSPEED On The Run Collection"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    Featured Collection
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    GODSPEED
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed">
                    Discover the exclusive &ldquo;On The Run&rdquo; collection. Premium streetwear designed
                    for those who move with purpose. Bold graphics meet superior comfort.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto"
                  >
                    <Link href="/mens/godspeed">
                      Shop GODSPEED
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Collection - SUPREME (Reversed) */}
      <Section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content - LEFT SIDE */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    Featured Collection
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    SUPREME
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed">
                    Iconic streetwear essentials. From classic collaborations to limited drops,
                    discover the latest Supreme pieces that define urban culture.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto"
                  >
                    <Link href="/mens/supreme">
                      Shop SUPREME
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image Box - RIGHT SIDE */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl border border-white/10 order-1 lg:order-2">
                <Image
                  src="https://us.supreme.com/cdn/shop/files/A30_FW25_HanesThermalPants_Black03.jpg?v=1760969883"
                  alt="Supreme Hanes Bones Thermal Collection"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Collection - AIR JORDAN */}
      <Section className="py-20 bg-neutral-900/30">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Box - LEFT SIDE */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl border border-white/10">
                <Image
                  src="https://images.stockx.com/images/Air-Jordan-3-Retro-Racer-Blue-Product.jpg"
                  alt="Air Jordan 3 Retro Racer Blue"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content - RIGHT SIDE */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    Featured Collection
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    AIR JORDAN
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed">
                    Legendary sneakers that defined a generation. From iconic retros to modern classics,
                    step into the legacy of basketball&apos;s greatest athlete.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto"
                  >
                    <Link href="/mens/air-jordan">
                      Shop AIR JORDAN
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Explore our curated collections of premium sneakers, streetwear, and accessories
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Footwear */}
            <Link href="/footwear" className="group relative overflow-hidden rounded-xl bg-neutral-900 aspect-square">
              <Image
                src="/imagebox-1.jpg"
                alt="Footwear"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Footwear</h3>
                <p className="text-white/80 text-sm mb-4">Premium sneakers & athletic shoes</p>
                <Button size="sm" className="bg-white text-black hover:bg-white/90">
                  Shop Now
                </Button>
              </div>
            </Link>

            {/* Mens */}
            <Link href="/mens" className="group relative overflow-hidden rounded-xl bg-neutral-900 aspect-square">
              <Image
                src="/imagebox-1.jpg"
                alt="Mens Apparel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Men&apos;s</h3>
                <p className="text-white/80 text-sm mb-4">Streetwear & urban fashion</p>
                <Button size="sm" className="bg-white text-black hover:bg-white/90">
                  Shop Now
                </Button>
              </div>
            </Link>

            {/* Womens */}
            <Link href="/womens" className="group relative overflow-hidden rounded-xl bg-neutral-900 aspect-square">
              <Image
                src="/imagebox-1.jpg"
                alt="Womens Apparel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Women&apos;s</h3>
                <p className="text-white/80 text-sm mb-4">Trendy styles & essentials</p>
                <Button size="sm" className="bg-white text-black hover:bg-white/90">
                  Shop Now
                </Button>
              </div>
            </Link>

            {/* Accessories */}
            <Link href="/accessories" className="group relative overflow-hidden rounded-xl bg-neutral-900 aspect-square">
              <Image
                src="/imagebox-1.jpg"
                alt="Accessories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Accessories</h3>
                <p className="text-white/80 text-sm mb-4">Bags, hats & more</p>
                <Button size="sm" className="bg-white text-black hover:bg-white/90">
                  Shop Now
                </Button>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-neutral-900/50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-white/60">Free delivery on orders over $100</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Authenticity Guarantee</h3>
              <p className="text-white/60">100% authentic products guaranteed</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Expert Support</h3>
              <p className="text-white/60">Get help from our style experts</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Visit Our Staten Island Store
            </h2>
            <p className="text-xl text-white/70">
              Experience our full collection in person. Try on the latest drops, 
              get expert styling advice, and discover exclusive in-store items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto"
              >
                <Link href="/contact">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 h-auto"
              >
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
