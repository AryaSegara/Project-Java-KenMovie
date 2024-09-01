import Head from "../components/Head";
import Layout from "../layout/Layout";

export default function AboutUs() {
    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Head title="About Us" />
                <div className="xl:py-20 py-10 px-4">
                    <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
                        <div>
                            <h3 className="tex-xl lg:text-3xl mb-4 font-semibold ">
                                Welcome to Kenmovie
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}