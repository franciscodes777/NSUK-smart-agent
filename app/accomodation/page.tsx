import AccomodationCard from "../components/AccomodationCard"
export default function Accomodation() {
    return(
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center">Accomodation</h1>
            <p className="text-gray-500 mt-3 text-center">Find your next home around NSUK.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <AccomodationCard 
            name="Royal Hostel"
            location="Behind NSUK Main Gate"
            price="$350,000"
            />
              <AccomodationCard 
            name="Student Lodge"
            location="keffi Campus Road"
            price="$350,000"
            />
              <AccomodationCard 
            name="peace Hostel"
            location="Agwan Lambu"
            price="$250,000"
            />
            </div>
            </div>
        </main>
    )
}