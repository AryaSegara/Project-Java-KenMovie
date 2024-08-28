import Banner from "../components/Banner";
import PopularMovie from "../components/PopularMovie";
import TopRate from "../components/TopRate";
import Layout from "../layout/Layout";

export default function HomePage() {
    return (
        <Layout>
            <div className="container mx-auto min-h-screen px-2 mb-6">
                <Banner />
                <PopularMovie />
                <TopRate />
            </div>
        </Layout>
    )
}