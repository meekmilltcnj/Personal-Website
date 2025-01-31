import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div>
          <h1 className="text-5xl font-bold mb-6">David McMillan</h1>
          <div className="flex gap-4 text-2xl">
            <Link href="#" className="highlight-link">
              Twitter
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="highlight-link">
              Bluesky
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="highlight-link">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="shrink-0">
          <div className="rounded-full overflow-hidden w-[200px] h-[200px] bg-gray-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20at%2023.43.08-cN3kixlqPYqFgwgATAQ8oHJIvYgUVg.png"
              alt="Profile photo"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="divider my-12" />

      <div className="prose prose-blue prose-sm max-w-none">
        <p>Hi there, I'm David! I'm passionate about using tech to improve social mobility.</p>

        <p>
          I'm currently at{" "}
          <Link href="#" className="highlight-link">
            CARTS
          </Link>
          , where I focus on deploying autonomous vehicle technology to make transportation more affordable and
          accessible for those who need it most. I'm also the founder of{" "}
          <Link href="#" className="highlight-link">
            CurraPay
          </Link>
          , a remittance aggregator helping immigrants find affordable ways to send money abroad, supported by{" "}
          <Link href="#" className="highlight-link">
            Plug & Play Tech Center
          </Link>
          (early investors in DropBox and PayPal),{" "}
          <Link href="#" className="highlight-link">
            Prudential
          </Link>
          ,{" "}
          <Link href="#" className="highlight-link">
            NJEDA
          </Link>
          , and{" "}
          <Link href="#" className="highlight-link">
            Stevens Institute of Technology
          </Link>
          ; and partnering with leading fintech companies like{" "}
          <Link href="#" className="highlight-link">
            Remitly
          </Link>
          ,{" "}
          <Link href="#" className="highlight-link">
            Wise
          </Link>
          , and{" "}
          <Link href="#" className="highlight-link">
            OFX
          </Link>
          . I also write about{" "}
          <Link href="#" className="highlight-link">
            tech
          </Link>
          ,{" "}
          <Link href="#" className="highlight-link">
            effective altruism
          </Link>
          , and{" "}
          <Link href="#" className="highlight-link">
            what I've been reading
          </Link>
          .
        </p>

        <p>
          I've worked with city, county, and federal government, as well as a think tank, a non-profit, and a research
          organization. My policy work has been featured in outlets like{" "}
          <Link href="#" className="highlight-link">
            Forbes
          </Link>{" "}
          and{" "}
          <Link href="#" className="highlight-link">
            WHYY (NPR)
          </Link>
          . I've also developed cases of innocence, informed state policy responses during the COVID-19 pandemic, and
          organized for winning political campaigns.
        </p>

        <p>
          I earned an MSc in Criminology and Criminal Justice from{" "}
          <Link href="#" className="highlight-link">
            St. Cross College, University of Oxford
          </Link>{" "}
          as a{" "}
          <Link href="#" className="highlight-link">
            Global Rotary Scholar
          </Link>
          , an MSc in Public Policy from the{" "}
          <Link href="#" className="highlight-link">
            University of Edinburgh
          </Link>{" "}
          as a{" "}
          <Link href="#" className="highlight-link">
            Macmillan-St. Andrew's Society Scholar
          </Link>
          , and a BA from{" "}
          <Link href="#" className="highlight-link">
            The College of New Jersey
          </Link>{" "}
          as a{" "}
          <Link href="#" className="highlight-link">
            Jamie Fox Scholar
          </Link>{" "}
          and{" "}
          <Link href="#" className="highlight-link">
            Eickhoff Scholar
          </Link>
          . I have a paper on urban crime and automobility currently under review. My studies were supported by
          scholarships from the University of Oxford and awards such as Nobel Laureate Vernon Smith's{" "}
          <Link href="#" className="highlight-link">
            annual international economics prize
          </Link>
          for my paper on economic forecasting.
        </p>

        <p>
          I was born and raised in central New Jersey, and I have the Wawa receipts to prove it. I'm a fan of long runs,
          hiking, exploring new restaurants, listening to folk music, and solving puzzles—both big and small. I love
          meeting new people, so feel free to reach out at david [at] cartsmobility [dot] com.
        </p>
      </div>

      <div className="divider my-12" />
    </main>
  )
}

