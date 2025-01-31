import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div>
          <h1 className="text-5xl font-bold mb-6 text-black">David McMillan</h1>
          <div className="flex gap-4 text-2xl text-black">
            <Link href="https://x.com/_dmcmillan" className="highlight-link">
              Twitter
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="https://bsky.app/profile/dmcmillan.bsky.social" className="highlight-link">
              Bluesky
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="https://www.linkedin.com/in/davidandrewmcmillan/" className="highlight-link">
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

      <div className="divider" />

      <div className="prose prose-sm max-w-none space-y-6 text-black">
        <p>Hi there, I'm David! I'm passionate about leveraging tech to improve social mobility.</p>

        <p>
          I currently work at{" "}
          <Link href="https://www.cartsmobility.com" className="highlight-link">
            CARTS
          </Link>{" "}
          where I serve as the Director of Public Policy. I work with communities to make transportation more accessible
          and affordable by deploying autonomous vehicle technology. I'm also the founder of{" "}
          <Link href="https://currapay.com" className="highlight-link">
            CurraPay
          </Link>
          , a remittance aggregator helping immigrants find affordable ways to send money abroad, supported by{" "}
          <Link
            href="https://www.plugandplaytechcenter.com/innovation-services/our-programs/nj-fast"
            className="highlight-link"
          >
            Plug & Play Tech Center
          </Link>{" "}
          (early investors in DropBox and PayPal),{" "}
          <Link href="https://www.prudential.com" className="highlight-link">
            Prudential
          </Link>
          ,{" "}
          <Link
            href="https://www.njeda.gov/njeda-to-announce-fintech-innovation-hub-at-stevens-institute-of-technology/"
            className="highlight-link"
          >
            the New Jersey Economic Development Authority
          </Link>{" "}
          (NJEDA), and{" "}
          <Link href="https://www.stevens.edu/nj-fast" className="highlight-link">
            Stevens Institute of Technology
          </Link>
          ; and partnering with leading fintech companies like{" "}
          <Link href="https://remitly.tod8mp.net/55g9ko" className="highlight-link">
            Remitly
          </Link>
          ,{" "}
          <Link
            href="https://wise.com/?clickref=1101lAeiZTce&partnerID=1101l365878&utm_medium=affiliate&utm_campaign=0&adref=&utm_source=currapayinc&partnerizecampaignID=1100l645"
            className="highlight-link"
          >
            Wise
          </Link>
          , and{" "}
          <Link href="https://www.ofx.com/p/currapay/" className="highlight-link">
            OFX
          </Link>
          . I also write about{" "}
          <Link href="https://substack.com/@davidamcmillan/posts" className="highlight-link">
            tech
          </Link>
          ,{" "}
          <Link href="https://substack.com/@davidamcmillan/posts" className="highlight-link">
            social impact
          </Link>
          , and{" "}
          <Link href="https://substack.com/@davidamcmillan/posts" className="highlight-link">
            what I've been reading
          </Link>
          .
        </p>

        <p>
          Previously, I worked with city, county, and federal government, as well as with a think tank, non-profit, and
          a research organization. My policy work has been featured in outlets like{" "}
          <Link
            href="https://www.forbes.com/sites/sabbirrangwala/2022/02/09/trenton-moves-the-world-grooves/amp/"
            className="highlight-link"
          >
            Forbes
          </Link>{" "}
          and{" "}
          <Link
            href="https://whyy.org/articles/trenton-receives-5-million-grant-to-make-moves-for-residents/"
            className="highlight-link"
          >
            WHYY (NPR)
          </Link>
          . I've also developed cases of innocence, informed state policy responses during the COVID-19 pandemic, and
          helped organize winning political campaigns.
        </p>

        <p>
          I earned an MSc in Criminology and Criminal Justice (distinction) from{" "}
          <Link href="https://www.stx.ox.ac.uk" className="highlight-link">
            St. Cross College, University of Oxford
          </Link>{" "}
          as a{" "}
          <Link
            href="https://www.trentonian.com/2023/07/08/trenton-rotary-club-rotary-international-award-scholarship-to-tcnj-grad-mayoral-aide/"
            className="highlight-link"
          >
            Global Rotary Scholar
          </Link>
          , an MSc in Public Policy (distinction) from the{" "}
          <Link href="https://www.ed.ac.uk" className="highlight-link">
            University of Edinburgh
          </Link>{" "}
          as a{" "}
          <Link href="https://standrewsny.org/page/SAS_Scholars2021-2022" className="highlight-link">
            Macmillan-St. Andrew's Society Scholar
          </Link>
          , and a BA from{" "}
          <Link href="https://tcnj.edu" className="highlight-link">
            The College of New Jersey
          </Link>{" "}
          (summa cum laude and Phi Beta Kappa) as a{" "}
          <Link href="https://www.jamiefoxfund.org" className="highlight-link">
            Jamie Fox Scholar
          </Link>{" "}
          and{" "}
          <Link href="https://studentlife.tcnj.edu/publicity-event-planning/scholarships/" className="highlight-link">
            Eickhoff Scholar
          </Link>
          . My first paper, exploring the relationship between urban crime and automobility, is currently under review.
          My studies were supported by scholarships from the{" "}
          <Link
            href="https://www.google.com/search?client=safari&rls=en&q=mercatus+center&ie=UTF-8&oe=UTF-8"
            className="highlight-link"
          >
            Mercatus Center
          </Link>
          , St. Cross College, and the University of Oxford; awards, such as Nobel Laureate Vernon Smith's{" "}
          <Link href="https://ecaef.org/vernon-smith-prize-2021/" className="highlight-link">
            annual international economics prize
          </Link>
          , also helped fund my studies.
        </p>

        <p>
          I was born and raised in central New Jersey, and I have the Wawa receipts to prove it. I'm a fan of long runs,
          hiking, exploring new restaurants, and traveling. I love meeting new people, so feel free to reach out to me
          at david [at] cartsmobility [dot] com.
        </p>
      </div>

      <div className="divider" />
    </main>
  )
}

