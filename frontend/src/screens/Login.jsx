import Layout from "../layout/Layout";

export default function Login(){
    return (
        <Layout>
            <div className="container mx-auto px-2 my-2 flex-colo">
                <div className="w-full 2xl:w-2/5 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
                    <p className="text-lg font-semibold text-subMain">L O G I N</p>
                </div>
            </div>
        </Layout>
    )
}