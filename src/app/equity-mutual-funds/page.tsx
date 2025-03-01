import {
  ChevronRight,
  PieChart,
  Target,
  BarChart3,
  Briefcase,
  Calculator,
  Globe,
  ScrollText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EquityFundsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm text-primary">
              Equity Mutual Funds
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Understanding Equity Funds
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Equity Funds generate significant returns by investing principally
              in stocks across all market capitalizations. However, the returns
              are directly proportional to the market volatility.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            How do Equity Funds work?
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Equity Funds contribute at least 90% of their assets in various
              organizations&apos; large-cap, mid-cap, or small-cap keeping in
              view investment objectives. The remaining sum may be invested into
              cash and cash-like instruments to take care of risk and return
              factors. The fund manager settles on purchasing or offering
              opportunities to exploit the changing business sector developments
              and tries to procure the most extreme returns.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Invest Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Who should Invest in Equity Funds?
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              One&apos;s choice to put resources into equity funds should be in
              a state of harmony with one&apos;s risk profile, time-horizon and
              goals. Returns on equity not only depends on market behaviour but
              a longer duration of investment generally gives better returns.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Types of Equity Funds
          </h2>

          {/* Market Capitalization Funds */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Market Capitalization based Funds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Large-cap equity funds</strong> invest in the top
                    100 companies listed on stock exchanges such as BSE and NSE,
                    based on market capitalisation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mid-cap equity funds</strong> invest in the 101st to
                    250th companies in terms of market cap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Small-cap equity funds</strong> invest in companies
                    beyond the 251st in terms of market cap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Multi-cap funds</strong> invest in companies of all
                    sizes with mandated allocation of at least 25% to each
                    category.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Flexi-cap funds</strong> invest in companies of any
                    market capitalisation with no constraints.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Other Fund Types Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sector Funds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Sector Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Invest in specific sectors like Real Estate, Utilities,
                  Natural Resources, Technology, Financial, Communication,
                  Healthcare, and Precious metals.
                </p>
              </CardContent>
            </Card>

            {/* Thematic Funds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Thematic Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Based on certain themes along with sectoral principals, like
                  infrastructure theme funds investing in cement, power, steel
                  sectors.
                </p>
              </CardContent>
            </Card>

            {/* Solution-based Funds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Solution-based Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customised for specific objectives like Retirement or
                  Child-Education, typically with long investment tenure.
                </p>
              </CardContent>
            </Card>

            {/* Index Funds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Index Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Passively managed funds that track indices like NSE Nifty 50,
                  BSE Sensex with proportional returns.
                </p>
              </CardContent>
            </Card>

            {/* ELSS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  ELSS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tax-saving funds offering exceptions up to ₹45,000 under
                  Section 80C of the Income Tax Act under Old-Tax regime.
                </p>
              </CardContent>
            </Card>

            {/* Global Based Funds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Based Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Invest in international indices, equity stocks, and
                  instruments listed on foreign stock exchanges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Liability Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-2">
              <ScrollText className="h-6 w-6 text-primary" />
              Tax Liability on Equity based Mutual Funds
            </h2>
            <div className="prose max-w-none space-y-6">
              <p className="text-gray-600">
                To come under equity-based Tax liability the funds chosen by one
                should have their investment minimum of 65% in India-based
                equity and equity-related instrument
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Short-Term Capital Gain (STCG)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      If the capital gain is booked before the completion of 365
                      days then the said capital gain is taxed at flat 15%.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Long Term Capital Gain (LTCG)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      If the capital gain is booked after the completion of 365
                      days of investment tenure then the said capital gain is
                      taxed at 10% with first one lakh of LTCG exempted.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
